import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              component={motion.h1}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              variant="h1"
              sx={{
                color: 'primary.main',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
              }}
            >
              Hi, I'm Noah
            </Typography>
            <Typography
              component={motion.h2}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              variant="h2"
              sx={{
                color: 'text.primary',
                mb: 4,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                fontWeight: 600,
              }}
            >
              Back-end Deputy Manager
            </Typography>
            <Typography
              component={motion.p}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              variant="h5"
              sx={{
                color: 'text.secondary',
                mb: 4,
                maxWidth: '600px',
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              Led 10+ backend projects over 3 years.<br/>
              Delivered scalable systems with multi-million dollar business impact.
            </Typography>
            <Box
              component={motion.div}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                }}
              >
                Contact Me
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                }}
              >
                View Projects
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* 這裡可以添加右側的圖片或動畫 */}
          </Grid>
        </Grid>
      </Container>
      <Box
        component={motion.div}
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('about')}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'primary.main',
          cursor: 'pointer',
        }}
      >
        <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
      </Box>
    </Box>
  );
};

export default Hero; 