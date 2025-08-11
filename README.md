# Analytics Dashboard

A modern, responsive analytics dashboard built with React, TypeScript, Material-UI, and Vite. This dashboard provides a clean and intuitive interface for visualizing key metrics and performance data.

## Features

- 📊 Interactive charts and data visualizations
- 📱 Fully responsive design that works on all devices
- 🎨 Custom theme with light/dark mode support
- ⚡ Fast and optimized performance with Vite
- 📈 Real-time data updates (simulated)
- 🔍 Advanced filtering and search capabilities
- 📱 Mobile-first approach with responsive sidebar
- 🛠 Built with modern React (Hooks, Context API)
- 🎨 Styled with Material-UI and styled-components

## Technologies Used

- [React 18](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Material-UI](https://mui.com/) - React UI component library
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React Router](https://reactrouter.com/) - Client-side routing
- [Chart.js](https://www.chartjs.org/) - Interactive charts
- [date-fns](https://date-fns.org/) - Date utility library
- [notistack](https://github.com/iamhosseindhv/notistack) - Snackbar notifications

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/analytics-dashboard.git
   cd analytics-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run serve` - Preview the production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── charts/        # Chart components
│   ├── layout/        # Layout components (Header, Sidebar, etc.)
│   ├── metrics/       # Metric cards and indicators
│   └── tables/        # Data table components
├── data/              # Mock data and API services
├── pages/             # Page components
├── theme/             # Theme configuration
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## Customization

### Theme

You can customize the theme by modifying the `src/theme/theme.js` file. The theme includes:

- Color palette
- Typography settings
- Component overrides
- Responsive breakpoints

### Environment Variables

Create a `.env` file in the root directory to set environment-specific variables:

```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE="Analytics Dashboard"
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Material-UI](https://mui.com/) for the amazing UI components
- [Vite](https://vitejs.dev/) for the blazing fast development experience
- [Chart.js](https://www.chartjs.org/) for the beautiful charts
- All the open-source contributors who made this project possible
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
