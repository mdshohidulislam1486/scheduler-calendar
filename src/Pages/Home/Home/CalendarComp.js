import React, {useState} from 'react';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Typography, Container, Box, Button} from '@mui/material';
import "react-datepicker/dist/react-datepicker.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import moment from "moment";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import ReactDOM from "react-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import Select from "react-select";






const locales = {
    'en-Us': require('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})



const DragAndDropCalendar = withDragAndDrop(Calendar);


    

const listofEvents =[
    {
        title:"Big Meeting",
        allDay: true,
        start: new Date(2022,0,15),
        end: new Date(2022,0,15)
    },
    {
        title:"Last Meeting",
        allDay: true,
        start: new Date(2022,0,21),
        end: new Date(2022,0,21)
    },
    {
        title:"Birthday",
        allDay: true,
        start: new Date(2022,0,22),
        end: new Date(2022,0,22)
    },
    {
        title:"Marraige Ceremony",
        allDay: true,
        start: new Date(2022,0,2),
        end: new Date(2022,0,2)
    },
]



const CalendarComp = () => {
    const [events, setEvents] = useState(listofEvents);

      const [showCalendarModal, setShowCalendarModal] = useState(true);
      const [selectedDate, setSelectedDate] = useState(undefined);
     

    
      const handleSelectSlot = ({ start, end, slots }) => {
        //pop modal up, from this and be able to pass through, these slots
        setSelectedDate(start);
        return;
      };

      const moveEvent = ({ event, start, end }) => {
      
        const idx = events.indexOf(event);
        const updatedEvent = { ...event, start, end };
        const nextEvents = [...events];
        nextEvents.splice(idx, 1, updatedEvent);
        setEvents(nextEvents);
      };
     

    const filterViewChange = (selected) => {
        var indexOfSelected = [];
        selected.map((selection) =>
          indexOfSelected.push(selection.index)
        );
      };

    const DragAndDropCalendar = withDragAndDrop(Calendar);

    const [newEvent, setNewEvent] = useState({
        title:'',
        start:'',
        end:''
    })
    const [allEvents, setAllEvents] = useState(events)

    const handleAddEvent = (e) =>{
        setAllEvents([...allEvents, newEvent])
        e.preventDefault();
    }


    const handleSelectEvent = () =>{
        this.event = this.moveEvent.bind(this)    }

    
    return (
        <Container>
         <Typography variant='h5' sx={{mt:5}}>
             Calander 
         </Typography>

        <Box textAlign={'center'}>
            <Typography>Add New Event</Typography>
            <form onSubmit={handleAddEvent}>
                <input id='field1' type="text" placeholder='Add Event' name="" id="" style={{width:'15%'}} 
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
                <DatePicker
                id='field2' 
                placeholderText='Start Date' style={{marginRight:'3em'}}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({...newEvent, start})}
                ></DatePicker>
                <DatePicker
                id='field3' 
                placeholderText='End Date' style={{marginRight:'3em'}}
                selected={newEvent.end}
                onChange={(end) => setNewEvent({...newEvent, end})}
                ></DatePicker>
                <Button type='submit' contained sx={{mt:1}}> Add New Event</Button>
            </form>

        </Box>

         <Box  className="h-auto">
            <DragAndDropCalendar
            selectable
            resizable
            popup
            onEventDrop={moveEvent}
            onEventResize={moveEvent}
            onSelectEvent={(events) => handleSelectEvent(events)}
            onSelectSlot={handleSelectSlot}
            localizer={localizer}
            events={events || allEvents}
            startAccessor='start' endAccessor='end'
            style={{height:500, margin:'50px'}}
            defaultDate={new Date()}
            />


         </Box>

        

        </Container>
    );
};

export default CalendarComp;