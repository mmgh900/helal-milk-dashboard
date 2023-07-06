'use client';
import React, { ReactNode, useRef, useState } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis, CartesianGrid, ReferenceLine, ReferenceArea } from 'recharts';
import useWindowSize from '../hooks/useWIndowSize';
import { useTheme } from '@mui/material/styles';
import { useQuery } from 'react-query';
import axios from '../theme/axios';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Slider,
  alpha,
  Container
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { ArrowRight } from '@mui/icons-material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default function MilkHistogram() {
  const [width, height] = useWindowSize();
  const theme = useTheme();
  const [bins, setBins] = useState<number>(10);

  // Define a query key and a function to fetch the histogram data
  const queryKey = `histogram-${bins}`;
  const fetchHistogramData = async () => {
    const response = await axios.get(`/histogram?bins=${bins}`);
    return response.data;
  };

  // Use the useQuery hook to fetch the histogram data
  const { isLoading, error, data } = useQuery<any>(queryKey, fetchHistogramData);

  const validationSchema = Yup.object({
    bins: Yup.number().required('Number of bins is required').min(1, 'Number of bins must be greater than 0')
  });

  const formik = useFormik({
    initialValues: {
      bins: bins
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setBins(values.bins);
    }
  });
  const chartContainerRef = useRef<HTMLDivElement>(null);


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error.message)}</div>;

  // Create the histogram data by combining the data and bins arrays
  const histogramData = data.bins.map((bin, index) => {
    return {
      bin: bin,
      'تعداد': data.data[index]
    };
  });


  return (
    <>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <Button sx={{ position: 'absolute', left: 0 }} size={'large'}
                startIcon={<ArrowForwardIosOutlinedIcon sx={{ fontSize: 18 }} />}>
          بازگشت
        </Button>
        <Typography variant={'h5'}>
          نمودار توزیع تولید شیر
        </Typography>
      </Toolbar>
      <Divider sx={{ mb: 4 }} />
      <Grid spacing={2} width={'100%'} container>
        <Grid item xs={4}>
          {/* <Toolbar sx={{ mb: 2 }}>
            <Button size={'large'} startIcon={<ArrowForwardIosOutlinedIcon sx={{ fontSize: 18 }} />}>
              بازگشت
            </Button>
          </Toolbar>*/}
          <Card variant={'outlined'}>
            <Toolbar variant={'dense'}>
              <Typography variant={'h6'}>
                اطلاعات نمودار
              </Typography>
            </Toolbar>

            <Divider />
            <CardContent sx={{ maxHeight: '60vh', overflow: 'auto' }}>
              <Typography>
                نام نمودار
              </Typography>
              <Typography>
                نام نمودار
              </Typography>
            </CardContent>
          </Card>
          <Card variant={'outlined'}>
            <Toolbar variant={'dense'}>
              <Typography variant={'h6'}>
                تنظیمات نمودار
              </Typography>

            </Toolbar>

            <Divider />
            <CardContent sx={{ maxHeight: '60vh', overflow: 'auto' }}>
              <form onSubmit={formik.handleSubmit}>
                <Box dir={'ltr'}>
                  <Slider

                    id='bins-input'
                    name='bins'
                    value={formik.values.bins}
                    min={1}
                    max={100}
                    step={1}
                    onChange={(event, value) => formik.setFieldValue('bins', value)}
                    marks={[{ value: 1, label: '1' }, { value: 100, label: '100' }]}
                  />
                </Box>

                <Button variant='contained' type='submit'>
                  تغییر
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item ref={chartContainerRef} xs={8} sx={{ display: 'flex', justifyContent: 'center' }}>
          <BarChart width={chartContainerRef.current?.clientWidth - 32} height={height * 0.8}
                    style={{ direction: 'ltr' }} data={histogramData}>
            <XAxis tick={{ fontSize: 12 }} dataKey='bin' />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backdropFilter: 'blur(20px)',
                backgroundColor: alpha(theme.palette.background.paper, 0.4),
                borderRadius: '10px',
                borderColor: '#ffffff33',
                aspectRatio: '27/9'
              }}
            />
            <Legend />
            {/*<CartesianGrid strokeDasharray='3 3' />*/}
            <Bar dataKey='تعداد' label={'تعداد'} background fill={theme.palette.secondary.dark} />
            <ReferenceLine y={0} stroke='#666' />
            <ReferenceArea x1='bin1' x2='bin2' y1={0} fill='#888888' fillOpacity={0.2} />
          </BarChart>
        </Grid>
      </Grid>

      <Container sx={{my: 3}} maxWidth={'md'}>
        <Card variant={'outlined'}>
          <Toolbar variant={'dense'}>
            <Typography variant={'h6'}>
              توضیحات
            </Typography>
          </Toolbar>

          <Divider />

          <CardContent >
            <Typography>
              <Typography>نمودار توزیع تولید شیر در یک دامداری، نموداری است که نشان می‌دهد چه تعداد از دام‌های موجود
                در دامداری، چه
                مقدار شیر تولید می‌کنند. به طور کلی، این نمودار به دامداران و مدیران دامداری کمک می‌کند تا درک بهتری
                از
                تولید شیر در دامداری خود پیدا کنند و در نتیجه، تصمیمات بهتری برای بهبود عملکرد دامداری خود
                بگیرند.</Typography>
              <Typography>نمودار توزیع تولید شیر در یک دامداری، می‌تواند در این زمینه موثر باشد:</Typography>
              <ol>
                <li>تشخیص الگوی تولید: با رسم نمودار توزیع، می‌توان الگوی تولید شیر را در دامداری شناسایی کرد. به
                  عنوان
                  مثال، اگر نمودار توزیع به شکل یک منحنی بود، به این معنی است که بیشترین تولید شیر در محدوده‌ای خاص
                  اتفاق
                  می‌افتد و با افزایش تولید، فراوانی آن کاهش می‌یابد. این الگو می‌تواند به دامدار کمک کند تا بفهمد که
                  چگونه می‌تواند تولید شیر را بهینه کند.
                </li>
                <li>تعیین هدف تولید: با توجه به نمودار توزیع، دامدار می‌تواند هدف تولید خود را برای دوره‌های آتی تعیین
                  کند. به عنوان مثال، با مشاهده نمودار توزیع، دامدار می‌تواند بهترین میزان تولید شیر را که به حداکثر
                  سودآوری برای دامداری منجر می‌شود، تعیین کند.
                </li>
                <li>بهبود عملکرد: با تحلیل نمودار توزیع، دامدار می‌تواند به علت کاهش تولید در محدوده‌های خاص دام‌های
                  خود
                  را شناسایی کند و نسبت به رفع این مشکلات اقدام کند. به عنوان مثال، اگر دامدار بفهمد که دام‌هایش در
                  محدوده
                  مشخصی از تولید شیر پایین عمل می‌کنند، می‌تواند برای بهبود عملکرد آن‌ها، اقداماتی مانند تغییر نوع
                  تغذیه،
                  اصلاح شرایط محیطی و غیره را انجام دهد.
                </li>
              </ol>
              <Typography>در کل، نمودار توزیع تولید شیر در یک دامداری می‌تواند در بهبود عملکرد دامداری، افزایش سودآوری
                و بهبود
                شرایط زندگی دام‌های دامداری نقش مهمی ایفا کند.</Typography>
            </Typography>
          </CardContent>
        </Card>
      </Container>



    </>
  );
}