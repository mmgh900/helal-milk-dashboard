import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container, Divider, Grid } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ListItem from '../../app/list-item';
import BackButton from '../../app/BackButton';

export default function Charts() {

  return (
    <>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <BackButton link={'/'}/>
        <Typography variant={'h5'}>
          گزارشات مدیریتی
        </Typography>
      </Toolbar>
      <Divider sx={{ mb: 4 }} />
      <Container>
        <Grid container spacing={2}>
          <ListItem title={'توزیع تولید شیر'} link={'/charts/milk-production'} />
          <ListItem title={'توزیع سن زایمان'} link={'/charts/calving-age'} />
          <ListItem title={'توزیع بازه خشکی'} link={'/charts/dry-length'} />
          <ListItem title={'توزیع سن برحسب روز در اولین تلقیح'} link={'/charts/time-to-first-insemination'} />
          <ListItem title={'توزیع تعداد تلقیح‌ها تا تلقیح موفق'} link={'/charts/tries-till-successful-insemination'} />
          <ListItem title={'توزیع تولید شیر در دوره شیرواری'} link={'/charts/milk-production-in-milk-period'} />
          <ListItem title={'توزیع طول عمر مفید'} link={'/charts/life_time'} />
        </Grid>

      </Container>

    </>
  );
}