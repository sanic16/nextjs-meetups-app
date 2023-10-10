import React from 'react'
import MeetupList from '@/components/meetups/MeetupList'
import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://important-archives-jsanic16.s3.amazonaws.com/css_projects/blog/jelleke-vanooteghem-6NUlOHM40w8-unsplash(1).jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://important-archives-jsanic16.s3.amazonaws.com/css_projects/blog/nasa-1lfI7wkGWZ4-unsplash(1).jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!',
  },
]

interface HomePageProps {
  meetups: {
    id: string,
    title: string,
    image: string,
    address: string,
    description: string
  }[]
}

export default function HomePage(props: HomePageProps) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const req: NextApiRequest = context.req as NextApiRequest
  const res: NextApiResponse = context.res as NextApiResponse

  return{
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

// export async function getStaticProps(){
//   return {
//       props: {
//           meetups: DUMMY_MEETUPS
//       },
//       revalidate: 10
//   }
// }