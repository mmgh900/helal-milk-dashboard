'use client';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Box, Slider, Stack } from '@mui/material';
import Histogram from '../../app/histogram';
import ChartsLayout from '../../app/chart-layout';
import axios from '../../lib/axios';


export default function MilkProductionHistogram() {
  const [bins, setBins] = useState<number>(10);
  const [milkPeriod, setMilkPeriod] = useState<number>(1);
  const [data, setData] = useState<{ data: number[], bins: number[] }>();

  useEffect(() => {
    axios.get<{
      data: number[],
      bins: number[]
    }>(`/histograms/dry_length`, {
      params: {
        bins,
        milk_period_number: milkPeriod
      }
    }).then(res => {
      setData(res.data);
    });
  }, [bins, milkPeriod]);

  return (
    <ChartsLayout
      description={
        <>

          <Typography>
            نمودار هیستوگرام یکی از ابزارهای مهم در تجزیه و تحلیل داده‌هاست که برای نمایش توزیع فراوانی داده‌ها به‌کار
            می‌رود. در این نمودار، محور افقی نمایانگر بازه‌های مختلف داده‌ها و محور عمودی نمایانگر فراوانی داده‌ها در هر
            بازه است. در نمودار هیستوگرام، با توجه به تعداد داده‌ها در هر بازه، می‌توان به راحتی توزیع فراوانی داده‌ها
            را بررسی کرد.

            با توجه به سوال شما، نمودار هیستوگرام طول خشکی در گاوهای شیری نمایانگر توزیع فراوانی طول خشکی در این نوع از
            گاوها است. طول خشکی به مدت زمانی گفته می‌شود که گاو دوره شیردهی خود را به پایان می‌رساند و تا شروع دوره
            شیردهی بعدی آماده می‌شود. این طول زمان با توجه به هر گاو و شرایط زیستی و تغذیه‌ای متفاوت است و توزیع آن در
            جمعیت گاوهای شیری مختلف ممکن است متفاوت باشد.

            با بررسی نمودار هیستوگرام طول خشکی در گاوهای شیری، می‌توان به راحتی توزیع فراوانی طول خشکی در این گاوها را
            بررسی کرد و به نتایج مهمی دست یافت. برای مثال، با بررسی نمودار هیستوگرام، می‌توان به دست آورد که آیا توزیع
            طول خشکی در گاوهای شیری به صورت نرمال است یا خیر. همچنین، با بررسی نمودار هیستوگرام می‌توان به دست آورد که
            آیا در جمعیت گاوهای شیری مورد بررسی، تمرکز طول خشکی در یک بازه خاص است یا خیر.

            از دیگر کاربردهای نمودار هیستوگرام در بررسی داده‌های گاوهای شیری، می‌توان به بررسی تحولات طول خشکی در طول
            زمان و مقایسه تغییرات آن در جمعیت‌های مختلف اشاره کرد. همچنین، با استفاده از نمودار هیستوگرام می‌توان به دست
            آورد که آیا طول خشکی در گاوهای شیری با وضعیت بدنی و تغذیه‌ای مختلف تفاوت دارد یا خیر. به طور کلی، نمودار
            هیستوگرام یکی از ابزارهای مهم در تحلیل داده‌های گاوهای شیری است که به تحلیل توزیع فراوانی طول خشکی در این
            گاوها کمک می‌کند.

          </Typography>


        </>
      }
      controls={
        <Stack spacing={2} sx={{ px: 2 }}>

          <Box>
            <Typography>
              دقت محور افقی
              ({bins})
            </Typography>
            <Slider

              id='bins-input'
              name='bins'
              value={bins}
              min={1}
              max={100}
              step={1}
              onChange={(event, value) => setBins(value as number)}
              marks={[{ value: 1, label: '1' }, { value: 100, label: '100' }]}
            />
          </Box>
          <Box>
            <Typography>
              شماره شیرواری
              ({milkPeriod})
            </Typography>

            <Slider
              id='bins-input'
              name='bins'
              value={milkPeriod}
              min={1}
              max={10}
              step={1}
              onChange={(event, value) => setMilkPeriod(value as number)}
              marks={[{ value: 1, label: '1' }, { value: 10, label: '10' }]}
            />
          </Box>

        </Stack>
      }
      title={'نمودار توزیع طول دوره خشکی'}
      chart={data && <Histogram data={data} />}


    />
  );
}
