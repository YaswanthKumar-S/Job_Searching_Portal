import { Grid } from '@mui/material';
import React from 'react';
import SummaryGrid from '../components/common/SummaryGrid';
import ToursData from '../components/common/ToursData';
import Animate from '../components/common/Animate';
// import UserBookingCard from '../components/common/UserBookingCard';
import BookedData from '../components/common/BookedData';
import StatisticData from '../components/common/StatisticData';

const DashboardPage = () => {


  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SummaryGrid />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Animate delay={1}>
              <ToursData />
            </Animate>
          </Grid>
          
        </Grid>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Grid container spacing={3}>
          
          <Grid item xs={12} md={6}>
            <Animate type="fade" delay={2} sx={{ height: "100%" }}>
              <BookedData />
            </Animate>
          </Grid>
          <Grid item xs={12}>
            <Animate delay={1}>
              <StatisticData />
            </Animate>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;