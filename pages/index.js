import MeetList from "../components/meets/MeetList"
const DUMMY_MEETS = [
    {
    id: "m1",
    title: "JAM Stack Meet",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    day: "Monday",
    time: "6pm",
    address: "123 Main Street, CA 12345 Town",
    description: "This is a JAM meet"
}, {
    id: "m2",
    title: "JS Meet",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    day: "Tuesday",
    time: "6pm",
    address: "123 Main Street, CA 12345 Town",
    description: "This is a JS meet"
}, {
    id: "m3",
    title: "HTML Meet",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    day: "Wednesday",
    time: "6pm",
    address: "123 Main Street, CA 12345 Town",
    description: "This is a HTML meet"
}, {
    id: "m4",
    title: "API Meet",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    day: "Thursday",
    time: "6pm",
    address: "123 Main Street, CA 12345 Town",
    description: "This is a API meet"
}
];

function HomePage() {
    
    return <MeetList meets={DUMMY_MEETS}/>
}

export default HomePage;