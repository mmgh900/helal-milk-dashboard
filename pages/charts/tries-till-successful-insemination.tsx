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
    axios.get<{
      data: number[],
      bins: number[]
    }>(`/histograms/tries-till-successful-insemination?bins=${bins}`).then(res => {
      setData(res.data);
    });
  }, [bins]);

  return (
    <ChartsLayout
      description={
        <>

          <Typography>هیستوگرام "تلقیح موفقیت آمیز" توزیع تعداد تلاش های تلقیح مورد نیاز قبل از دستیابی به تلقیح موفق
            برای گاوهای شیری را نشان می دهد. این بینشی در مورد میزان موفقیت اصلاح نژاد و اثربخشی فرآیند تلقیح ارائه می
            دهد. محور x هیستوگرام تعداد تلاش های تلقیح را نشان می دهد، در حالی که محور y تعداد دفعات یا تعداد گاوها در
            هر تعداد تلاش را نشان می دهد. این هیستوگرام به دامداران اجازه می دهد تا میانگین تعداد تلاش های تلقیح مورد
            نیاز برای بارداری موفق را درک کنند.

            استفاده برای دامپرور: به عنوان یک دامدار، این هیستوگرام برای ارزیابی کارایی برنامه پرورش شما بسیار مهم است.
            این به شما کمک می‌کند اثربخشی تکنیک‌های لقاح را کنترل کرده و چالش‌های بالقوه در دستیابی به بارداری‌های موفق
            را شناسایی کنید. با تجزیه و تحلیل توزیع تلاش‌ها تا تلقیح موفق، می‌توانید موارد یا الگوهایی را که ممکن است
            نشان‌دهنده مسائلی مانند باروری ضعیف، زمان‌بندی نامناسب تلقیح یا نیاز به شیوه‌های بهتر مدیریت گله باشد،
            شناسایی کنید. با استفاده از این اطلاعات، می توانید تصمیمات آگاهانه ای برای بهبود فرآیند پرورش، کاهش هزینه
            های مرتبط با تلقیح ناموفق و افزایش کارایی کلی تولید مثل در گله شیری خود بگیرید.
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
      title={'توزیع تعداد تلقیح‌ها تا تلقیح موفق'}
      chart={data && <Histogram data={data} />}


    />
  );
}
