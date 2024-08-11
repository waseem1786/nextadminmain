'use client';
import { useEffect, useState } from 'react';
import { Grid, Paper } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Api = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('../../api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching message:', error));
  }, []);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <ThemeProvider theme={lightTheme}>
          <Item>{message}</Item>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};

export default Api;
