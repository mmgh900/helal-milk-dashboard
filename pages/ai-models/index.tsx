import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Button, Card, CardActionArea, Container, Divider, Grid } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Typography from '@mui/material/Typography';
import CustomCard from '../../app/custom-card';
import Box from '@mui/material/Box';
import Link from 'next/link';
import ListItem from '../../app/list-item';
import BackButton from '../../app/BackButton';

export default function Charts() {
  return (
    <>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <BackButton link={'/'}/>

        <Typography variant={'h5'}>
          مدل‌های هوش مصنوعی
        </Typography>
      </Toolbar>
      <Divider sx={{ mb: 4 }} />
      <Container>
        <ListItem title={'پیش‌بینی روزهای باز'} link={'/ai-models/days-open'} />
        <ListItem title={'پیش‌بینی نتیجه لقاح'} link={'/ai-models/insemination-res'} />

      </Container>

    </>
  );
}