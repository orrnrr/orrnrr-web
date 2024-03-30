import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import DarkModeSwitch from "../darkModeSwitch/DarkModeSwitch";

export default function Header() {
  return (
    <header className="bg-main w-full h-14 flex flex-col items-center justify-center fixed top-0 z-50">
      <div className="w-[1400px] flex justify-between items-center gap-4 px-4">
        <h1 className="flex-none text-2xl font-bold text-white">
          <Link href="/">OrrNrr</Link>
        </h1>
        <ul className="flex-auto  flex text-white px-4 gap-6">
          <li>
            <Link href="/exchange">거래소</Link>
          </li>
          <li>
            <Link href="/badge">뱃지</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <DarkModeSwitch />
        </div>
        <ul className="flex items-center gap-4 text-white">
          <li>
            <Link href="/login">로그인</Link>
          </li>
          <li>
            <Link href="/signup">회원가입</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
