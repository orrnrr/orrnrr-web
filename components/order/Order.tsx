import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import OrderForm from "./OrderForm";

export default function Order() {
  return (
    <>
      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="buy" className="flex-1">
            매수
          </TabsTrigger>
          <TabsTrigger value="sell" className="flex-1">
            매도
          </TabsTrigger>
        </TabsList>
        <TabsContent value="buy">
          <OrderForm type="buy" />
        </TabsContent>
        <TabsContent value="sell">
          <OrderForm type="sell" />
        </TabsContent>
      </Tabs>
    </>
  );
}
