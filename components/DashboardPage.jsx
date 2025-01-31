import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showMoreWebinars, setShowMoreWebinars] = useState(false);
  const [showMoreMaterials, setShowMoreMaterials] = useState(false);
  const navigate = useNavigate();  // Using useNavigate for redirection

  const handleMaterial = (e) => {
    e.preventDefault();
    // You can add authentication logic here, for now we just navigate to the Dashboard
    navigate('/materials');  // Redirect to dashboard after login
  };
  const handleProfile=(e) =>{
    e.preventDefault();
    navigate('/profile')
  }
  const handleLogout=(e)=>{
    e.preventDefault();
    navigate('/')
  }

  const webinars = [
    { name: 'AI for Beginners Webinar', date: '2025-02-01', time: '10:00 AM', image: 'https://www.lockheedmartin.com/content/dam/lockheed-martin/eo/photo/ai-ml/artificial-intelligence-1920.jpg' },
    { name: 'Advanced Data Science Seminar', date: '2025-02-10', time: '2:00 PM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5xc5hhy993K1s72KxIhTkpOfBEh5D0SFIw&s' },
    { name: 'Machine Learning Masterclass', date: '2025-02-15', time: '12:00 PM', image: 'https://www.corpnce.com/wp-content/uploads/2020/05/machine-learning.jpg' },
    { name: 'Deep Learning Workshop', date: '2025-03-01', time: '9:00 AM', image: 'https://cz.mouser.com/blog/Portals/11/Dongang_Machine%20Learning_Theme%20Image-min_1.jpg' },
  ];

  const materials = [
    { name: 'Data Science.pdf', type: 'PDF', url: 'assets/Data_Science_Overview.pdf', image: 'https://cdn.britannica.com/84/203584-050-57D326E5/speed-internet-technology-background.jpg' },
    { name: 'File Handling.docx', type: 'PDF', url: '/assets/FileHandling.pdf', image: 'https://health-e.in/wp-content/uploads/2023/12/healthcare-concept-with-futuristic-design-graphics-medical-treatment-icons.webp' },
    { name: 'Functions.pdf', type: 'PDF', url: '/assets/Functions.docx', image: 'https://cdn1.byjus.com/wp-content/uploads/2022/01/word-image93.png' },
    { name: 'ML Algorithms.docx', type: 'PDF', url: 'assets/machine-learning-algorithms_text-book.pdf', image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230808130011/Machine-Learning-Algorithms1-(1).webp' },
  ];
  

  

  return (
    <Box sx={{  minHeight: '100vh', position: 'relative' }}>
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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {/* Navigation Bar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: 3, backgroundColor: '#000000', height: '80px', alignItems: 'center' }}>
          <Button variant="outlined" sx={{ color: '#ffffff', borderColor: '#ffffff' }}>Home</Button>
          
          <Button
  variant="outlined"
  sx={{ color: '#ffffff', borderColor: '#ffffff' }}
  onClick={handleMaterial}
>
  Materials
</Button>

          
          
          <Button variant="outlined" sx={{ color: '#ffffff', borderColor: '#ffffff' }}  onClick={handleProfile}>Profile</Button>
          <Button variant="outlined" sx={{ color: '#ffffff', borderColor: '#ffffff' }} onClick={handleLogout}>Logout</Button>
        </Box>

        {/* Home Section */}
        {activeSection === 'home' && (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 3 }}>
              {/* Welcome Message */}
              <Box sx={{ maxWidth: '600px' }}>
                <Typography variant="h3" gutterBottom sx={{ color: '#000000', fontWeight: 'bold' }}>
                  Welcome to My Dashboard
                </Typography>
                <Typography variant="body1" sx={{ color: '#000000', marginBottom: 2 }}>
                  This platform connects you with valuable resources, upcoming events, and suggested materials tailored to your interests. Explore the latest webinars, get updated materials, and stay engaged with the community.
                </Typography>
                
              </Box>
            </Box>

           

            {/* Upcoming Webinars Section */}
            <Typography variant="h6" gutterBottom sx={{ color: '#000000', marginTop: 4 }}>
              Upcoming Webinars
            </Typography>
            <Grid container spacing={2}>
              {(showMoreWebinars ? webinars : webinars.slice(0, 2)).map((webinar, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ boxShadow: 3, borderRadius: 2, ':hover': { boxShadow: 6 }, backgroundColor: '#ffffff' }}>
                    <CardContent>
                      <img src={webinar.image} alt={webinar.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                      <Typography variant="body1" sx={{ color: '#00796b' }}>{webinar.name}</Typography>
                      <Typography variant="body2" sx={{ color: '#00796b' }}>{webinar.date} at {webinar.time}</Typography>
                      <Button href="#" variant="outlined" fullWidth sx={{ marginTop: 2, borderColor: '#00796b', color: '#00796b' }}>
                        Register
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Button
              onClick={() => setShowMoreWebinars(!showMoreWebinars)}
              sx={{ marginTop: 2, color: '#00796b', borderColor: '#00796b' }}
              endIcon={<ArrowForward />}
            >
              {showMoreWebinars ? 'Show Less' : 'Show More'}
            </Button>

            {/* Suggested Materials Section */}
            <Typography variant="h6" gutterBottom sx={{ color: '#000000', marginTop: 4 }}>
              Suggested Materials
            </Typography>
            <Grid container spacing={2}>
              {(showMoreMaterials ? materials : materials.slice(0, 2)).map((material, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ boxShadow: 3, borderRadius: 2, ':hover': { boxShadow: 6 }, backgroundColor: '#ffffff' }}>
                    <CardContent>
                      <img src={material.image} alt={material.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                      <Typography variant="body1" sx={{ color: '#00796b' }}>{material.name}</Typography>
                      <Typography variant="body2" sx={{ color: '#00796b' }}>{material.type}</Typography>
                      <Button href={material.url} target="_blank" variant="outlined" fullWidth sx={{ marginTop: 2, borderColor: '#00796b', color: '#00796b' }}>
                        View
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Button
              onClick={() => setShowMoreMaterials(!showMoreMaterials)}
              sx={{ marginTop: 2, color: '#00796b', borderColor: '#00796b' }}
              endIcon={<ArrowForward />}
            >
              {showMoreMaterials ? 'Show Less' : 'Show More'}
            </Button>
          </>
        )}
      </motion.div>
    </Box>
  );
};

export default DashboardPage;
