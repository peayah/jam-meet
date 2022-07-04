import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetForm.module.css';

function NewMeetForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDay = descriptionInputRef.current.value;
    const enteredtime = descriptionInputRef.current.value;

    const meetData = {
      title: enteredTitle,
      image: enteredImage,
      time: enteredtime,
      day: enteredDay,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeet(meetData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meet Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meet Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='day'>Day</label>
          <input type='text' required id='day' ref={dayInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='time'>Time</label>
          <input type='text' required id='time' ref={timeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meet</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetForm;
