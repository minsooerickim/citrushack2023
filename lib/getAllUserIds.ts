import clientPromise from '@/lib/mongodb';

export async function getAllUserIds() {
    const db = (await clientPromise).db(process.env.MONGODB_DB);
    const userIds = []
    const users = await db
        .collection('users')
        .find()
        .toArray();

    // formatting for getStaticPaths()
    users.forEach(user => {
        userIds.push({
            params: {
                id: user['_id'].toString()
            }
        })
    });

    return userIds
}