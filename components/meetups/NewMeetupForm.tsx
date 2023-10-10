import { useRef } from "react";

import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css'

interface NewMeetupFormProps{
    onMeetup: (meetupData: {
        title: string;
        image: string;
        address: string;
        description: string;
    }) => void
}


const NewMeetupForm: React.FC<NewMeetupFormProps> = (props) => {
    const titleInputRef = useRef<HTMLInputElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const addressInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current?.value;
        const enteredImage = imageInputRef.current?.value;
        const enteredAddress = addressInputRef.current?.value;
        const enteredDescription = descriptionInputRef.current?.value;

        const meetupData = {
            title: enteredTitle || '',
            image: enteredImage || '',
            address: enteredAddress || '',
            description: enteredDescription || ''
        }

        props.onMeetup(meetupData);

    }

    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" id="title" ref={titleInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" id="image" ref={imageInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" ref={addressInputRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        rows={5}
                        ref={descriptionInputRef}
                        required
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;