

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Input, List, ListItem, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Favorite from './Favorite';
import MyTrips from './MyTrips';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {
  const [inputStart, setInputStart] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [addedDestinations, setAddedDestinations] = useState([]);
  const Category = [
 
        { label: 'Restaurant' },
        { label:  'Museum'},
        { label: 'Antiquities' },
        { label: 'Shopping'},
      ];

  const handleChange = (event) => {
    setInputStart(event.target.value);
  };

  const handleChange2 = (event) => {
    setInputSearch(event.target.value);
  };

  const handleAddDestination = () => {
    if (inputSearch.trim() !== '') {
      setAddedDestinations([...addedDestinations, inputSearch]);
      setInputSearch('');
    }
  };

  const handleRemoveDestination = (index) => {
    const updatedDestinations = addedDestinations.filter((_, i) => i !== index);
    setAddedDestinations(updatedDestinations);
  };

  return (
    <>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit">Home</Button>
            <Button color="inherit" as={Link} to="/MyTrips">
              My Trips
            </Button>
            <Button color="inherit" as={Link} to="/Favorite">
              Favorite
            </Button>
          </Toolbar>
        </AppBar>

        {/* Your Routes go here */}
        <Routes>
          <Route path="/MyTrips" element={<MyTrips />} />
          <Route path="/Favorite" element={<Favorite />} />
        </Routes>
      </Router>

      {/* Starting Point Input  */}
      <Container maxWidth="xl" style={{ padding: '60px' }}>
        <label>Where is your starting point?</label>
        <br />
        <Input
          placeholder="Ben Yehuda 20, Jerusalem"
          value={inputStart}
          onChange={handleChange}
        />
        <Button variant="outlined" startIcon={<SearchIcon />}></Button>
        {/*location button*/}
        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<LocationOnIcon />}>
            location
          </Button>
        </Stack>
      </Container>

      {/* Search Input  */}
      <Container maxWidth="xl" style={{ padding: '60px' }}>
        <label>Search for a destination</label>
        <br />
        <Input
          placeholder="Israel Museum, Jerusalem"
          value={inputSearch}
          onChange={handleChange2}
         
        />
        {inputSearch.trim() !== '' && (
          <Stack direction="row" spacing={2} style={{ marginTop: '10px' }}>
            <Button variant="outlined"  onClick={handleAddDestination}>
              Add
            </Button>
          </Stack>
        )}

      </Container>

          {/* Added Destinations List */}
          <Container maxWidth="xl" style={{ padding: '30px' }}>
        <List>
          {addedDestinations.map((destination, index) => (
            <ListItem key={index}>
              {destination}
              <IconButton onClick={() => handleRemoveDestination(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Container>

      <Container maxWidth="xl" style={{ padding: '30px' }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Category}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Category" />}
        />
      </Container>
    </>
  );
}



