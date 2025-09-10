import { useState } from "react";
import GridCard from "../common/GridCard";
import { gridOptions } from "../../utils/constants";

export default function Section_4() {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <section className="bg-bg-c flex w-full flex-col items-center overflow-x-hidden pt-[25px]">
      <div>
        <h2 className="text-mobile-14m-subtext text-bg-c-5 text-center">
          비즈니스 맞춤 분석 <br />
          <span className="text-mobile-28b-emphasis-title text-bg-c-2">
            24시간 영업 리포트
          </span>
        </h2>
        <p className="text-mobile-14m-subtext text-on-surface-b-4 mt-[50px] text-center">
          *매일 이메일로 발송되는 AI 리포트로 유입 트래픽 분석
        </p>
        <div className="mt-8 grid grid-cols-3 place-items-center gap-2 px-[16px]">
          {gridOptions.map((option, index) => (
            <GridCard
              key={index}
              iconUrl={option.image}
              label={option.label}
              isActive={selectedOption === index}
              onClick={() => handleOptionClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
