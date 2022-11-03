import React from 'react';
import {useState} from 'react';
import Form from './components/Form';
import ShowCharacter from './components/character/ShowCharacter';
import './App.css';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import LockResetIcon from '@mui/icons-material/LockReset';

function App() {

  const [name, setName] = useState("");

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h2">Rick&Morty API</Typography>
        <Form setName={setName}/>

        <IconButton color="primary" aria-label="Reset" component="label" onClick={()=>setName('')}>
          {/* <LockResetIcon /> */}
        </IconButton>

        {/* <button onClick={()=>setName('')}>
          Reset
        </button> */}
        <ShowCharacter name={name} margin="normal"/>
      </Container>
    </>
  );
}

export default App;
