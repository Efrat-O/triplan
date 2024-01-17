
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import HoverRating from './HoverRating'; // Import the HoverRating component

const CommentSection = () => {
  const [response, setResponse] = useState('');

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSendClick = () => {
    // Check if there's something written in the response before handling
    if (response.trim() !== '') {
      // You can implement the logic to handle the submitted response
      console.log('Submitted Response:', response);
      // Reset the response field after submitting
      setResponse('');
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom>
          Place Name
        </Typography>

        {/* Date of Writing */}
        <Typography variant="subtitle2" gutterBottom>
          Date: {new Date().toLocaleDateString()}
        </Typography>

        {/* Writer's Name and Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Avatar alt="Writer Avatar" src="/path-to-avatar-image.jpg" />
          <Typography variant="subtitle1" style={{ marginLeft: '10px' }}>
            Writer's Name
          </Typography>
        </div>

        {/* Rating */}
        <HoverRating />

        {/* Response Input */}
        <TextField
          id="response"
          label="Write your response"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={response}
          onChange={handleResponseChange}
          style={{ marginBottom: '20px' }}
        />

        {/* Send Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendClick}
          disabled={response.trim() === ''}
        >
          Send
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommentSection;


