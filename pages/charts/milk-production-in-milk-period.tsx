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
    }>(`/histograms/milk-production-in-milk-period`, {
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
            هیستوگرام "توزیع تولید شیر در طول دوره شیردهی" یک نمایش بصری از توزیع سطوح تولید شیر در بین گاوهای شیری در
            طول دوره شیردهی آنها ارائه می دهد. این به دامداران اجازه می دهد تا دامنه و فرکانس سطوح تولید شیر را درک کنند
            و بینشی در مورد بهره وری کلی گله خود ارائه دهند. محور x هیستوگرام سطوح تولید شیر را نشان می‌دهد، در حالی که
            محور y نشان‌دهنده فراوانی یا تعداد گاوها در هر محدوده تولید است. این هیستوگرام دامداران را قادر می سازد تا
            تنوع و توزیع تولید شیر را در طول چرخه شیردهی ارزیابی کنند.

            استفاده برای دامدار: به عنوان یک دامدار، این هیستوگرام ابزار ارزشمندی برای نظارت و مدیریت تولید شیر گاوهای
            شما است. با تجزیه و تحلیل توزیع تولید شیر در طول دوره شیردهی، می توانید میانگین و دامنه سطوح تولید در گله
            خود را شناسایی کنید. این اطلاعات می تواند به شما در شناسایی گاوهایی با عملکرد بالا با تولید شیر استثنایی و
            همچنین شناسایی گاوهایی که ممکن است برای بهبود تولید شیر خود نیاز به توجه یا حمایت بیشتری داشته باشند، کمک
            کند. به‌علاوه، با مشاهده الگوی توزیع، می‌توانید هر گونه پرت یا روند غیرعادی را که ممکن است نیاز به بررسی
            داشته باشد، مانند افت یا افزایش ناگهانی تولید شیر، شناسایی کنید. با داشتن این دانش، می توانید تصمیمات
            آگاهانه ای در مورد اصلاح نژاد، تغذیه و شیوه های مدیریتی برای بهینه سازی تولید شیر، افزایش سود دهی کلی مزرعه
            لبنی خود و اطمینان از رفاه گاوهای خود بگیرید.

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
      title={'توزیع تولید شیر در دوره شیرواری'}
      chart={data && <Histogram data={data} />}


    />
  );
}
