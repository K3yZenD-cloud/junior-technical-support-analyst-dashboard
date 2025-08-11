import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box, useTheme, IconButton, Tooltip, Menu, MenuItem, FormControlLabel, Radio, RadioGroup, Divider, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { KeyboardArrowUp, KeyboardArrowDown, FilterList as FilterListIcon, MoreVert, Timeline, Refresh, FileDownload } from '@mui/icons-material';
import { Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  ChartTooltip,
  Legend,
  Filler
);

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.2)',
  },
}));

const ChartHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

const ChartTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  fontSize: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
}));

const ChartLegend = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(3),
  justifyContent: 'center',
  '& > div': {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      display: 'inline-block',
      width: '12px',
      height: '12px',
      borderRadius: '2px',
      marginRight: theme.spacing(1),
    },
  },
}));

// Chart options
const getLineChartOptions = (theme) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: theme.palette.background.paper,
      titleColor: theme.palette.text.primary,
      bodyColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      padding: 12,
      boxShadow: theme.shadows[3],
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            if (context.parsed.y === 0) {
              label += '0';
            } else {
              label += context.parsed.y + ' M';
            }
          }
          return label;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        color: theme.palette.text.secondary,
        maxTicksLimit: 12,
        autoSkip: false,
      },
    },
    y: {
      min: 0,
      max: 15,
      grid: {
        color: theme.palette.divider,
        drawBorder: false,
      },
      ticks: {
        color: theme.palette.text.secondary,
        stepSize: 2.5,
        callback: function(value) {
          if (value === 0) return '0';
          return value + ' M';
        },
      },
    },
  },
  elements: {
    point: {
      radius: 3,
      hoverRadius: 5,
      hoverBorderWidth: 2,
    },
    line: {
      tension: 0.4,
      borderWidth: 2,
    },
  },
});

const getDoughnutChartOptions = (theme) => ({
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: theme.palette.background.paper,
      titleColor: theme.palette.text.primary,
      bodyColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      padding: 12,
      boxShadow: theme.shadows[3],
      callbacks: {
        label: function(context) {
          const label = context.label || '';
          const value = context.raw || 0;
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = Math.round((value / total) * 100);
          return `${label}: ${percentage}% (${value})`;
        },
      },
    },
  },
});

const ChartContainer = ({ title, type, data, height = 300, legend = true, onDataSort, optionalMetrics = [], metricDataMap = {}, metricOptionsMap = {} }) => {
  const theme = useTheme();
  const [sortedData, setSortedData] = useState(data);
  const [metricsAnchorEl, setMetricsAnchorEl] = useState(null);
  const [moreMenuAnchorEl, setMoreMenuAnchorEl] = useState(null);
  const [exportMenuAnchorEl, setExportMenuAnchorEl] = useState(null);
  const [isWeeklyView, setIsWeeklyView] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(() => {
    // Initialize with the first metric that has defaultVisible true, or the first metric
    const defaultMetric = optionalMetrics.find(metric => metric.defaultVisible !== false);
    return defaultMetric ? defaultMetric.id : (optionalMetrics[0]?.id || '');
  });
  
  // Sync sortedData when data prop changes
  useEffect(() => {
    setSortedData(data);
  }, [data]);

  // Update selected metric when optionalMetrics prop changes
  useEffect(() => {
    const defaultMetric = optionalMetrics.find(metric => metric.defaultVisible !== false);
    setSelectedMetric(defaultMetric ? defaultMetric.id : (optionalMetrics[0]?.id || ''));
  }, [optionalMetrics]);
  
  // Generate weekly labels for the entire year
  const generateWeeklyLabels = () => {
    const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    const labels = [];
    
    months.forEach((month, monthIndex) => {
      // Add 4 weeks per month, but only show month name on first week
      for (let week = 1; week <= 4; week++) {
        if (week === 1) {
          labels.push(`${month}`);
        } else {
          labels.push(''); // Empty label for weeks 2-4
        }
      }
    });
    
    return labels;
  };

  // Deterministic pseudo-random function based on seed
  const seededRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // Convert monthly data to weekly data (deterministic)
  const convertToWeeklyData = (monthlyData, datasetIndex = 0) => {
    const weeklyData = [];
    
    // Get scale limits for the current metric to respect fixed ranges
    const getScaleLimits = () => {
      const metricOptions = metricOptionsMap[selectedMetric];
      if (metricOptions?.scales?.y) {
        return {
          min: metricOptions.scales.y.min || 0,
          max: metricOptions.scales.y.max || null
        };
      }
      return { min: 0, max: null };
    };
    
    const scaleLimits = getScaleLimits();
    
    monthlyData.forEach((monthValue, monthIndex) => {
      // Adjust variation based on proximity to scale limits
      let variation = monthValue * 0.2; // Reduced to 20% for better control
      
      // If we have a max scale limit, reduce variation for values close to the limit
      if (scaleLimits.max !== null) {
        const proximityToMax = monthValue / scaleLimits.max;
        if (proximityToMax > 0.7) {
          // Reduce variation significantly when close to max limit
          variation = monthValue * 0.1;
        }
      }
      
      // Create weekly pattern with deterministic "randomness" based on month and dataset
      const weeklyValues = [
        Math.max(scaleLimits.min, monthValue + (seededRandom(monthIndex * 4 + 0 + datasetIndex * 100) - 0.5) * variation),
        Math.max(scaleLimits.min, monthValue + (seededRandom(monthIndex * 4 + 1 + datasetIndex * 100) - 0.5) * variation * 0.8),
        Math.max(scaleLimits.min, monthValue + (seededRandom(monthIndex * 4 + 2 + datasetIndex * 100) - 0.5) * variation * 1.2),
        Math.max(scaleLimits.min, monthValue + (seededRandom(monthIndex * 4 + 3 + datasetIndex * 100) - 0.5) * variation * 0.9)
      ];
      
      // Apply max limit if it exists
      const clampedWeeklyValues = scaleLimits.max !== null 
        ? weeklyValues.map(value => Math.min(value, scaleLimits.max))
        : weeklyValues;
      
      weeklyData.push(...clampedWeeklyValues);
    });
    
    return weeklyData;
  };

  // Generate weekly chart data
  const generateWeeklyChartData = (monthlyChartData) => {
    return {
      labels: generateWeeklyLabels(),
      datasets: monthlyChartData.datasets.map((dataset, datasetIndex) => ({
        ...dataset,
        data: convertToWeeklyData(dataset.data, datasetIndex)
      }))
    };
  };

  // Get base chart options and merge with metric-specific options
  const getChartOptions = () => {
    const baseOptions = type === 'doughnut' 
      ? getDoughnutChartOptions(theme) 
      : getLineChartOptions(theme);
    
    // If we have metric-specific options for the selected metric, merge them
    const metricOptions = metricOptionsMap[selectedMetric];
    if (metricOptions) {
      return {
        ...baseOptions,
        ...metricOptions,
        scales: {
          ...baseOptions.scales,
          ...metricOptions.scales
        }
      };
    }
    
    return baseOptions;
  };
  
  const chartOptions = getChartOptions();

  // Handle metrics menu
  const handleMetricsMenuClick = (event) => {
    setMetricsAnchorEl(event.currentTarget);
  };

  const handleMetricsMenuClose = () => {
    setMetricsAnchorEl(null);
  };

  const handleMetricChange = (event) => {
    setSelectedMetric(event.target.value);
  };

  // Handle more menu (3 dots)
  const handleMoreMenuClick = (event) => {
    setMoreMenuAnchorEl(event.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setMoreMenuAnchorEl(null);
  };

  const handleToggleWeeklyView = () => {
    setIsWeeklyView(!isWeeklyView);
    handleMoreMenuClose();
  };

  const handleReset = () => {
    setIsWeeklyView(false);
    setSortedData(data);
    setSelectedMetric(optionalMetrics.find(metric => metric.defaultVisible !== false)?.id || optionalMetrics[0]?.id || '');
    handleMoreMenuClose();
  };

  const handleExportMenuClick = (event) => {
    setExportMenuAnchorEl(event.currentTarget);
    handleMoreMenuClose();
  };

  const handleExportMenuClose = () => {
    setExportMenuAnchorEl(null);
  };

  const handleExportCSV = () => {
    const chartData = getMetricData(type === 'line' ? sortedData : data);
    const csvContent = generateCSV(chartData);
    downloadCSV(csvContent, `${title}_${selectedMetric || 'data'}.csv`);
    handleExportMenuClose();
  };

  const handleExportExcel = () => {
    const chartData = getMetricData(type === 'line' ? sortedData : data);
    const excelContent = generateExcel(chartData);
    downloadExcel(excelContent, `${title}_${selectedMetric || 'data'}.xlsx`);
    handleExportMenuClose();
  };

  // Generate CSV content from chart data
  const generateCSV = (chartData) => {
    const headers = ['Month', ...chartData.datasets.map(dataset => dataset.label)];
    const rows = [headers.join(',')];
    
    chartData.labels.forEach((label, index) => {
      const row = [label, ...chartData.datasets.map(dataset => dataset.data[index] || 0)];
      rows.push(row.join(','));
    });
    
    return rows.join('\n');
  };

  // Generate Excel content from chart data
  const generateExcel = (chartData) => {
    // Create a simple Excel-compatible format using HTML table
    let excelContent = `
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <table border="1">
            <thead>
              <tr>
                <th>Month</th>
    `;
    
    // Add headers for each dataset
    chartData.datasets.forEach(dataset => {
      excelContent += `<th>${dataset.label}</th>`;
    });
    
    excelContent += `
              </tr>
            </thead>
            <tbody>
    `;
    
    // Add data rows
    chartData.labels.forEach((label, index) => {
      excelContent += `<tr><td>${label}</td>`;
      chartData.datasets.forEach(dataset => {
        excelContent += `<td>${dataset.data[index] || 0}</td>`;
      });
      excelContent += `</tr>`;
    });
    
    excelContent += `
            </tbody>
          </table>
        </body>
      </html>
    `;
    
    return excelContent;
  };

  // Download CSV file
  const downloadCSV = (content, filename) => {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Download Excel file
  const downloadExcel = (content, filename) => {
    const blob = new Blob([content], { type: 'application/vnd.ms-excel' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Get chart data based on selected metric
  const getMetricData = (chartData) => {
    if (type !== 'line' || optionalMetrics.length === 0 || !selectedMetric) {
      return isWeeklyView ? generateWeeklyChartData(chartData) : chartData;
    }
    
    // Get metric-specific data if available
    const metricData = metricDataMap[selectedMetric];
    if (metricData) {
      return isWeeklyView ? generateWeeklyChartData(metricData) : metricData;
    }
    
    return isWeeklyView ? generateWeeklyChartData(chartData) : chartData;
  };

  // Function to sort data by date (ascending or descending)
  const sortDataByDate = (ascending = true) => {
    if (!data.labels || type !== 'line') return;

    // Create array of indices with their corresponding dates for sorting
    const indexedLabels = data.labels.map((label, index) => ({ label, index }));
    
    // Sort by date (assuming labels are in format 'mmm yyyy')
    indexedLabels.sort((a, b) => {
      const dateA = new Date(a.label.replace(' ', ' 1, '));
      const dateB = new Date(b.label.replace(' ', ' 1, '));
      return ascending ? dateA - dateB : dateB - dateA;
    });

    // Reorder labels and all dataset data according to sorted indices
    const newLabels = indexedLabels.map(item => item.label);
    const newDatasets = data.datasets.map(dataset => ({
      ...dataset,
      data: indexedLabels.map(item => dataset.data[item.index])
    }));

    const newData = {
      ...data,
      labels: newLabels,
      datasets: newDatasets
    };

    setSortedData(newData);
    if (onDataSort) {
      onDataSort(newData);
    }
  };

  const renderChart = () => {
    const baseData = type === 'line' ? sortedData : data;
    const chartData = getMetricData(baseData);
    switch (type) {
      case 'line':
        return <Line options={chartOptions} data={chartData} height={height} />;
      case 'doughnut':
        return (
          <Box sx={{ position: 'relative', height: height, margin: '0 auto' }}>
            <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
              <Doughnut options={chartOptions} data={chartData} />
              {legend && data.datasets[0].data && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    {data.datasets[0].data.reduce((a, b) => a + b, 0)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Total
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        );
      default:
        return null;
    }
  };

  const renderLegend = () => {
    const chartData = type === 'line' ? sortedData : data;
    if (!legend || !chartData.datasets) return null;

    // For line charts, show dataset labels (series names), not x-axis labels
    if (type === 'line') {
      return (
        <ChartLegend>
          {chartData.datasets.map((dataset, index) => (
            <div key={index}>
              <span style={{ backgroundColor: dataset.borderColor }} />
              <Typography variant="body2" color="textSecondary">
                {dataset.label}
              </Typography>
            </div>
          ))}
        </ChartLegend>
      );
    }

    // For other chart types (like doughnut), show labels
    if (!chartData.labels) return null;
    return (
      <ChartLegend>
        {chartData.labels.map((label, index) => (
          <div key={index}>
            <span style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }} />
            <Typography variant="body2" color="textSecondary">
              {label}
            </Typography>
          </div>
        ))}
      </ChartLegend>
    );
  };

  return (
    <StyledPaper>
      <ChartHeader>
        <ChartTitle variant="h6">{title}</ChartTitle>
        {type === 'line' && (
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Tooltip title="Desglosar en orden ascendente de Año y mes a Año">
              <IconButton
                size="small"
                onClick={() => {
                  console.log('Ascending sort clicked');
                  sortDataByDate(true);
                }}
                sx={{
                  color: theme.palette.text.secondary,
                  border: '1px solid',
                  borderColor: theme.palette.divider,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.action.hover,
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <KeyboardArrowUp fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Desglosar en orden descendente de Año y mes a Año">
              <IconButton
                size="small"
                onClick={() => {
                  console.log('Descending sort clicked');
                  sortDataByDate(false);
                }}
                sx={{
                  color: theme.palette.text.secondary,
                  border: '1px solid',
                  borderColor: theme.palette.divider,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.action.hover,
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <KeyboardArrowDown fontSize="small" />
              </IconButton>
            </Tooltip>
            {optionalMetrics.length > 0 && (
              <>
                <Tooltip title="Métricas opcionales">
                  <IconButton
                    size="small"
                    onClick={handleMetricsMenuClick}
                    sx={{
                      color: theme.palette.text.secondary,
                      border: '1px solid',
                      borderColor: theme.palette.divider,
                      '&:hover': {
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.action.hover,
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  >
                    <FilterListIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={metricsAnchorEl}
                  open={Boolean(metricsAnchorEl)}
                  onClose={handleMetricsMenuClose}
                  PaperProps={{
                    sx: {
                      minWidth: 200,
                      maxHeight: 300,
                    }
                  }}
                >
                  <MenuItem disabled>
                    <ListItemText primary="Métricas opcionales" sx={{ fontWeight: 600 }} />
                  </MenuItem>
                  <Divider />
                  <Box sx={{ px: 1 }}>
                    <RadioGroup
                      value={selectedMetric}
                      onChange={handleMetricChange}
                    >
                      {optionalMetrics.map((metric) => (
                        <FormControlLabel
                          key={metric.id}
                          value={metric.id}
                          control={<Radio size="small" />}
                          label={metric.label}
                          sx={{ 
                            margin: 0, 
                            width: '100%',
                            py: 0.5,
                            '& .MuiFormControlLabel-label': {
                              fontSize: '0.875rem'
                            }
                          }}
                        />
                      ))}
                    </RadioGroup>
                  </Box>
                </Menu>
              </>
            )}
            {type === 'line' && (
              <>
                <Tooltip title="Más opciones">
                  <IconButton
                    size="small"
                    onClick={handleMoreMenuClick}
                    sx={{
                      color: theme.palette.text.secondary,
                      border: '1px solid',
                      borderColor: theme.palette.divider,
                      '&:hover': {
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.action.hover,
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  >
                    <MoreVert fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={moreMenuAnchorEl}
                  open={Boolean(moreMenuAnchorEl)}
                  onClose={handleMoreMenuClose}
                  PaperProps={{
                    sx: {
                      minWidth: 200,
                    }
                  }}
                >
                  <MenuItem onClick={handleToggleWeeklyView}>
                    <Timeline sx={{ mr: 2 }} />
                    <ListItemText primary={isWeeklyView ? "Vista mensual" : "Desglosar información"} />
                  </MenuItem>
                  <MenuItem onClick={handleReset}>
                    <Refresh sx={{ mr: 2 }} />
                    <ListItemText primary="Reestablecer" />
                  </MenuItem>
                  <MenuItem onClick={handleExportMenuClick}>
                    <FileDownload sx={{ mr: 2 }} />
                    <ListItemText primary="Exportar" />
                  </MenuItem>
                </Menu>
                {/* Export submenu */}
                <Menu
                  anchorEl={exportMenuAnchorEl}
                  open={Boolean(exportMenuAnchorEl)}
                  onClose={handleExportMenuClose}
                  PaperProps={{
                    sx: {
                      minWidth: 150,
                    }
                  }}
                >
                  <MenuItem onClick={handleExportCSV}>
                    <ListItemText primary="CSV" />
                  </MenuItem>
                  <MenuItem onClick={handleExportExcel}>
                    <ListItemText primary="Excel" />
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        )}
      </ChartHeader>
      <Box sx={{ flex: 1, minHeight: height }}>
        {renderChart()}
      </Box>
      {renderLegend()}
    </StyledPaper>
  );
};

export default ChartContainer;
