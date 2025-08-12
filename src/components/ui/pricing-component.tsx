import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: "Free",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Perfect for getting started",
      features: [
        "Up to 25 club members",
        "Basic announcements",
        "Simple event creation",
        "Community support",
        "Basic club page"
      ],
      cta: "Get Started Free",
      highlighted: false
    },
    {
      name: "Pro",
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      description: "For growing clubs",
      features: [
        "Up to 100 club members",
        "Advanced announcements & pinning",
        "Event RSVPs & reminders",
        "Member roles & permissions",
        "Custom club branding",
        "Priority support",
        "Analytics dashboard"
      ],
      cta: "Start Pro Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      monthlyPrice: 29.99,
      annualPrice: 299.99,
      description: "For large organizations",
      features: [
        "Unlimited club members",
        "All Pro features",
        "Advanced analytics & insights",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options",
        "API access",
        "Bulk member management"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  const formatPrice = (price: number) => {
    if (price === 0) return "Free";
    return `$${price}`;
  };

  const AnimatedPrice = ({ price }: { price: number }) => (
    <motion.span
      key={`${price}-${isAnnual}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="text-4xl font-bold text-black dark:text-white w-32 text-center"
    >
      {formatPrice(price)}
    </motion.span>
  );

  return (
    <div className="bg-white dark:bg-black mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            Choose the perfect plan for your student club. Save 17% with annual billing.
          </p>

          <div className="inline-flex items-center bg-black/[0.03] dark:bg-white/[0.03] rounded-full p-1">
            <motion.button
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${!isAnnual
                  ? 'bg-black/[0.07] dark:bg-white/[0.07] text-black dark:text-white'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              onClick={() => setIsAnnual(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Monthly
            </motion.button>
            <motion.button
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${isAnnual
                  ? 'bg-black/[0.07] dark:bg-white/[0.07] text-black dark:text-white'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              onClick={() => setIsAnnual(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Annual
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl border ${plan.highlighted
                  ? 'border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] shadow-xl'
                  : 'border-black/[0.08] dark:border-white/[0.08] hover:border-black/10 dark:hover:border-white/10'
                } p-6 transition-all duration-300 h-[600px] flex flex-col`}
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-full blur-[2px]" />
                      <div className="relative px-4 py-1.5 bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-sm rounded-full border border-black/10 dark:border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="inline-block w-1 h-1 rounded-full bg-black/60 dark:bg-white/60 animate-pulse" />
                          <span className="text-xs font-medium text-black/80 dark:text-white/80">Most Popular</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

                                              <div className="mb-6 h-28">
                   <h3 className="text-xl font-medium text-black dark:text-white mb-3 text-center">{plan.name}</h3>
                   <div className="flex flex-col items-center text-center">
                     <AnimatedPrice 
                       price={isAnnual ? plan.annualPrice : plan.monthlyPrice} 
                     />
                     <div className="flex flex-col items-center gap-1 mt-1">
                       {plan.monthlyPrice > 0 && (
                         <span className="text-sm text-zinc-600 dark:text-zinc-400">
                           per club/{isAnnual ? 'year' : 'month'}
                         </span>
                       )}
                       {isAnnual && plan.monthlyPrice > 0 && (
                         <motion.span 
                           className="text-sm text-green-600 dark:text-green-400"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.2 }}
                         >
                           Save ${((plan.monthlyPrice * 12) - plan.annualPrice).toFixed(2)} per year
                         </motion.span>
                       )}
                     </div>
                   </div>
                 </div>

                             <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-2.5"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                  >
                    <Check className="h-4 w-4 text-black/30 dark:text-white/30" />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className={`w-full py-2.5 px-4 rounded-xl text-sm font-medium transition-colors mt-auto ${plan.highlighted
                    ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90'
                    : 'border border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.03]'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing; 