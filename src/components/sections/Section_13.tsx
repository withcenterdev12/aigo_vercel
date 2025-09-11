"use client";

import { useState } from "react";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  inquiry: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  inquiry?: string;
  privacy?: string;
}

export default function Section_13() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    inquiry: "",
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "회사명을 입력해주세요.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "전화번호를 입력해주세요.";
    } else if (!/^[0-9-+\s()]+$/.test(formData.phone)) {
      newErrors.phone = "올바른 전화번호 형식이 아닙니다.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "이메일 주소를 입력해주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if (!formData.inquiry.trim()) {
      newErrors.inquiry = "문의사항을 입력해주세요.";
    }

    if (!formData.privacy) {
      newErrors.privacy = "개인정보 수집에 동의해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);

      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        inquiry: "",
        privacy: false,
      });

      alert("문의가 성공적으로 전송되었습니다!");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="flex w-full flex-col bg-gradient-to-b from-[#FFFFFF] to-[#ECEFFE] px-[16px] py-[25px]"
    >
      <div>
        <h2 className="text-mobile-28b-emphasis-title sm:text-pc-32b-emphasis-title self-start sm:self-center sm:text-center">
          <span className="text-on-bg-a-9 sm:text-on-surface-a-5 sm:text-pc-20sb-body">
            고객 문의
          </span>
          <span className="mt-2 block sm:mt-4">AIGO에게 궁금하신 점을</span>
          <span className="mt-2 block sm:mt-4">적어주세요</span>
        </h2>
        <form
          className="mt-[60px] flex flex-col"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="space-y-[26px]">
            <div>
              <label
                htmlFor="name"
                className="text-mobile-16sb-body text-on-bg-e-1 mb-2 block"
              >
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="이름을 입력해주세요."
                className={`bg-input placeholder:text-on-input-3 w-full rounded-lg border px-4 py-3 transition-colors outline-none ${
                  errors.name ? "border-on-input-5" : "border-transparent"
                }`}
              />
              {errors.name && (
                <p className="text-on-input-5 text-mobile-14m-subtext mt-2 ml-4">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="company"
                className="text-mobile-16sb-body text-on-bg-e-1 mb-2 block"
              >
                회사명
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="회사명을 입력해주세요."
                className={`bg-input placeholder:text-on-input-3 w-full rounded-lg border px-4 py-3 transition-colors outline-none ${
                  errors.company ? "border-on-input-5" : "border-transparent"
                }`}
                required
              />
              {errors.company && (
                <p className="text-on-input-5 text-mobile-14m-subtext mt-2 ml-4">
                  {errors.company}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-mobile-16sb-body text-on-bg-e-1 mb-2 block"
              >
                전화번호
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="전화번호를 입력해주세요."
                className={`bg-input placeholder:text-on-input-3 w-full rounded-lg border px-4 py-3 transition-colors outline-none ${
                  errors.phone ? "border-on-input-5" : "border-transparent"
                }`}
                required
              />
              {errors.phone && (
                <p className="text-on-input-5 text-mobile-14m-subtext mt-2 ml-4">
                  {errors.phone}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-mobile-16sb-body text-on-bg-e-1 mb-2 block"
              >
                이메일 주소
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="이메일 주소를 입력해주세요."
                className={`bg-input placeholder:text-on-input-3 w-full rounded-lg border px-4 py-3 transition-colors outline-none ${
                  errors.email ? "border-on-input-5" : "border-transparent"
                }`}
                required
              />
              {errors.email && (
                <p className="text-on-input-5 text-mobile-14m-subtext mt-2 ml-4">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="inquiry"
                className="text-mobile-16sb-body text-on-bg-e-1 mb-2 block"
              >
                문의사항
              </label>
              <textarea
                id="inquiry"
                name="inquiry"
                rows={6}
                value={formData.inquiry}
                onChange={handleInputChange}
                placeholder="문의사항을 적어주세요."
                className={`bg-input placeholder:text-on-input-3 w-full resize-none rounded-lg border px-4 py-3 transition-colors outline-none ${
                  errors.inquiry ? "border-on-input-5" : "border-transparent"
                }`}
                required
              />
              {errors.inquiry && (
                <p className="text-on-input-5 text-mobile-14m-subtext mt-2 ml-4">
                  {errors.inquiry}
                </p>
              )}
            </div>
          </div>

          {/* <div className="mt-[26px] flex items-start space-x-3">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={formData.privacy}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              required
            />
            <div className="flex-1">
              <label htmlFor="privacy" className="text-sm text-gray-700">
                개인정보 수집 동의{" "}
                <button type="button" className="text-blue-600 underline">
                  전문보기
                </button>
              </label>
              {errors.privacy && (
                <p className="text-on-input-5 text-mobile-14m-subtext mt-2 ml-4">
                  {errors.privacy}
                </p>
              )}
            </div>
          </div> */}

          <p className="text-mobile-14m-subtext text-on-bg-e-2 mt-[26px] text-center">
            *영업일 기준 24시간 이내 답변드리겠습니다
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-[8px] w-full rounded-[16px] px-6 py-[12px] font-semibold text-white transition-colors ${
              isSubmitting
                ? "cursor-not-allowed bg-gray-400"
                : "bg-[linear-gradient(to_right,#7393FF_0%,#1A1FFF_50%,#1A1FFF_100%)]"
            }`}
          >
            {isSubmitting ? "전송 중..." : "가입 문의하기 →"}
          </button>
        </form>
      </div>
    </section>
  );
}
