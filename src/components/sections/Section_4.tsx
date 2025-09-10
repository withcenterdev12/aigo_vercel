import { useState } from "react";
import GridCard from "../common/GridCard";
import { gridOptions } from "../../utils/constants";

export default function Section_4() {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  const rowOne = gridOptions.slice(0, 3);
  const rowTwo = gridOptions.slice(3, 6);
  const rowThree = gridOptions.slice(6, 9);

  return (
    <section className="bg-bg-c flex w-full flex-col items-center overflow-x-hidden py-[25px]">
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
        <div className="mt-8 mb-[12px] flex flex-row justify-center">
          {rowOne.map((option) => (
            <GridCard
              key={option.index}
              iconUrl={option.image}
              label={option.label}
              isActive={selectedOption === option.index}
              onClick={() => handleOptionClick(option.index)}
            />
          ))}
        </div>
        {/* Mobile Graphic */}
        {selectedOption === 0 && <img src="/images/graphic_1.svg" />}
        {selectedOption === 1 && <img src="/images/graphic_2.svg" />}
        {selectedOption === 2 && <img src="/images/graphic_3.svg" />}
        <div className="mt-[12px] mb-[12px] flex flex-row justify-center">
          {rowTwo.map((option) => (
            <GridCard
              key={option.index}
              iconUrl={option.image}
              label={option.label}
              isActive={selectedOption === option.index}
              onClick={() => handleOptionClick(option.index)}
            />
          ))}
        </div>
        {/* Mobile Graphic */}
        {selectedOption === 3 && <img src="/images/graphic_4.svg" />}
        {selectedOption === 4 && <img src="/images/graphic_5.svg" />}
        {selectedOption === 5 && <img src="/images/graphic_6.svg" />}
        <div className="mt-[12px] mb-[12px] flex flex-row justify-center">
          {rowThree.map((option) => (
            <GridCard
              key={option.index}
              iconUrl={option.image}
              label={option.label}
              isActive={selectedOption === option.index}
              onClick={() => handleOptionClick(option.index)}
            />
          ))}
        </div>
        {/* Mobile Graphic */}
        {selectedOption === 6 && <img src="/images/graphic_7.svg" />}
        {selectedOption === 7 && <img src="/images/graphic_8.svg" />}
        {selectedOption === 8 && <img src="/images/graphic_9.svg" />}
      </div>
    </section>
  );
}
