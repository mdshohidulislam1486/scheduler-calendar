import React from 'react';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Typography } from '@mui/material';


const locales = {
    'en-Us': require('date-fns/locale/en-US')
}



const CalendarComp = () => {
    
    return (
        <>
         <Typography variant='h5' sx={{mt:5}}>
             Calander 
         </Typography>


        </>
    );
};

export default CalendarComp;