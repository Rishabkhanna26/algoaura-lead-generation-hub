"use client";

import { useMemo, useState } from "react";
import { BarChart3, TrendingUp } from "lucide-react";

function formatNumber(value) {
  return new Intl.NumberFormat("en-IN").format(Math.round(value));
}

export default function GrowthEstimator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(5000);
  const [currentConversionRate, setCurrentConversionRate] = useState(2.0);
  const [targetConversionRate, setTargetConversionRate] = useState(4.0);
  const [averageDealValue, setAverageDealValue] = useState(20000);

  const stats = useMemo(() => {
    const currentLeads = (monthlyVisitors * currentConversionRate) / 100;
    const projectedLeads = (monthlyVisitors * targetConversionRate) / 100;
    const additionalLeads = Math.max(0, projectedLeads - currentLeads);

    const currentRevenue = currentLeads * averageDealValue;
    const projectedRevenue = projectedLeads * averageDealValue;
    const additionalRevenue = Math.max(0, projectedRevenue - currentRevenue);

    return {
      currentLeads,
      projectedLeads,
      additionalLeads,
      currentRevenue,
      projectedRevenue,
      additionalRevenue,
    };
  }, [averageDealValue, currentConversionRate, monthlyVisitors, targetConversionRate]);

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-14 animate-fade-up">
          <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2">
            <BarChart3 size={16} /> Interactive Projection
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-balance">
            Estimate Your <span className="gradient-text">Growth Potential</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Move the sliders to estimate how conversion and automation improvements can impact leads
            and potential monthly revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="system-card p-6 md:p-8 space-y-6">
            <label className="block">
              <div className="flex justify-between mb-2 text-sm terminal-text">
                <span>Monthly Website Visitors</span>
                <span>{formatNumber(monthlyVisitors)}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={monthlyVisitors}
                onChange={(event) => setMonthlyVisitors(Number(event.target.value))}
                className="w-full accent-[hsl(var(--primary))]"
              />
            </label>

            <label className="block">
              <div className="flex justify-between mb-2 text-sm terminal-text">
                <span>Current Conversion Rate</span>
                <span>{currentConversionRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.1"
                value={currentConversionRate}
                onChange={(event) => setCurrentConversionRate(Number(event.target.value))}
                className="w-full accent-[hsl(var(--primary))]"
              />
            </label>

            <label className="block">
              <div className="flex justify-between mb-2 text-sm terminal-text">
                <span>Target Conversion Rate</span>
                <span>{targetConversionRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="0.1"
                value={targetConversionRate}
                onChange={(event) => setTargetConversionRate(Number(event.target.value))}
                className="w-full accent-[hsl(var(--primary))]"
              />
            </label>

            <label className="block">
              <div className="flex justify-between mb-2 text-sm terminal-text">
                <span>Average Deal Value (INR)</span>
                <span>₹{formatNumber(averageDealValue)}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={averageDealValue}
                onChange={(event) => setAverageDealValue(Number(event.target.value))}
                className="w-full accent-[hsl(var(--primary))]"
              />
            </label>
          </div>

          <div className="system-card p-6 md:p-8">
            <h3 className="text-2xl font-heading font-bold mb-5 inline-flex items-center gap-2">
              <TrendingUp size={20} className="text-primary" /> Monthly Projection
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl">
                <p className="terminal-text text-xs text-muted-foreground uppercase">Current Leads</p>
                <p className="text-2xl font-heading font-bold mt-1">{formatNumber(stats.currentLeads)}</p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <p className="terminal-text text-xs text-muted-foreground uppercase">Projected Leads</p>
                <p className="text-2xl font-heading font-bold mt-1">{formatNumber(stats.projectedLeads)}</p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <p className="terminal-text text-xs text-muted-foreground uppercase">Additional Leads</p>
                <p className="text-2xl font-heading font-bold mt-1 text-primary">
                  +{formatNumber(stats.additionalLeads)}
                </p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <p className="terminal-text text-xs text-muted-foreground uppercase">Additional Revenue</p>
                <p className="text-2xl font-heading font-bold mt-1 text-primary">
                  ₹{formatNumber(stats.additionalRevenue)}
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-5">
              This is a planning estimate, not a guaranteed outcome. We use your actual funnel data
              during strategy to produce a custom execution forecast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
