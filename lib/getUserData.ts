import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function getUserData(id) {
    console.log(id)
    const db = (await clientPromise).db(process.env.MONGODB_DB);

    const userData = {}
    const user = await db
        .collection('users')
        .find({ _id: { $eq: new ObjectId(id) } })
        .toArray();

    userData['id'] = id;
    userData['email'] = user[0]['email']

    return userData
}