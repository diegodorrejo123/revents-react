import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { sampleData } from '../../../app/api/sampleData'
import { useState } from "react";

function EventDashboard(){
    const [events, setEvents] = useState(sampleData)

    /* function handleCreateEvent(event){
        setEvents([...events, event])
    }

    function handleUpdateEvent(updateEvent){
        setEvents(events.map(event => event.id === updateEvent.id ? updateEvent : event))
    } */

    function handleDeleteEvent(eventId){
        setEvents(events.filter(event => event.id !== eventId))
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList deleteEvent={handleDeleteEvent} 
                 events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Event filters</h2>
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard