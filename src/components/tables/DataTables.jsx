import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box, IconButton, TablePagination } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  boxShadow: 'none',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  '& .MuiTableRow-root:last-child td': {
    borderBottom: 0,
  },
  '& .MuiTableCell-root': {
    borderColor: theme.palette.divider,
  },
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  '& .MuiTableCell-head': {
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: '0.7rem',
    letterSpacing: '0.5px',
    color: theme.palette.text.secondary,
  },
}));

const channelData = [
  { id: 1, channel: 'Google Ads', visits: '24,780', spend: '$12,450', ctr: '3.2%', trend: 'up' },
  { id: 2, channel: 'Facebook', visits: '18,245', spend: '$8,720', ctr: '2.8%', trend: 'down' },
  { id: 3, channel: 'Instagram', visits: '15,620', spend: '$7,890', ctr: '3.5%', trend: 'up' },
  { id: 4, channel: 'LinkedIn', visits: '9,345', spend: '$5,670', ctr: '2.1%', trend: 'down' },
  { id: 5, channel: 'Twitter', visits: '7,890', spend: '$3,450', ctr: '1.8%', trend: 'up' },
];

const campaignData = [
  { id: 1, campaign: 'Summer Sale 2023', impressions: '1,245,780', clicks: '24,780', convRate: '4.3%', trend: 'up' },
  { id: 2, campaign: 'New Collection', impressions: '987,450', clicks: '18,245', convRate: '3.8%', trend: 'down' },
  { id: 3, campaign: 'Flash Sale', impressions: '756,230', clicks: '15,620', convRate: '5.1%', trend: 'up' },
  { id: 4, campaign: 'Holiday Special', impressions: '678,900', clicks: '9,345', convRate: '2.9%', trend: 'down' },
  { id: 5, campaign: 'Clearance', impressions: '543,210', clicks: '7,890', convRate: '2.4%', trend: 'up' },
];

const renderTrendIcon = (trend) => {
  if (trend === 'up') {
    return (
      <Box component="span" sx={{ color: 'success.main', display: 'flex', alignItems: 'center' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L12.01 20M12 4L4 12M12 4L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Box>
    );
  }
  return (
    <Box component="span" sx={{ color: 'error.main', display: 'flex', alignItems: 'center' }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20L12.01 4M12 20L4 12M12 20L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Box>
  );
};

const DataTable = ({ title, columns, data, action }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
        {action && (
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        )}
      </Box>
      <StyledTableContainer component={Paper}>
        <Table size="small">
          <StyledTableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || 'left'}>
                  {column.label}
                </TableCell>
              ))}
              {action && <TableCell align="right">Actions</TableCell>}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id} hover>
                {columns.map((column) => (
                  <TableCell 
                    key={column.id} 
                    align={column.align || 'left'}
                    sx={{
                      ...(column.numeric && { fontFamily: 'monospace' }),
                      ...(column.bold && { fontWeight: 'bold' }),
                    }}
                  >
                    {column.id === 'trend' ? (
                      renderTrendIcon(row[column.id])
                    ) : (
                      row[column.id]
                    )}
                  </TableCell>
                ))}
                {action && (
                  <TableCell align="right">
                    <IconButton size="small">
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </StyledTableContainer>
    </Box>
  );
};

const DataTables = () => {
  const channelColumns = [
    { id: 'channel', label: 'Channel', bold: true },
    { id: 'visits', label: 'Visits', align: 'right', numeric: true },
    { id: 'spend', label: 'Spend', align: 'right', numeric: true },
    { id: 'ctr', label: 'CTR', align: 'right', numeric: true },
    { id: 'trend', label: 'Trend', align: 'center' },
  ];

  const campaignColumns = [
    { id: 'campaign', label: 'Campaign', bold: true },
    { id: 'impressions', label: 'Impressions', align: 'right', numeric: true },
    { id: 'clicks', label: 'Clicks', align: 'right', numeric: true },
    { id: 'convRate', label: 'Conv. Rate', align: 'right', numeric: true },
    { id: 'trend', label: 'Trend', align: 'center' },
  ];

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <DataTable 
          title="Channel Performance" 
          columns={channelColumns} 
          data={channelData} 
          action 
        />
      </Box>
      <Box>
        <DataTable 
          title="Campaign Performance" 
          columns={campaignColumns} 
          data={campaignData} 
          action 
        />
      </Box>
    </Box>
  );
};

export default DataTables;
