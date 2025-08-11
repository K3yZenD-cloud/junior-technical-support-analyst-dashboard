import React from 'react';
import { Paper, Typography, Box, IconButton, useTheme } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

const data = [
  { name: 'Direct', value: 55, color: '#4e73df' },
  { name: 'Social', value: 30, color: '#1cc88a' },
  { name: 'Referral', value: 15, color: '#36b9cc' },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" style={{ fontSize: '12px', fontWeight: 'bold' }}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Box sx={{ backgroundColor: 'white', p: 1, boxShadow: 3, borderRadius: 1 }}>
        <Typography variant="body2">{`${payload[0].name}: ${payload[0].value}%`}</Typography>
      </Box>
    );
  }
  return null;
};

const renderColorfulLegendText = (value, entry) => {
  const { color } = entry;
  return <span style={{ color, fontSize: '0.75rem' }}>{value}</span>;
};

const TrafficChart = () => {
  const theme = useTheme();

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
          Traffic Sources
        </Typography>
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Box sx={{ flex: 1, minHeight: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={2}
              innerRadius={50}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" strokeWidth={2} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center"
              formatter={renderColorfulLegendText}
              wrapperStyle={{ paddingTop: '20px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
      <Box display="flex" justifyContent="center" mt={2} flexWrap="wrap" gap={2}>
        {data.map((item, index) => (
          <Box key={index} display="flex" alignItems="center" mr={2}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: item.color,
                mr: 1,
              }}
            />
            <Typography variant="body2" color="text.secondary">
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default TrafficChart;
