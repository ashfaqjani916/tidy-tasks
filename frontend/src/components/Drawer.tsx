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
import Hello from './Hello';
import { FiMenu } from "react-icons/fi";



export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const logoutHandle = () => {
    localStorage.removeItem("authToken");
    window.location.href = `http://localhost:5173`
  }

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
    <div className=' w-fit bg-transparent '>
      <Button onClick={toggleDrawer(true)} ><FiMenu className='h-12 w-12 text-primary ' /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
        <Button className=' mt-96' onClick={logoutHandle} >logout</Button>
      </Drawer>

    </div>
  );
}
