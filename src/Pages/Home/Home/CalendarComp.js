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

const listofEvents =[
    {
        title:"Big Meeting",
        allDay: true,
        start: new Date(2022,0,14),
        end: new Date(2022,0,16)
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
        border:'1.5px solid '
    }

    const CalendarComp = () => {
    const [events, setEvents] = useState(listofEvents);
    const [allEvents, setAllEvents] = useState(events)
    const [selectedDate, setSelectedDate] = useState(undefined);
     

    
      const handleSelectSlot = ({ start, end, slots }) => {
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
        const inputs = document.getElementsByClassName('inputField')
        inputs.forEach(input => input.value= '')
        e.preventDefault()

    }

    return (
        <Container>
         <Typography color="#2bb3a5" variant='h2' sx={{mt:5}}>
            Calendar Scheduler
         </Typography>

        <Box  sx={{mt:5}}>
            <Typography variant='body1' color='primary'>Adda a  New Event</Typography>
            <Box >
                <input className='inputField' type="text" placeholder='Add Event' name="event"  style={inputFields} 
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
                <DatePicker
                className='inputField'
                style={{marginBottom:'2em'}}
                placeholderText='Start Date' 
                selected={newEvent.start}
                onChange={(start) => setNewEvent({...newEvent, start})}
                ></DatePicker>
                <DatePicker
                className='inputField'
                placeholderText='End Date' style={inputFields}
                selected={newEvent.end}
                onChange={(end) => setNewEvent({...newEvent, end})}
                ></DatePicker>
                <Button size="small" type='submit'  onClick={(e)=> handleAddEvent(e)}  variant="contained" sx={{mt:1}}> Add New Event</Button>
            </Box>

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