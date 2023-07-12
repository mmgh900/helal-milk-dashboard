'use client';
import * as React from 'react';
import { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import ResponsiveAppBar from './app-bar';


export default function DashboardLayout({ children }: { children: ReactNode }) {
  const theme = useTheme();

  return (
    <Box>
      <ResponsiveAppBar />
      <Box sx={{ mt: {xs: '70px', md: '120px' } }} component='main'>
        <Container sx={{ bgcolor: theme.palette.background.paper, borderRadius: '20px', minHeight: '100vh' }} maxWidth={'xl'}>
          {children}
        </Container>
      </Box>


    </Box>

  );
}
