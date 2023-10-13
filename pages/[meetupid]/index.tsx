import MeetupDetail from "@/components/meetups/MeetupDetail";
import { GetStaticProps } from "next";
import React from "react";
import { MongoClient } from "mongodb";

export default function MeetupDetailsPage() {
  return (
    <MeetupDetail
      image="https://important-archives-jsanic16.s3.amazonaws.com/css_projects/blog/jelleke-vanooteghem-6NUlOHM40w8-unsplash(1).jpg"
      title="A First Meetup"
      address="Some address 5, 12345 Some City"
      description="This is a first meetup!"
    />
  );
}

export const getStaticProps: GetStaticProps = async (context) => {

  const meetupId = context.params?.meetupId;

  console.log(meetupId)

  return {
    props: {
      meetupData: {
        image: 'https://important-archives-jsanic16.s3.amazonaws.com/css_projects/blog/jelleke-vanooteghem-6NUlOHM40w8-unsplash(1).jpg',
        id: 'm1',
        title: 'A First Meetup',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!',
      }
    },
    revalidate: 10
  }
}

export async function getStaticPaths(){
  const client = await MongoClient.connect(
    "mongodb+srv://julio:borden16@testing.zvaswda.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  

  client.close();
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: 'm1'
        },
      },
      // {
      //   params: {
      //     meetupid: 'm2'
      //   },
      // }
    ]
  }
}
