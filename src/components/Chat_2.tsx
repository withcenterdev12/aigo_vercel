import Consultant from "./common/Consultant";
import InquireCard from "./common/InquireCard";
import QuoteCard from "./common/QuoteCard";

export default function Chat_2() {
  return (
    <>
      {/* Mobile */}
      <div className="text-mobile-16r-body-light bg-bg-d mt-[40px] mb-[20px] flex h-[1670px] w-full flex-col px-[16px] py-[40px]">
        <Consultant imagePath="ai_consultant_4" label="강유준" />
        <div className="text-on-tag-1 bg-tag-1 mt-[8px] w-[300px] rounded-t-[12px] rounded-br-[12px] px-[14px] py-[8px] leading-tight">
          <p>
            안녕하세요 기성품 유통 AI 컨설턴트 강유준 <br />
            입니다. 만나 뵙게 반갑습니다
          </p>
          <p className="mt-[12px] leading-tight">
            어떤 상품을 구매 하고싶은지 말씀해주세요
          </p>
        </div>
        <div className="bg-tag-2 text-on-tag2 text-on-tag-2 mt-[20px] mb-[20px] h-[52px] w-[280px] self-end rounded-t-[12px] rounded-bl-[12px] px-[14px] py-[6px] leading-tight">
          <p>미니 선풍기(모델명A100)를 구매 하고 싶은데 얼마일까요?</p>
        </div>
        <Consultant imagePath="ai_consultant_4" label="강유준" />
        <div className="text-on-tag-1 bg-tag-1 mt-[8px] w-[300px] rounded-t-[12px] rounded-br-[12px] px-[14px] py-[8px] leading-tight">
          <p>미니 선풍기 모델명 A100 구매 수량(MOQ)가 몇 개 정도 이실까요?</p>
        </div>
        <div className="bg-tag-2 text-on-tag2 text-on-tag-2 mt-[20px] mb-[20px] w-[250px] self-end rounded-t-[12px] rounded-bl-[12px] px-[14px] py-[6px] leading-tight">
          <p>1만대 정도 구매 비용을 알고 싶어요</p>
        </div>
        <Consultant imagePath="ai_consultant_4" label="강유준" />
        <div className="text-on-tag-1 bg-tag-1 mt-[8px] w-[300px] rounded-t-[12px] rounded-br-[12px] px-[14px] py-[8px] leading-tight">
          <p>
            미니 선풍기 모델명 A100 1만대 기준 (개당 3천원)으로 견적서 안내
            드립니다
          </p>
        </div>
        <QuoteCard price="30,000,000" />
        <InquireCard />
        <div className="bg-tag-2 text-on-tag2 text-on-tag-2 mt-[20px] mb-[20px] w-[280px] self-end rounded-t-[12px] rounded-bl-[12px] px-[14px] py-[6px] leading-tight">
          <p>
            금액이 조금 높은데 개당 2천 5백원에 구입하려면 몇 개를 구매 해야
            될까요?
          </p>
        </div>
        <Consultant imagePath="ai_consultant_4" label="강유준" />
        <div className="text-on-tag-1 bg-tag-1 mt-[8px] w-[300px] rounded-t-[12px] rounded-br-[12px] px-[14px] py-[8px] leading-tight">
          <p>
            개당 2천 5백원에 구입을 희망하신다면 최 <br />소 수량을 2만개 부터
            가능하세요
          </p>
          <p className="mt-[12px] leading-tight">
            관련해서 2만개 기준으로 견적서를 다시 전 <br />달 드릴까요?
          </p>
        </div>
        <div className="bg-tag-2 text-on-tag2 text-on-tag-2 mt-[20px] mb-[20px] w-[280px] self-end rounded-t-[12px] rounded-bl-[12px] px-[14px] py-[6px] leading-tight">
          <p>2만개 기준으로 다시 견적 부탁드립니다</p>
        </div>
        <Consultant imagePath="ai_consultant_4" label="강유준" />
        <div className="text-on-tag-1 bg-tag-1 mt-[8px] w-[300px] rounded-t-[12px] rounded-br-[12px] px-[14px] py-[8px] leading-tight">
          <p>요청하신 수량(MOQ) 2만개 기준으로 견적서 안내 드립니다</p>
        </div>
        <QuoteCard price="50,000,000" />
        <InquireCard />
        <div className="bg-tag-2 text-on-tag2 text-on-tag-2 mt-[20px] h-[34px] w-[112px] self-end rounded-t-[12px] rounded-bl-[12px] px-[14px] py-[6px] leading-tight">
          <p>감사합니다 :)</p>
        </div>
      </div>
    </>
  );
}
