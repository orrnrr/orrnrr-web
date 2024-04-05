"use client";

import Chart from "@/components/chart/Chart";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [candleColor, setCandleColor] = useState<"orrnrr" | "basic">("orrnrr");
  console.log(candleColor);
  return (
    <>
      <Chart candleColor={candleColor} />
      <Button
        onClick={() =>
          setCandleColor(candleColor === "orrnrr" ? "basic" : "orrnrr")
        }
      >
        캔들색 변경
      </Button>
    </>
  );
}
