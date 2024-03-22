import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchQuoteData } from '../Stores/Actions/Quote';
import QuoteCard from './QuoteCard';
import { CircularProgress, Button, Box } from '@mui/material';
import { FetchLogoutData } from '../Stores/Actions/LogoutAct';
import { useNavigate } from 'react-router';

const Intro = () => {
  const dispatch = useDispatch();
  const QuoteRed = useSelector((state) => state.QuoteRed);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(FetchQuoteData());
  }, [dispatch]);

  const fetchNewQuote = () => {
    dispatch(FetchQuoteData());
  };

  const handleLogout = () => {
    // Add your logout logic here
    dispatch(FetchLogoutData(navigate))
  };

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
      backgroundColor="#f5f5f5" // light gray background
      padding="20px"
    >
      <Button
        variant="outlined"
        onClick={fetchNewQuote}
        disabled={QuoteRed.loading}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px', // Position "Get New Quote" button on the top left
          backgroundColor: '#4caf50',
          color: '#fff',
          borderColor: '#4caf50',
          zIndex: 1, // Ensure buttons are on top of other content
        }} // outlined button
      >
        Get New Quote
      </Button>
      <Button
        variant="outlined"
        onClick={handleLogout}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px', // Position logout button on the top right
          color: '#fff', // Text color white
          backgroundColor: 'red',    
          borderColor: 'red',
          zIndex: 1, // Ensure buttons are on top of other content
        }} // outlined button
      >
        Logout
      </Button>
      {QuoteRed.err ? <p style={{ color: 'red' }}>Something went wrong...</p> :
      QuoteRed.loading ? <CircularProgress /> :
      QuoteRed.val && (
        <QuoteCard quote={QuoteRed.val} backgroundColor="#fff" textColor="#333" />
      )}
    </Box>
  );
};

export default Intro;
