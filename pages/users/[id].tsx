import { Page } from "@/components/Page";
import { getAllUserIds } from '@/lib/getAllUserIds'
import { getUserData } from '@/lib/getUserData'

export default function Info({ userData }) {
    console.log(userData)
    return(
    <Page>
        <p>{userData.id}</p>
        <p>{userData.email}</p>
    </Page>
    )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllUserIds();
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const userData = await getUserData(params.id)
  return {
    props: {
      userData,
    },
  };
}