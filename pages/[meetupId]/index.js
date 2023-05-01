import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import React from "react";
import MeetUpDetail from "../../components/meetups/MeetupDetail";

function MeetUpDetails(props){
    return (
        <React.Fragment>
          <Head>
              <title>Meet Up Details Page</title>
              <meta name="meet up details" content="Contains all the details of the meetups"></meta>
          </Head>
          <MeetUpDetail 
             image={props.image}
             address={props.address}
             description={props.description}
             title={props.title}>
         </MeetUpDetail>
        </React.Fragment>
   )
}
    
export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb://localhost:27017/Meetups');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
     fallback:false,
     paths:
        meetups.map(meetup=>(
            {
             params: {
                 meetupId: meetup._id.toString(),
             } 
            }
            ))
     
    }
}

export async function getStaticProps(context){
    const client = await MongoClient.connect('mongodb://localhost:27017/Meetups');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetup = await meetupsCollection.findOne({'_id':new ObjectId(context.params.meetupId)});
    client.close();
    return {
        props:{
                 title: meetup.title,
                 address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString()          
        },
        revalidate:10
    }
}

export default MeetUpDetails;