import { Button, Container, Divider, Grid, LinearProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useMutation } from 'react-query';
import axios from '../lib/axios';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import BackButton from '../app/BackButton';
// @ts-ignore
import GifPlayer from 'react-gif-player';

import TrainingGif from '../public/images/ai-training.gif';
import Box from '@mui/material/Box';

function Settings() {
  const {
    mutate: retrainDaysOpen,
    isLoading: daysOpenLoading,
    data: daysOpenAccuracy
  } = useMutation('days-open', async () => {
    const res = await axios.post('/models/days-open/retrain');
    return res.data;
  });
  const {
    mutate: retrainInsRes,
    isLoading: insResLoading,
    data: insResAccuracy
  } = useMutation('days-open', async () => {
    const res = await axios.post('/models/insemination-result/retrain');
    return res.data;
  });
  return (
    <>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <BackButton link={'/'} />
        <Typography variant={'h5'}>
          تنظیمات
        </Typography>
      </Toolbar>
      <Divider sx={{ mb: 4 }} />
      <Container maxWidth={'md'} sx={{ py: 5 }}>


        <Grid spacing={5} sx={{ height: 400 }} container>
          <Grid item xs={12} md={6} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'

          }}>
            {
              daysOpenLoading ?
                <>
                  <Box sx={{ mixBlendMode: 'exclusion' }}>
               {/*     {
                      typeof window !== 'undefined' &&
                      <GifPlayer gif={'/images/ai-training.gif'} autoplay={true} loop={true} />
                    }*/}


                  </Box>

                  <LinearProgress sx={{ height: 10, borderRadius: 20, width: '90%' }} />
                  <Typography sx={{ mt: 3, mb: 1 }} variant={'h6'}>
                    درحال آموزش مجدد هوش‌مصنوعی روزهای باز...
                  </Typography>
                  <Typography marginBottom={4} sx={{ px: 3 }}>
                    این عملیات ممکن است دقایقی زمان ببرد. لطفا از این صفحه خارج نشوید.
                  </Typography>
                </>


                :
                <>
                  <Typography marginBottom={1} variant={'h5'}>
                    آموزش دوباره مدل پیش بینی روزهای باز
                  </Typography>

                  {
                    daysOpenAccuracy ?
                      <Typography marginBottom={4}>
                        آموزش مدل با موفقیت انجام شد. خروجی: {daysOpenAccuracy}
                      </Typography>
                      :
                      <Typography marginBottom={4}>
                        برای آموزش مجدد مدل های مصنوعی پیش بینی روزهای باز می‌توانید با فشردن دکمه رو‌به‌رو،‌هوش مصنوعی
                        را
                        با
                        آخرین
                        داده‌های وارد شده در پایگاه‌داده‌ی نرم‌افزار مدیران بروزرسانی کنید.
                      </Typography>
                  }
                  <Button onClick={() => retrainDaysOpen()} variant={'contained'} size={'large'} fullWidth
                          color={'secondary'}>
                    آموزش مجدد و بروزرسانی
                  </Button>
                </>

            }

          </Grid>
          <Grid item xs={12} md={6} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}>
            {
              insResLoading ?
                <>
                  <Box sx={{ mixBlendMode: 'exclusion' }}>
                  {/*  {
                      typeof window !== 'undefined' &&
                      <GifPlayer gif={'/images/ai-training.gif'} autoplay={true} loop={true} />
                    }*/}

                  </Box>

                  <LinearProgress sx={{ height: 10, borderRadius: 20, width: '90%' }} />
                  <Typography sx={{ mt: 3, mb: 1 }} variant={'h6'}>
                    درحال آموزش مجدد هوش‌مصنوعی نتیجه تلقیح...
                  </Typography>
                  <Typography marginBottom={4} sx={{ px: 3 }}>
                    این عملیات ممکن است دقایقی زمان ببرد. لطفا از این صفحه خارج نشوید.
                  </Typography>
                </>


                :
                <>
                  <Typography marginBottom={1} variant={'h5'}>
                    آموزش دوباره مدل پیش بینی نتیجه تلقیح
                  </Typography>

                  {
                    insResAccuracy ?
                      <Typography marginBottom={4}>
                        آموزش مدل با موفقیت انجام شد. خروجی: {insResAccuracy}
                      </Typography>
                      :
                      <Typography marginBottom={4}>
                        برای آموزش مجدد مدل های مصنوعی پیش بینی نتیجه تلقیح می‌توانید با فشردن دکمه رو‌به‌رو،‌هوش مصنوعی
                        را
                        با
                        آخرین
                        داده‌های وارد شده در پایگاه‌داده‌ی نرم‌افزار مدیران بروزرسانی کنید.
                      </Typography>
                  }
                  <Button onClick={() => retrainInsRes()} variant={'contained'} size={'large'} fullWidth
                          color={'secondary'}>
                    آموزش مجدد و بروزرسانی
                  </Button>
                </>

            }
          </Grid>

        </Grid>
      </Container>

    </>

  )
    ;
}
/*

Settings.getInitialProps = async () => {
  return { ssr: false }; // Disable SSR for this page
};
*/

export default Settings;