import { Router } from "express";
import NewMeetForm from "../../components/meets/NewMeetForm"
import {useRouter} from 'next/router'

function NewMeetPage() {
    const router = useRouter()
    async function addMeetHandler(enteredMeetData) {
        const response = await fetch('/api/new-meet', {
            method: "POST",
            body: JSON.stringify(enteredMeetData),
            header: {
                "Content-Type": "appliction/json"
            },
        });
        const data = await response.json();
        console.log(data)
        Router.push('/')
    }

    return <NewMeetForm onAddMeet={addMeetHandler}/>
}

export default NewMeetPage;