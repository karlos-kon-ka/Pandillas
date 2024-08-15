
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Nav() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pandillas
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to={'/'}>
            Inicio
          </Button>
          <Button color="inherit" component={Link} to={'/Afiliaciones'}>
            Afiliaciones
          </Button>
          <Button color="inherit" component={Link} to={'/Imagenes'}>
            Conclusiones
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
