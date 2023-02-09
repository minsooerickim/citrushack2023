import clientPromise from '@/lib/mongodb';

export async function getUserData(uid) {
    console.log(uid)
    const db = (await clientPromise).db(process.env.MONGODB_DB);

    // const userData = {}
    
    const user = await db
        .collection('users')
        .find({ uid: { $eq: uid } })
        .toArray();
    return JSON.stringify(user);
}