import BottomNavigation from '@mui/material/BottomNavigation';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';

export const Nav = () => {
  const [menuValue, setMenuValue] = useState<number>(0);
  return (
    <BottomNavigation
      showLabels
      value={menuValue}
      onChange={(event, newValue) => {
        setMenuValue(newValue);
      }}
    >
      <BottomNavigationAction label='Home' icon={<HomeIcon />} />
      <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
    </BottomNavigation>
  );
};
