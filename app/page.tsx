import Chart from "@/components/chart/Chart";
import Order from "@/components/order/Order";
import RealTimeOrder from "@/components/realTimeOrder/RealTimeOrder";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center bg-gray-200 pt-2">
        <div className="w-[1400px] px-4 flex justify-around">
          <div className="w-[1000px] flex flex-col gap-2">
            <Card className="w-full px-4 py-6">
              <Chart candleColor="orrnrr" />
            </Card>
            <div className="w-full flex gap-2">
              <Card className="flex-1">
                <RealTimeOrder />
              </Card>
              <Card className="flex-1">
                <Order />
              </Card>
            </div>
          </div>
          <div className="w-[300px]">
            <Card className="w-full h-96"></Card>
          </div>
        </div>
      </div>
    </>
  );
}
