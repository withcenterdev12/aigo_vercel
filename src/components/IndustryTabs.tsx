import Button from "./common/Button";
import { industryOptions } from "../utils/constants";
import type { Dispatch, SetStateAction } from "react";

export default function IndustryTabs({
  selectedOption,
  setSelectedOption,
}: Readonly<{
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}>) {
  return (
    <div className="flex flex-col">
      <p className="text-mobile-15m-btn text-on-bg-a-2 self-center">
        상담 이력이 궁금한 산업군을 선택해주세요
      </p>
      <div className="mt-[12px] flex w-full flex-row justify-center gap-[8px]">
        {industryOptions.map((option) => (
          <Button
            onClick={() => {
              setSelectedOption(option.number);
            }}
            customStyle={`hover:cursor-pointer ${selectedOption === option.number ? "border-bg-tag-1 bg-tag-1 text-on-tag-1 text-mobile-15m-btn rounded-[20px] px-[12px] py-[8px]" : "border-tag-1 text-tag-1 text-mobile-15m-btn rounded-[20px] border-1 px-[12px] py-[8px]"}`}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
