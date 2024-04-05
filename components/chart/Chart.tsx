"use client";

import { ColorType, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

interface ChartProps {
  candleColor: "orrnrr" | "basic";
}

export default function Chart({ candleColor }: ChartProps) {
  const tmpCandleData = [
    { time: "2019-05-22", open: 59.09, high: 59.37, low: 58.96, close: 59.25 },
    { time: "2019-05-23", open: 59.0, high: 59.27, low: 58.54, close: 58.87 },
    { time: "2019-05-24", open: 59.07, high: 59.36, low: 58.67, close: 59.32 },
    { time: "2019-05-28", open: 59.21, high: 59.66, low: 59.02, close: 59.57 },
  ];

  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: "white" },
          textColor: "black",
        },
        width: chartContainerRef.current.clientWidth,
        height: 300,
      });
      const candlestickSeries = chart.addCandlestickSeries({
        upColor: candleColor === "orrnrr" ? "#FF5B6F" : "#FF0000",
        downColor: candleColor === "orrnrr" ? "#00C7DE" : "#0000FF",
        borderVisible: false,
        wickUpColor: candleColor === "orrnrr" ? "#FF5B6F" : "#FF0000",
        wickDownColor: candleColor === "orrnrr" ? "#00C7DE" : "#0000FF",
      });

      candlestickSeries.setData([...tmpCandleData]);
      chart.timeScale().fitContent();
    }

    return () => {};
  }, [candleColor]);
  return <div ref={chartContainerRef} />;
}
