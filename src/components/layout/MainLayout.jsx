import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f8f9fc',
      padding: 0,
      margin: 0
    }}>
      <CssBaseline />
      <Box sx={{ 
        width: '100%',
        padding: { xs: 2, sm: 3 },
        maxWidth: '100%'
      }}>
        {children || <Outlet />}
      </Box>
    </Box>
  );
};

export default MainLayout;
