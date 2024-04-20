import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import GeneralOrderList from "./GeneralOrderList";

export default function RealTimeOrder() {
  return (
    <>
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="general" className="w-[110px]">
            일반호가
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <GeneralOrderList />
        </TabsContent>
      </Tabs>
    </>
  );
}
