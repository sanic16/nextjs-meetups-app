import React from "react";
import MeetupList from "@/components/meetups/MeetupList";
import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

interface HomePageProps {
  meetups: {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  }[];
}

export default function HomePage(props: HomePageProps) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const req: NextApiRequest = context.req as NextApiRequest
//   const res: NextApiResponse = context.res as NextApiResponse

//   return{
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  // fetch data from an API
    const client = await MongoClient.connect(
      "mongodb+srv://julio:borden16@testing.zvaswda.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();
    

    client.close();

  console.log(meetups);

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.data.title || 'nop',
        address: meetup.data.address || null,
        image: meetup.data.image || null,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10,
  };
}
