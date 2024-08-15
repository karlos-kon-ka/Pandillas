import { useState } from 'react';
import Data from '../../Pandillas.json';
import { Container, Card, CardContent, Typography, Button, Box } from '@mui/material';

function Presentacion() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Data.length - 1 ? 0 : prevIndex + 1));
  };

  const pandilla = Data[currentIndex];

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom color="primary">
        Organizaciones Mundiales
      </Typography>
      <Card
        raised
        sx={{
          maxWidth: 900,
          margin: '0 auto',
          transition: 'transform 0.3s ease-in-out',
          position: 'relative',
          backgroundImage: `url(${pandilla.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          color: 'white'
        }}
      >
        <CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom color="inherit">
            {pandilla.nombre}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>País:</strong> {pandilla.pais}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Nación:</strong> {pandilla.nacion}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Líder:</strong> {pandilla.lider || 'Desconocido'}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Descripción:</strong> {pandilla.descripcion}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Ataque Más Conocido:</strong> {pandilla.ataque_conocido}
          </Typography>
          <Typography variant="body1">
            <strong>Colores Asociados:</strong> {pandilla.colores_asociados}
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, marginBottom: 2 }}>
        <Button variant="contained" color="primary" onClick={handlePrev} sx={{ marginRight: 1 }}>
          Anterior
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Siguiente
        </Button>
      </Box>





      
    </Container>

    
  );
}

export default Presentacion;
