import clientPromise from '@/lib/mongodb';

export async function getAllUserIds() {
    const db = (await clientPromise).db(process.env.MONGODB_DB);
    const userIds = []
    const users = await db
        .collection('users')
        .find({ "uid": { $exists: true }})
        .toArray();

    // formatting for getStaticPaths()
    users.forEach(user => {
        userIds.push({
            params: {
                id: user['uid'].toString()
            }
        })
    });

    return userIds
}