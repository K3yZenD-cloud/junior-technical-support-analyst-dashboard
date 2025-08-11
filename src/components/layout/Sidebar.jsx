import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  IconButton,
  Divider,
  Collapse
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
  Assessment as AssessmentIcon,
  Layers as LayersIcon,
  Assignment as AssignmentIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1.5),
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
  minHeight: '64px !important',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '& .MuiTypography-root': {
    fontWeight: 500,
    marginLeft: theme.spacing(1),
    color: 'white',
  },
  '& .MuiSvgIcon-root': {
    color: 'rgba(255, 255, 255, 0.8)',
  }
}));

const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: open ? drawerWidth : 73,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      border: 'none',
      boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)',
      backgroundColor: '#fff',
      '& .MuiListItemButton-root': {
        padding: theme.spacing(1.25, 2),
        '&.Mui-selected': {
          backgroundColor: 'rgba(78, 115, 223, 0.1)',
          borderLeft: `3px solid ${theme.palette.primary.main}`,
          paddingLeft: 'calc(2rem - 3px)',
        },
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
      '& .MuiListItemIcon-root': {
        minWidth: '2.5rem',
        color: 'inherit',
      },
    },
  })
);

const Sidebar = ({ isOpen, onToggle, mobileOpen, onClose }) => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const mainMenuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Components', icon: <LayersIcon /> },
    { text: 'Utilities', icon: <AssignmentIcon /> },
  ];

  const pagesMenuItems = [
    { text: 'Login', icon: <PersonIcon /> },
    { text: 'Register', icon: <AssignmentIcon /> },
    { text: 'Forgot Password', icon: <AssignmentIcon /> },
    { text: '404 Page', icon: <AssignmentIcon /> },
    { text: 'Blank Page', icon: <AssignmentIcon /> },
  ];

  const drawer = (
    <>
      <DrawerHeader>
        {isOpen && <Typography variant="h6" noWrap component="div">SB Admin</Typography>}
        <IconButton onClick={onToggle} size="small">
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      
      <Divider />
      
      {/* Main Menu */}
      <List component="nav" sx={{ pt: 1 }}>
        <Typography variant="overline" sx={{ 
          px: 3, 
          py: 1, 
          fontSize: '0.65rem',
          fontWeight: 800,
          color: theme.palette.text.secondary,
          display: isOpen ? 'block' : 'none'
        }}>
          Core
        </Typography>
        
        {mainMenuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
            >
              <ListItemIcon sx={{ color: selectedIndex === index ? theme.palette.primary.main : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  fontSize: '0.85rem',
                  fontWeight: selectedIndex === index ? 600 : 400,
                }}
                sx={{ opacity: isOpen ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="overline" sx={{ 
          px: 3, 
          py: 1, 
          fontSize: '0.65rem',
          fontWeight: 800,
          color: theme.palette.text.secondary,
          display: isOpen ? 'block' : 'none'
        }}>
          Interface
        </Typography>
        
        {pagesMenuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={selectedIndex === index + mainMenuItems.length}
              onClick={() => handleListItemClick(index + mainMenuItems.length)}
            >
              <ListItemIcon sx={{ color: selectedIndex === index + mainMenuItems.length ? theme.palette.primary.main : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  fontSize: '0.85rem',
                  fontWeight: selectedIndex === index + mainMenuItems.length ? 600 : 400,
                }}
                sx={{ opacity: isOpen ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <StyledDrawer
      variant="permanent"
      open={isOpen}
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: isOpen ? drawerWidth : 73,
        },
      }}
    >
      {drawer}
    </StyledDrawer>
  );
};

export default Sidebar;
