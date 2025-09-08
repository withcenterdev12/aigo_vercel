export default function Section_2() {
  return (
    <section className="flex h-[660px] w-full flex-col px-[16px] sm:h-[1220px] sm:px-[120px]">
      {/* Mobile View Section Header */}
      <h2 className="text-mobile-28b-emphasis-title text-on-bg-a-9 mt-[50px] block sm:hidden">
        AI 견적
      </h2>
      <h2 className="text-mobile-28b-emphasis-title block bg-gradient-to-r from-[#7393FF] to-[#1A1FFF] bg-clip-text text-transparent sm:hidden">
        1:1 상담 분석, <span className="text-on-bg-a-1">빠른</span> 견적{" "}
        <span className="text-on-bg-a-1"> 생성</span>
      </h2>
      <p className="text-mobile-16r-body-light text-on-bg-a-3 block sm:hidden">
        24시간 고객 상담, 맞춤 견적 자동처리로{" "}
        <br className="block sm:hidden" />
        매출 향상을 만드는 에이고
      </p>
      {/* Container */}
      <div className="bg-surface-a relative mt-[60px] flex h-[400px] w-full flex-col items-center rounded-[12px] sm:mt-[100px] sm:h-[1020px]">
        {/* PC View Elements */}
        <h2 className="text-pc-20sb-body text-on-surface-a-5 mt-[40px] hidden sm:block">
          AI 견적
        </h2>
        <h2 className="text-pc-32b-emphasis-title text-on-surface-a-1 mt-[16px] hidden sm:block">
          1:1 상담 분석<span className="text-on-surface-a-7">, 빠른</span> 견적
          <span className="text-on-surface-a-7">생성</span>
        </h2>
        <p className="text-pc-16r-subtext text-on-surface-a-6 mt-[16px] hidden sm:block">
          24시간 고객 상담, 맞춤 견적 자동처리로 매출 향상을 만드는 에이고
        </p>
        <div className="relative mt-[60px] hidden h-[800px] w-full sm:block">
          <img
            src="/images/showcase_ipad.png"
            className="absolute right-[5%] z-20 h-auto w-[620px]"
          />
          <img
            src="/images/slant_ipad.png"
            className="absolute top-[38.75%] left-[10.25%] z-10 h-auto w-[446.42px]"
          />
          <img
            src="/images/shadow.png"
            className="absolute top-[55%] left-[6.5%] z-0 h-auto w-[494.11px]"
          />
          <p className="text-pc-16r-subtext text-on-surface-a-5 absolute bottom-[5%] left-1/2 -translate-x-1/2">
            *에이고는 라이트 모드와 다크 모드를 지원합니다.
          </p>
        </div>
        {/* Mobile View Elements */}
        <p className="text-on-surface-a-6 text-14m-subtext mt-[32px] block sm:hidden">
          *AI 견적 받기 화면
        </p>
        <div className="absolute bottom-0 block sm:hidden">
          <img src="/images/phone_2.png" className="h-auto w-[226px]" />
        </div>
      </div>
    </section>
  );
}
