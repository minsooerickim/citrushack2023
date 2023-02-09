import { ProtectedPage } from '@/components/Page';
import QR from '@/components/QR';
import { getAllUserIds } from '@/lib/getAllUserIds';
import { getUserData } from '@/lib/getUserData';
import { useSession } from 'next-auth/react';

export default function Info({ userData }) {
  const { data: session, status } = useSession();
  const json_obj = JSON.parse(userData);
  const { uid, email, shirtSize, ...other } = json_obj[0];

  // {
  //   _id: new ObjectId("63e4b1f210e022bb585f31b3"),
  //   name: { first: 'Minsoo', last: 'Kim' },
  //   email: 'minsooerickim@gmail.com',
  //   image: 'https://lh3.googleusercontent.com/a/AEdFTp5iWOrFskrAWo5jK4aPvfWZ60ceajGGN_zbPKAv1Q=s96-c',
  //   emailVerified: null,
  //   MLHAcknowledgement: false,
  //   admin: false,
  //   appliedAt: 2023-02-09T08:42:45.055Z,
  //   applied_after_limit: false,
  //   criteriaMet: false,
  //   firstTimeHacker: 'Yes',
  //   foodPreference: 'Meat',
  //   gender: 'Nonbinary',
  //   gid: '',
  //   grade: '2nd Year Undergraduate',
  //   graduationDate: '2023-02-16',
  //   major: 'Computer Science',
  //   participation: 'In-Person',
  //   phoneNumber: '',
  //   qualified: '',
  //   race: 'Hispanic or Latino',
  //   school: 'Abertay University',
  //   shirtSize: 'M',
  //   uid: '5ckOzWDbhHIKCMusBlqXS'
  // }

  console.log(other);
  // console.log('hello' + JSON.parse(userData));
  return (
    // only admins and the user themselves can see this page
    <ProtectedPage
      title="user info"
      restrictions={['signin', 'self']}
      uid={uid}
    >
      {/* user can only see the QR code */}
      <QR />

      {/* only admins can see actions and additional info */}
      {status === 'authenticated' && session.user.admin && (
        <div>
          <p>{uid}</p>
          <p>{email}</p>
          <p>shirt size: {shirtSize}</p>
        </div>
      )}
    </ProtectedPage>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllUserIds();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const userData = JSON.parse(JSON.stringify(await getUserData(params.id)));
  return {
    props: {
      userData,
    },
  };
}
