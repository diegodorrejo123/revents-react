import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { useState } from "react";


function App() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [formOpen, setFormOpen] = useState(false)

  function handleSelectEvent(event){
    setSelectedEvent(event)
    setFormOpen(true)
  }

  function handleCreateFormOpen(){
    setSelectedEvent(null)
    setFormOpen(true)
  }

  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <EventDashboard selectedEvent={selectedEvent} selectEvent={handleSelectEvent} setFormOpen={setFormOpen} formOpen={formOpen} />
      </Container>
    </>
  );
}

export default App;
