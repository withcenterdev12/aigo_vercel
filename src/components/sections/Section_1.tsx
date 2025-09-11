import Button from "../common/Button";
import { useEffect, useState, useRef } from "react";
import SlotCounter from "react-slot-counter";

export default function Section_1() {
  const [animationStage, setAnimationStage] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInSection, setIsMouseInSection] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stages = [1, 2, 3, 4, 5];
    stages.forEach((stage, index) => {
      setTimeout(() => {
        setAnimationStage(stage);
        if (stage === 5) {
          // Start slider animation after all stages complete
          setTimeout(() => {
            animateSlider();
            setShowCounter(true);
          }, 600);
        }
      }, index * 400);
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseEnter = () => {
      setIsMouseInSection(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInSection(false);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  const animateSlider = () => {
    const startValue = 0;
    const endValue = 6;
    const duration = 1000;
    const startTime = Date.now();

    const updateSlider = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

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
    <section
      ref={sectionRef}
      className="relative flex h-[675px] w-full flex-col items-center overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#ECEFFE] sm:h-[920px]"
    >
      {/* Blob hover effect */}
      {isMouseInSection && (
        <div
          className="pointer-events-none absolute z-0 h-[200px] w-[200px] rounded-full opacity-0 blur-2xl transition-all duration-300 ease-out sm:opacity-60"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            background: `radial-gradient(circle, rgba(151, 168, 255, 0.8) 0%, rgba(115, 147, 255, 0.6) 40%, rgba(26, 31, 255, 0.4) 100%)`,
          }}
        />
      )}
      <h1
        className={`text-on-bg-e-1 text-mobile-28b-emphasis-title sm:text-pc-50sb-hero mt-[50px] transition-all duration-2000 ease-out sm:mt-[98px] ${
          animationStage >= 1
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <span>영업시간은 줄고, </span>
        <span className="mt-2 block sm:inline">매출은 느는 마법</span>
      </h1>
      <p
        className={`text-on-bg-e-2 text-mobile-16r-body-light sm:text-pc-20sb-body mt-[24px] transition-all duration-2000 ease-out ${
          animationStage >= 2
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        대표님, 영업은 AIGO한테 맡기고 퇴근하세요!
      </p>
      <p
        className={`text-on-bg-e-2 text-mobile-16r-body-light sm:text-pc-16r-subtext mt-[44px] transition-all duration-2000 ease-out ${
          animationStage >= 3
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        24시간 맞춤 견적 상담 AI
      </p>
      <Button
        onClick={() => {}}
        customStyle={`gap-2 text-on-btn-a bg-gradient-to-r from-[#7393FF] to-[#1A1FFF] px-[62px] py-[14px] sm:px-[42px] rounded-[16px] mt-[12px] transition-all duration-2000 ease-out z-10 sm:text-pc-20m-btn ${
          animationStage >= 4
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
        hasArrow
      >
        에이고 상품소개서 다운로드
      </Button>
      {/* PC View */}
      <div
        className={`absolute bottom-0 hidden translate-y-[17%] transition-all duration-2000 ease-out sm:flex ${animationStage >= 5 ? "opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <img
          src="/images/ipad_2.png"
          alt="iPad Mockup"
          className="h-[922px] w-[960px] object-contain"
        />
        <div className="absolute top-[34%] left-[75%] flex h-[43px] w-[260px] flex-row items-center justify-around rounded-[9px] bg-white shadow-md">
          <div className="flex items-center">
            <img
              src="/images/icon_ai_fill.svg"
              className="z-0 mr-2 h-[17.55px] w-[17.55px]"
            />
            <p className="text-pc-16r-subtext font-semibold text-[#2A2B2B]">
              기본 공통
            </p>
          </div>
          <p className="text-pc-16r-subtext font-semibold text-[#2A2B2B]">
            {showCounter ? (
              <SlotCounter value="90,000,000" startValue={0} duration={0.75} />
            ) : (
              <span className="invisible">90,000,000</span>
            )}
          </p>
          <img
            src="/images/icon_chevron_down.svg"
            className="h-[17.55px] w-[17.55px]"
          />
        </div>
        <div className="absolute top-[40%] left-[68.5%] flex h-[43px] w-[260px] flex-row items-center justify-around rounded-[9px] bg-white shadow-md">
          <div className="flex items-center">
            <img
              src="/images/icon_user.svg"
              className="mr-2 h-[17.55px] w-[17.55px]"
            />
            <p className="text-pc-16r-subtext font-semibold text-[#2A2B2B]">
              사용자 앱
            </p>
          </div>
          <p className="text-pc-16r-subtext font-semibold text-[#2A2B2B]">
            {showCounter ? (
              <SlotCounter value="120,000,000" startValue={0} duration={0.5} />
            ) : (
              <span className="invisible">120,000,000</span>
            )}
          </p>
          <img
            src="/images/icon_chevron_down.svg"
            className="h-[17.55px] w-[17.55px]"
          />
        </div>
        <div className="absolute top-[56.5%] -left-[5%] flex h-[127px] w-[356px] flex-col rounded-[9px] bg-white px-[14px] shadow-md">
          <p className="mt-[13.5px] text-[16px] font-bold">
            프로젝트 기간 설정{" "}
            <span className="text-[10px] font-light">(주 단위)</span>
          </p>
          <p className="text-[10px] font-light">
            견적기간을 늘릴 경우 할인된 금액으로 변경됩니다
          </p>
          <p className="mt-[20px] self-center text-[#1E83FF]">
            {sliderValue}
            <span className="font-semibold">주</span>
          </p>
          <input
            type="range"
            readOnly
            disabled
            min="0"
            max="8"
            value={sliderValue}
            className="slider h-1 w-full cursor-pointer appearance-none rounded-lg bg-[#B5B5B5]"
            style={{
              background: `linear-gradient(to right, #81AFE9 0%, #81AFE9 ${(sliderValue / 8) * 100}%, #B5B5B5 ${(sliderValue / 8) * 100}%, #B5B5B5 100%)`,
            }}
          />
          <div className="mt-[6px] flex w-full flex-row justify-between text-[7.8px] text-[#94949494]">
            <p>0주</p>
            <p>8주</p>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div
        className={`absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-[18.5%] transform justify-center transition-all duration-2000 ease-out sm:hidden ${
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
            min="0"
            max="8"
            value={sliderValue}
            className="slider h-1 w-full cursor-pointer appearance-none rounded-lg bg-[#B5B5B5]"
            style={{
              background: `linear-gradient(to right, #81AFE9 0%, #81AFE9 ${(sliderValue / 8) * 100}%, #B5B5B5 ${(sliderValue / 8) * 100}%, #B5B5B5 100%)`,
            }}
          />
          <div className="mt-[8px] flex w-full flex-row justify-between text-[7.8px] text-[#94949494]">
            <p>0주</p>
            <p>8주</p>
          </div>
        </div>
        <div className="absolute top-[43%] -left-[31%] z-20 flex h-[40px] w-[190px] flex-row items-center justify-around rounded-[9px] bg-white shadow-md">
          <div className="flex items-center">
            <img
              src="/images/icon_ai_fill.svg"
              className="mr-2 h-[17.55px] w-[17.55px]"
            />
            <p className="text-[10px] font-bold text-[#2A2B2B]">기본 공통</p>
          </div>
          <p className="text-[10px] font-bold text-[#2A2B2B]">
            {showCounter ? (
              <SlotCounter value="90,000,000" startValue={0} duration={0.75} />
            ) : (
              <span className="invisible">90,000,000</span>
            )}
          </p>
          <img
            src="/images/icon_chevron_down.svg"
            className="h-[17.55px] w-[17.55px]"
          />
        </div>
        <div className="absolute top-[58%] left-[28%] z-20 flex h-[40px] w-[190px] flex-row items-center justify-around rounded-[9px] bg-white shadow-md">
          <div className="flex items-center">
            <img
              src="/images/icon_user.svg"
              className="mr-2 h-[17.55px] w-[17.55px]"
            />
            <p className="text-[10px] font-bold text-[#2A2B2B]">사용자 앱</p>
          </div>
          <p className="text-[10px] font-bold text-[#2A2B2B]">
            {showCounter ? (
              <SlotCounter value="120,000,000" startValue={0} duration={0.5} />
            ) : (
              <span className="invisible">120,000,000</span>
            )}
          </p>
          <img
            src="/images/icon_chevron_down.svg"
            className="h-[17.55px] w-[17.55px]"
          />
        </div>
      </div>
    </section>
  );
}

// sm:h-[calc(100svh-66px)]
