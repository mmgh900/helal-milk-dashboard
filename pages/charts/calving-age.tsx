'use client';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Box, Slider, Stack, TextField } from '@mui/material';
import Histogram from '../../app/histogram';
import ChartsLayout from '../../app/chart-layout';
import axios from '../../lib/axios';


export default function MilkProductionHistogram() {
  const [bins, setBins] = useState<number>(10);
  const [calvingNumber, setCalvingNumber] = useState<number>(0);
  const [data, setData] = useState<{ data: number[], bins: number[] }>();

  useEffect(() => {
    axios.get<{
      data: number[],
      bins: number[]
    }>(`/histograms/calving_age`, {
      params: {
        bins,
        'calving_number': calvingNumber
      }
    }).then(res => {
      setData(res.data);
    });
  }, [bins, calvingNumber]);

  return (
    <ChartsLayout
      description={
        <Typography>
          هیستوگرام نوعی نمودار است که به ما کمک می‌کند تا توزیع یا گسترش یک مجموعه خاص از داده‌ها را درک کنیم. در این
          مورد، هیستوگرام داده‌های سن در بارداری را مجسم می‌کند.
          <br />
          <br />
          محور افقی، که به عنوان محور x نیز شناخته می‌شود، محدوده‌های سن در بارداری را نشان می‌دهد. این محدوده‌ها
          می‌توانند بر اساس سال‌ها یا دوره‌های زمانی مشخصی تعریف شوند. هر محدوده یا دسته با یک نوار در نمودار نشان داده
          می‌شود.
          <br />
          <br />
          محور عمودی، که به عنوان محور y نیز شناخته می‌شود، نشان دهنده تعداد بارداری‌ها در هر محدوده سنی است. ارتفاع هر
          میله در نمودار نشان دهنده تعداد بارداری‌های مشاهده شده در آن محدوده است.
          <br />
          <br />
          با توجه به هیستوگرام، می‌توانیم برخی بینش‌ها را کسب کنیم. برای مثال:
          <br />
          <br />
          - می‌توانیم محدوده‌های سنی رایج در بارداری را مشاهده کنیم. ارتفاع نوار بلندترین محدوده نشان دهنده تعداد بیشتری
          از بارداری‌ها در آن محدوده است و نماینده سن معمول بارداری است.
          <br />
          <br />
          - می‌توانیم الگوها یا ناهنجاری‌هایی در داده‌ها شناسایی کنیم. اگر نوارهایی با ارتفاع قابل توجهی از بقیه متمایز
          باشند، این نشانگر می‌تواند بارداری‌های استثنایی باشند که نیاز به بررسی دارند.
          <br />
          <br />
          - نمودار هیستوگرام به ما نشان می‌دهد که چگونه داده‌ها در محدوده‌های مختلف پخش می‌شوند و تنوع سن در بارداری را
          نمایش می‌دهد.
          <br />
          <br />
          به طور کلی، این نمودار هیستوگرام به ما کمک می‌کند تا توزیع سن در بارداری را به صورت ساده و قابل فهم تجسم کنیم
          و بر مبنای آن تصمیمات بهتری درباره موارد مرتبط با بارداری بگیریم.
        </Typography>

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
              شماره زایمان
              ({calvingNumber + 1})
            </Typography>

            <Slider
              id='bins-input'
              name='bins'
              value={calvingNumber}
              min={0}
              max={9}
              step={1}
              onChange={(event, value) => setCalvingNumber(value as number)}
              marks={[{ value: 0, label: '1' }, { value: 9, label: '10' }]}
            />
          </Box>


        </Stack>
      }
      title={'نمودار توزیع سن در بارداری'}
      chart={data && <Histogram data={data} />}


    />
  );
}
