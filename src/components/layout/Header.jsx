import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Button, 
  Box, 
  Badge, 
  Avatar, 
  Menu, 
  MenuItem, 
  Divider, 
  ListItemIcon, 
  ListItemText,
  Tooltip
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Notifications as NotificationsIcon, 
  Person as PersonIcon, 
  Settings as SettingsIcon, 
  ExitToApp as LogoutIcon,
  FileDownload as ExportIcon,
  Print as PrintIcon,
  AddCircleOutline as AddIcon
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ open, toggleDrawer }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications] = useState([
    'New user registered',
    'New report available',
    'Server reboot required',
  ]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.15))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
    >
      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          John Doe
        </Typography>
        <Typography variant="body2" color="text.secondary">
          admin@example.com
        </Typography>
      </Box>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <PersonIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Settings</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Logout</ListItemText>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <StyledAppBar position="absolute" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, fontWeight: 600 }}
          >
            Analytics Dashboard
          </Typography>

          {/* Search Box */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: 1,
              backgroundColor: alpha('#f8f9fc', 0.15),
              '&:hover': {
                backgroundColor: alpha('#f8f9fc', 0.25),
              },
              marginRight: 2,
              marginLeft: 0,
              width: '100%',
              maxWidth: '400px',
              '@media (max-width: 600px)': {
                display: 'none',
              },
            }}
          >
            <Box
              sx={{
                padding: (theme) => theme.spacing(0, 1.5),
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d1d3e2',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </Box>
            <input
              type="text"
              placeholder="Search for..."
              style={{
                fontFamily: 'Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 400,
                lineHeight: 1.5,
                color: '#6e707e',
                backgroundColor: 'transparent',
                border: '1px solid #d1d3e2',
                borderRadius: '0.35rem',
                padding: '0.5rem 0.75rem 0.5rem 2.5rem',
                width: '100%',
              }}
            />
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<ExportIcon />}
              sx={{
                textTransform: 'none',
                borderColor: '#d1d3e2',
                color: '#5a5c69',
                '&:hover': {
                  borderColor: '#bac8f3',
                  backgroundColor: 'rgba(78, 115, 223, 0.04)',
                },
              }}
            >
              Export
            </Button>
            
            <Button
              variant="outlined"
              size="small"
              startIcon={<PrintIcon />}
              sx={{
                textTransform: 'none',
                borderColor: '#d1d3e2',
                color: '#5a5c69',
                '&:hover': {
                  borderColor: '#bac8f3',
                  backgroundColor: 'rgba(78, 115, 223, 0.04)',
                },
              }}
            >
              Print
            </Button>
            
            <Button
              variant="contained"
              size="small"
              startIcon={<AddIcon />}
              sx={{
                textTransform: 'none',
                backgroundColor: '#4e73df',
                '&:hover': {
                  backgroundColor: '#2e59d9',
                },
              }}
            >
              New
            </Button>

            {/* Notifications */}
            <IconButton color="inherit">
              <Badge badgeContent={notifications.length} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {/* Profile Menu */}
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleProfileMenuOpen}
                size="small"
                sx={{ ml: 1 }}
                aria-controls={isMenuOpen ? menuId : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? 'true' : undefined}
              >
                <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.main' }}>
                  <PersonIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </StyledAppBar>
      {renderMenu}
    </>
  );
};

export default Header;
