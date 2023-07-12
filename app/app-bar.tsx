import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { Button, Stack, useMediaQuery } from '@mui/material';
import { NextLinkComposed } from '../lib/next-link-composed';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import LogoImage from 'public/images/logo.png';
import Image from 'next/image';
import { Home } from '@mui/icons-material';

function ResponsiveAppBar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box
      sx={{ bgcolor: theme.palette.primary.main, zIndex: -1, position: 'fixed', top: 0, bottom: 0, right: 0, left: 0 }}>
      <AppBar>
        <Container maxWidth='xl'>
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: {xs: 70, md: 120 } }}>
            <Stack  direction={'row'} spacing={{ xs: 1, md: 2 }}>
              <Button component={NextLinkComposed} to={'/'} startIcon={<Home/>} sx={{color: 'white'}} color={'secondary'}>
                {isDesktop && ' صفحه‌اصلی'}

              </Button>
              <Button component={NextLinkComposed} to={'/charts'} startIcon={<BarChartRoundedIcon/>} sx={{color: 'white'}} color={'secondary'}>
                {isDesktop && 'گزارشات مدیریتی'}
              </Button>

              <Box>

              </Box>
              <Button component={NextLinkComposed} to={'/'}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
                 {/* <DarkModeIcon sx={{ color: theme.palette.secondary.main, mr: 1 }} />*/}
                  <Image width={isDesktop ? 60 : 40} height={isDesktop ? 60 : 40} src={LogoImage}/>
                  <Typography
                    variant='h6'
                    noWrap


                    sx={{
                      mt: 1,
                      display: { xs: 'none', md: 'flex' },
                      fontWeight: 700,
                      textDecoration: 'none',
                      color: theme.palette.secondary.main
                    }}
                  >
                    سامانه‌ هوشمند پردازش داده هلال
                  </Typography>

                </Box>

              </Button >
              <Button component={NextLinkComposed} to={'/ai-models'} endIcon={<SmartToyRoundedIcon/>} sx={{color: 'white'}} color={'secondary'}>
                {isDesktop && ' پیش‌بینی هوش مصنوعی'}

              </Button>
              <Button component={NextLinkComposed} to={'/settings'} endIcon={<TuneRoundedIcon/>} sx={{color: 'white'}} color={'secondary'}>
                {isDesktop && 'تنظیمات'}


              </Button>

            </Stack>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>

  );
}

export default ResponsiveAppBar;