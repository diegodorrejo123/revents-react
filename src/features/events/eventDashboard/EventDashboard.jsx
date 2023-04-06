import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import { sampleData } from '../../../app/api/sampleData'
import { useState } from "react";

function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}){
    const [events, setEvents] = useState(sampleData)

    function handleCreateEvent(event){
        setEvents([...events, event])
    }

    function handleUpdateEvent(updateEvent){
        setEvents(events.map(event => event.id === updateEvent.id ? updateEvent : event))
        selectEvent(null)
    }

    function handleDeleteEvent(eventId){
        setEvents(events.filter(event => event.id !== eventId))
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList deleteEvent={handleDeleteEvent} 
                selectEvent={selectEvent} events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && <EventForm 
                updateEvent={handleUpdateEvent}
                key={selectedEvent ? selectedEvent.id : null} 
                selectedEvent={selectedEvent} 
                createEvent={handleCreateEvent} 
                setFormOpen={setFormOpen} 
                setEvents={setEvents} />}
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard