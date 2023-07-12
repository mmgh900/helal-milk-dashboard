'use client';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Box, Slider } from '@mui/material';
import Histogram from '../../app/histogram';
import ChartsLayout from '../../app/chart-layout';
import axios from '../../lib/axios';


export default function MilkProductionHistogram() {
  const [bins, setBins] = useState<number>(10);
  const [data, setData] = useState<{ data: number[], bins: number[] }>();

  useEffect(() => {
    axios.get<{ data: number[], bins: number[] }>(`/histograms/time-to-first-insemination?bins=${bins}`).then(res => {
      setData(res.data);
    });
  }, [bins]);

  return (
    <ChartsLayout
      description={
        <>

          <Typography>هیستوگرام "توزیع سنی بر اساس روزها در اولین تلقیح" یک نمای کلی از توزیع سنی گاوها بر حسب روز در
            زمان اولین تلقیح آنها ارائه می دهد. این به دامداران اجازه می دهد تا زمان فرآیند تلقیح اولیه و ارتباط آن با
            سن گاوها را درک کنند. محور x هیستوگرام سن را بر حسب روز نشان می دهد، در حالی که محور y تعداد یا تعداد گاوها
            در هر گروه سنی را نشان می دهد. این هیستوگرام دامداران را قادر می سازد تا محدوده و توزیع سنی را که گاوهایشان
            اولین تلقیح خود را دریافت می کنند، تجسم کنند.


            استفاده برای دامپرور: به عنوان یک دامدار، این هیستوگرام برای نظارت بر روش ها و پروتکل های واکسیناسیون در گله
            شما ضروری است. این به شما کمک می کند تا زمان اولین تلقیح را ارزیابی کنید و هر گونه الگو یا روند توزیع سنی را
            شناسایی کنید. با تجزیه و تحلیل این هیستوگرام، می توانید اطمینان حاصل کنید که اولین تلقیح در سن مناسب انجام
            می شود تا اثربخشی آن به حداکثر برسد. علاوه بر این، به شما امکان می دهد هر گونه انحراف یا خوشه در توزیع سنی
            را شناسایی کنید که می تواند نشان دهنده مشکلات بالقوه یا ناکارآمدی در فرآیند واکسیناسیون باشد. با استفاده از
            این اطلاعات، می توانید تصمیمات آگاهانه ای در مورد برنامه واکسیناسیون، تضمین سلامت مطلوب و پیشگیری از بیماری
            برای گاوهای شیری خود بگیرید.
          </Typography>


        </>
      }
      controls={
        <Box sx={{ px: 2 }}>

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
      }
      title={'توزیع سن برحسب روز در اولین تلقیح'}
      chart={data && <Histogram data={data} />}


    />
  );
}
