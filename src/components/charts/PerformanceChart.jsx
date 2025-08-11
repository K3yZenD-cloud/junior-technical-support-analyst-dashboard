import React, { useRef, useEffect } from 'react';
import { Paper, Typography, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
} from 'recharts';

const data = [
  { name: 'Jan', sessions: 4000, users: 2400 },
  { name: 'Feb', sessions: 3000, users: 1398 },
  { name: 'Mar', sessions: 2000, users: 9800 },
  { name: 'Apr', sessions: 2780, users: 3908 },
  { name: 'May', sessions: 1890, users: 4800 },
  { name: 'Jun', sessions: 2390, users: 3800 },
  { name: 'Jul', sessions: 3490, users: 4300 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Paper sx={{ p: 2, boxShadow: 3 }}>
        <Typography variant="body2" color="text.secondary">{label}</Typography>
        <Typography variant="body2" color="primary">
          Sessions: {payload[0].value.toLocaleString()}
        </Typography>
        <Typography variant="body2" color="secondary">
          Users: {payload[1].value.toLocaleString()}
        </Typography>
      </Paper>
    );
  }
  return null;
};

const PerformanceChart = () => {
  return (
    <Paper
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight={600}>
          Performance Overview
        </Typography>
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Box sx={{ flex: 1, minHeight: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4e73df" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#4e73df" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1cc88a" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#1cc88a" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6c757d', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6c757d', fontSize: 12 }}
              tickFormatter={(value) => {
                if (value >= 1000) {
                  return `$${value / 1000}k`;
                }
                return `$${value}`;
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top" 
              height={36}
              formatter={(value) => (
                <span style={{ color: '#6c757d', fontSize: '0.8rem' }}>{value}</span>
              )}
            />
            <Area
              type="monotone"
              dataKey="sessions"
              stroke="#4e73df"
              fillOpacity={1}
              fill="url(#colorSessions)"
              strokeWidth={2}
              dot={{
                stroke: '#4e73df',
                strokeWidth: 2,
                fill: '#fff',
                r: 4,
                strokeDasharray: '',
              }}
              activeDot={{
                stroke: '#4e73df',
                strokeWidth: 2,
                fill: '#fff',
                r: 6,
              }}
            />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#1cc88a"
              fillOpacity={1}
              fill="url(#colorUsers)"
              strokeWidth={2}
              dot={{
                stroke: '#1cc88a',
                strokeWidth: 2,
                fill: '#fff',
                r: 4,
                strokeDasharray: '',
              }}
              activeDot={{
                stroke: '#1cc88a',
                strokeWidth: 2,
                fill: '#fff',
                r: 6,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default PerformanceChart;
