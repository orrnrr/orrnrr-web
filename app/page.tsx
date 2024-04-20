"use client";

import RealTimeOrder from "@/components/realTimeOrder/RealTimeOrder";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Card className="w-[550px] px-4 py-6">
        <RealTimeOrder />
      </Card>
    </>
  );
}
