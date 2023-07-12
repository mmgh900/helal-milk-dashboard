import Link from 'next/link';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import React from 'react';

export default function BackButton ({link} : {link: string}) {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Link href={link}>
      <Button sx={{ position: 'absolute', left: 0 }} size={'large'}
              startIcon={<ArrowForwardIosOutlinedIcon sx={{ fontSize: 18 }} />}>
        {isDesktop ? 'بازگشت' : ''}
      </Button>
    </Link>
  )
}