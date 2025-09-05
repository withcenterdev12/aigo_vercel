import Button from "./common/Button";

export default function Header() {
  return (
    <header className="mx-auto flex h-[46px] w-full flex-row items-center justify-between px-[16px]">
      <img src="/images/header_logo.png" className="h-[20px] w-[68px]" />
      <div className="flex flex-row gap-[12px]">
        <Button
          onClick={() => {}}
          customStyle="text-on-btn-a-emphasis text-15m-btn border px-[10px] py-[6px] rounded-[8px]"
        >
          서비스 체험
        </Button>
        <Button
          onClick={() => {}}
          customStyle="text-on-btn-a text-15m-btn bg-gradient-to-r from-[#7393FF] to-[#1A1FFF] px-[10px] py-[6px] rounded-[8px]"
        >
          가입문의
        </Button>
      </div>
    </header>
  );
}
