import Consultant from "./common/Consultant";

export default function MobileChat_1() {
  return (
    <>
      {/* Mobile */}
      <div className="text-mobile-16r-body-light bg-bg-d mt-[40px] mb-[20px] flex h-[1852px] w-full flex-col px-[16px] py-[40px]">
        <Consultant imagePath="ai_consultant_3" label="강유하" />
        <div className="text-on-tag-1 bg-tag-1 mt-[8px] w-[300px] rounded-t-[12px] rounded-br-[12px] px-[14px] py-[8px] leading-tight">
          <p>
            안녕하세요 AI 컨설턴트 강유하 입니다. 만 <br />나 뵙게 반갑습니다
          </p>
          <p className="mt-[12px] leading-tight">
            IT 프로젝트 관련 어떤 서비스를 만들고 싶은지 말씀 해주시겠어요
          </p>
        </div>
        <div className="bg-tag-2 text-on-tag2 text-on-tag-2 mt-[20px] mb-[20px] h-[52px] w-[280px] self-end rounded-t-[12px] rounded-bl-[12px] px-[14px] py-[6px] leading-tight">
          <p>
            AI 카메라를 통한 중고 시세 조회 앱을 만 <br />
            들고 싶어요
          </p>
        </div>
        <Consultant imagePath="ai_consultant_3" label="강유하" />
        <div className="bg-tag-1 text-on-tag-1 mt-[8px] w-[300px] rounded-t-[12px] rounded-br-[12px] px-[14px] py-[8px] leading-tight">
          <p>
            AI 카메라를 통해 중고 시세를 조회하는 모바일 앱 아이디어, 정말
            멋지네요! <br />
          </p>
          <p className="mt-[12px]">
            안드로이드(AOS)와 iOS 두 플랫폼 핵심 기능인 'AI 카메라를 통한 중고
            시세 조회'를 중심으로
          </p>
          <p className="mt-[12px]">
            앱 개발에 필요한 기능들 제안 전 체크 항목을 먼저 확인 필요해요
          </p>
          <p className="mt-[36px]">
            1. 시세 정보의 출처는 어디인가요? (예: 특정 중고 거래 사이트 데이터,
            자체 수집 데이터 등) 이 데이터 연동 방식에 따라 개발 범위가 달라질
            수 있습니다.
          </p>
          <p className="mt-[12px]">
            2. 사용자 간 중고 거래 기능도 앱 내에서 제공할 예정이신가요, 아니면
            단순히 시세 정보만 제공하는 앱인가요?
          </p>
        </div>
        <div className="bg-tag-2 text-on-tag2 text-on-tag-2 mt-[20px] h-[52px] w-[266px] self-end rounded-t-[12px] rounded-bl-[12px] px-[14px] py-[6px] leading-tight">
          <p>1.시세 조회 정보 출처는 중고거래</p>
          <p>사이트 크롤링을 해서 진행 하고싶어요</p>
        </div>
        <div className="bg-tag-2 text-on-tag2 text-on-tag-2 mt-[20px] mb-[20px] h-[52px] w-[252px] self-end rounded-t-[12px] rounded-bl-[12px] px-[14px] py-[6px] leading-tight">
          <p>2.사용자에게 단순하게 거래 되는</p>
          <p>평균 판매 가격만 보여주는 앱이에요</p>
        </div>
        <Consultant imagePath="ai_consultant_3" label="강유하" />
        <div className="text-on-tag-1 bg-tag-1 mt-[8px] w-[300px] rounded-t-[12px] rounded-br-[12px] px-[14px] py-[8px] leading-tight">
          <p>
            지금 까지 논의된 내용을 바탕으로 주요 기능과 예상 비용을 정리한
            견적서를 아래에 제공해 드립니다
          </p>
        </div>
      </div>
    </>
  );
}
