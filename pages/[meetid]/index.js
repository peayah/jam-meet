import NewMeetForm from "../../components/meets/NewMeetForm"

function NewMeetPage() {

    function addMeetHandler(enteredMeetData) {
        console.log(enteredMeetData)
    }

    return <NewMeetForm onAddMeet={addMeetHandler}/>
}

export default NewMeetPage;