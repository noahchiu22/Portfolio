import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website built with React and Material-UI. Features smooth animations and a clean design.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Material-UI', 'Framer Motion'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourportfolio.com',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://yourecommerce.com',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Firebase', 'Redux'],
      github: 'https://github.com/yourusername/taskmanager',
      demo: 'https://yourtaskmanager.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard application that displays current weather conditions, forecasts, and interactive maps using various weather APIs.',
      demoLink: 'https://example.com/weather',
    },
  ];

  return (
    <Box id="projects" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography
          component={motion.h2}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          variant="h2"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          Most Recent Work
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                component={motion.div}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                sx={{ p: 4, height: '100%' }}
              >
                <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>
                  {project.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<LaunchIcon />}
                  href={project.demoLink || project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 