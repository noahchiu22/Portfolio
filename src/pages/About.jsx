import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';

const About = () => {
  const stats = [
    { icon: <WorkIcon sx={{ fontSize: 40 }} />, value: '03+', label: 'Years experience' },
    { icon: <CodeIcon sx={{ fontSize: 40 }} />, value: '10+', label: 'Completed Project' },
    { icon: <BusinessIcon sx={{ fontSize: 40 }} />, value: '02+', label: 'Companies worked' },
  ];

  return (
    <Box id="about" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography
          component={motion.h2}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          variant="h2"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          About Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              component={motion.div}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              sx={{ p: 4, height: '100%' }}
            >
              <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                My introduction
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                Currently hold the position of Back-End Deputy Manager at Smart Automation Technology Co., Ltd.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<DownloadIcon />}
                sx={{
                  mt: 2,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                }}
              >
                Download CV
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Paper
                    component={motion.div}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {stat.icon}
                    </Box>
                    <Typography variant="h3" sx={{ mb: 1, color: 'primary.main' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 