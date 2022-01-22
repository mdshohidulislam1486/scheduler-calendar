import React, {useState} from 'react';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
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



    

/* const events =[
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
 */


const CalendarComp = () => {
    const [events, setEvents] = useState(
        [
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
      );

    const [showCalendarModal, setShowCalendarModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(undefined);
   
    const [showAssignments, setShowAssignments] = useState(true);
    const [showCourseTimes, setShowCourseTimes] = useState(true);
    const [showOfficeHours, setShowOfficeHours] = useState(true);
    const [showStudySessions, setShowStudySessions] = useState(false);

    
      const handleSelectSlot = ({ start, end, slots }) => {
        //pop modal up, from this and be able to pass through, these slots
        setSelectedDate(start);
        return;
      };

      const moveEvent = ({ event, start, end }) => {
        const thisEvent = event;
     
        const nextEvents = events.map((existingEvent) => {
          return existingEvent.id == event.id
            ? { ...existingEvent, start, end }
            : existingEvent;
        });
        setEvents(nextEvents);
      };

      
    const viewOptions = [
        { value: "Assignments", label: "Assignment due dates", index: 0 },
        { value: "Courses", label: "Courses times", index: 1 },
        { value: "Office Hours", label: "Office hours", index: 2 },
        {
        value: "Study Sessions",
        label: "Study sessions (Not implemented)",
        index: 3,
        },
    ];

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
    const handleSelectEvent = (event) =>{
        this.moveEvent = this.moveEvent.bind(this)
    }

    
    return (
        <Container>
         {/* <Typography variant='h5' sx={{mt:5}}>
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
 */}
        <div className="h-auto">
            <div>
                <DragAndDropCalendar
                selectable
                resizable
                popup
        
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
        
                onEventDrop={moveEvent}
                onEventResize={moveEvent}
                onSelectEvent={(event) => handleSelectEvent(event)}
                onSelectSlot={handleSelectSlot}
        
                style={{ height: 500 }}
                defaultDate={new Date()}
                />

            </div>
            </div>

        </Container>
    );
};

export default CalendarComp;