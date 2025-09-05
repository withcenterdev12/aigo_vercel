export default function Section_2() {
  return (
    <section className="flex h-[660px] w-full flex-col px-[16px]">
      <h2 className="text-mobile-28b-emphasis-title text-on-bg-a-9 mt-[50px]">
        AI 견적
      </h2>
      <h2 className="text-mobile-28b-emphasis-title bg-gradient-to-r from-[#7393FF] to-[#1A1FFF] bg-clip-text text-transparent">
        1:1 상담 분석, <span className="text-on-bg-a-1">빠른</span> 견적{" "}
        <span className="text-on-bg-a-1"> 생성</span>
      </h2>
      <p className="text-mobile-16r-body-light text-on-bg-a-3">
        24시간 고객 상담, 맞춤 견적 자동처리로{" "}
        <br className="block sm:hidden" />
        매출 향상을 만드는 에이고
      </p>
      <div className="bg-surface-a relative mt-[60px] flex h-[400px] w-full flex-col items-center rounded-[12px]">
        <p className="text-on-surface-a-6 text-14m-subtext mt-[32px]">
          *AI 견적 받기 화면
        </p>
        <div className="absolute bottom-0">
          <img src="/images/phone_2.png" className="h-auto w-[226px]" />
        </div>
      </div>
    </section>
  );
}
