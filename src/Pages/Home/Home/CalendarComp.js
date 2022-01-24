import React, {useState} from 'react';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Typography, Container, Box, Button} from '@mui/material';
import "react-datepicker/dist/react-datepicker.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-datepicker/dist/react-datepicker.css";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";







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
        end: new Date(2022,0,17)
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

 const inputFields = {
     width:"20rem",
     margin:'.5rem 0',
     border:'2px solid green'
 }

const CalendarComp = () => {
    const [events, setEvents] = useState(listofEvents);
    const [allEvents, setAllEvents] = useState(events)

    
      const [selectedDate, setSelectedDate] = useState(undefined);
     

    
      const handleSelectSlot = ({ start, end, slots }) => {
        //pop modal up, from this and be able to pass through, these slots
        setSelectedDate(start);
        return;
      };

      const moveEvent = ({ event, start, end }) => {
      
        const idx = allEvents.indexOf(event);
        const updatedEvent = { ...event, start, end };
        const nextEvents = [...allEvents];
        nextEvents.splice(idx, 1, updatedEvent);
        setAllEvents(nextEvents);
      };
     


    const DragAndDropCalendar = withDragAndDrop(Calendar);

    const [newEvent, setNewEvent] = useState({
        title:'',
        start:'',
        end:''
    })
    

    const handleAddEvent = (e) =>{
        setAllEvents([...allEvents, newEvent])
        e.preventDefault();
    }

    return (
        <Container>
         <Typography variant='h5' sx={{mt:5}}>
             Calander 
         </Typography>

        <Box  sx={{mt:5}}>
            <Typography>Add New Event</Typography>
            <form onSubmit={handleAddEvent}>
                <input id='field1' type="text" placeholder='Add Event' name="" id="" style={inputFields} 
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
                <DatePicker
             
                style={{marginBottom:'2em'}}
                placeholderText='Start Date' 
                selected={newEvent.start}
                onChange={(start) => setNewEvent({...newEvent, start})}
                ></DatePicker>
                <DatePicker
               
                placeholderText='End Date' style={inputFields}
                selected={newEvent.end}
                onChange={(end) => setNewEvent({...newEvent, end})}
                ></DatePicker>
                <Button type='submit'  variant="contained" sx={{mt:1}}> Add New Event</Button>
            </form>

        </Box>

         <Box  className="h-auto">
            <DragAndDropCalendar
            selectable
            resizable
            popup
            onEventDrop={moveEvent}
            onEventResize={moveEvent}
            onSelectSlot={handleSelectSlot}
            localizer={localizer}
            events={allEvents}
            startAccessor='start' endAccessor='end'
            style={{height:500, margin:'50px'}}
            defaultDate={new Date()}
            />


         </Box>

        

        </Container>
    );
};

export default CalendarComp;