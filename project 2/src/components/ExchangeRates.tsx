import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

// Real-world exchange rates with Indian focus
const exchangeRates = [
  { 
    pair: 'USD/INR', 
    rate: 83.2450, 
    change: +0.15, 
    changePercent: +0.18,
    high: 83.28,
    low: 83.12,
    bankRate: 83.80,
    spread: 0.55
  },
  { 
    pair: 'EUR/INR', 
    rate: 90.6720, 
    change: -0.23, 
    changePercent: -0.25,
    high: 90.89,
    low: 90.45,
    bankRate: 91.20,
    spread: 0.53
  },
  { 
    pair: 'GBP/INR', 
    rate: 105.2340, 
    change: +0.45, 
    changePercent: +0.43,
    high: 105.67,
    low: 104.89,
    bankRate: 105.85,
    spread: 0.62
  },
  { 
    pair: 'AED/INR', 
    rate: 22.6580, 
    change: +0.08, 
    changePercent: +0.35,
    high: 22.71,
    low: 22.58,
    bankRate: 22.95,
    spread: 0.29
  },
];

export const ExchangeRates: React.FC = () => {
  const [lastUpdate, setLastUpdate] = React.useState(new Date());

  const handleRefresh = () => {
    setLastUpdate(new Date());
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-editorial">Currency Exchange</h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Live rates for international transfers</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05, rotate: 180 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRefresh}
          className="p-3 bg-light-glass dark:bg-dark-glass rounded-full hover:bg-lime-accent/10 transition-colors duration-300"
        >
          <RefreshCw className="w-5 h-5 text-light-text dark:text-dark-text" />
        </motion.button>
      </motion.div>

      {/* Rates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {exchangeRates.map((rate, index) => (
          <motion.div
            key={rate.pair}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6 hover:border-lime-accent/30 transition-all hover:shadow-glow duration-300"
          >
            {/* Pair Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">{rate.pair}</h3>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Updated: {lastUpdate.toLocaleTimeString()}</p>
              </div>
              <div className={`flex items-center space-x-1 ${rate.change >= 0 ? 'text-lime-accent' : 'text-red-400'}`}>
                {rate.change >= 0 ? (
                  <TrendingUp className="w-5 h-5" />
                ) : (
                  <TrendingDown className="w-5 h-5" />
                )}
                <span className="font-medium">{rate.changePercent > 0 ? '+' : ''}{rate.changePercent}%</span>
              </div>
            </div>

            {/* Rate Display */}
            <div className="space-y-3">
              <div className="flex items-baseline space-x-2">
                <motion.span
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-3xl font-bold text-lime-accent font-editorial"
                >
                  ₹{rate.rate.toFixed(2)}
                </motion.span>
                <span className={`text-sm ${rate.change >= 0 ? 'text-lime-accent' : 'text-red-400'}`}>
                  {rate.change > 0 ? '+' : ''}{rate.change.toFixed(2)}
                </span>
              </div>

              {/* High/Low */}
              <div className="flex justify-between text-sm">
                <div>
                  <span className="text-light-text-secondary dark:text-dark-text-secondary">High: </span>
                  <span className="text-light-text dark:text-dark-text font-medium">₹{rate.high.toFixed(2)}</span>
                </div>
                <div>
                  <span className="text-light-text-secondary dark:text-dark-text-secondary">Low: </span>
                  <span className="text-light-text dark:text-dark-text font-medium">₹{rate.low.toFixed(2)}</span>
                </div>
              </div>

              {/* Bank Comparison */}
              <div className="pt-3 border-t border-light-border dark:border-dark-border">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-light-text-secondary dark:text-dark-text-secondary">Bank Rate:</span>
                  <span className="text-light-text dark:text-dark-text">₹{rate.bankRate.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-light-text-secondary dark:text-dark-text-secondary">You Save:</span>
                  <span className="text-lime-accent font-medium">₹{rate.spread.toFixed(2)}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-light-glass dark:bg-dark-glass rounded-full h-1 mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((rate.rate - rate.low) / (rate.high - rate.low) * 100, 100)}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.4 }}
                    className="h-1 bg-lime-accent rounded-full opacity-70"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Exchange */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-r from-light-surface/80 to-light-glass dark:from-dark-surface/80 dark:to-dark-glass border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass transition-colors duration-300"
      >
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial mb-4">Quick Currency Calculator</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">From</label>
            <div className="flex">
              <select className="bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-l-xl px-3 py-2 text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300">
                <option>INR</option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
              <input
                type="number"
                placeholder="10000"
                className="bg-light-glass dark:bg-dark-glass border border-l-0 border-light-border dark:border-dark-border rounded-r-xl px-3 py-2 text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 flex-1 transition-colors duration-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">To</label>
            <div className="flex">
              <select className="bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-l-xl px-3 py-2 text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300">
                <option>USD</option>
                <option>INR</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
              <input
                type="number"
                placeholder="120.15"
                className="bg-light-glass dark:bg-dark-glass border border-l-0 border-light-border dark:border-dark-border rounded-r-xl px-3 py-2 text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 flex-1 transition-colors duration-300"
                readOnly
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-lime-accent text-light-base dark:text-dark-base px-6 py-3 rounded-xl font-medium hover:shadow-glow transition-all"
          >
            Convert Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};