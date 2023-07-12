'use client';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Box, Button, Checkbox, Grid, Stack, TextField } from '@mui/material';
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
      serial: '',
      date: '',
      natural_breeding: false
    },
    onSubmit: (values, formikHelpers) => {
      setData('...');
      axios.get<{ data: number }>(`/models/insemination-result`, {params: formik.values}).then(res => {
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
            این مدل هوش مصنوعی که به پیش‌بینی نتیجه لقاح گاوهای شیری می‌پردازد، می‌تواند به دامداران کمک کند تا تصمیمات
            بهتری در مورد مدیریت دام‌های خود بگیرند. این مدل با استفاده از داده‌هایی مانند تاریخ لقاح، طبیعی بودن لقاح
            یا نه و سریال گاو، پیش‌بینی می‌کند که گاوهایی که لقاح شده‌اند، در چه زمانی ممکن است باردار شوند و موقعیت
            آمیز بودن لقاح آن‌ها چقدر احتمال دارد.
            <br />
            <br />
            استفاده از این مدل هوش مصنوعی می‌تواند به دامداران کمک کند تا به صورت بهینه‌تری مدیریت دام‌های خود را انجام
            دهند. برای مثال، اگر مدل پیش‌بینی کند که گاوی که لقاح شده است، در زمان خاصی ممکن است باردار شود، دامدار
            می‌تواند برنامه غذایی و مراقبتی گاو را بر اساس این پیش‌بینی تنظیم کند تا به عملکرد بهتری دست پیدا کند.
            <br />
            <br />
            علاوه بر این، این مدل هوش مصنوعی می‌تواند به دامداران کمک کند تا در صورتی که لقاح غیرطبیعی باشد یا مشکلی در
            فرآیند لقاح رخ داده باشد، اقداماتی انجام دهند تا به سلامتی دام‌های خود اهتمام کنند. به عنوان مثال، اگر مدل
            پیش‌بینی کند که لقاح غیرطبیعی برای یکی از گاوهای شیری انجام شده است، دامدار می‌تواند به سرعت به مشاوره
            دامپزشک مراجعه کند و اقدامات لازم را انجام دهد.
            <br />
            <br />
            در کل استفاده از یک مدل هوش مصنوعی برای پیش‌بینی نتیجه لقاح گاوهای شیری می‌تواند به دامداران کمک کند تا به
            صورت بهینه‌تری مدیریت دام‌های خود را انجام دهند و عملکرد بهتری را به دست آورند.
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
            <br />
            <Typography>
              تاریخ لقاح
            </Typography>
            <TextField fullWidth name={'date'} value={formik.values.date} onChange={formik.handleChange} />
            <br />
            <br />
            <Typography>
              لقاح طبیعی
            </Typography>
            <Checkbox name={'natural_breeding'} value={formik.values.natural_breeding} checked={formik.values.natural_breeding} onChange={formik.handleChange} size={'medium'} />
            <Button sx={{ mt: 3 }} fullWidth variant={'contained'} color={'secondary'} size={'large'} type={'submit'}>
              پیش‌بینی
            </Button>
          </form>

        </Box>
      }
      title={'پیش‌بینی نتیجه لقاح'}
      chart={
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {
            error ?
              <Typography sx={{ fontSize: 28, fontWeight: 'bold', color: theme.palette.error.main }}>
                {error}
              </Typography>
              :
              <Grid container spacing={2}>
                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} md={7}>
                  <Image src={CowImage} />
                </Grid>
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={12} md={5}>
                  {
                    data ?
                      <Stack spacing={1}>
                        <Box>
                          <Typography sx={{ mr: 2 }}>
                            پیش‌بینی مدل برای احتمال موفقیت آمیز بودن:
                          </Typography>
                          <Typography sx={{
                            fontSize: 36,
                            fontWeight: 'bold',
                            color: data.Prediction < 0.5 ? theme.palette.error.main : theme.palette.success.main
                          }}>
                            {data ? <CountUp
                              end={data.Prediction * 100}
                              duration={2.75}
                              decimals={2}
                            /> : 'شناسه دام را وارد کنید.'}
                            درصد
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
                            لقاح‌های قبلی:
                          </Typography>
                          <Typography sx={{ fontSize: 36, fontWeight: 'bold' }}>
                            {data ? data.TimeBred : 'شناسه دام را وارد کنید.'}
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
