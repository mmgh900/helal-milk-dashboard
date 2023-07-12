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
    axios.get<{data: number[], bins: number[]}>(`/histograms/life_time?bins=${bins}`).then(res => {
      setData(res.data);
    });
  }, [bins]);

  return (
    <ChartsLayout
      description={
        <>

          <Typography>     هیستوگرام "توزیع عمر مفید" یک نمایش بصری از توزیع طول عمر مفید گاوهای شیری ارائه می دهد. این به کشاورزان
            لبنیات بینشی در مورد طول عمر گاوهایشان می دهد و مدت زمان بین تولد آنها و تاریخی را که دیگر تولید نمی کنند
            اندازه گیری می کند. محور x هیستوگرام طول عمر مفید را بر حسب روز یا سال نشان می‌دهد، در حالی که محور y
            نشان‌دهنده فراوانی یا تعداد گاوهایی است که در هر محدوده طول عمر قرار دارند. این هیستوگرام به دامداران اجازه
            می دهد تا دامنه و فرکانس طول عمر مفید گاوهای خود را درک کنند و اطلاعات ارزشمندی را برای مدیریت گله و برنامه
            ریزی آینده ارائه دهند.
            <br />
            <br />
            استفاده برای دامدار: به عنوان یک دامدار، این هیستوگرام برای ارزیابی طول عمر کلی و طول عمر تولیدی گاوهای شما
            ضروری است. با تجزیه و تحلیل توزیع عمر مفید، می توانید بینشی در مورد میانگین طول عمر گله خود به دست آورید و
            هر گونه تغییرات یا موارد پرت را شناسایی کنید. این اطلاعات می تواند به شما در تصمیم گیری آگاهانه در مورد
            استراتژی های پرورش، سیاست های حذف و برنامه ریزی جایگزین کمک کند. به عنوان مثال، اگر تعداد قابل توجهی از
            گاوها را با طول عمر مفید کمتر مشاهده کنید، ممکن است نشان دهنده مشکلات بالقوه سلامتی یا اقدامات مدیریتی
            نامطلوب باشد که باید به آنها توجه شود. از سوی دیگر، اگر مجموعه‌ای از گاوها با طول عمر مفید طولانی‌تری دارید،
            می‌توانید عوامل مؤثر در طول عمر آنها را بررسی کنید و به طور بالقوه آن شیوه‌ها را در گله خود تکرار کنید. با
            بهینه سازی طول عمر مفید گاوهای خود، می توانید بهره وری آنها را به حداکثر برسانید، هزینه های جایگزینی را کاهش
            دهید و از پایداری طولانی مدت فعالیت لبنیات خود اطمینان حاصل کنید.</Typography>

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
      title={'توزیع طول عمر مفید'}
      chart={data && <Histogram data={data} />}


    />
  );
}
