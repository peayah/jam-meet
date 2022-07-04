import MeetItem from './MeetItem';
import classes from './MeetList.module.css';

function MeetList(props) {
  return (
    <ul className={classes.list}>
      {props.meets.map((meet) => (
        <MeetItem
          key={meet.id}
          id={meet.id}
          image={meet.image}
          time={meet.time}
          day={meet.day}
          title={meet.title}
          address={meet.address}
        />
      ))}
    </ul>
  );
}

export default MeetList;
