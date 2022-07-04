import classes from './MeetDetail.module.css';

function MeetDetail(props) {
    return (
        <section className={classes.detail}>
            <img 
            src={props.image}
            alt={props.title}/>
            <h1>{props.title}</h1>
            <p> 
                <time datetime="{props.day}">{props.day}s
                </time> at <time datetime="{props.time}">{props.time}</time>
            </p>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    );
}

export default MeetDetail;