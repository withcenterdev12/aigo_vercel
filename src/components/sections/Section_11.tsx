import { useState } from "react";
import TestimonialCard from "../common/TestimonialCard";
import { testimonials } from "../../utils/constants";

export default function Section_11() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const displayedTestimonials = isExpanded
    ? testimonials
    : window.innerWidth >= 640
      ? testimonials.slice(0, 4)
      : testimonials.slice(0, 2);

  return (
    <section
      id="review"
      className="flex w-full flex-col items-center py-[20px] sm:py-[80px]"
    >
      <div className="flex w-full flex-col items-center overflow-hidden">
        <div className="mb-[60px] max-w-[960px]">
          <h2 className="text-mobile-28b-emphasis-title sm:text-pc-32b-emphasis-title self-start px-[16px] sm:self-center sm:text-center">
            <span className="text-on-bg-a-9 sm:text-on-surface-a-5 sm:text-pc-20sb-body">
              고객 후기
            </span>
            <br />
            함께 성장하는 <br className="block sm:hidden" />
            에이고 고객 이야기
          </h2>
        </div>
        <div className="animate-scroll-left hidden flex-row gap-[32px]">
          <div className="flex flex-row gap-[32px] sm:gap-[40px]">
            <img src="/images/hybridge_logo.svg" />
            <img src="/images/everitday_logo.svg" />
            <img src="/images/maru_logo.svg" />
            <img src="/images/onbit_logo.svg" />
            <img src="/images/moon_logo.svg" />
            <img src="/images/nurion_logo.svg" />
            <img src="/images/optivio_logo.svg" />
            <img src="/images/heredot_logo.svg" />
          </div>
          <div className="gap-[32px sm:gap-[40px]] flex flex-row">
            <img src="/images/hybridge_logo.svg" />
            <img src="/images/everitday_logo.svg" />
            <img src="/images/maru_logo.svg" />
            <img src="/images/onbit_logo.svg" />
            <img src="/images/moon_logo.svg" />
            <img src="/images/nurion_logo.svg" />
            <img src="/images/optivio_logo.svg" />
            <img src="/images/heredot_logo.svg" />
          </div>
        </div>
        <div className="animate-scroll-right mt-[25px] hidden flex-row gap-[32px]">
          <img src="/images/heredot_logo.svg" />
          <img src="/images/optivio_logo.svg" />
          <img src="/images/nurion_logo.svg" />
          <img src="/images/moon_logo.svg" />
          <img src="/images/onbit_logo.svg" />
          <img src="/images/maru_logo.svg" />
          <img src="/images/everitday_logo.svg" />
          <img src="/images/hybridge_logo.svg" />
          {/*  */}
          <img src="/images/heredot_logo.svg" />
          <img src="/images/optivio_logo.svg" />
          <img src="/images/nurion_logo.svg" />
          <img src="/images/moon_logo.svg" />
          <img src="/images/onbit_logo.svg" />
          <img src="/images/maru_logo.svg" />
          <img src="/images/everitday_logo.svg" />
          <img src="/images/hybridge_logo.svg" />
        </div>
        <div className="mt-[60px] max-w-[960px]">
          <div className="flex flex-col gap-[16px] px-[16px] sm:grid sm:grid-cols-2 sm:gap-[32px] sm:px-[0px]">
            {displayedTestimonials.map((testimonial) => (
              <TestimonialCard {...testimonial} />
            ))}
          </div>
          <div className="border-gray-100 pt-[40px]">
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
