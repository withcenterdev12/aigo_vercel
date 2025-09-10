import TestimonialCard from "../common/TestimonialCard";
import { testimonials } from "../../utils/constants";
import { useState } from "react";

export default function Section_11() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const displayedTestimonials = isExpanded
    ? testimonials
    : testimonials.slice(0, 2);

  return (
    <section className="flex w-full flex-col items-center py-[19px]">
      <div className="flex w-full max-w-[960px] flex-col items-center overflow-hidden">
        <h2 className="text-mobile-28b-emphasis-title sm:text-pc-32b-emphasis-title mb-[60px] self-start px-[16px] sm:self-center sm:text-center">
          <span className="text-on-bg-a-9 sm:text-on-surface-a-5 sm:text-pc-20sb-body">
            고객 후기
          </span>
          <br />
          함께 성장하는
          <br />
          에이고 고객 이야기
        </h2>
        {/* <div className="animate-scroll-left flex flex-row gap-[32px]">
          <img src="/images/hybridge_logo.svg" />
          <img src="/images/everitday_logo.svg" />
          <img src="/images/maru_logo.svg" />
          <img src="/images/onbit_logo.svg" />
          <img src="/images/moon_logo.svg" />
          <img src="/images/nurion_logo.svg" />
          <img src="/images/optivio_logo.svg" />
          <img src="/images/heredot_logo.svg" />
        </div> */}
        <div className="flex flex-col gap-[16px] px-[16px]">
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard {...testimonial} />
          ))}
        </div>
        <div className="border-gray-100 pt-4">
          <button
            onClick={toggleExpanded}
            className="flex w-full items-center justify-center py-2 text-gray-400 hover:cursor-pointer"
          >
            <span className="text-sm">자세히보기</span>
            <span className="ml-2">
              {isExpanded ? (
                <img src="/images/chevron_arrow_up.svg" />
              ) : (
                <img src="/images/chevron_arrow_down.svg" />
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

// <div className="animate-scroll-left flex w-max flex-row gap-[32px]">
//     {/* Logos repeated twice in one row */}
// <img src="/images/hybridge_logo.svg" />
// <img src="/images/everitday_logo.svg" />
// <img src="/images/maru_logo.svg" />
// <img src="/images/onbit_logo.svg" />
// <img src="/images/moon_logo.svg" />
// <img src="/images/nurion_logo.svg" />
// <img src="/images/optivio_logo.svg" />
// <img src="/images/heredot_logo.svg" />

//     {/* Duplicate set immediately after */}
//     <img src="/images/hybridge_logo.svg" />
//     <img src="/images/everitday_logo.svg" />
//     <img src="/images/maru_logo.svg" />
//     <img src="/images/onbit_logo.svg" />
//     <img src="/images/moon_logo.svg" />
//     <img src="/images/nurion_logo.svg" />
//     <img src="/images/optivio_logo.svg" />
//     <img src="/images/heredot_logo.svg" />
//   </div>
//   <div className="animate-scroll-right mt-[25px] flex w-max flex-row gap-[32px]">
//     {/* Logos repeated twice in one row */}
//     <img src="/images/heredot_logo.svg" />
//     <img src="/images/optivio_logo.svg" />
//     <img src="/images/nurion_logo.svg" />
//     <img src="/images/moon_logo.svg" />
//     <img src="/images/onbit_logo.svg" />
//     <img src="/images/maru_logo.svg" />
//     <img src="/images/everitday_logo.svg" />
//     <img src="/images/hybridge_logo.svg" />

//     {/* Duplicate set immediately after */}
//     <img src="/images/heredot_logo.svg" />
//     <img src="/images/optivio_logo.svg" />
//     <img src="/images/nurion_logo.svg" />
//     <img src="/images/moon_logo.svg" />
//     <img src="/images/onbit_logo.svg" />
//     <img src="/images/maru_logo.svg" />
//     <img src="/images/everitday_logo.svg" />
//     <img src="/images/hybridge_logo.svg" />
// </div>
