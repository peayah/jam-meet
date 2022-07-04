import MeetDetail  from "../../components/meets/MeetDetail";

function MeetDetails() {
    return (
        <MeetDetail
            image = "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            title = "Dummy alt text"
            day = "Thursday"
            time = "6pm"
            address = "dummy Address"
            description = "dummy description"
        />
    );
}

export default MeetDetails;