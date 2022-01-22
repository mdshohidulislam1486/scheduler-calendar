import React from 'react';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Typography, Container, Box} from '@mui/material';


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
        title:"Bit Meeting",
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
    
    return (
        <Container>
         <Typography variant='h5' sx={{mt:5}}>
             Calander 
         </Typography>

         <Box>
             <Calendar localizer={localizer} events={events} startAccessor='start' endAccessor='end'
             style={{height:500, margin:'50px'}}
             >

             </Calendar>

         </Box>


        </Container>
    );
};

export default CalendarComp;