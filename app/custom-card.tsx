'use client';
import { Card, CardContent, Divider } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { ReactNode } from 'react';

export default function CustomCard({ title, children }: { title: string, children: ReactNode }) {
  return (
    <Card sx={{ mb: 3 }} variant={'outlined'}>
      <Toolbar variant={'dense'}>
        <Typography variant={'h6'}>
          {title}
        </Typography>
      </Toolbar>

      <Divider />

      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}