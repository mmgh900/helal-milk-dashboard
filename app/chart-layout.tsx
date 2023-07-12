'use client';
import React, { ReactNode } from 'react';
import { Button, Container, Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CustomCard from './custom-card';
import Link from 'next/link';
import BackButton from './BackButton';

export interface ChartsLayoutProps {
  title: string,
  description: ReactNode,
  controls: ReactNode,
  chart: ReactNode
}

export default function ChartsLayout({ title, description, chart, controls }: ChartsLayoutProps) {


  return (
    <>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <BackButton link={'./'}/>


        <Typography variant={'h5'}>
          {title}
        </Typography>
      </Toolbar>
      <Divider sx={{ mb: 4 }} />
      <Grid spacing={2} width={'100%'} container>
        <Grid item xs={12}  md={4}>
          <CustomCard title={'اطلاعات نمودار'}>
            <Typography>
              نام نمودار
            </Typography>
            <Typography variant={'h6'}>
              {title}
            </Typography>
          </CustomCard>

          <CustomCard title={'تنظیمات نمودار'}>
            {controls}
          </CustomCard>
        </Grid>
        <Grid item xs={12}  md={8} sx={{ display: 'flex', justifyContent: 'center' }}>
          {chart}
        </Grid>
      </Grid>

      <Container sx={{ my: 3 }} maxWidth={'md'}>
        <CustomCard title={'توضیحات'}>
          {description}
        </CustomCard>
      </Container>


    </>
  )
    ;
}