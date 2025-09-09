export default function Section_5() {
  return (
    <section className="flex min-h-[690px] w-full flex-col items-center px-[16px] pt-[50px] pb-[25px]">
      <div className="flex w-full max-w-[960px] flex-col">
        <h2 className="text-mobile-28b-emphasis-title sm:text-center">
          <span className="text-on-bg-a-4 sm:text-pc-20sb-body sm:text-on-bg-e-4">
            에이고 기능
          </span>
          <br />
          에이고{" "}
          <span className="bg-gradient-to-r from-[#7393FF] to-[#1A1FFF] bg-clip-text text-transparent">
            견적 기능
          </span>
          의 핵심
        </h2>
        <div className="no-scrollbar mt-[60px] flex flex-row gap-[20px] overflow-x-auto">
          {/* Card 1 */}
          <div className="bg-surface-a relative flex h-[360px] w-[300px] flex-shrink-0 flex-col rounded-[16px] px-[32px] py-[28px]">
            <img src="/images/card_image_1.svg" />
            <p className="text-mobile-20sb-title2 mt-[32px]">
              PDF/이미지/URL 분석
            </p>
            <p className="text-mobile-16sb-body text-on-surface-a-5 mt-[12px] tracking-tight">
              다양한 매체의 자료를 분석하고 <br />
              빠르고 정확한 결과를 도출
            </p>
            <div className="bg-tag-1 absolute top-[3.5%] right-[10%] flex items-center justify-center rounded-[20px] px-[10px] py-[4px]">
              <p className="text-on-tag-1 text-mobile-15m-btn">공통</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-a relative flex h-[360px] w-[300px] flex-shrink-0 flex-col rounded-[16px] px-[32px] py-[28px]">
            <img src="/images/card_image_2.svg" />
            <p className="text-mobile-20sb-title2 mt-[32px]">
              견적서 공유링크 보안 설정
            </p>
            <p className="text-mobile-16sb-body text-on-surface-a-5 mt-[12px]">
              유효기간, 비밀번호 설정을 통해
              <br />
              보안 강화 및 혼선 방지
            </p>
            <div className="bg-tag-1 absolute top-[3.5%] right-[10%] flex items-center justify-center rounded-[20px] px-[10px] py-[4px]">
              <p className="text-on-tag-1 text-mobile-15m-btn">직원 PRO</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-a relative flex h-[360px] w-[300px] flex-shrink-0 flex-col rounded-[16px] px-[32px] py-[28px]">
            <img src="/images/card_image_3.svg" />
            <p className="text-mobile-20sb-title2 mt-[32px]">
              PDF 견적서 다운로드 및 공유
            </p>
            <p className="text-mobile-16sb-body text-on-surface-a-5 mt-[12px] tracking-tight">
              별도 변환 없이 즉시 전달 가능한 자료로 의사소통 시간 단축
            </p>
            <div className="bg-tag-1 absolute top-[3.5%] right-[10%] flex items-center justify-center rounded-[20px] px-[10px] py-[4px]">
              <p className="text-on-tag-1 text-mobile-15m-btn">공통</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-surface-a relative flex h-[360px] w-[300px] flex-shrink-0 flex-col rounded-[16px] px-[32px] py-[28px]">
            <img src="/images/card_image_4.svg" />
            <p className="text-mobile-20sb-title2 mt-[32px] tracking-tight">
              엑셀 견적서 다운로드, 수정가능
            </p>
            <p className="text-mobile-16sb-body text-on-surface-a-5 mt-[12px]">
              최신 데이터를 엑셀로 내려받아
              <br />
              바로 공유 가능
            </p>
            <div className="bg-tag-1 absolute top-[3.5%] right-[10%] flex items-center justify-center rounded-[20px] px-[10px] py-[4px]">
              <p className="text-on-tag-1 text-mobile-15m-btn">직원 PRO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
