import { navigationBarItems } from "../utils/constants";
import Button from "./common/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto flex h-[46px] w-full flex-row items-center justify-between bg-white px-[16px] sm:h-[66px] sm:px-[60px]">
      <div className="flex flex-row items-center gap-[80px]">
        <img src="/images/header_logo.png" className="h-[20px] w-[68px]" />
        <nav className="hidden flex-row gap-[32px] sm:flex">
          {navigationBarItems.map((item) => (
            <p className="text-mobile-15m-btn text-on-bg-a-3">{item.label}</p>
          ))}
        </nav>
      </div>
      <div className="flex flex-row gap-[12px]">
        <Button
          onClick={() => {}}
          customStyle="text-on-btn-a-emphasis text-mobile-15m-btn border px-[10px] py-[6px] rounded-[8px] "
        >
          서비스 체험
        </Button>
        <Button
          onClick={() => {}}
          customStyle="text-on-btn-a text-mobile-15m-btn bg-gradient-to-r from-[#7393FF] to-[#1A1FFF] px-[10px] py-[6px] rounded-[8px]"
        >
          가입문의
        </Button>
      </div>
    </header>
  );
}
