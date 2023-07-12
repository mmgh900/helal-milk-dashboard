import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Button, Card, CardActionArea, Container, Divider, Grid, Stack } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import AiImage from '../public/images/ai.png';
import ChartsImage from '../public/images/charts.png';
import SettingsImage from '../public/images/settings.png';
import Image from 'next/image';
import { NextLinkComposed } from '../lib/next-link-composed';

export default function Charts() {
  const theme = useTheme();
  return (
    <>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>

        <Typography variant={'h5'}>
          بخش‌ها
        </Typography>
      </Toolbar>
      <Divider sx={{ mb: 4 }} />
      <Container>
        <Grid container spacing={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Grid item md={6} xs={12}>
            <Card sx={{ width: '100%', bgcolor: theme.palette.secondary.light, borderRadius: '20px' }}>
              <CardActionArea component={NextLinkComposed} to={'/charts'}>
                <Box sx={{display: 'flex', alignItems: 'center', height: 300, p: 3, boxSizing: 'border-box'}}>
                  <Image height={250} width={250} src={ChartsImage} />

                  <Typography sx={{fontSize: 30, fontWeight: 'bold', ml: '100px'}}>
                     گزارشات مدیریتی
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card sx={{ width: '100%', bgcolor: theme.palette.secondary.light, borderRadius: '20px' }}>
              <CardActionArea component={NextLinkComposed} to={'/ai-models'}>
                <Box sx={{display: 'flex', alignItems: 'center', height: 300, p: 3, boxSizing: 'border-box'}}>
                  <Image height={250} width={250} src={AiImage} />

                  <Typography sx={{fontSize: 30, fontWeight: 'bold', ml: '100px'}}>
                    پیش‌بینی با هوش مصنوعی
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card sx={{ width: '100%', bgcolor: theme.palette.secondary.light, borderRadius: '20px' }}>
              <CardActionArea component={NextLinkComposed} to={'/settings'}>
                <Box sx={{display: 'flex', alignItems: 'center', height: 300, p: 3, boxSizing: 'border-box'}}>
                  <Image height={250} width={250} src={SettingsImage} />

                  <Typography sx={{fontSize: 30, fontWeight: 'bold', ml: '100px'}}>
                    تنظیمات
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>


      </Container>

    </>
  );
}