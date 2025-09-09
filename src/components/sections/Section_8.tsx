import Chat_1 from "../Chat_1";
import { useState } from "react";
import IndustryTabs from "../IndustryTabs";

export default function Section_8() {
  const [selectedOption, setSelectedOption] = useState("option_1");

  return (
    <section className="flex h-full w-full flex-col items-center"></section>
  );
}

// <section className="flex h-full w-full flex-col items-center pt-[40px] pb-[20px] sm:px-[240px] sm:py-[100px]">
//   <h2 className="text-mobile-28b-emphasis-title text-on-bg-a-1 sm:text-pc-32b-emphasis-title mx-[16px] mb-[60px] self-center sm:text-center">
//     <span className="text-on-bg-a-4 sm:text-pc-20sb-body">시나리오</span>{" "}
//     <br /> 산업군 별 에이고 활용 예시
//   </h2>
// <IndustryTabs
//   selectedOption={selectedOption}
//   setSelectedOption={setSelectedOption}
//   roundedSide="up"
// />
//   {selectedOption && <Chat_1 />}

//   <IndustryTabs
//     selectedOption={selectedOption}
//     setSelectedOption={setSelectedOption}
//     roundedSide="down"
//   />
// </section>
