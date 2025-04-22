import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'MES',
      description:
        'Manufacturing Execution System that streamlines production processes, tracks real-time data, and improves operational efficiency.',
      // image: 'https://via.placeholder.com/400x300',
      technologies: ['Go', 'Python', 'PostgreSQL', 'React'],
      // demo: 'https://mes-demo.example.com',
    },
    {
      title: 'QMS',
      description:
        'Quality Management System for monitoring and ensuring product quality standards, with defect tracking and statistical analysis.',
      // image: 'https://via.placeholder.com/400x300',
      technologies: ['Go', 'PostgreSQL', 'React'],
      // demo: 'https://qms-demo.example.com',
    },
    {
      title: 'SPC',
      description: 'Statistical Process Control application for monitoring manufacturing processes, detecting variations, and ensuring consistent product quality through statistical methods.',
      // image: 'https://via.placeholder.com/400x300',
      technologies: ['Go', 'PostgreSQL', 'React'],
      // demo: 'https://spc-demo.example.com',
    },
    {
      title: 'ERP',
      description:
        'Enterprise Resource Planning solution that integrates core business processes including inventory, procurement, and financial management.',
      // image: 'https://via.placeholder.com/400x300',
      technologies: ['Go', 'PostgreSQL', 'React'],
      // demo: 'https://erp-demo.example.com',
    },
    {
      title: 'Production Dashboard',
      description: 
        'Interactive business intelligence dashboard providing real-time KPIs, performance metrics, and data visualization for executive decision-making.',
      // image: 'https://via.placeholder.com/400x300',
      technologies: ['Go', 'Python', 'PostgreSQL', 'React'],
      // demo: 'https://dashboard-demo.example.com',
    },
    {
      title: 'Production Report',
      description: 
        'Automated reporting system that generates comprehensive production analytics, efficiency metrics, and trend analysis for manufacturing operations.',
      // image: 'https://via.placeholder.com/400x300',
      technologies: ['Go', 'Python', 'PostgreSQL', 'React'],
      // demo: 'https://reports-demo.example.com',
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
                {/* <Button
                  variant="contained"
                  color="primary"
                  endIcon={<LaunchIcon />}
                  href={project.demoLink || project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </Button> */}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 