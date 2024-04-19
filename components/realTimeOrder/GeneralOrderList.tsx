import { ScrollArea } from "../ui/scroll-area";

const sampleList = [
  {
    id: 0,
    usd: "148.47",
    per: "-0.74%",
  },
  {
    id: 1,
    usd: "148.46",
    per: "-0.75%",
  },
  {
    id: 2,
    usd: "148.45",
    per: "-0.76%",
  },
  {
    id: 3,
    usd: "148.44",
    per: "-0.77%",
  },
  {
    id: 4,
    usd: "148.43",
    per: "-0.78%",
  },
  {
    id: 5,
    usd: "148.42",
    per: "-0.79%",
  },
  {
    id: 6,
    usd: "148.41",
    per: "-0.80%",
  },
  {
    id: 7,
    usd: "148.40",
    per: "-0.81%",
  },
  {
    id: 8,
    usd: "148.39",
    per: "-0.82%",
  },
  {
    id: 9,
    usd: "148.38",
    per: "-0.83%",
  },
  {
    id: 10,
    usd: "148.28",
    per: "-0.84%",
  },
  {
    id: 11,
    usd: "148.27",
    per: "-0.90%",
  },
  {
    id: 12,
    usd: "148.26",
    per: "-0.90%",
  },
  {
    id: 13,
    usd: "148.25",
    per: "-0.91%",
  },
  {
    id: 14,
    usd: "148.24",
    per: "-0.92%",
  },
  {
    id: 15,
    usd: "148.23",
    per: "-0.92%",
  },
  {
    id: 16,
    usd: "148.22",
    per: "-0.93%",
  },
  {
    id: 17,
    usd: "148.21",
    per: "-0.94%",
  },
  {
    id: 18,
    usd: "148.20",
    per: "-0.95%",
  },
  {
    id: 19,
    usd: "148.19",
    per: "-0.96%",
  },
];

const sampleCurrent = "148.36";

export default function GeneralOrderList() {
  return (
    <>
      <ScrollArea className="h-[600px] bg-slate-200">
        {sampleList.map((item) => (
          <div key={item.id} className="bg-red-50 h-[40px]">
            <span className="text-base ">{item.usd}</span>
            <span className="text-sm">{item.per}</span>
          </div>
        ))}
      </ScrollArea>
      <div className="h-[40px] bg-pink-50"></div>
    </>
  );
}
