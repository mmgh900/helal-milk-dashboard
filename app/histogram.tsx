'use client';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ReferenceArea, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { alpha, useMediaQuery } from '@mui/material';
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight
} from '@react-hook/window-size';

export default function Histogram({ data }: { data: { data: number[], bins: number[] } }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const onlyWidth = useWindowWidth();
  return (
    <Box  width={'100%'}>
      <BarChart width={isDesktop ? (Math.min(theme.breakpoints.values.xl, onlyWidth) * 0.7) - 60 : onlyWidth - 16}
                height={500}
                data={data?.data.map((value, index) => {
                  return {
                    bin: 'بازه ' + data.bins[index] + " تا " + data.bins[index + 1],
                    'تعداد در بازه': value
                  };
                })}>
        <XAxis tick={{ fontSize: 12, fontFamily: 'Pinar' }} dataKey='bin' angle={45} textAnchor="end"  />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip
          contentStyle={{
            backdropFilter: 'blur(20px)',
            backgroundColor: alpha(theme.palette.background.paper, 0.4),
            borderRadius: '10px',
            borderColor: '#ffffff33',
            aspectRatio: '27/9',
            fontFamily: 'Pinar'
          }}
        />

        <Legend  />
        <CartesianGrid strokeDasharray='3 3' />
        <Bar label={'تعداد'} dataKey='تعداد در بازه' fill={theme.palette.primary.main} />
        <ReferenceLine  y={0} stroke='#666' />
        <ReferenceArea x1='bin1' x2='bin2' y1={0} fill='#888888' fillOpacity={0.2} />
      </BarChart>
    </Box>
  )
    ;
}