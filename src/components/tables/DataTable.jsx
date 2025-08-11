import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  Box,
  IconButton,
  Tooltip,
  useTheme,
  alpha,
  styled,
  Menu,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Divider,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import {
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  MoreVert as MoreVertIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as TrendingFlatIcon,
  FilterList as FilterListIcon,
  FileDownload as FileDownloadIcon,
  Refresh as RefreshIcon
} from '@mui/icons-material';

// Styled components
const StyledTableHeaderCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.secondary,
  fontWeight: 700,
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  border: `1px solid ${theme.palette.divider}`,
  borderTop: 'none',
  borderLeft: 'none',
  borderBottom: `2px solid ${theme.palette.divider}`,
  padding: theme.spacing(1, 1.5),
  '&:first-of-type': {
    borderTopLeftRadius: theme.shape.borderRadius,
    borderLeft: 'none',
  },
  '&:last-child': {
    borderTopRightRadius: theme.shape.borderRadius,
    borderRight: 'none',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.grey[25] || 'rgba(0, 0, 0, 0.02)',
  },
  '&:hover': {
    backgroundColor: `${theme.palette.action.hover} !important`,
  },
  '& td': {
    border: `1px solid ${theme.palette.divider}`,
    borderTop: 'none',
    borderLeft: 'none',
    padding: theme.spacing(1.5, 2),
    verticalAlign: 'middle',
    '&:last-child': {
      borderRight: 'none',
    },
  },
  '&:last-child td': {
    borderBottom: 'none',
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme, maxHeight }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1)',
  border: `1px solid ${theme.palette.divider}`,
  overflowX: 'auto',
  ...(maxHeight && {
    maxHeight: `${maxHeight}px`,
    overflowY: 'auto',
  }),
  '& .MuiTable-root': {
    minWidth: '100%',
    tableLayout: 'fixed',
    borderCollapse: 'separate',
    borderSpacing: 0,
    width: '100%',
  },
  '& .MuiTableCell-root': {
    padding: theme.spacing(1, 1.5),
    border: `1px solid ${theme.palette.divider}`,
    borderTop: 'none',
    borderLeft: 'none',
    verticalAlign: 'middle',
    '&:last-child': {
      borderRight: 'none',
    },
  },
  '& .MuiTableCell-head': {
    fontWeight: 700,
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.grey[100],
    borderBottom: `2px solid ${theme.palette.divider}`,
    borderTop: 'none',
  },
  '& .MuiTableRow-root': {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child .MuiTableCell-root': {
      borderBottom: 'none',
    },
  },
}));

const TrendIndicator = ({ value, size = 'normal' }) => {
  const theme = useTheme();
  const isSmall = size === 'small';
  
  if (value > 0) {
    return (
      <Box display="flex" alignItems="center" color={theme.palette.success.main}>
        <TrendingUpIcon fontSize={isSmall ? 'inherit' : 'small'} sx={{ mr: isSmall ? 0.25 : 0.5, fontSize: isSmall ? '12px' : undefined }} />
        <Typography variant={isSmall ? 'caption' : 'body2'} sx={{ fontWeight: 600, fontSize: isSmall ? '0.65rem' : undefined }}>
          {value}%
        </Typography>
      </Box>
    );
  } else if (value < 0) {
    return (
      <Box display="flex" alignItems="center" color={theme.palette.error.main}>
        <TrendingDownIcon fontSize={isSmall ? 'inherit' : 'small'} sx={{ mr: isSmall ? 0.25 : 0.5, fontSize: isSmall ? '12px' : undefined }} />
        <Typography variant={isSmall ? 'caption' : 'body2'} sx={{ fontWeight: 600, fontSize: isSmall ? '0.65rem' : undefined }}>
          {Math.abs(value)}%
        </Typography>
      </Box>
    );
  } else {
    return (
      <Box display="flex" alignItems="center" color={theme.palette.text.secondary}>
        <TrendingFlatIcon fontSize={isSmall ? 'inherit' : 'small'} sx={{ mr: isSmall ? 0.25 : 0.5, fontSize: isSmall ? '12px' : undefined }} />
        <Typography variant={isSmall ? 'caption' : 'body2'} sx={{ fontWeight: 500, fontSize: isSmall ? '0.65rem' : undefined }}>
          {value}%
        </Typography>
      </Box>
    );
  }
};

const DataTable = ({ 
  title, 
  columns, 
  data, 
  rowsPerPageOptions = [5, 10, 25],
  defaultRowsPerPage = 5,
  showPagination = true,
  showFilter = false,
  optionalMetrics = [],
  maxHeight = null
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);
  const [orderBy, setOrderBy] = React.useState(null);
  const [order, setOrder] = React.useState('asc');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [moreMenuAnchorEl, setMoreMenuAnchorEl] = React.useState(null);
  const [exportDialogOpen, setExportDialogOpen] = React.useState(false);
  const [selectedMetrics, setSelectedMetrics] = React.useState(
    optionalMetrics.reduce((acc, metric) => ({ ...acc, [metric.id]: metric.defaultVisible || false }), {})
  );
  const [initialSelectedMetrics] = React.useState(
    optionalMetrics.reduce((acc, metric) => ({ ...acc, [metric.id]: metric.defaultVisible || false }), {})
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleMetricToggle = (metricId) => {
    setSelectedMetrics(prev => ({
      ...prev,
      [metricId]: !prev[metricId]
    }));
  };

  const handleMoreMenuClick = (event) => {
    setMoreMenuAnchorEl(event.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setMoreMenuAnchorEl(null);
  };

  const handleReset = () => {
    setSelectedMetrics(initialSelectedMetrics);
    setPage(0);
    setOrderBy(null);
    setOrder('asc');
    handleMoreMenuClose();
  };

  const handleExport = () => {
    setExportDialogOpen(true);
    handleMoreMenuClose();
  };

  const handleExportDialogClose = () => {
    setExportDialogOpen(false);
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV();
    downloadFile(csvContent, `${title.replace(/\s+/g, '_')}_export.csv`, 'text/csv;charset=utf-8;');
    setExportDialogOpen(false);
  };

  const handleExportExcel = () => {
    const csvContent = generateCSV();
    downloadFile(csvContent, `${title.replace(/\s+/g, '_')}_export.xlsx`, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    setExportDialogOpen(false);
  };

  const generateCSV = () => {
    const headers = visibleColumns.map(col => col.label).join(',');
    const rows = data.map(row => 
      visibleColumns.map(col => {
        if (col.format === 'combined') {
          return `"${row[col.id]} (${row[col.changeField] > 0 ? '+' : ''}${row[col.changeField]}%)"`;
        }
        return `"${row[col.id]}"`;
      }).join(',')
    ).join('\n');
    return `${headers}\n${rows}`;
  };

  const downloadFile = (content, filename, mimeType) => {
    const blob = new Blob([content], { type: mimeType });
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

  // Filter visible columns based on selected metrics
  const visibleColumns = React.useMemo(() => {
    if (!showFilter) return columns;
    
    // First, get base columns (non-optional)
    const baseColumns = columns.filter(column => 
      !optionalMetrics.find(metric => metric.id === column.id)
    );
    
    // Then, get selected optional columns in their original order
    const selectedOptionalColumns = columns.filter(column => {
      const optionalMetric = optionalMetrics.find(metric => metric.id === column.id);
      return optionalMetric && selectedMetrics[column.id];
    });
    
    // Combine base columns with selected optional columns in left-to-right order
    return [...baseColumns, ...selectedOptionalColumns];
  }, [columns, selectedMetrics, showFilter, optionalMetrics]);

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const sortedData = React.useMemo(() => {
    if (!orderBy) return data;
    return stableSort(data, getComparator(order, orderBy));
  }, [data, order, orderBy]);

  const paginatedData = showPagination
    ? sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : sortedData;

  return (
    <Paper sx={{ width: '100%', mb: 4, overflow: 'hidden' }}>
      <Box
        sx={{
          p: 2,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {showFilter && (
            <>
              <IconButton size="small" onClick={handleFilterClick}>
                <FilterListIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleFilterClose}
                PaperProps={{
                  sx: {
                    minWidth: 200,
                    maxHeight: 300,
                  }
                }}
              >
                <MenuItem disabled>
                  <ListItemText primary="Optional Metrics" sx={{ fontWeight: 600 }} />
                </MenuItem>
                <Divider />
                {optionalMetrics.map((metric) => (
                  <MenuItem key={metric.id} onClick={() => handleMetricToggle(metric.id)}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedMetrics[metric.id] || false}
                          size="small"
                        />
                      }
                      label={metric.label}
                      sx={{ margin: 0, width: '100%' }}
                    />
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
          <IconButton size="small" onClick={handleMoreMenuClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={moreMenuAnchorEl}
            open={Boolean(moreMenuAnchorEl)}
            onClose={handleMoreMenuClose}
            PaperProps={{
              sx: {
                minWidth: 150,
              }
            }}
          >
            <MenuItem onClick={handleExport}>
              <FileDownloadIcon sx={{ mr: 1, fontSize: 18 }} />
              <ListItemText primary="Exportar" />
            </MenuItem>
            <MenuItem onClick={handleReset}>
              <RefreshIcon sx={{ mr: 1, fontSize: 18 }} />
              <ListItemText primary="Reestablecer" />
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      
      <StyledTableContainer maxHeight={maxHeight}>
        <Table>
          <TableHead>
            <TableRow>
              {visibleColumns.map((column) => (
                <StyledTableHeaderCell
                  key={column.id}
                  align={column.numeric ? 'right' : 'left'}
                  sortDirection={orderBy === column.id ? order : false}
                  sx={{
                    width: typeof column.width === 'number' ? `${column.width}px` : column.width,
                    minWidth: typeof column.width === 'number' ? `${column.width}px` : column.width,
                    // Remove maxWidth to allow columns to expand and fill available space
                  }}
                >
                  <Box
                    onClick={() => column.sortable && handleRequestSort(column.id)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: column.sortable ? 'pointer' : 'default',
                      '&:hover': {
                        color: column.sortable ? 'primary.main' : 'inherit',
                      },
                    }}
                  >
                    {column.label}
                    {column.sortable && (
                      <Box component="span" sx={{ display: 'inline-flex', ml: 0.5 }}>
                        {orderBy === column.id ? (
                          <>{order === 'desc' ? <ArrowDownwardIcon fontSize="small" /> : <ArrowUpwardIcon fontSize="small" />}</>
                        ) : (
                          <ArrowUpwardIcon fontSize="small" sx={{ opacity: 0.3 }} />
                        )}
                      </Box>
                    )}
                  </Box>
                </StyledTableHeaderCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, index) => (
                <StyledTableRow hover key={index}>
                  {visibleColumns.map((column) => (
                    <TableCell 
                      key={column.id} 
                      align={column.numeric ? 'right' : 'left'}
                      sx={{
                        width: typeof column.width === 'number' ? `${column.width}px` : column.width,
                        minWidth: typeof column.width === 'number' ? `${column.width}px` : column.width,
                        // Remove maxWidth to allow columns to expand and fill available space
                      }}
                    >
                      {column.format === 'combined' ? (
                        <Box sx={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          alignItems: column.numeric ? 'flex-end' : 'flex-start',
                          gap: 0.25,
                          minHeight: '36px',
                          justifyContent: 'center'
                        }}>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              fontWeight: 600, 
                              lineHeight: 1.2,
                              fontSize: '0.875rem',
                              color: 'text.primary'
                            }}
                          >
                            {row[column.id]}
                          </Typography>
                          <TrendIndicator value={row[column.changeField]} size="small" />
                        </Box>
                      ) : column.format === 'trend' ? (
                        <TrendIndicator value={row[column.id]} />
                      ) : column.trend ? (
                        <TrendIndicator value={row[column.id]} />
                      ) : (
                        row[column.id]
                      )}
                    </TableCell>
                  ))}
                </StyledTableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={visibleColumns.length} align="center" sx={{ py: 3 }}>
                  <Typography variant="body2" color="textSecondary">
                    No data available
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>

      {showPagination && (
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
              marginBottom: 0,
            },
          }}
        />
      )}
      
      {/* Export Format Selection Dialog */}
      <Dialog
        open={exportDialogOpen}
        onClose={handleExportDialogClose}
        PaperProps={{
          sx: {
            minWidth: 300,
          }
        }}
      >
        <DialogTitle>Choose Export Format</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Select the format you prefer for exporting the data:
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button 
            onClick={handleExportDialogClose} 
            color="inherit"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleExportCSV} 
            color="primary"
            variant="outlined"
            sx={{ ml: 1 }}
          >
            CSV File
          </Button>
          <Button 
            onClick={handleExportExcel} 
            color="primary"
            variant="contained"
            sx={{ ml: 1 }}
          >
            Excel File
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default DataTable;
