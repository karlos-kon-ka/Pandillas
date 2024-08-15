
import Data from '../../Afiliaciones.json';
import { Container, Card, CardContent, Typography, Box } from '@mui/material';

function Afiliaciones() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom color="primary" align="center">
        Afiliaciones de Pandillas y Destino del Dinero
      </Typography>
      {Data.map((afiliacion, index) => (
        <Card key={index} raised sx={{ marginBottom: 2, transition: 'transform 0.3s ease-in-out' }}>
          <CardContent>
            <Typography  textAlign={'center'} variant="h5" component="h2" gutterBottom color="secondary">
              {afiliacion.pandilla}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Afiliación con Entidades Poderosas:</strong> {afiliacion.filicion}
            </Typography>
            <Typography variant="body1">
              <strong>Resolución de la Situación:</strong> {afiliacion.resolucion}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Afiliaciones;
