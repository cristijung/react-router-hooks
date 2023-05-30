import MenuBase from '../../componentes/MenuBase';
import { Button, Box } from '@mui/material';
import styles from './Menu.module.scss';

export default function Menu() { 

  return (
    <Box className={styles.content}>
      <MenuBase to='/home'>
        <Button variant='outlined'>Home</Button>
      </MenuBase>
      <MenuBase to='/galeria'>
        <Button variant='outlined'>Galeria</Button>
      </MenuBase>
      <MenuBase to='/lista'>
        <Button variant='outlined'>Lista</Button>
      </MenuBase>
    </Box>
  );
}
