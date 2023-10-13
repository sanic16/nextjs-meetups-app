import React from 'react'
import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import { useRouter } from 'next/router';


interface MeetupData {
  title: string;
  image: string;
  address: string;
  description: string
}

export default function NewMeetupPage() {

    const router = useRouter()
    const addMeetupHandler = async (enteredMeetupData: MeetupData) => {
      const response = await fetch('/api/new-meetup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(enteredMeetupData)
      })

      const data = await response.json()

      console.log(data)

      router.replace('/')
    }

  return (
    <>
        <NewMeetupForm onMeetup={addMeetupHandler}/>
    </>
  )
}
