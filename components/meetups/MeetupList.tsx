import MeetupItem from "./MeetupItem"
import classes from './MeetupList.module.css'

interface MeetupListProps{
    // meetups is an array of objects
    meetups: {
        id: string;
        title: string;
        image: string;
        address: string;
    }[]
}

const MeetupList: React.FC<MeetupListProps> = props => {
    return (
        <ul className={classes.list}>
            {props.meetups.map(meetup => (
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                />
            ))}
        </ul>
    )
}

export default MeetupList