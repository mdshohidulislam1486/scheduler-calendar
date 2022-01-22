import React, {useState} from 'react';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
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

const events =[
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
    const DragAndDropCalendar = withDragAndDrop(Calendar);

    const [newEvent, setNewEvent] = useState({
        title:'',
        start:'',
        end:''
    })
    const [allEvents, setAllEvents] = useState(events)

    const handleAddEvent = (e) =>{
        setAllEvents([...allEvents, newEvent])
        document.getElementById('filed1').innerValue=''
        e.preventDefault();
    }

    
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

         <Box>
             <Calendar localizer={localizer} events={allEvents} startAccessor='start' endAccessor='end'
             style={{height:500, margin:'50px'}}
             >

             </Calendar>

         </Box>


        </Container>
    );
};

export default CalendarComp;