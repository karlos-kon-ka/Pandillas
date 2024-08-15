import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';


const images = [
  '/img/balas.jpg',
  '/img/balas2.jpg',
  '/img/pre1.jpg'
];

function Imagenes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia automáticamente la imagen cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <Box className="image-slider">
      <Box
        className="background-image"
        sx={{
          height: '100vh',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out', // Transición suave para el cambio de imágenes
        }}
      >
        <Box className="text-grid">
          <p className="text-item">
            El control del poder financiero en organizaciones pandilleras es una manifestación de cómo el dinero negro, generado por actividades ilícitas, se entrelaza con las finanzas legales. Sin una sólida subvención financiera, estas actividades serían insostenibles. Las esferas gubernamentales, los narcos y las pandillas sirven a un único propósito: la acumulación de riqueza, la cual a menudo se utiliza para financiar conflictos y guerras que ni siquiera imaginamos.
          </p>
          <p className="text-item">
            Las pandillas y organizaciones criminales dependen de un flujo constante de dinero para sostener sus operaciones. Este dinero, frecuentemente generado a través de actividades ilegales, no solo mantiene estas organizaciones sino que también se infiltra en la economía legal. En última instancia, el dinero negro puede ser usado para financiar guerras y conflictos, revelando la compleja red de influencia y control que ejerce el poder financiero sobre la estabilidad global.
          </p>
          <p className="text-item">
            El oscuro ciclo del dinero negro demuestra cómo las esferas del poder, desde gobiernos hasta organizaciones criminales, están interconectadas. Las pandillas, al igual que las grandes instituciones financieras, están inmersas en un sistema que perpetúa la acumulación de riqueza a través de medios legales e ilegales. Este dinero, una vez integrado en la economía legal, puede ser utilizado para financiar conflictos y guerras, afectando la estabilidad global.
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default Imagenes;
