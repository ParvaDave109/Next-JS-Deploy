import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";



function NewMeetupPage(){

    const reouter = useRouter();
    async function addMeetUpFunction(enteredMeetUpData){
        const resposne = await fetch('/api/new_meetup',{
            method:'POST',
            body: JSON.stringify(enteredMeetUpData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data= await resposne.json();
        reouter.push("/")

    }

    return (<React.Fragment>
               <Head>
                   <title>New Meet Up Page</title>
                   <meta name="description" content="Add new meetups"></meta>
               </Head>
               <NewMeetUpForm onAddMeetup={addMeetUpFunction}></NewMeetUpForm>
            </React.Fragment>);
}

export default NewMeetupPage;