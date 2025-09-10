import PlanAccordion from "../common/PlanAccordion";
import { planDetails } from "../../utils/constants";

export default function Section_10() {
  return (
    <section className="w-full bg-amber-50 bg-gradient-to-b from-[#FFFFFF] to-[#ECEFFE] px-[16px] py-[25px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center">
        <h2 className="text-mobile-28b-emphasis-title sm:text-pc-32b-emphasis-title self-start sm:self-center sm:text-center">
          <span className="text-on-bg-a-9 sm:text-on-surface-a-5 sm:text-pc-20sb-body">
            추천 대상
          </span>
          <br />
          이런 분들께 <span className="sm:text-on-surface-a-1">추천</span>
          드립니다
        </h2>
        <div className="mt-[60px] flex w-full flex-col gap-[24px]">
          {planDetails.map((plan, index) => (
            <PlanAccordion {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
