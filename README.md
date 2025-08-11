# Junior Technical Support Analyst Dashboard

A modern, responsive digital marketing analytics dashboard built with React, TypeScript, Material-UI, and Vite. This application provides an intuitive interface for visualizing key performance metrics from advertising campaigns and data sources.

## 🚀 Key Features

### 📊 Data Visualization
- **Interactive charts** with Chart.js and Recharts
- **Dynamic metrics** with configurable options
- **Performance tables** with advanced filters
- **Real-time KPI indicators**

### 📈 Marketing Analytics
- **Channel Performance**: Programmatic, Paid Search, Paid Social, Organic
- **Data Sources**: 30+ advertising platforms (Google Ads, Facebook, LinkedIn, etc.)
- **Campaign Performance**: Detailed metrics per campaign
- **Traffic Analysis**: Temporal data visualization

### 🎯 Available Metrics
- **Impressions** and percentage changes
- **CTR (Click-Through Rate)** and trends
- **CPC (Cost Per Click)** and optimization
- **CPM (Cost Per Mille)** by source
- **ROAS (Return on Ad Spend)** and ROI
- **Conversions** and CPA (Cost Per Acquisition)

### 🔧 Technical Features
- **Responsive design** that works on all devices
- **Dynamic filters** in data tables
- **Optional metrics** configurable by user
- **Smart pagination** in tables
- **Customizable theme** with Material-UI
- **Optimized performance** with Vite

## 🛠 Technologies Used

### Frontend Core
- **[React 19](https://reactjs.org/)** - Main UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing
- **[Vite](https://vitejs.dev/)** - Fast development tooling

### UI and Visualization
- **[Material-UI (MUI)](https://mui.com/)** - Interface components
- **[Chart.js](https://www.chartjs.org/)** - Interactive charts
- **[Recharts](https://recharts.org/)** - Native React charts
- **[React Chart.js 2](https://react-chartjs-2.js.org/)** - Chart.js integration

### Utilities
- **[React Router DOM](https://reactrouter.com/)** - Navigation
- **[date-fns](https://date-fns.org/)** - Date handling
- **[Notistack](https://github.com/iamhosseindhv/notistack)** - Notifications

## 🚀 Installation and Setup

### Prerequisites
- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** as package manager

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/K3yZenD-cloud/junior-technical-support-analyst-dashboard.git
   cd junior-technical-support-analyst-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the application.

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build application for production |
| `npm run serve` | Preview production build on port 3000 |
| `npm run preview` | Preview build with Vite |
| `npm run lint` | Run ESLint for code analysis |
| `npm run lint:fix` | Automatically fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Check TypeScript types |
| `npm run test` | Run tests with Vitest |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate test coverage report |

## 📁 Project Structure

```
dashboard/
├── public/                 # Static files
│   ├── favicon-*.png      # Application icons
│   └── site.webmanifest   # Web manifest
├── src/
│   ├── components/        # Reusable components
│   │   ├── charts/       # Chart components
│   │   │   ├── ChartContainer.jsx
│   │   │   ├── PerformanceChart.jsx
│   │   │   └── TrafficChart.jsx
│   │   ├── layout/       # Layout components
│   │   │   ├── Header.jsx
│   │   │   ├── MainLayout.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── metrics/      # Metrics components
│   │   │   └── MetricsGrid.jsx
│   │   └── tables/       # Table components
│   │       ├── DataTable.jsx
│   │       └── DataTables.jsx
│   ├── data/             # Data and services
│   │   └── dashboardData.js  # Sample data
│   ├── hooks/            # Custom hooks
│   │   └── useResponsive.js
│   ├── pages/            # Application pages
│   │   ├── Dashboard.jsx
│   │   └── NotFound.jsx
│   ├── theme/            # Theme configuration
│   │   ├── theme.js
│   │   └── theme.ts
│   ├── App.jsx           # Main component
│   ├── App.tsx           # TypeScript version
│   ├── main.tsx          # Entry point
│   └── index.js          # Alternative entry point
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## 🎯 Detailed Features

### Main Dashboard
- **Overview** with key metrics
- **Interactive traffic chart** with multiple metrics
- **Performance tables** with real-time data

### Data Tables
- **Channel Performance**: Performance by advertising channel
- **Data Source Performance**: Performance by data source (30+ platforms)
- **Campaign Performance**: Detailed metrics per campaign

### Configurable Metrics
Each table allows showing/hiding optional metrics:
- Impressions, CTR, CPC, CPM
- ROAS, Spend, Conversions
- Percentage changes and trends

### Interactive Charts
- **Traffic Overview**: Temporal visualization by channel
- **Dynamic metrics**: Revenue, CPC, Impressions, CMP, etc.
- **Custom scales** for each metric type

## ⚙️ Customization

### Theme Configuration
Modify `src/theme/theme.js` to customize:
- Color palette
- Typography
- Responsive breakpoints
- MUI component overrides

### Environment Variables
Create a `.env` file in the root for specific configurations:

```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE="Technical Analyst Dashboard"
VITE_DEFAULT_THEME=light
```

### Custom Data
Data is located in `src/data/dashboardData.js`:
- `channelPerformanceData`: Data by channel
- `dataSourcePerformanceData`: Data by source
- `campaignPerformanceData`: Data by campaign
- `trafficData`: Data for temporal charts

## 🚀 Deployment

### Production Build
```bash
npm run build
```
Optimized files are generated in the `dist/` folder.

### Local Preview
```bash
npm run serve
```
Serves the build at [http://localhost:3000](http://localhost:3000).

### Deploy to Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Publish directory: `dist`

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Material-UI](https://mui.com/)** for the interface components
- **[Vite](https://vitejs.dev/)** for the fast development experience
- **[Chart.js](https://www.chartjs.org/)** for the interactive charts
- **[React](https://reactjs.org/)** for the solid application foundation

---

**Built for digital marketing analytics and junior technical support** 📊✨
```
