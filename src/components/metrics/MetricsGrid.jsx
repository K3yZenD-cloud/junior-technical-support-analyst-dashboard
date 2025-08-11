import React from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  Box, 
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components matching the reference image design
const StyledMetricCard = styled(Paper)(({ theme }) => ({
  padding: '16px',
  borderRadius: '8px',
  height: '140px !important',
  width: '100% !important',
  minHeight: '140px !important',
  maxHeight: '140px !important',
  minWidth: '200px !important',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e3e6f0',
  position: 'relative',
  boxSizing: 'border-box !important',
  flex: '1 1 auto',
  '&:hover': {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
}));

const MetricTitle = styled(Typography)(({ theme }) => ({
  color: '#858796',
  fontWeight: 700,
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: theme.spacing(0.5),
}));

const MetricValue = styled(Typography)(({ theme }) => ({
  color: '#5a5c69',
  fontWeight: 700,
  fontSize: '1.25rem',
  lineHeight: 1.2,
  marginBottom: theme.spacing(0.5),
}));

const ChangeValue = styled(Typography)(({ isPositive }) => ({
  color: isPositive ? '#1cc88a' : '#e74a3b',
  fontWeight: 700,
  fontSize: '0.7rem',
  display: 'flex',
  alignItems: 'center',
  '&::before': {
    content: isPositive ? '"▲"' : '"▼"',
    marginRight: '4px',
    fontSize: '0.6rem',
  },
}));

// Simple sparkline SVG component with different patterns
const SparklineChart = ({ color = '#6f42c1', pattern = 'default' }) => {
  const patterns = {
    // Spend - Upward trend with more variation and vertices
    spend: "0,35 8,32 16,28 24,30 32,25 40,22 48,20 56,18 64,15 72,17 80,12 88,10 96,8 104,6 112,4 120,3",
    // CPM - Fluctuating with many peaks and valleys
    cpm: "0,30 6,25 12,32 18,28 24,20 30,15 36,22 42,18 48,12 54,16 60,8 66,14 72,6 78,10 84,4 90,8 96,5 102,7 108,3 114,6 120,2",
    // CTR - Steady climb with small fluctuations
    ctr: "0,32 7,30 14,28 21,26 28,24 35,22 42,20 49,18 56,16 63,14 70,12 77,10 84,8 91,6 98,5 105,4 112,3 120,2",
    // CPC - Declining with volatility (negative trend)
    cpc: "0,15 6,18 12,16 18,22 24,20 30,25 36,23 42,28 48,26 54,32 60,30 66,35 72,33 78,37 84,35 90,38 96,36 102,39 108,37 114,40 120,38",
    // Video Views - Sharp growth with plateaus and dips
    videoViews: "0,35 5,33 10,30 15,32 20,28 25,25 30,22 35,15 40,12 45,8 50,6 55,5 60,4 65,6 70,3 75,2 80,4 85,3 90,2 95,3 100,1 105,2 110,1 115,2 120,1",
    // Impressions - Consistent growth with minor variations
    impressions: "0,33 6,31 12,30 18,28 24,26 30,24 36,22 42,20 48,18 54,16 60,14 66,12 72,10 78,8 84,7 90,6 96,5 102,4 108,3 114,2 120,1",
    // Conversions - Moderate upward with fluctuations
    conversions: "0,30 5,28 10,26 15,24 20,22 25,20 30,18 35,16 40,14 45,12 50,10 55,8 60,9 65,7 70,6 75,8 80,5 85,7 90,4 95,6 100,3 105,5 110,2 115,4 120,1",
    // Conversion Rate - Gradual decline with small recoveries
    conversionRate: "0,25 5,26 10,27 15,28 20,29 25,30 30,31 35,32 40,33 45,34 50,35 55,34 60,36 65,35 70,37 75,36 80,38 85,37 90,39 95,38 100,40 105,39 110,40 115,39 120,38"
  };

  return (
    <Box sx={{ position: 'absolute', bottom: 8, left: 16, right: 16, height: 40 }}>
      <svg width="100%" height="40" viewBox="0 0 120 40" preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          points={patterns[pattern] || patterns.spend}
        />
      </svg>
    </Box>
  );
};

// Metric Card Component matching reference design
const MetricCard = ({ title, value, change, isPositive, pattern }) => {
  // All metric charts use purple color to match reference design
  const getColorByPattern = (pattern) => {
    // All sparkline charts in metric cards are purple as per user requirement
    return '#6f42c1'; // Purple for all charts
  };

  return (
    <StyledMetricCard>
      <MetricTitle>{title}</MetricTitle>
      <MetricValue>{value}</MetricValue>
      <ChangeValue isPositive={isPositive}>
        {change}
      </ChangeValue>
      <SparklineChart 
        color={getColorByPattern(pattern)} 
        pattern={pattern}
      />
    </StyledMetricCard>
  );
};

// Metrics Data - Exact values from reference image with unique patterns
const metrics = [
  {
    title: 'Spend',
    value: '$36,00 M',
    change: '$409,79 mil',
    isPositive: true,
    pattern: 'spend',
  },
  {
    title: 'CPM',
    value: '$405 mil',
    change: '$1,28 mil',
    isPositive: true,
    pattern: 'cpm',
  },
  {
    title: 'CTR',
    value: '10,5 %',
    change: '0,08 %',
    isPositive: true,
    pattern: 'ctr',
  },
  {
    title: 'CPC',
    value: '$4 mil',
    change: '$-18,34',
    isPositive: false,
    pattern: 'cpc',
  },
  {
    title: 'Video Views',
    value: '93 mil',
    change: '993,0',
    isPositive: true,
    pattern: 'videoViews',
  },
  {
    title: 'Impressions',
    value: '89,0 mil',
    change: '937,0',
    isPositive: true,
    pattern: 'impressions',
  },
  {
    title: 'Conversions',
    value: '791',
    change: '36,0',
    isPositive: true,
    pattern: 'conversions',
  },
  {
    title: 'Conversion Rate',
    value: '9,8 %',
    change: '0,27 %',
    isPositive: true,
    pattern: 'conversionRate',
  },
];

const MetricsGrid = () => {
  // Split metrics into two rows: first 4 and last 4
  const topRowMetrics = metrics.slice(0, 4);
  const bottomRowMetrics = metrics.slice(4, 8);

  return (
    <Box sx={{ mb: 3, width: '100%' }}>
      {/* Top Row - 4 cards */}
      <Box sx={{ 
        display: 'flex', 
        gap: 2, 
        mb: 2,
        width: '100%',
        '& > *': {
          flex: '1 1 25%',
          minWidth: 0,
          maxWidth: '25%'
        }
      }}>
        {topRowMetrics.map((metric, index) => (
          <Box key={index} sx={{ flex: '1 1 25%', minWidth: 0 }}>
            <MetricCard 
              title={metric.title}
              value={metric.value}
              change={metric.change}
              isPositive={metric.isPositive}
              pattern={metric.pattern}
            />
          </Box>
        ))}
      </Box>
      
      {/* Bottom Row - 4 cards */}
      <Box sx={{ 
        display: 'flex', 
        gap: 2,
        width: '100%',
        '& > *': {
          flex: '1 1 25%',
          minWidth: 0,
          maxWidth: '25%'
        }
      }}>
        {bottomRowMetrics.map((metric, index) => (
          <Box key={index + 4} sx={{ flex: '1 1 25%', minWidth: 0 }}>
            <MetricCard 
              title={metric.title}
              value={metric.value}
              change={metric.change}
              isPositive={metric.isPositive}
              pattern={metric.pattern}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MetricsGrid;
