import MeetupDetail from "@/components/meetups/MeetupDetail";
import { GetStaticProps } from "next";
import React from "react";
import { MongoClient, ObjectId } from "mongodb";


// props from getStaticProps
interface MeetupDetailPageProps {
  meetupData: {
    image: string;
    title: string;
    address: string;
    description: string;
  }
}

export default function MeetupDetailsPage(props: MeetupDetailPageProps) {
  // console.log('hi')
  return (
    <MeetupDetail
      image= {props.meetupData.image}
      title= {props.meetupData.title}
      address= {props.meetupData.address}
      description= {props.meetupData.description}
    />
  );
}

export const getStaticProps: GetStaticProps = async (context) => {

  const meetupId = context.params?.meetupid;

  const client = await MongoClient.connect(
    "mongodb+srv://julio:borden16@testing.zvaswda.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const objectMeetupId = new ObjectId(meetupId as string)

  const selectedMeetup = await meetupsCollection.findOne({_id: objectMeetupId})

  return {
    props: {
      meetupData: selectedMeetup?.data
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

  const meetups = await meetupsCollection.find({}, {projection: {_id: 1}}).toArray();
  
  client.close();
  return {
    fallback: false,
    paths: meetups.map(meetup => ({params: {meetupid: meetup._id.toString()}}))
  } 
}
