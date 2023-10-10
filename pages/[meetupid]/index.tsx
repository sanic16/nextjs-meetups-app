import MeetupDetail from "@/components/meetups/MeetupDetail";
import React from "react";

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

export async function getStaticProps(){
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
