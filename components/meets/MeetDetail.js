import { process_params } from "express/lib/router";
import { Fragment } from "react";

function MeetDetail(props) {
    return (
        <Fragment>
            <img 
            src={props.image}
            alt={props.title}/>
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </Fragment>
    );
}

export default MeetDetail;