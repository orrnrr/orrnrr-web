"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// form에 대한 스키마 지정해야함
// const orderFormSchema  = z.object({
// })
interface OrderFormSchema {
  price: number;
  quantity: number;
}

export default function OrderForm({ type }: { type: "buy" | "sell" }) {
  const form = useForm<OrderFormSchema>({
    defaultValues: {
      price: 10000,
      quantity: 0,
    },
  });

  function onSubmit() {
    // TODO : 매수 매도 주문 api 적용 부분 추가
    if (type === "buy") {
      alert("매수 주문 완료");
    } else {
      alert("매도 주문 완료");
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="price"
          render={({ field }) => (
            <FormItem className="flex justify-center items-center">
              <FormLabel>{type === "buy" ? "매수" : "매도"}가격(pt)</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="quantity"
          render={({ field }) => (
            <FormItem className="flex justify-center items-center">
              <FormLabel>주문수량(tk)</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex space-x-1">
          <Button type="reset" className="flex-1 bg-gray-400">
            초기화
          </Button>
          {type === "buy" ? (
            <Button type="submit" className="flex-1 bg-rise">
              매수
            </Button>
          ) : (
            <Button type="submit" className="flex-1 bg-fall">
              매도
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
