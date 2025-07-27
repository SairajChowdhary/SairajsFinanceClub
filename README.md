# Bull Sheet - Personal Banking Dashboard
<img width="1440" height="900" alt="yesssss 2025-07-22 at 12 35 51 PM" src="https://github.com/user-attachments/assets/b50fad01-d1b4-44d9-a55f-9db7bfc9dd3a" />


A modern, responsive banking dashboard built with React, TypeScript, and Tailwind CSS. Features real-time currency exchange rates, transaction tracking, and portfolio management.

##  NOTE: So in order to host this webpage locally, run: 1.npm install 2. npm run dev
## Features

- 🏦 **Multi-currency Portfolio Management** - Track balances across INR, USD, EUR, and GBP
- 💱 **Live Exchange Rates** - Real-time currency conversion with bank rate comparisons
- 📊 **Transaction Timeline** - Detailed transaction history with categorization
- 🌙 **Dark/Light Theme** - Seamless theme switching with system preference detection
- 📱 **Responsive Design** - Optimised for desktop, tablet, and mobile devices
- 🔒 **Security Features** - Balance visibility toggle and encrypted transactions

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Github Pages

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

## Features in Detail

### Portfolio Management
- Real-time balance tracking across multiple currencies
- Visual progress indicators for account utilisation
- Secure balance visibility toggle

### Transaction History
- Categorised transactions
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
  
];
```

### Modifying Transaction Categories
Update the `categoryColors` object in `TransactionTimeline.tsx`:

```typescript
const categoryColors = {
  Business: 'bg-blue-500/20 text-blue-400',
  
};
```

## Performance Optimisations

- Lazy loading of components
- Optimised animations with Framer Motion
- Efficient re-rendering with React hooks
- Minimised bundle size with Vite

## Browser Support

- Chrome 90+
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

## Acknowledgments

- Design inspiration from modern fintech applications
- Icons provided by Lucide React
- Animations powered by Framer Motion
- Deployed on Github Pages
