import React from 'react';
import MPaper from './MPaper';
import { Box, Stack, Typography, colors } from '@mui/material';
import { Bar } from 'react-chartjs-2';

// Sample data for user activity
const chartData = {
  labels: ["Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  datasets: [
    {
      label: "Active Users",
      data: [150, 180, 200, 220, 190, 230, 250, 270, 300, 310, 320, 350],
      backgroundColor: colors.blue[600],
      barPercentage: 0.6,
      categoryPercentage: 0.7
    }
  ]
};

const charOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { display: false },
      stacked: false
    },
    y: { 
      stacked: false,
      beginAtZero: true
    }
  },
  plugins: {
    legend: { display: false },
    title: { display: false }
  },
  elements: {
    bar: {
      borderRadius: 10
    }
  }
};

const UserActivityData = () => {
  return (
    <MPaper title="User Activity">
      <Stack spacing={4}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">
            (+25% Active Users compared to last year)
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Stack direction="row" alignItems="center">
              <Box sx={{
                width: "15px",
                height: "15px",
                borderRadius: "4px",
                bgcolor: colors.blue[600],
                mr: 1
              }} />
              <Typography variant="subtitle2">
                Active Users
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        {/* Bar chart for user activity */}
        <Box>
          <Bar options={charOptions} data={chartData} height="300px" />
        </Box>
        {/* End of Bar chart */}
      </Stack>
    </MPaper>
  );
};

export default UserActivityData;
