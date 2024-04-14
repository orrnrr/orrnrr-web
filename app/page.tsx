"use client";

import Chart from "@/components/chart/Chart";
import Order from "@/components/order/Order";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [candleColor, setCandleColor] = useState<"orrnrr" | "basic">("orrnrr");
  console.log(candleColor);
  return (
    <>
      <Card className="w-[490px] px-4 py-6">
        <Order />
      </Card>
    </>
  );
}
