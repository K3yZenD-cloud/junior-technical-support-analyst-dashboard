import React from 'react';
import { Box, Grid } from '@mui/material';
import MetricsGrid from '../components/metrics/MetricsGrid';
import DataTable from '../components/tables/DataTable';
import ChartContainer from '../components/charts/ChartContainer';
import {
  channelPerformanceData,
  dataSourcePerformanceData,
  campaignPerformanceData,
  trafficData,
  trafficSources,
  revenueData,
  tableColumns,
  channelPerformanceOptionalMetrics,
  dataSourcePerformanceOptionalMetrics,
  campaignPerformanceOptionalMetrics
} from '../data/dashboardData';

const Dashboard = () => {
  // Optional metrics configuration for Traffic Overview chart
  const trafficOverviewOptionalMetrics = [
    {
      id: 'revenue',
      label: 'Revenue',
      defaultVisible: true,
    },
    {
      id: 'cpc',
      label: 'CPC',
      defaultVisible: true,
    },
    {
      id: 'impressions',
      label: 'Impressions',
      defaultVisible: true,
    },
    {
      id: 'cmp',
      label: 'CMP',
      defaultVisible: true,
    },
    {
      id: 'conversion_rate',
      label: 'Conversion Rate',
      defaultVisible: true,
    },
    {
      id: 'clicks',
      label: 'Clicks',
      defaultVisible: true,
    },
    {
      id: 'video_views',
      label: 'Video Views',
      defaultVisible: true,
    },
    {
      id: 'ctr',
      label: 'CTR',
      defaultVisible: true,
    },
    {
      id: 'spend',
      label: 'Spend',
      defaultVisible: true,
    },
    {
      id: 'cpa',
      label: 'CPA',
      defaultVisible: true,
    },
  ];

  // CPC data for when CPC metric is selected
  const cpcData = {
    labels: ['ene 2023', 'feb 2023', 'mar 2023', 'abr 2023', 'may 2023', 'jun 2023', 'jul 2023', 'ago 2023', 'sep 2023', 'oct 2023', 'nov 2023', 'dic 2023'],
    datasets: [
      {
        label: 'Programmatic',
        data: [4.8, 3.8, 4.0, 4.2, 5.2, 4.4, 4.2, 5.6, 4.2, 4.6, 5.4, 4.2],
        borderColor: '#6f42c1',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Search',
        data: [4.2, 4.0, 5.0, 5.2, 4.0, 4.6, 4.4, 3.6, 5.8, 4.8, 4.2, 5.6],
        borderColor: '#e91e63',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Social',
        data: [3.8, 6.0, 6.6, 3.8, 2.8, 4.4, 4.2, 6.0, 3.8, 3.6, 3.4, 4.2],
        borderColor: '#00bcd4',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Organic',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: '#ff9800',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // Impressions data for when Impressions metric is selected
  const impressionsData = {
    labels: ['ene 2023', 'feb 2023', 'mar 2023', 'abr 2023', 'may 2023', 'jun 2023', 'jul 2023', 'ago 2023', 'sep 2023', 'oct 2023', 'nov 2023', 'dic 2023'],
    datasets: [
      {
        label: 'Programmatic',
        data: [12.2, 8.8, 13.2, 11.8, 15.2, 10.8, 12.4, 18.8, 12.2, 10.8, 13.6, 13.2],
        borderColor: '#6f42c1',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Search',
        data: [7.8, 9.2, 14.2, 6.8, 5.8, 8.2, 9.8, 12.2, 6.2, 15.2, 6.8, 12.8],
        borderColor: '#e91e63',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Social',
        data: [3.8, 1.8, 7.2, 6.8, 4.8, 5.2, 8.2, 3.8, 4.2, 6.8, 4.8, 2.8],
        borderColor: '#00bcd4',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Organic',
        data: [5.8, 5.2, 1.2, 5.8, 6.2, 9.2, 4.2, 3.8, 8.2, 8.2, 8.2, 8.2],
        borderColor: '#ff9800',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // CPM data for when CPM metric is selected
  const cpmData = {
    labels: ['ene 2023', 'feb 2023', 'mar 2023', 'abr 2023', 'may 2023', 'jun 2023', 'jul 2023', 'ago 2023', 'sep 2023', 'oct 2023', 'nov 2023', 'dic 2023'],
    datasets: [
      {
        label: 'Programmatic',
        data: [320, 380, 420, 480, 520, 460, 440, 580, 440, 520, 560, 420],
        borderColor: '#6f42c1',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Search',
        data: [480, 420, 480, 540, 420, 480, 460, 360, 580, 560, 440, 580],
        borderColor: '#e91e63',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Social',
        data: [280, 620, 720, 400, 280, 480, 520, 580, 580, 380, 340, 380],
        borderColor: '#00bcd4',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Organic',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#ff9800',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // Conversion Rate data for when Conversion Rate metric is selected
  const conversionRateData = {
    labels: ['ene 2023', 'feb 2023', 'mar 2023', 'abr 2023', 'may 2023', 'jun 2023', 'jul 2023', 'ago 2023', 'sep 2023', 'oct 2023', 'nov 2023', 'dic 2023'],
    datasets: [
      {
        label: 'Programmatic',
        data: [9.2, 9.8, 9.6, 10.8, 11.2, 10.4, 9.8, 9.2, 10.8, 11.2, 10.4, 10.2],
        borderColor: '#6f42c1',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Search',
        data: [10.8, 10.2, 9.8, 9.6, 8.8, 9.2, 9.8, 8.8, 9.2, 8.8, 10.2, 8.2],
        borderColor: '#e91e63',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Social',
        data: [9.8, 9.2, 11.6, 10.2, 9.2, 10.8, 9.8, 7.6, 11.6, 12.8, 12.2, 12.4],
        borderColor: '#00bcd4',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Organic',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#ff9800',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // Clicks data for when Clicks metric is selected
  const clicksData = {
    labels: ['ene 2023', 'feb 2023', 'mar 2023', 'abr 2023', 'may 2023', 'jun 2023', 'jul 2023', 'ago 2023', 'sep 2023', 'oct 2023', 'nov 2023', 'dic 2023'],
    datasets: [
      {
        label: 'Programmatic',
        data: [1.3, 0.8, 1.5, 1.2, 1.5, 1.2, 1.4, 2.1, 1.4, 1.2, 1.4, 1.4],
        borderColor: '#6f42c1',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Search',
        data: [0.8, 0.9, 1.5, 1.3, 0.5, 0.8, 0.9, 1.2, 0.5, 1.6, 0.6, 1.3],
        borderColor: '#e91e63',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Social',
        data: [0.4, 0.2, 0.7, 0.6, 0.7, 0.8, 0.8, 0.4, 0.7, 0.3, 0.4, 0.2],
        borderColor: '#00bcd4',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Organic',
        data: [0.5, 0.5, 0.1, 0.6, 0.7, 0.9, 0.4, 0.9, 0.8, 1.0, 0.9, 0.9],
        borderColor: '#ff9800',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // Video Views data for when Video Views metric is selected
  const videoViewsData = {
    labels: ['ene 2023', 'feb 2023', 'mar 2023', 'abr 2023', 'may 2023', 'jun 2023', 'jul 2023', 'ago 2023', 'sep 2023', 'oct 2023', 'nov 2023', 'dic 2023'],
    datasets: [
      {
        label: 'Programmatic',
        data: [12.8, 9.2, 14.2, 12.8, 16.2, 11.8, 14.2, 20.2, 13.2, 11.8, 15.2, 14.8],
        borderColor: '#6f42c1',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Search',
        data: [9.8, 8.8, 15.2, 13.8, 5.8, 7.8, 8.8, 12.8, 6.2, 16.2, 7.2, 13.8],
        borderColor: '#e91e63',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Social',
        data: [4.8, 2.2, 7.8, 6.8, 5.8, 8.8, 9.2, 4.8, 7.2, 6.8, 3.8, 2.8],
        borderColor: '#00bcd4',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Organic',
        data: [5.8, 5.2, 1.8, 6.2, 6.8, 10.2, 4.2, 9.8, 8.8, 9.2, 8.8, 8.8],
        borderColor: '#ff9800',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // CTR data for when CTR metric is selected
  const ctrData = {
    labels: ['ene 2023', 'feb 2023', 'mar 2023', 'abr 2023', 'may 2023', 'jun 2023', 'jul 2023', 'ago 2023', 'sep 2023', 'oct 2023', 'nov 2023', 'dic 2023'],
    datasets: [
      {
        label: 'Programmatic',
        data: [10.8, 9.8, 10.6, 10.2, 10.4, 10.8, 10.2, 10.6, 10.8, 10.4, 10.6, 10.8],
        borderColor: '#6f42c1',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Search',
        data: [10.2, 10.4, 11.2, 10.8, 10.2, 10.6, 10.4, 9.8, 10.2, 10.8, 10.4, 10.6],
        borderColor: '#e91e63',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Social',
        data: [10.2, 10.6, 10.4, 9.8, 10.2, 9.8, 9.6, 10.2, 10.8, 10.4, 9.8, 9.6],
        borderColor: '#00bcd4',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Organic',
        data: [10.8, 10.2, 11.2, 10.6, 10.2, 10.8, 10.4, 10.6, 10.8, 10.4, 10.6, 10.8],
        borderColor: '#ff9800',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // Spend data for when Spend metric is selected
  const spendData = {
    labels: ['ene 2023', 'feb 2023', 'mar 2023', 'abr 2023', 'may 2023', 'jun 2023', 'jul 2023', 'ago 2023', 'sep 2023', 'oct 2023', 'nov 2023', 'dic 2023'],
    datasets: [
      {
        label: 'Programmatic',
        data: [4.8, 3.6, 6.8, 4.8, 8.2, 5.2, 5.8, 11.2, 5.4, 5.6, 8.2, 7.4],
        borderColor: '#6f42c1',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Search',
        data: [4.2, 3.8, 6.8, 3.8, 2.4, 4.2, 4.8, 3.4, 8.8, 2.8, 5.8, 7.2],
        borderColor: '#e91e63',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Social',
        data: [1.4, 1.2, 3.4, 2.8, 1.6, 2.8, 4.6, 2.4, 2.6, 2.4, 1.6, 1.2],
        borderColor: '#00bcd4',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Organic',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#ff9800',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // CPA data for when CPA metric is selected
  const cpaData = {
    labels: ['ene 2023', 'feb 2023', 'mar 2023', 'abr 2023', 'may 2023', 'jun 2023', 'jul 2023', 'ago 2023', 'sep 2023', 'oct 2023', 'nov 2023', 'dic 2023'],
    datasets: [
      {
        label: 'Programmatic',
        data: [38, 38, 46, 38, 48, 42, 46, 58, 36, 52, 48, 38],
        borderColor: '#6f42c1',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Search',
        data: [48, 42, 52, 54, 44, 52, 48, 42, 62, 58, 42, 64],
        borderColor: '#e91e63',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Paid Social',
        data: [32, 58, 72, 32, 30, 48, 46, 68, 32, 24, 28, 32],
        borderColor: '#00bcd4',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Organic',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#ff9800',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  return (
    <Box sx={{ 
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#f8f9fc',
      padding: { xs: 2, sm: 3 },
      paddingBottom: { xs: 6, sm: 8 },
      display: 'flex',
      gap: 3,
      alignItems: 'stretch'
    }}>
      {/* Main Content Area */}
      <Box sx={{ 
        flex: '1 1 70%',
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        height: 'fit-content'
      }}>
        {/* Metrics Grid - Top Left Position */}
        <MetricsGrid />
        
        {/* Charts Row */}
        <Box sx={{ mt: 2, height: '560px', display: 'flex', flexDirection: 'column' }}>
          <ChartContainer 
            title="Traffic Overview" 
            type="line" 
            data={trafficData} 
            optionalMetrics={trafficOverviewOptionalMetrics}
            metricDataMap={{
              revenue: trafficData,
              cpc: cpcData,
              impressions: impressionsData,
              cmp: cpmData,
              conversion_rate: conversionRateData,
              clicks: clicksData,
              video_views: videoViewsData,
              ctr: ctrData,
              spend: spendData,
              cpa: cpaData,
            }}
            metricOptionsMap={{
              cpc: {
                scales: {
                  y: {
                    min: 0,
                    max: 8,
                    ticks: {
                      stepSize: 2,
                      callback: function(value) {
                        return value + ' mil';
                      }
                    }
                  }
                }
              },
              impressions: {
                scales: {
                  y: {
                    min: 0,
                    max: 20,
                    ticks: {
                      stepSize: 5,
                      callback: function(value) {
                        return value + ' mil';
                      }
                    }
                  }
                }
              },
              cmp: {
                scales: {
                  y: {
                    min: 0,
                    max: 800,
                    ticks: {
                      stepSize: 200,
                      callback: function(value) {
                        return value + ' mil';
                      }
                    }
                  }
                }
              },
              conversion_rate: {
                scales: {
                  y: {
                    min: 0,
                    max: 15,
                    ticks: {
                      stepSize: 2.5,
                      callback: function(value) {
                        return value + '%';
                      }
                    }
                  }
                }
              },
              clicks: {
                scales: {
                  y: {
                    min: 0,
                    max: 2.5,
                    ticks: {
                      stepSize: 0.5,
                      callback: function(value) {
                        if (value === 0) return '0';
                        if (value === 0.5) return '500';
                        if (value === 1) return '1 mil';
                        if (value === 1.5) return '1,5 mil';
                        if (value === 2) return '2 mil';
                        if (value === 2.5) return '2,5 mil';
                        return value;
                      }
                    }
                  }
                }
              },
              video_views: {
                scales: {
                  y: {
                    min: 0,
                    max: 25,
                    ticks: {
                      stepSize: 5,
                      callback: function(value) {
                        return value + ' mil';
                      }
                    }
                  }
                }
              },
              ctr: {
                scales: {
                  y: {
                    min: 0,
                    max: 12,
                    ticks: {
                      stepSize: 2,
                      callback: function(value) {
                        return value + '%';
                      }
                    }
                  }
                }
              },
              spend: {
                scales: {
                  y: {
                    min: 0,
                    max: 12,
                    ticks: {
                      stepSize: 2,
                      callback: function(value) {
                        return value + ' M';
                      }
                    }
                  }
                }
              },
              cpa: {
                scales: {
                  y: {
                    min: 0,
                    max: 80,
                    ticks: {
                      stepSize: 20,
                      callback: function(value) {
                        return value + ' mil';
                      }
                    }
                  }
                }
              }
            }}
          />
        </Box>
      </Box>
      
      {/* Right Sidebar with Performance Tables */}
      <Box sx={{ 
        flex: '1 1 30%',
        minWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}>
        {/* Channel Performance Table */}
        <DataTable
          title="Channel Performance"
          columns={tableColumns.channelPerformance}
          data={channelPerformanceData}
          showPagination={false}
          maxHeight={180}
          compact={true}
          showFilter={true}
          optionalMetrics={channelPerformanceOptionalMetrics}
          defaultRowsPerPage={3}
          rowsPerPageOptions={[3, 5]}
        />
        
        {/* Data Source Performance Table */}
        <DataTable
          title="Data Source Performance"
          columns={tableColumns.dataSourcePerformance}
          data={dataSourcePerformanceData}
          showPagination={false}
          maxHeight={180}
          compact={true}
          showFilter={true}
          optionalMetrics={dataSourcePerformanceOptionalMetrics}
          defaultRowsPerPage={3}
          rowsPerPageOptions={[3, 5]}
        />
        
        {/* Campaign Performance Table */}
        <DataTable
          title="Campaign Performance"
          columns={tableColumns.campaignPerformance}
          data={campaignPerformanceData}
          showPagination={false}
          maxHeight={180}
          compact={true}
          showFilter={true}
          optionalMetrics={campaignPerformanceOptionalMetrics}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
