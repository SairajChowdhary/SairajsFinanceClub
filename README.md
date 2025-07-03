# FinanceClub - Personal Banking Dashboard

A modern, responsive banking dashboard built with React, TypeScript, and Tailwind CSS. Features real-time currency exchange rates, transaction tracking, and portfolio management.

## Features

- 🏦 **Multi-currency Portfolio Management** - Track balances across INR, USD, EUR, and GBP
- 💱 **Live Exchange Rates** - Real-time currency conversion with bank rate comparisons
- 📊 **Transaction Timeline** - Detailed transaction history with categorization
- 🌙 **Dark/Light Theme** - Seamless theme switching with system preference detection
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🔒 **Security Features** - Balance visibility toggle and encrypted transactions

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/sairajchowdhary/financeclub.git
cd financeclub
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CTAStrip.tsx    # Bottom call-to-action strip
│   ├── ExchangeRates.tsx # Currency exchange rates
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── ThemeToggle.tsx # Theme switching component
│   ├── TopBar.tsx      # Top navigation bar
│   ├── TransactionTimeline.tsx # Transaction history
│   └── WalletOverview.tsx # Portfolio overview
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Design System

The application uses a custom design system with:

- **Colors**: Blue accent (#2563EB) with light/dark theme support
- **Typography**: Inter font family with editorial styling
- **Spacing**: 8px grid system
- **Animations**: Smooth transitions and micro-interactions
- **Glass morphism**: Backdrop blur effects for modern UI

## Features in Detail

### Portfolio Management
- Real-time balance tracking across multiple currencies
- Visual progress indicators for account utilization
- Secure balance visibility toggle

### Transaction History
- Categorized transactions (Business, Travel, Shopping, etc.)
- Indian location-based transaction data
- Real-time status updates

### Exchange Rates
- Live currency conversion rates
- Bank rate comparisons showing savings
- Quick currency calculator

### Theme System
- Light, dark, and system preference modes
- Smooth transitions between themes
- Persistent theme selection

## Customization

### Adding New Currencies
Update the `currencies` array in `WalletOverview.tsx`:

```typescript
const currencies = [
  { code: 'INR', symbol: '₹', balance: 1047832.50, change: +2.34, flag: '🇮🇳' },
  // Add new currency here
];
```

### Modifying Transaction Categories
Update the `categoryColors` object in `TransactionTimeline.tsx`:

```typescript
const categoryColors = {
  Business: 'bg-blue-500/20 text-blue-400',
  // Add new category here
};
```

## Performance Optimizations

- Lazy loading of components
- Optimized animations with Framer Motion
- Efficient re-rendering with React hooks
- Minimized bundle size with Vite

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Sairaj Chowdhary - [GitHub](https://github.com/sairajchowdhary)

Project Link: [https://sairaj-financeclub.netlify.app](https://sairaj-financeclub.netlify.app)

## Acknowledgments

- Design inspiration from modern fintech applications
- Icons provided by Lucide React
- Animations powered by Framer Motion
- Deployed on Netlify
