export const navigationBarItems = [
  {
    label: "비즈니스 맞춤분석",
  },
  {
    label: "효과영상",
  },
  {
    label: "시나리오",
  },
  {
    label: "추천 및 요금",
  },
  {
    label: "후기 및 FAQ",
  },
];

export const industryOptions = [
  {
    label: "에이전시",
    number: "option_1",
  },
  {
    label: "유통 산업",
    number: "option_2",
  },
  {
    label: "제조 산업",
    number: "option_3",
  },
  {
    label: "기자재",
    number: "option_4",
  },
];

export const planDetails = [
  {
    title: "직원지원 챗봇",
    subtitle: "별도문의",
    badge: "직원 PRO",
    description: "고객에게 견절을 노출하고, 리드를 확보해보세요",
    sections: [
      {
        title: "사용료 상세 (VAT 별도)",
        items: [
          { title: "1회성 기술지원료 300만원" },
          { title: "에이고 사용료 월 10만원 구독" },
          {
            title: "AI 엔진 사용료 종량제 (고객사 부담)",
            details: [
              {
                detail: "구글 Vertex AI 신용카드 등록 및 결제",
              },
              {
                detail: "AI 제한 1회당 평균 10~20원 소요",
              },
            ],
          },
        ],
      },
      {
        title: "1회성 기술지원",
        items: [
          { title: "고객사 전직표 양식 지원(1.5주)" },
          { title: "AI 맞춤 프롬프트 지원(1.5주)" },
        ],
      },
      {
        title: "고객상담 기본기능",
        items: [
          {
            title: "AI 다국어 답변 적용",
          },
          {
            title: "AI 접속국가 견적환율 적용",
          },
          {
            title: "자연어 기반 상담",
            details: [
              {
                detail: "첨부 파일 및 URL 인식 제공",
              },
            ],
          },
          {
            title: "견적서 발행",
            details: [
              {
                detail: "PDF 견적 다운로드",
              },
              {
                detail: "견적 대화 공유, 파일 공유",
              },
            ],
          },
        ],
      },
      {
        title: "관리자 기능",
        items: [
          { title: "대시보드" },
          {
            title: "계정 관리",
            details: [
              { detail: "고객 계정 관리" },
              {
                detail: "관리자 계정 관리",
              },
            ],
          },
          {
            title: "AI 데이터 관리",
            details: [
              {
                detail: "AI프롬프트 관리 (수정가능)",
              },
              {
                detail: "AI 대화이력 관리 (챗봇 대화내용 열람가능)",
              },
            ],
          },
          {
            title: "AI 설정",
            details: [
              {
                detail: "견적서 내 회사정보 설정",
              },
              {
                detail: "비회원·회원 AI 채팅 횟수 설정",
              },
              {
                detail: "월 총사용(횟수) 채팅 설정",
              },
              {
                detail: "AI추론 능력 설정 ( 0~100% )",
              },
              {
                detail: "컬러 테마 설정 ( 다크모드 , 라이트 모드)",
              },
            ],
          },
          {
            title: "고객 데이터 관리",
            details: [
              {
                detail: "단가표 관리",
                subdetail: "(회사 단가정보 추가,수정,삭제 가능)",
              },
            ],
          },
        ],
      },
      {
        title: "알림 서비스",
        items: [
          { title: "고객 견적 PDF 다운 알림" },
          { title: "고객 회원 가입 알림" },
          { title: "고객 견적 문의 알림" },
          { title: "AI 종합 리포트 매일 발송 (오전 8시)" },
        ],
      },
    ],
  },
];
