export default function Section_9() {
  return (
    <section className="flex h-[680px] w-full flex-col px-[16px] py-[25px]">
      <div className="flex flex-col">
        <h2 className="text-mobile-28b-emphasis-title">
          <span className="text-on-bg-a-9">추천 대상</span>
          <br />
          이런 분들께 추천드립니다
        </h2>
        {/* Card 1 */}
        <div className="bg-surface-a mt-[60px] flex h-[108px] w-full flex-row items-center gap-[20px] rounded-[12px] px-[12px] py-[16px]">
          <img src="/images/uptrend_icon.svg" className="h-[50px] w-[50px]" />
          <div className="flex flex-col">
            <p className="text-mobile-20sb-title2 text-on-surface-a-7">
              AIGO <span className="text-on-surface-a-1">고객용</span>
            </p>
            <p>
              우리 회사 영업 사정에 따라 <br />
              <span className="font-semibold">매출이 시급 할</span> 때
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-surface-a mt-[16px] flex h-[108px] w-full flex-row items-center gap-[20px] rounded-[12px] px-[12px] py-[16px]">
          <img src="/images/lock_icon.svg" className="h-[50px] w-[50px]" />
          <div className="flex flex-col">
            <p className="text-mobile-20sb-title2 text-on-surface-a-7">
              AIGO <span className="text-on-surface-a-1">직원용</span>
            </p>
            <p>
              우리 회사 단가표를 오픈하는게 <br />
              <span className="font-semibold">부담스러울</span> 때
            </p>
          </div>
        </div>
        <p className="text-on-surface-a-7 text-mobile-14m-subtext mt-[60px] self-center">
          다양한 상황에 맞춰 사용하세요
        </p>
        <div className="mt-[12px] grid grid-cols-2 gap-[12px]">
          {/* 1 */}
          <div className="bg-surface-a flex h-[78px] w-full flex-col rounded-[12px] p-[12px]">
            <div className="bg-on-surface-a-2 mb-2 flex h-[24px] w-[24px] items-center justify-center rounded-full">
              <span className="text-on-surface-a-1 text-lg font-bold">1</span>
            </div>
            <p>
              <span className="font-semibold">외부 고객</span>용
            </p>
          </div>
          {/* 2 */}
          <div className="border-line-1 flex h-[78px] w-full flex-col rounded-[12px] border-1 p-[12px]">
            <div className="bg-on-surface-b-1 mb-2 flex h-[24px] w-[24px] items-center justify-center rounded-full">
              <span className="text-on-surface-b-7 text-lg font-bold">2</span>
            </div>
            <p>
              <span className="font-semibold">내부 직원</span>용
            </p>
          </div>
          {/* 3 */}
          <div className="border-line-1 flex h-[94px] w-full flex-col rounded-[12px] p-[12px]">
            <div className="bg-on-surface-a-2 mb-2 flex h-[24px] w-[24px] items-center justify-center rounded-full">
              <span className="text-on-surface-a-1 text-lg font-bold">3</span>
            </div>
            둘 다 <br /> 사용하는 경우
          </div>
          {/* 4 */}
          <div className="border-line-1 bg-surface-a flex h-[94px] w-full flex-col rounded-[12px] p-[12px]">
            <div className="bg-on-surface-a-2 mb-2 flex h-[24px] w-[24px] items-center justify-center rounded-full">
              <span className="text-on-surface-a-1 text-lg font-bold">4</span>
            </div>
            맞춤 개발이 필요한 <br /> 기업
          </div>
        </div>
      </div>
    </section>
  );
}
