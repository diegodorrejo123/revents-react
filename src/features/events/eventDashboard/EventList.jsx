import EventListItem from "./EventListItem";

export default function EventList({events, selectEvent, deleteEvent}) {
    return (
        <>
            {events.map(event => (
                <EventListItem deleteEvent={deleteEvent} selectEvent={selectEvent} event={event} key={event.id} />
            ))}
        </>
    )
}