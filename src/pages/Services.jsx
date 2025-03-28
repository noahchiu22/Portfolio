import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

const Services = () => {
  const services = [
    {
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications using modern technologies and best practices.',
      icon: <StorageIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      features: [
        'RESTful API Development',
        'Database Design & Optimization',
        'Server Architecture',
        'Performance Tuning',
      ],
    },
    {
      title: 'Frontend Development',
      description: 'Creating responsive and user-friendly web applications with modern frameworks and libraries.',
      icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      features: [
        'React.js Development',
        'Responsive Design',
        'UI/UX Implementation',
        'Cross-browser Compatibility',
      ],
    },
    {
      title: 'Security Implementation',
      description: 'Implementing robust security measures to protect applications and user data.',
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      features: [
        'Authentication & Authorization',
        'Data Encryption',
        'Security Best Practices',
        'Vulnerability Assessment',
      ],
    },
    {
      title: 'Performance Optimization',
      description: 'Optimizing application performance for better user experience and scalability.',
      icon: <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      features: [
        'Code Optimization',
        'Caching Strategies',
        'Load Time Reduction',
        'Resource Management',
      ],
    },
  ];

  return (
    <Box id="services" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography
          component={motion.h2}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          variant="h2"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          What I Offer
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                component={motion.div}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                sx={{ p: 4, height: '100%' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  {service.icon}
                  <Typography variant="h4" sx={{ ml: 2 }}>
                    {service.title}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                  {service.description}
                </Typography>
                <List>
                  {service.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex}>
                      <ListItemIcon>
                        <Box
                          component="span"
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services; 