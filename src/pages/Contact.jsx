import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Snackbar,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    if (formData.name + formData.email + formData.subject + formData.message !== '') {
      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success',
      });
    }
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    {
      icon: <LinkedInIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'LinkedIn',
      type: 'link',
      content: 'https://www.linkedin.com/in/noahchiu22/',
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'GitHub',
      type: 'link',
      content: 'https://github.com/noahchiu22',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Email',
      type: 'email',
      content: 'fg5678910@gmail.com',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Location',
      type: 'text',
      content: 'Taipei, Taiwan',
    },
  ];

  return (
    <Box id="contact" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography
          component={motion.h2}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          variant="h2"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          Get in Touch
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
              <List>
                {contactInfo.map((info, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>{info.icon}</ListItemIcon>
                    <ListItemText
                      primary={info.title}
                      secondary={info.content}
                      primaryTypographyProps={{ variant: 'h6' }}
                      onClick={() => info.type === 'link' && window.open(info.content, '_blank')}
                      sx={{ cursor: info.type === 'link' && 'pointer' }}
                    />
                  </ListItem>
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
              sx={{ p: 4 }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact; 