import { useState } from "react";
import IndustryTabs from "../IndustryTabs";

export default function Section_8() {
  const [selectedOption, setSelectedOption] = useState("option_1");

  return (
    <section className="flex h-full w-full flex-col pt-[40px] pb-[20px]">
      <h2 className="text-mobile-28b-emphasis-title text-on-bg-a-1 mx-[16px] mb-[60px]">
        <span className="text-on-bg-a-4">시나리오</span> <br /> 산업군 별 에이고
        활용 예시
      </h2>
      <IndustryTabs
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <img
        src={`/images/mobile_${selectedOption}.png`}
        className="mt-[40px] mb-[20px] h-full w-full"
      />
      <IndustryTabs
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </section>
  );
}
