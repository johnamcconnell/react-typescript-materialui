import * as React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { Container } from '@mui/material';
import MainSection from './components/MainSection';


export default function App() {
  return (
    <Container maxWidth="md">
      <ResponsiveAppBar />
        <MainSection />
    </Container>
  );
}
