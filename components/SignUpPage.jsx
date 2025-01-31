import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data);
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'white' }}>
      <Container maxWidth="xs">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ color: 'black', fontWeight: 'bold', marginBottom: 2 }}>
              Sign Up
            </Typography>

            {error && <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>{error}</Typography>}

            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                required
                sx={{
                  marginBottom: 2,
                  '& .MuiOutlinedInput-root': { borderRadius: 2 },
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-input': { color: 'black' },
                }}
              />
              <TextField
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                required
                sx={{
                  marginBottom: 2,
                  '& .MuiOutlinedInput-root': { borderRadius: 2 },
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-input': { color: 'black' },
                }}
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                fullWidth
                required
                sx={{
                  marginBottom: 2,
                  '& .MuiOutlinedInput-root': { borderRadius: 2 },
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-input': { color: 'black' },
                }}
              />
              <TextField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                fullWidth
                required
                sx={{
                  marginBottom: 2,
                  '& .MuiOutlinedInput-root': { borderRadius: 2 },
                  '& .MuiInputLabel-root': { color: 'black' },
                  '& .MuiOutlinedInput-input': { color: 'black' },
                }}
              />

              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  marginTop: 2,
                  bgcolor: 'black',
                  color: 'white',
                  '&:hover': { bgcolor: 'gray' },
                }}
              >
                Create Account
              </Button>
            </form>

            <Grid container sx={{ marginTop: 2 }} justifyContent="center">
              <Grid item>
                <Typography variant="body2" sx={{ color: 'black' }}>
                  Already have an account?{' '}
                  <Button color="inherit" onClick={() => navigate('/')} sx={{ padding: 0, fontWeight: 'bold' }}>
                    Log in
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SignUpPage;
