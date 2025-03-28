import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const Qualification = () => {
  const qualifications = {
    work: [
      { title: 'Back-end Deputy Manager', company: 'Smart Automation Technology Co., Ltd.', period: '2023/12 - Present' },
      { title: 'Back-end Engineer', company: 'Smart Automation Technology Co., Ltd.', period: '2021/8 - 2023/12' },
      { title: 'Intern of MIS', company: 'EVERLIGHT', period: '2021/1 - 2021/6' },
      { title: 'Programming Assistant', company: 'iRobo', period: '2020/2 - 2020/7' },
    ],
    education: [
      { degree: 'Electrical-Optical Engineering', school: 'Taipei University of Technology', period: '2017/9 - 2021/7' },
      { degree: 'Electrical Engineering', school: 'Nei-Hu Vocational High School', period: '2014/9 - 2017/7' },
    ],
  };

  return (
    <Box id="qualification" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography
          component={motion.h2}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          variant="h2"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          My Personal Journey
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
                <WorkIcon sx={{ mr: 1, color: 'primary.main', fontSize: 40 }} />
                <Typography variant="h4">Work</Typography>
              </Box>
              <List>
                {qualifications.work.map((job, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Typography variant="h6" sx={{ color: 'primary.main' }}>
                            {job.title}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography component="span" variant="body1" color="text.primary">
                              {job.company}
                            </Typography>
                            <br />
                            <Typography component="span" variant="body2" color="text.secondary">
                              {job.period}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    {index < qualifications.work.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
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
                <SchoolIcon sx={{ mr: 1, color: 'primary.main', fontSize: 40 }} />
                <Typography variant="h4">Education</Typography>
              </Box>
              <List>
                {qualifications.education.map((edu, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Typography variant="h6" sx={{ color: 'primary.main' }}>
                            {edu.degree}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography component="span" variant="body1" color="text.primary">
                              {edu.school}
                            </Typography>
                            <br />
                            <Typography component="span" variant="body2" color="text.secondary">
                              {edu.period}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    {index < qualifications.education.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Qualification; 