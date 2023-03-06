#!/usr/bin/python
import os, datetime, tarfile, os.path
from pymongo import MongoClient
from bson.json_util import dumps

# google drive
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive

# dropbox 
import dropbox
from dropbox.exceptions import AuthError


def create_folder_backup(db_name: str) -> None:
    """
    Creates backup folder to store all backups in.

    :param db_name: name of db
    """
    dt = datetime.datetime.now()
    directory = ('backups/bk_%s_%s-%s-%s__%s_%s' % (db_name ,dt.month,dt.day,dt.year, dt.hour, dt.minute))
    if not os.path.exists(directory):
        os.makedirs(directory)
    return directory

def run_backup(mongo_uri: str, db_name: str, dropbox_file_path: str) -> None:
    """
    Create backup of mongodb db.

    :param mongo_uri: mongodb connection string
    :param db_name: mongodb db name
    """
    client = MongoClient(mongo_uri)
    db = client[db_name]
    collections = db.list_collection_names()
    files_to_compress = []
    directory = create_folder_backup(db_name)
    for collection in collections:
        db_collection = db[collection]
        cursor = db_collection.find({})
        filename = ('%s/%s.json' %(directory,collection))
        files_to_compress.append(filename)
        with open(filename, 'w') as file:
            file.write('[')
            for document in cursor:
                file.write(dumps(document))
                file.write(',')
            file.write(']')
    tar_file = ('%s.tar.gz' % (directory)) 
    make_tarfile(tar_file,files_to_compress)

    local_file_pth = os.getcwd()+'/'+tar_file
    dropbox_upload_file(local_file_pth, dropbox_file_path)

def make_tarfile(output_filename: str, source_dir: str) -> None:
    """
    Compress backup into tar file.

    :param output_filename: name of the compressedd file
    :source_dir: source directory
    """
    tar = tarfile.open(output_filename, "w:gz")
    for filename in source_dir:
        tar.add(filename)
    tar.close()

def upload_to_gdrive(filename: str, path: str) -> None:
    """
    Upload file to gdrive.
    
    :param filename: name of file
    :param path: path to file including file name
    """
    gauth = GoogleAuth()     
    drive = GoogleDrive(gauth)  

    f = drive.CreateFile({'title': filename})
    f.SetContentFile(path)
    f.Upload()

def dropbox_connect() -> None:
    """Create a connection to Dropbox."""

    try:
        # dbx = dropbox.Dropbox(DROPBOX_ACCESS_TOKEN)
        dbx = dropbox.Dropbox('sl.BaHUGtLGZ3T8XsDK2TNQcGBhx1pr3UVAwr_eNsUjmmfiMJ0N1nQRAW5otfQQK85aSrV1W58ltHty5xBOWQeCgOU2F0yJIeL77fEoG1_Rg0K4x5FMGpNaVGWPfBUav4R2m_doHGP8G5CS')
    except AuthError as e:
        print('Error connecting to Dropbox with access token: ' + str(e))
    return dbx

def dropbox_upload_file(local_path_to_file: str, dropbox_file_path: str) -> None:
    """
    Upload a file from the local machine to a path in the Dropbox app directory.

    :param local_path_to_file: path to local file (including file name)
    :param dropbox_file_path: file path in dropbox to uploadf to
    """

    try:
        dbx = dropbox_connect()

        f = open(local_path_to_file, 'rb')

        meta = dbx.files_upload(f.read(), dropbox_file_path+'/'+local_path_to_file.split('/')[-1], mode=dropbox.files.WriteMode("overwrite"))

        f.close()
        return meta
    except Exception as e:
        print('Error uploading file to Dropbox: ' + str(e))


# python run.py [uri]
if __name__ == '__main__':
    """
    Driver function.
    """
    mode = int(input('\nbackup for\n1.dev\n2.prod\n'))
    
    mongo_uri = 'mongodb+srv://minsooerickim:0aOvW6KR6Zy7HkIR@development.jek65.mongodb.net/?retryWrites=true&w=majority' if mode == 1 else 'mongodb+srv://minsooerickim:0aOvW6KR6Zy7HkIR@production.xirvdja.mongodb.net/?retryWrites=true&w=majority'
    db_name = 'Development' if mode == 1 else 'Production'
    dropbox_path = '/dev' if mode == 1 else '/prod'

    try:
        print('\n[-] starting backup')
        run_backup(mongo_uri, db_name, dropbox_path)
        print('[*] Successfully performed backup')
    except Exception as e:
        print('[-] An unexpected error has occurred')
        print('[-] '+ str(e) )
        print('[-] EXIT')