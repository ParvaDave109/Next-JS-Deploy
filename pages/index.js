import { MongoClient } from "mongodb";
import React from "react";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props){
   return (
    <React.Fragment>
        <Head>
          <title>React Meetups</title>
          <meta name="description" content="Browse a huge list of highly active react meetups"></meta>
        </Head>
        <MeetupList meetups={props.meetups}></MeetupList>
    </React.Fragment>
   )
}

export async function getStaticProps(){

    const client = await MongoClient.connect('mongodb://localhost:27017/Meetups');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
        props:{
            meetups:meetups.map(meetup=>(
                {
                 title: meetup.title,
                 address: meetup.address,
                 description: meetup.description,
                image: meetup.image,
                id: meetup._id.toString()
                }
                ))
        },
        revalidate:10
    }
}

export default HomePage;