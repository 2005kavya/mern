import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { debounce } from 'lodash';

const MaterialsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [youtubeResults, setYoutubeResults] = useState([]);
  const [googleResults, setGoogleResults] = useState([]);
  const [showMoreResults, setShowMoreResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // Using useNavigate for redirection
  const handleDashboard = (e) =>{
    e.preventDefault();
    navigate('/dashboard')
  }

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

  // Function to handle debounced API calls
  const debouncedSearch = debounce(async (term) => {
    if (!term) return;  // Prevent API calls if search term is empty

    setLoading(true);

    try {
      // YouTube API request
      const youtubeRes = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: term,
          key: 'AIzaSyCl8ZNEKPH_A2i7LylrhtZpKW0i8YKn1b0', 
        },
      });
      setYoutubeResults(youtubeRes.data.items);

      // Google Custom Search API request
      const googleRes = await axios.get('https://www.googleapis.com/customsearch/v1', {
        params: {
          q: term,
          cx: 'f09504335df714bca-cx', // Replace with your Google Search Engine ID
          key: 'AIzaSyC8D-mvyuZJtSB4o0QTyIvQl7EZ8d8faMQ', // Replace with your Google API key
        },
      });
      setGoogleResults(googleRes.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, 500); // 500ms debounce

  useEffect(() => {
    if (searchTerm) {
      debouncedSearch(searchTerm);
    }
  }, [searchTerm]);

  return (
    <Box sx={{ padding: 3, minHeight: '100vh', position: 'relative' }}>
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
          <Button variant="outlined" sx={{ color: '#ffffff', borderColor: '#ffffff' }}onClick={handleDashboard}>Home</Button>
          
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

      {/* Search Bar */}
      <Typography variant="h4" sx={{ marginBottom: 2, color: '#000' }}>
        Search for Materials
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Search for materials"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      {/* Loading Indicator */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
          <CircularProgress />
        </Box>
      )}

      {/* Search Results */}
      <Grid container spacing={2}>
        {(showMoreResults ? [...youtubeResults, ...googleResults] : [...youtubeResults.slice(0, 2), ...googleResults.slice(0, 2)]).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, ':hover': { boxShadow: 6 }, backgroundColor: '#ffffff' }}>
              <CardContent>
                <img
                  src={item.snippet?.thumbnails?.high?.url || item.pagemap?.cse_image?.[0]?.src}
                  alt={item.snippet?.title || item.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <Typography variant="body1" sx={{ color: '#00796b', fontWeight: 'bold' }}>
                  {item.snippet?.title || item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#00796b' }}>
                  {item.snippet?.description || item.snippet?.channelTitle || 'No description available'}
                </Typography>
                <Button
                  href={item.snippet?.resourceId?.videoId ? `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}` : item.link}
                  target="_blank"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: 2, borderColor: '#00796b', color: '#00796b' }}
                >
                  {item.snippet?.resourceId?.videoId ? 'Watch Video' : 'Visit Link'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Show More / Show Less Button */}
      <Button
        onClick={() => setShowMoreResults(!showMoreResults)}
        sx={{ marginTop: 2, color: '#00796b', borderColor: '#00796b' }}
        endIcon={<ArrowForward />}
      >
        {showMoreResults ? 'Show Less' : 'Show More'}
      </Button>
    </Box>
  );
};

export default MaterialsPage;
