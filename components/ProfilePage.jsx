import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, TextField, Card, CardContent, Tab, Tabs, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        role: '',
        bio: ''
    });
    const [loading, setLoading] = useState(true); // Track loading state

    // Using useNavigate for redirection
    const handleDashboard = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    const handleMaterial = (e) => {
        e.preventDefault();
        navigate('/materials');
    };

    const handleProfile = (e) => {
        e.preventDefault();
        navigate('/profile');
    };
    const handleLogout=(e)=>{
      e.preventDefault();
      navigate('/')
    }

    

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    

    return (
      
      
        <Box sx={{ padding: 3, minHeight: '100vh' }}>
          {/* Background Image with Blur */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("https://i0.wp.com/lemonlearning.com/wp-content/uploads/2023/01/learning-by-doing-1.jpg?fit=1500%2C1017&ssl=1")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px)',
          zIndex: -1,
        }}
      ></Box>
            {/* Navigation Bar */}
            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: 3, backgroundColor: '#000000', height: '80px', alignItems: 'center' }}>
                <Button variant="outlined" sx={{ color: '#ffffff', borderColor: '#ffffff' }} onClick={handleDashboard}>Home</Button>
                <Button variant="outlined" sx={{ color: '#ffffff', borderColor: '#ffffff' }} onClick={handleMaterial}>Materials</Button>
                <Button variant="outlined" sx={{ color: '#ffffff', borderColor: '#ffffff' }} onClick={handleProfile}>Profile</Button>
                <Button variant="outlined" sx={{ color: '#ffffff', borderColor: '#ffffff' }} onClick={handleLogout}>Logout</Button>
            </Box>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                {/* Profile Section */}
                

                {/* Tabs Section */}
                <Box sx={{ marginTop: 3 }}>
                    <Tabs value={activeTab} onChange={handleTabChange} centered>
                        
                        <Tab label="Webinars" />
                        <Tab label="Materials" />
                    </Tabs>

                    {/* Personal Info Tab */}
                    

                    {/* Webinars Tab */}
                    {activeTab === 0 && (
                        <Box sx={{ marginTop: 3 }}>
                            <Typography variant="h6" gutterBottom sx={{ color: '#000000' }}>
                                Webinars You’ve Attended
                            </Typography>
                            <Card sx={{ marginBottom: 2 }}>
                                <CardContent>
                                    <Typography variant="body1">AI for Beginners Webinar - 2025-02-01</Typography>
                                    <Button href="#" variant="outlined" sx={{ marginTop: 1 }}>
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </Box>
                    )}

                    {/* Materials Tab */}
                    {activeTab === 1 && (
                        <Box sx={{ marginTop: 3 }}>
                            <Typography variant="h6" gutterBottom sx={{ color: '#000000' }}>
                                Downloaded Materials
                            </Typography>
                            <Card sx={{ marginBottom: 2 }}>
                                <CardContent>
                                    <Typography variant="body1">Data Science</Typography>
                                    <Button href="#" variant="outlined" sx={{ marginTop: 1 }}>
                                        Download Again
                                    </Button>
                                </CardContent>
                            </Card>
                        </Box>
                    )}
                </Box>
            </motion.div>
        </Box>
    );
};

export default ProfilePage;
