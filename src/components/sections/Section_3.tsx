import { useEffect, useState } from "react";

export default function Section_3() {
  const [calendar, setCalendar] = useState("calendar_1");

  useEffect(() => {
    let currentIndex = 0;
    const calendars = ["calendar_1", "calendar_2", "calendar_3"];

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % calendars.length;
      setCalendar(calendars[currentIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex h-[1420px] w-full flex-col px-[16px]">
      <h2 className="text-on-bg-a-9 text-mobile-28b-emphasis-title mt-[25px]">
        에이고 효과
      </h2>
      <h2 className="text-mobile-28b-emphasis-title bg-gradient-to-r from-[#7393FF] to-[#1A1FFF] bg-clip-text text-transparent">
        AIGO
        <span className="text-on-bg-a-1">만의 차별화된 경쟁력</span>
      </h2>
      <div className="mt-[60px] flex flex-col items-center gap-[24px] sm:flex-row">
        {/* Card 1 */}
        <div className="flex h-[400px] w-full flex-col rounded-[8px] bg-gradient-to-b from-[#627DFE] to-[#4361FF] px-[26px]">
          <h3 className="text-mobile-24sb-title1 mt-[32px] text-white">
            매출 증대
          </h3>
          <p className="text-mobile-16sb-body mt-[12px] text-white">
            고객 DB 확보, 견적문의 <br />
            최소 2~10배 증가로 매출 증대
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex h-[400px] w-full flex-col rounded-[8px] bg-gradient-to-b from-[#7A6DFF] to-[#6750FE] px-[26px]">
          <h3 className="text-mobile-24sb-title1 mt-[32px] text-white">
            업무 효율 증가
          </h3>
          <p className="text-mobile-16sb-body mt-[12px] text-white">
            고객 DB 확보 10배 +<br /> 평균 견적 발행수 3배 +<br /> 웹사이트 체류
            시간 5배 +<br />
            영업팀 문의 증가량 3배 +
          </p>
          <div className="mt-[34px] flex w-full justify-center">
            <img
              src={`/images/${calendar}.png`}
              className="h-[146px] w-[220px]"
            />
          </div>
          <p className="text-mobile-12r-tag mt-[10px] text-white">
            *기존 단순 광고 (문의접수 대비)량
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex h-[400px] w-full flex-col rounded-[8px] bg-gradient-to-b from-[#6F86FF] to-[#A8B7FF] px-[26px]">
          <h3 className="text-mobile-24sb-title1 mt-[32px] text-white">
            글로벌 확장성
          </h3>
          <p className="text-mobile-16sb-body mt-[12px] text-white">
            쉬지 않는 에이고로 24시간 응대,
            <br />
            모든 언어와 해당 국가의 환율이 적용된 상담
          </p>
          <div className="relative mt-[34px] flex h-[200px] w-full items-center justify-center">
            <img src="/images/globe.svg" />
            <div className="absolute inset-0 z-0">
              {/* Currency Bubbles */}
              {/* ₩ */}
              <img
                src="/images/currency_bubble_1.svg"
                className="bubble-float-1 absolute top-[24%] left-[4%] z-10 h-[28px] w-[28px]"
              />
              {/* $ */}
              <img
                src="/images/currency_bubble_2.svg"
                className="bubble-float-2 absolute top-[-6%] left-[60%] h-[35px] w-[35px]"
              />
              {/* € */}
              <img
                src="/images/currency_bubble_3.svg"
                className="bubble-float-3 absolute top-[60%] left-[76%] h-[24px] w-[24px]"
              />
              {/* ¥ */}
              <img
                src="/images/currency_bubble_4.svg"
                className="bubble-float-4 absolute top-[73%] left-[55%] h-[37px] w-[37px]"
              />
              {/* Language Bubbles */}
              {/* こんにちは */}
              <img
                src="/images/language_bubble_1.svg"
                className="bubble-float-5 absolute top-[64%] left-[20%] h-[28px] w-[101px]"
              />
              {/* 你好 */}
              <img
                src="/images/language_bubble_2.svg"
                className="bubble-float-6 absolute top-[47%] left-[42%] h-[28px] w-[65px]"
              />
              {/* Hello */}
              <img
                src="/images/language_bubble_3.svg"
                className="bubble-float-7 absolute top-[5.5%] left-[25%] h-[28px] w-[60px]"
              />
              {/* Bonjour */}
              <img
                src="/images/language_bubble_4.svg"
                className="bubble-float-8 absolute top-[19%] left-[49%] h-[28px] w-[75px]"
              />
              {/* 안녕하세요 */}
              <img
                src="/images/language_bubble_5.svg"
                className="bubble-float-9 absolute top-[31%] left-[9%] h-[28px] w-[90px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
