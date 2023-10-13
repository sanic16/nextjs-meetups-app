// /api/new-meetup
import { MongoClient } from "mongodb";

import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>){
    if(req.method === 'POST'){
        const data = req.body

        // const { title, image, address, description } = data

        const client = await MongoClient.connect('mongodb+srv://julio:borden16@testing.zvaswda.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne({data})

        console.log(result)
        client.close()

        res.status(201).json({
            message: 'Meetup inserted!'
        })
    }
}