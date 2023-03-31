import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function uploadFile(req: NextApiRequest, res: NextApiResponse) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const { email, resume } = req.body;
  const result = await db.collection('users').updateOne(
    {
        email: email
      },
    { $set: { resume: resume } }
  );

  if (result.modifiedCount === 1) {
    res.status(200).json({ message: 'File uploaded successfully' });
  } else {
    res.status(500).json({ message: 'Error uploading file' });
  }
}
