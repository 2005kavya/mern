import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'white' }}>
      <Paper elevation={3} sx={{ padding: 4, width: 400, textAlign: 'center', borderRadius: 2 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'black', fontWeight: 'bold' }}>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': { borderRadius: 2 },
                '& .MuiInputLabel-root': { color: 'black' },
                '& .MuiOutlinedInput-input': { color: 'black' }
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': { borderRadius: 2 },
                '& .MuiInputLabel-root': { color: 'black' },
                '& .MuiOutlinedInput-input': { color: 'black' }
              }}
            />
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              sx={{ 
                marginTop: 2, 
                bgcolor: 'black', 
                color: 'white',
                '&:hover': { bgcolor: 'gray' } 
              }}
            >
              Login
            </Button>
          </form>
          <Typography variant="body2" sx={{ marginTop: 2, color: 'black' }}>
            Don't have an account? <Link to="/signup" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Sign Up</Link>
          </Typography>
        </motion.div>
      </Paper>
    </Box>
  );
};

export default LoginPage;
