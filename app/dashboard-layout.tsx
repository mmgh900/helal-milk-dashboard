'use client';
import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import { AppBar, Button, Container, Stack } from '@mui/material';
import { HomeOutlined } from '@mui/icons-material';
import Brightness3SharpIcon from '@mui/icons-material/Brightness3Sharp';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import Link from 'next/link';
import ResponsiveAppBar from '../app-bar';


const DashboardMenuItem = ({ title, link, icon }: { title: string, link: string, icon: ReactElement }) => {
  const modifiedNode = React.cloneElement(icon, { sx: { fontSize: 28, mr: 2 } });
  const pathname = usePathname();
  return (
    <Button
      component={Link}
      href={link}
      disableElevation
      fullWidth
      variant={'contained'}
      color={pathname === link ? 'secondary' : 'primary'}
      sx={{
        minHeight: 50,
        justifyContent: 'left'
      }}
    >

      {modifiedNode}

      <Typography>
        {title}
      </Typography>
    </Button>
  );
};
export default function DashboardLayout({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box >

      {/*<Box sx={{
        bgcolor: theme.palette.primary.main,
        color: 'white',
        width: 300,
        height: '100vh',
        boxSizing: 'border-box',
        position: 'fixed',
        top: 0,
        left: 0,
        p: 2
      }}>
        <Typography component={'div'} sx={{ fontSize: 28, display: 'flex', alignItems: 'center', mb: 3 }}>
          <Brightness3SharpIcon sx={{ color: theme.palette.secondary.main, ml: 2, fontSize: 36 }} />
          <Box>
            دامداری
          </Box>
          <Box sx={{ color: theme.palette.secondary.main }}>
            ‌هلال
          </Box>
        </Typography>
        <Stack sx={{ height: '90%' }} spacing={2}>
          <DashboardMenuItem title={'صفحه‌اصلی'} link={'/'} icon={<HomeOutlined />} />
          <DashboardMenuItem title={'گزارش‌ها'} link={'/reports'} icon={<AnalyticsOutlinedIcon />} />
          <DashboardMenuItem title={'پیش‌بینی'} link={'/predictionn'} icon={<SmartToyOutlinedIcon />} />
          <DashboardMenuItem title={'تنظیمات'} link={'/settings'} icon={<SettingsApplicationsOutlinedIcon />} />

        </Stack>
      </Box>*/}

      <ResponsiveAppBar />
      {/*<AppBar>
        <Toolbar>
          <Typography component={'div'} sx={{ fontSize: 22, display: 'flex', alignItems: 'center', mb: 3 }}>
            <Brightness3SharpIcon sx={{ color: theme.palette.secondary.main, ml: 2, fontSize: 28 }} />
            <Box>
              دامداری
            </Box>
            <Box sx={{ color: theme.palette.secondary.main }}>
              ‌هلال
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>*/}
      <Box sx={{mt: '80px'}} component='main'>
        <Container sx={{bgcolor: theme.palette.background.paper, borderRadius: '20px'}} maxWidth={'xl'}>
          {children}
        </Container>
      </Box>


    </Box>

  );
}
