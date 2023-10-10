import React from 'react'
import NewMeetupForm from '@/components/meetups/NewMeetupForm'


interface MeetupData {
  title: string;
  image: string;
  address: string;
  description: string
}

export default function NewMeetupPage() {

    const addMeetupHandler = (enteredMeetupData: MeetupData) => {
      console.log(enteredMeetupData.title)
    }

  return (
    <>
        <NewMeetupForm onMeetup={addMeetupHandler}/>
    </>
  )
}
