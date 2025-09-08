import Button from "./common/Button";
import { industryOptions } from "../utils/constants";
import type { Dispatch, SetStateAction } from "react";

export default function IndustryTabs({
  selectedOption,
  setSelectedOption,
  roundedSide,
}: Readonly<{
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  roundedSide: string;
}>) {
  return (
    <div
      className={`flex h-auto flex-col justify-center sm:h-[170px] sm:bg-[#F2EFFF] ${roundedSide === "up" ? "sm:rounded-t-[20px]" : "sm:rounded-b-[20px]"}`}
    >
      <p className="text-mobile-15m-btn text-on-bg-a-2 sm:text-on-surface-c-1 self-center">
        상담 이력이 궁금한 산업군을 선택해주세요
      </p>
      <div className="mt-[12px] flex w-full flex-row justify-center gap-[8px] sm:gap-[20px]">
        {industryOptions.map((option) => (
          <Button
            onClick={() => {
              setSelectedOption(option.number);
            }}
            customStyle={`hover:cursor-pointer ${selectedOption === option.number ? "border-bg-tag-1 bg-tag-1 text-on-tag-1 text-mobile-15m-btn rounded-[20px] sm:rounded-[30px] px-[12px] sm:px-[16px] py-[8px] sm:py-[10px]" : "border-tag-1 text-tag-1 text-mobile-15m-btn rounded-[20px] sm:rounded-[30px] border-1 px-[12px] sm:-[16px] py-[8px] sm:py-[10px]"}`}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
