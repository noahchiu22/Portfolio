import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';

const Skills = () => {
  const skills = {
    backend: [
      { name: 'Go', level: 90 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Python', level: 70 },
    ],
    frontend: [
      { name: 'JavaScript', level: 80 },
      { name: 'React.js', level: 70 },
      { name: 'CSS', level: 55 },
    ],
  };

  return (
    <Box id="skills" sx={{ py: 8, bgcolor: 'background.paper'  }}>
      <Container>
        <Typography
          component={motion.h2}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          variant="h2"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          My Technical Level
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
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <CodeIcon sx={{ mr: 1, color: 'primary.main', fontSize: 40 }} />
                <Typography variant="h4">Back-end developer</Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary' }}>
                More than 3 years
              </Typography>
              {skills.backend.map((skill) => (
                <Box key={skill.name} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body1">{skill.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'background.default',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: 'primary.main',
                      },
                    }}
                  />
                </Box>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              component={motion.div}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              sx={{ p: 4, height: '100%' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <BrushIcon sx={{ mr: 1, color: 'primary.main', fontSize: 40 }} />
                <Typography variant="h4">Front-end developer</Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary' }}>
                More than 2 years
              </Typography>
              {skills.frontend.map((skill) => (
                <Box key={skill.name} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body1">{skill.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'background.default',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: 'primary.main',
                      },
                    }}
                  />
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 