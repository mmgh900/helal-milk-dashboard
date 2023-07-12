import { Card, CardActionArea, Grid } from '@mui/material';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import BubbleChartRoundedIcon from '@mui/icons-material/BubbleChartRounded';
export default function ListItem({title, link}: {title: string, link: string}) {
  return (
    <Grid item xs={12} md={4}>
      <Card variant={'outlined'}>
        <Link href={link}>
          <CardActionArea>
            <Box sx={{ width: '100%', height: 120, display: 'flex', alignItems: 'center', px: 3 }}>
              <BubbleChartRoundedIcon/>
              <Typography variant={'h6'} sx={{ml: 2}}>
                {title}
              </Typography>
            </Box>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>

  )
}