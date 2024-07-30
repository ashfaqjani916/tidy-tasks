import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { FaCalendarCheck, FaTasks } from 'react-icons/fa';
import { AiOutlineProject } from 'react-icons/ai';
import { GoSidebarCollapse } from "react-icons/go";
import Hello from './Hello';



export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>

      <Hello name='ashfaq' />
      <Divider />
      <List>

        <ListItem disablePadding>
          <ListItemButton href='/'>
            <ListItemIcon>
              <FaCalendarCheck />
            </ListItemIcon>
            <ListItemText primary='Inbox/Today' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href='/tasks'>
            <ListItemIcon>
              <FaTasks />
            </ListItemIcon>
            <ListItemText primary='Tasks' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href='/projects'>
            <ListItemIcon>
              <AiOutlineProject />
            </ListItemIcon>
            <ListItemText primary='Projects' />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} ><GoSidebarCollapse className='h-8 w-8 mt-3' /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
