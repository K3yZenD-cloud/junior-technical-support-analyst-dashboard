import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useResponsive = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    // If switching to mobile view, close the drawer
    if (isMobile) {
      setMobileOpen(false);
    } else {
      // If switching to desktop view, open the drawer
      setIsOpen(true);
    }
  }, [isMobile]);

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleDrawerClose = () => {
    if (isMobile) {
      setMobileOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  return {
    isMobile,
    mobileOpen,
    isOpen,
    handleDrawerToggle,
    handleDrawerClose,
  };
};

export default useResponsive;
