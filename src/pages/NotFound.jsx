import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  textAlign: 'center',
  padding: theme.spacing(3),
}));

const StyledIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  fontSize: '6rem',
  color: theme.palette.error.main,
  marginBottom: theme.spacing(3),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  maxWidth: '600px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: theme.shadows[2],
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

const NotFound = () => {
  return (
    <StyledContainer maxWidth="md">
      <StyledIcon />
      <Title variant="h3">404 - Page Not Found</Title>
      <Subtitle variant="h6">
        Oops! The page you're looking for doesn't exist or has been moved. Please check the URL or return to the dashboard.
      </Subtitle>
      <Box>
        <StyledButton
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
          size="large"
        >
          Return to Dashboard
        </StyledButton>
      </Box>
    </StyledContainer>
  );
};

export default NotFound;
