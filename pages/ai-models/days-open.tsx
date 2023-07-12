'use client';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import ChartsLayout from '../../app/chart-layout';
import axios from '../../lib/axios';
import { useFormik } from 'formik';
import { useTheme } from '@mui/material/styles';
import CowImage from '../../public/images/cow.png';
import Image from 'next/image';
import CountUp from 'react-countup';

export default function DaysOpen() {
  const [data, setData] = useState<number | '...'>();
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      serial: ''
    },
    onSubmit: (values, formikHelpers) => {
      setData('...');
      axios.get<{ data: number }>(`/models/days-open?serial=${values.serial}`).then(res => {
        setData(res.data.data);
        setError(null);
      })
        .catch(err => {
          setError(err.response?.data?.detail);
        });

    }
  });


  return (
    <ChartsLayout
      description={
        <>

          <Typography>
            این مدل هوش مصنوعی که به پیش‌بینی روزهای باز در گاوهای شیری می‌پردازد، می‌تواند به دامداران کمک کند تا
            تصمیمات بهتری در مورد مدیریت دام‌های خود بگیرند. این مدل می‌تواند با استفاده از داده‌هایی مانند دما، رطوبت،
            بارش، سرعت باد، میزان نور خورشید و... پیش‌بینی کند که روزهایی که شرایط هواشناسی مناسب برای گاوهای شیری فراهم
            می‌شود، چه روزهایی هستند.
            <br />
            استفاده از این مدل هوش مصنوعی می‌تواند به دامداران کمک کند تا به صورت بهینه‌تری مدیریت دام‌های خود را انجام
            دهند. برای مثال، اگر مدل پیش‌بینی کند که در روزی که شرایط هواشناسی بهتری وجود دارد، گاوهای شیری بهترین
            عملکرد را خواهند داشت، دامدار می‌تواند برنامه غذایی گاوهای خود را بر اساس این پیش‌بینی تنظیم کند و به عملکرد
            بهتری دست پیدا کند.
            <br />
            علاوه بر این، این مدل هوش مصنوعی می‌تواند به دامداران کمک کند تا در صورتی که شرایط هواشناسی برای گاوهای شیری
            نامناسب باشد، اقداماتی انجام دهند تا به سلامتی دام‌های خود اهتمام کنند. به عنوان مثال، اگر مدل پیش‌بینی کند
            که در روزی که دمای هوا بسیار بالاست، گاوهای شیری با خطر بیشتری برای دچار حرارت‌زدگی هستند، دامدار می‌تواند
            از تکنیک‌های خنک‌کننده مانند شستشوی مرتب با آب سرد برای گاوهای خود استفاده کند.
            <br />
            در کل، استفاده از یک مدل هوش مصنوعی برای پیش‌بینی روزهای باز در گاوهای شیری می‌تواند به دامداران کمک کند تا
            به صورت بهینه‌تری مدیریت دام‌های خود را انجام دهند و عملکرد بهتری را به دست آورند.
          </Typography>


        </>
      }
      controls={
        <Box sx={{ px: 2 }}>

          <form onSubmit={formik.handleSubmit}>
            <Typography>
              سریال دام
            </Typography>
            <TextField fullWidth name={'serial'} value={formik.values.serial} onChange={formik.handleChange} />
            <br />
            <Button sx={{ mt: 3 }} fullWidth variant={'contained'} color={'secondary'} size={'large'} type={'submit'}>
              پیش‌بینی
            </Button>
          </form>

        </Box>
      }
      title={'پیش‌بینی روزهای باز'}
      chart={
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {
            error ?
              <Typography sx={{ fontSize: 28, fontWeight: 'bold', color: theme.palette.error.main }}>
                {error}
              </Typography>
              :
              <Grid container>
                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} md={7}>
                  <Image src={CowImage} />
                </Grid>
                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} item xs={12} md={5}>
                  {
                    data ?
                      <Stack spacing={1}>
                        <Box>
                          <Typography sx={{ mr: 2 }}>
                            پیش‌بینی مدل برای روز‌های باز:
                          </Typography>
                          <Typography sx={{ fontSize: 36, fontWeight: 'bold' }}>
                            {data ? <CountUp
                              end={data.Prediction}
                              duration={2.75}
                            /> : 'شناسه دام را وارد کنید.'}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography sx={{ mr: 2 }}>
                            نوع گاو:
                          </Typography>
                          <Typography sx={{ fontSize: 36, fontWeight: 'bold' }}>
                            {data ? data.CowKind : 'شناسه دام را وارد کنید.'}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography sx={{ mr: 2 }}>
                            دوره شیرواری:
                          </Typography>
                          <Typography sx={{ fontSize: 36, fontWeight: 'bold' }}>
                            {data ? data.MilkPeriod : 'شناسه دام را وارد کنید.'}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography sx={{ mr: 2 }}>
                            شاخص توده بدنی:
                          </Typography>
                          <Typography sx={{ fontSize: 36, fontWeight: 'bold' }}>
                            {data ? data.BodyScore : 'شناسه دام را وارد کنید.'}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography sx={{ mr: 2 }}>
                            وضعیت گاو:
                          </Typography>
                          <Typography sx={{ fontSize: 36, fontWeight: 'bold' }}>
                            {data ? data.Exist : 'شناسه دام را وارد کنید.'}
                          </Typography>
                        </Box>
                      </Stack>
                      :
                      <Typography sx={{ fontSize: 36, fontWeight: 'bold' }}>
                        شناسه دام را وارد کنید.
                      </Typography>
                  }

                </Grid>
              </Grid>

          }

        </Box>

      }
    />
  );
}
