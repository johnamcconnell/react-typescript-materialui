import * as React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ChatBar from './ChatBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  width: '100%',
  height: '85vh',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MainSection() {
  return (
    <Paper sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={12}>
          <Item>This is where the messages will go, still need to work on colors and shit</Item>
        </Grid>
        <ChatBar />
      </Grid>
    </Paper>
  );
}