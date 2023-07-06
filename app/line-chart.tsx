'use client';
// LinePlot.tsx

import React, { useState } from 'react';
import { Select, MenuItem, Grid, FormControl, InputLabel, Button, Stack, Chip } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import useWindowSize from '../hooks/useWIndowSize';


type PlotTypes = 'line' | 'bar' | 'area' | 'pie';

interface PlotData {
  name: string | number;

  [key: string]: any;
}

interface LinePlotProps {
  data: Array<PlotData>;
}

function LinePlot({ data }: LinePlotProps) {
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState<Array<string>>([]);
  const [type, setType] = useState<PlotTypes>('area');
  const [windowWidth] = useWindowSize();

  const handleChange = (event: React.ChangeEvent<string>, axis: 'x' | 'y') => {
    const value = event.target.value as string;
    if (axis === 'x') {
      setXAxis(value);
    } else if (axis === 'y') {
      setYAxis([...yAxis, value]);
    }
  };

  const handleDelete = (index: number) => {
    const newAxes = [...yAxis];
    newAxes.splice(index, 1);
    setYAxis(newAxes);
  };

  const filteredData = data.filter((datum: any) => datum[xAxis] && yAxis.every((key) => datum[key]));

  const renderChart = () => {
    const chartProps = {
      width: (windowWidth) - 16,
      height: 400,
      data: filteredData
    };

    switch (type) {
      case 'line':
        return (
          <LineChart {...chartProps}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey={xAxis} />
            <YAxis />
            <Tooltip />
            <Legend />
            {yAxis.map((key, index) => (
              <Line key={key} type='monotone' dataKey={key}
                    stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            ))}
          </LineChart>
        );
      case 'bar':
        return (
          <BarChart {...chartProps}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey={xAxis} />
            <YAxis />
            <Tooltip />
            <Legend />
            {yAxis.map((key, index) => (
              <Bar key={key} dataKey={key} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            ))}
          </BarChart>
        );
      case 'area':
        return (
          <AreaChart {...chartProps}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey={xAxis} />
            <YAxis />
            <Tooltip />
            <Legend />
            {yAxis.map((key, index) => (
              <Area key={key} type='monotone' dataKey={key}
                    stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                    fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            ))}
          </AreaChart>
        );
      case 'pie':
        return (
          <PieChart {...chartProps}>
            <Pie
              isAnimationActive={false}
              data={filteredData}
              cx='50%'
              cy='50%'
              outerRadius={80}
              label
            >
              {filteredData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      default:
        throw new Error(`Invalid plot type: ${type}`);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel id='x-axis-select-label'>X Axis</InputLabel>
          <Select
            labelId='x-axis-select-label'
            id='x-axis-select'
            value={xAxis}
            label='XAxis'
            onChange={(event) => handleChange(event, 'x')}
          >
            {Object.keys(data[0] || {}).map((column) => (
              <MenuItem key={column} value={column}>
                {column}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel id='y-axis-select-label'>Y Axis</InputLabel>
          <Select
            labelId='y-axis-select-label'
            id='y-axis-select'
            value=''
            label='Y Axis'
            onChange={(event) => handleChange(event, 'y')}
          >
            {Object.keys(data[0] || {}).map((column) => (
              <MenuItem key={column} value={column}>
                {column}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel id='type-select-label'>Chart Type</InputLabel>
          <Select
            labelId='type-select-label'
            id='type-select'
            value={type}
            label='Chart Type'
            onChange={(event) => setType(event.target.value as PlotTypes)}
          >
            <MenuItem value='line'>Line</MenuItem>
            <MenuItem value='bar'>Bar</MenuItem>
            <MenuItem value='area'>Area</MenuItem>
            <MenuItem value='pie'>Pie</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={1} direction='row'>
          {yAxis.map((key, index) => (
            <Chip key={index} label={key} onDelete={() => handleDelete(index)} />
          ))}
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Button variant='outlined' onClick={() => setYAxis([])}>Clear Y Axis</Button>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id='y-axis-select-label'>Add Y Axis Features</InputLabel>
          <Select
            labelId='y-axis-select-label'
            id='y-axis-select'
            value=''
            label='Add Y Axis Features'
            onChange={(event) => handleChange(event, 'y')}
          >
            {Object.keys(data[0] || {}).map((column) => (
              <MenuItem key={column} value={column} disabled={yAxis.includes(column)}>
                {column}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        {renderChart()}
      </Grid>
    </Grid>
  );
}

export default LinePlot;