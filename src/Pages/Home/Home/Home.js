import { Box } from '@mui/material';
import React from 'react';
import Index from '.';
import CalendarComp from './CalendarComp';

const Home = () => {
    return (
    <Box>
        <CalendarComp></CalendarComp>
        <Index></Index>
    </Box>
    );
};

export default Home;