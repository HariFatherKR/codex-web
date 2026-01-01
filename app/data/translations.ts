export type Language = 'ko' | 'en';

export type NavItem = {
  label: string;
  href: string;
};

export type TranslationContent = {
  navbar: {
    brand: string;
    items: NavItem[];
  };
  hero: {
    headline: string;
    subCopy: string;
    identity: {
      name: string;
      nickname: string;
      roles: string[];
    };
    ctaLabel: string;
    trustNote: string;
    partnership: string;
    partnerLine: string;
    scrollLabel: string;
  };
  feature: {
    eyebrow: string;
    title: string;
    description: string;
    humanNotes: string[];
    features: { title: string; description: string; icon: string }[];
  };
  reference: {
    eyebrow: string;
    title: string;
    description: string;
    badge: string;
    items: { title: string; description: string }[];
  };
  cta: {
    eyebrow: string;
    heading: string;
    subheading: string;
    microcopy: string;
    responseTime: string;
    submitLabel: string;
    submitPending: string;
    contactHeading: string;
    requiredPill: string;
    optionalPill: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    inquiryTypeLabel: string;
    inquiryTypes: { label: string; value: string }[];
    detailsLabel: string;
    detailsPlaceholder: string;
    successPrefix: string;
    successSuffix: string;
    missingFields: string;
  };
  footer: {
    eyebrow: string;
    title: string;
    description: string;
    quote: string;
    reminder: string;
  };
  kakao: {
    ariaLabel: string;
    tooltip: string;
  };
};

export const translations: Record<Language, TranslationContent> = {
  ko: {
    navbar: {
      brand: '바이브 코딩',
      items: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Features', href: '#features' },
        { label: 'References', href: '#references' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    hero: {
      headline: '차분하게 이끄는 AI 바이브 코딩',
      subCopy: '실전 흐름과 결과로 연결되는 강의, 협업 파트너로도 바로 투입 가능한 경험을 나눕니다.',
      identity: {
        name: '정설민',
        nickname: '하리 아빠',
        roles: ['바이브 코딩 강의자', 'AI 기반 창작 교육자'],
      },
      ctaLabel: '강의 · 협업 문의하기',
      trustNote: '문법을 가르치기보다, 만들게 합니다.',
      partnership: '실전 경험 + AI 협업 파트너십',
      partnerLine: '안정적으로 함께할 파트너를 찾고 계시다면, 먼저 이야기 나눠보세요.',
      scrollLabel: 'Scroll to explore',
    },
    feature: {
      eyebrow: 'Features',
      title: '왜 바이브 코딩으로 배우면 좋을까요?',
      description: '실무 감각과 AI 활용법을 동시에 익힐 수 있도록, 흐름과 결과에 집중한 강의를 준비했습니다.',
      humanNotes: ['AI를 도구가 아니라 팀원처럼 씁니다.', '필요할 때 바로 말을 걸 수 있는 파트너가 되고 싶습니다.'],
      features: [
        {
          title: '바이브 코딩 접근법',
          description: '사고 흐름과 UI/UX, 구현 순서로 연결해 자연스럽게 코드를 이해합니다.',
          icon: '🎧',
        },
        {
          title: '비개발자 친화적 강의',
          description: '기획자·마케터도 따라올 수 있도록 용어와 예시를 일상 언어로 풀어냅니다.',
          icon: '🤝',
        },
        {
          title: '결과물 중심 학습',
          description: '강의에서 만든 결과물이 실제 웹과 자동화로 바로 이어집니다.',
          icon: '🚀',
        },
        {
          title: 'AI Agent 실전 활용',
          description: 'AI를 도구가 아닌 팀원처럼 활용하는 협업 방식을 경험합니다.',
          icon: '🤖',
        },
      ],
    },
    reference: {
      eyebrow: 'Experience',
      title: '실전으로 증명된 강의와 협업',
      description: '강의, 워크숍, 프로젝트까지 결과물과 팀워크를 중심으로 쌓아온 기록입니다.',
      badge: '정리된 경험',
      items: [
        {
          title: 'AI 바이브 코딩 강의 진행',
          description: '실무 흐름에 맞춘 단계별 실습으로 AI와 함께 웹·자동화를 완성했습니다.',
        },
        {
          title: '비개발자 대상 AI 코딩 워크숍',
          description: '코드에 익숙하지 않은 팀도 스스로 서비스를 만들 수 있도록 워크숍을 설계했습니다.',
        },
        {
          title: '기획자를 위한 AI 자동화 프로젝트',
          description: '목표 정의, 데이터 흐름 설계, 구현까지 함께 진행하며 팀의 효율을 높였습니다.',
        },
        {
          title: '콘텐츠 기반 강의/협업 경험',
          description: '강연, 커뮤니티 세션, 기업 제휴까지 다양한 파트너와 결과물을 만들어 왔습니다.',
        },
      ],
    },
    cta: {
      eyebrow: 'Contact',
      heading: '함께 만들어볼 준비가 되셨다면 연락 주세요.',
      subheading: '강의, 워크숍, 협업 모두 편하게 문의하셔도 됩니다.',
      microcopy: '간단한 문의도 환영합니다. 부담 없이 연락 주세요.',
      responseTime: '보통 24시간 이내 답변드립니다.',
      submitLabel: '문의 보내기',
      submitPending: '보내는 중...',
      contactHeading: '연락처를 남겨주세요',
      requiredPill: '필수',
      optionalPill: '선택',
      nameLabel: '이름',
      namePlaceholder: '정설민 / 팀명',
      contactLabel: '연락처 또는 이메일',
      contactPlaceholder: '메일 / 전화번호',
      inquiryTypeLabel: '문의 유형',
      inquiryTypes: [
        { label: '강의', value: 'lecture' },
        { label: '협업', value: 'collaboration' },
        { label: '기타', value: 'other' },
      ],
      detailsLabel: '문의 내용',
      detailsPlaceholder: '예) 5월 워크숍, 비개발자 대상 실습 커리큘럼 요청',
      successPrefix: '문의가 전달되었습니다',
      successSuffix: '. 빠르게 답변드릴게요!',
      missingFields: '이름과 연락처를 입력해 주세요.',
    },
    footer: {
      eyebrow: 'Identity',
      title: '정설민 · 하리 아빠',
      description: '바이브 코딩을 가르칩니다. 함께 만들고 싶은 아이디어가 있다면 언제든 편하게 메시지 주세요.',
      quote: '“바이브 코딩을 가르칩니다”',
      reminder: '정체성을 담은 한 문장으로 기억해 주세요.',
    },
    kakao: {
      ariaLabel: '카카오톡 문의',
      tooltip: '카카오톡 문의',
    },
  },
  en: {
    navbar: {
      brand: 'Vibe Coding',
      items: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Features', href: '#features' },
        { label: 'References', href: '#references' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    hero: {
      headline: 'Steady, vibe-driven AI coding guidance',
      subCopy: 'Practical flows and outcomes you can connect to your work right away, plus collaboration-ready experience.',
      identity: {
        name: 'Seolmin Jung',
        nickname: 'Hari Dad',
        roles: ['Vibe coding instructor', 'AI-powered creative educator'],
      },
      ctaLabel: 'Ask about lectures or collaboration',
      trustNote: 'I help you build, not just memorize syntax.',
      partnership: 'Hands-on experience + AI collaboration partnership',
      partnerLine: 'If you need a reliable partner, let’s start a conversation.',
      scrollLabel: 'Scroll to explore',
    },
    feature: {
      eyebrow: 'Features',
      title: 'Why learn through vibe coding?',
      description: 'Each session focuses on flow and outcomes so you can pick up real-world sense and AI usage together.',
      humanNotes: [
        'I use AI like a teammate, not just a tool.',
        'I want to be a partner you can reach out to anytime.',
      ],
      features: [
        {
          title: 'Vibe coding approach',
          description: 'Connects thinking flow to UI/UX and implementation order so code feels natural.',
          icon: '🎧',
        },
        {
          title: 'Non-developer friendly',
          description: 'Explains terms and examples in everyday language so planners and marketers can follow.',
          icon: '🤝',
        },
        {
          title: 'Outcome-first learning',
          description: 'Outputs from class continue straight into live web projects and automations.',
          icon: '🚀',
        },
        {
          title: 'AI agent in practice',
          description: 'Experience collaborating with AI as a teammate rather than just a utility.',
          icon: '🤖',
        },
      ],
    },
    reference: {
      eyebrow: 'Experience',
      title: 'Proven teaching and collaboration',
      description: 'Records centered on deliverables and teamwork across lectures, workshops, and projects.',
      badge: 'Documented experience',
      items: [
        {
          title: 'AI vibe coding lectures',
          description: 'Completed web builds and automations with step-by-step practice aligned to real workflows.',
        },
        {
          title: 'AI coding workshops for non-developers',
          description: 'Designed workshops so teams new to code can build their own services.',
        },
        {
          title: 'AI automation projects for planners',
          description: 'Worked together on goal setting, data flow design, and implementation to boost team efficiency.',
        },
        {
          title: 'Content-driven teaching and partnerships',
          description: 'Built results with diverse partners through talks, community sessions, and brand collaborations.',
        },
      ],
    },
    cta: {
      eyebrow: 'Contact',
      heading: 'Ready to build together? Reach out.',
      subheading: 'Feel free to ask about lectures, workshops, or collaboration.',
      microcopy: 'Short questions are welcome—contact me anytime.',
      responseTime: 'I usually reply within 24 hours.',
      submitLabel: 'Send inquiry',
      submitPending: 'Sending...',
      contactHeading: 'Leave your contact info',
      requiredPill: 'Required',
      optionalPill: 'Optional',
      nameLabel: 'Name',
      namePlaceholder: 'Seolmin Jung / Team name',
      contactLabel: 'Contact or email',
      contactPlaceholder: 'Email / phone number',
      inquiryTypeLabel: 'Inquiry type',
      inquiryTypes: [
        { label: 'Lecture', value: 'lecture' },
        { label: 'Collaboration', value: 'collaboration' },
        { label: 'Other', value: 'other' },
      ],
      detailsLabel: 'Inquiry details',
      detailsPlaceholder: 'e.g., May workshop, hands-on curriculum for non-developers',
      successPrefix: 'Your inquiry has been received',
      successSuffix: '. I’ll get back to you shortly!',
      missingFields: 'Please enter your name and contact.',
    },
    footer: {
      eyebrow: 'Identity',
      title: 'Seolmin Jung · Hari Dad',
      description: 'I teach vibe coding. If you have an idea you want to build, feel free to send a message anytime.',
      quote: '“I teach vibe coding.”',
      reminder: 'Keep this single line in mind to remember me.',
    },
    kakao: {
      ariaLabel: 'Contact via KakaoTalk',
      tooltip: 'KakaoTalk inquiry',
    },
  },
};

export const getTranslation = (lang: Language) => translations[lang];
