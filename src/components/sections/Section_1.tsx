import { useEffect, useState } from "react";
import Button from "../common/Button";

export default function Section_1() {
  const [animationStage, setAnimationStage] = useState(0);
  const [sliderValue, setSliderValue] = useState(12);

  useEffect(() => {
    const stages = [1, 2, 3, 4, 5];
    stages.forEach((stage, index) => {
      setTimeout(() => {
        setAnimationStage(stage);
        if (stage === 5) {
          // Start slider animation after all stages complete
          setTimeout(() => {
            animateSlider();
          }, 600);
        }
      }, index * 400);
    });
  }, []);

  const animateSlider = () => {
    const startValue = 12;
    const endValue = 28;
    const duration = 750;
    const startTime = Date.now();

    const updateSlider = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Eased animation (ease-out)
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(
        startValue + (endValue - startValue) * easedProgress,
      );

      setSliderValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateSlider);
      }
    };

    requestAnimationFrame(updateSlider);
  };

  return (
    <section className="relative flex h-[675px] w-full flex-col items-center overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#ECEFFE]">
      <h1
        className={`text-on-bg-e-1 text-28b-emphasis-title mt-[50px] transition-all duration-2000 ease-out ${
          animationStage >= 1
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        영업시간은 줄고, <br className="block sm:hidden" /> 매출은 느는 마법
      </h1>
      <p
        className={`text-on-bg-e-2 text-16r-body-light mt-[24px] transition-all duration-2000 ease-out ${
          animationStage >= 2
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        대표님, 영업은 AIGO한테 맡기고 퇴근하세요!
      </p>
      <p
        className={`text-on-bg-e-2 text-16r-body-light mt-[44px] transition-all duration-2000 ease-out ${
          animationStage >= 3
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        24시간 맞춤 견적 상담 AI
      </p>
      <Button
        onClick={() => {}}
        customStyle={`text-on-btn-a bg-gradient-to-r from-[#7393FF] to-[#1A1FFF] px-[70px] py-[14px] rounded-[16px] mt-[12px] transition-all duration-2000 ease-out ${
          animationStage >= 4
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        에이고 상품소개서 다운로드
      </Button>
      <div
        className={`absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-[18.5%] transform justify-center transition-all duration-2000 ease-out ${
          animationStage >= 5 ? "opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <img
          src="/images/phone_1.png"
          alt="Phone Mockup"
          className="h-[400px] w-[202px] flex-shrink-0 object-contain"
        />
        <div className="absolute top-[2.5%] left-[28%] z-20 flex h-[115px] w-[200px] flex-col rounded-[9px] bg-white px-[13.5px] shadow-md">
          <p className="mt-[13.5px] text-[12px] font-bold">
            프로젝트 기간 설정{" "}
            <span className="text-[10px] font-light">(주 단위)</span>
          </p>
          <p className="text-[7.8px] text-[#2A2B2B]">
            견적기간을 늘릴 경우 할인된 금액으로 변경됩니다
          </p>
          <p className="mt-[10px] self-center text-[#1E83FF]">
            {sliderValue}
            <span className="font-semibold">주</span>
          </p>
          <input
            type="range"
            readOnly
            disabled
            min="12"
            max="36"
            value={sliderValue}
            className="slider h-1 w-full cursor-pointer appearance-none rounded-lg bg-[#B5B5B5]"
            style={{
              background: `linear-gradient(to right, #81AFE9 0%, #81AFE9 ${((sliderValue - 12) / (36 - 12)) * 100}%, #B5B5B5 ${((sliderValue - 12) / (36 - 12)) * 100}%, #B5B5B5 100%)`,
            }}
          />
        </div>
        <div className="justify absolute top-[43%] -left-[31%] z-20 flex h-[40px] w-[190px] flex-row items-center justify-around rounded-[9px] bg-white shadow-md">
          <div className="flex items-center">
            <img
              src="/images/icon_ai_fill.svg"
              className="h-[17.55px] w-[17.55px]"
            />
            <p className="text-[10px] font-bold text-[#2A2B2B]">기본 공통</p>
          </div>
          <p className="text-[10px] font-bold text-[#2A2B2B]">15,000,000</p>
          <img
            src="/images/icon_chevron_down.svg"
            className="h-[17.55px] w-[17.55px]"
          />
        </div>
        <div className="absolute top-[58%] left-[28%] z-20 h-[40px] w-[190px] rounded-[9px] bg-white shadow-md"></div>
      </div>
    </section>
  );
}
