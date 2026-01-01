export type LanguageKey = 'ko' | 'en';

export type TranslationCopy = {
  nav: {
    brand: string;
    descriptor: string;
  };
  hero: {
    headline: string;
    subCopy: string;
    identity: {
      name: string;
      nickname: string;
      roles: [string, string];
    };
    badgeNote: string;
    ctaLabel: string;
    trustNote: string;
    supportLine: string;
    scrollHint: string;
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    humanNotes: string[];
    list: { title: string; description: string; icon: string }[];
  };
  references: {
    eyebrow: string;
    title: string;
    description: string;
    badgeLabel: string;
    list: { title: string; description: string }[];
  };
  cta: {
    eyebrow: string;
    heading: string;
    subheading: string;
    microcopy: string;
    responseTime: string;
    form: {
      contactPrompt: string;
      required: string;
      nameLabel: string;
      namePlaceholder: string;
      contactLabel: string;
      contactPlaceholder: string;
      typeLabel: string;
      typeOptional: string;
      detailLabel: string;
      detailOptional: string;
      detailPlaceholder: string;
    };
    inquiryTypes: { label: string; value: 'lecture' | 'collaboration' | 'other' }[];
    actions: {
      submitLabel: string;
      sendingLabel: string;
    };
  };
  footer: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export const translations: Record<LanguageKey, TranslationCopy> = {
  ko: {
    nav: {
      brand: '정설민 · 하리 아빠',
      descriptor: 'AI 바이브 코딩 강의자',
    },
    hero: {
      headline: '차분하게 이끄는 AI 바이브 코딩',
      subCopy: '실전 흐름과 결과로 연결되는 강의, 협업 파트너로도 바로 투입 가능한 경험을 나눕니다.',
      identity: {
        name: '정설민',
        nickname: '하리 아빠',
        roles: ['바이브 코딩 강의자', 'AI 기반 창작 교육자'],
      },
      badgeNote: '실전 경험 + AI 협업 파트너십',
      ctaLabel: '강의 · 협업 문의하기',
      trustNote: '문법을 가르치기보다, 만들게 합니다.',
      supportLine: '안정적으로 함께할 파트너를 찾고 계시다면, 먼저 이야기 나눠보세요.',
      scrollHint: 'Scroll to explore',
    },
    features: {
      eyebrow: 'Features',
      title: '왜 바이브 코딩으로 배우면 좋을까요?',
      description: '실무 감각과 AI 활용법을 동시에 익힐 수 있도록, 흐름과 결과에 집중한 강의를 준비했습니다.',
      humanNotes: ['AI를 도구가 아니라 팀원처럼 씁니다.', '필요할 때 바로 말을 걸 수 있는 파트너가 되고 싶습니다.'],
      list: [
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
    references: {
      eyebrow: 'Experience',
      title: '실전으로 증명된 강의와 협업',
      description: '강의, 워크숍, 프로젝트까지 결과물과 팀워크를 중심으로 쌓아온 기록입니다.',
      badgeLabel: '정리된 경험',
      list: [
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
      form: {
        contactPrompt: '연락처를 남겨주세요',
        required: '필수',
        nameLabel: '이름',
        namePlaceholder: '정설민 / 팀명',
        contactLabel: '연락처 또는 이메일',
        contactPlaceholder: '메일 / 전화번호',
        typeLabel: '문의 유형',
        typeOptional: '선택',
        detailLabel: '문의 내용',
        detailOptional: '선택',
        detailPlaceholder: '예) 5월 워크숍, 비개발자 대상 실습 커리큘럼 요청',
      },
      inquiryTypes: [
        { label: '강의', value: 'lecture' },
        { label: '협업', value: 'collaboration' },
        { label: '기타', value: 'other' },
      ],
      actions: {
        submitLabel: '문의 보내기',
        sendingLabel: '보내는 중...',
      },
    },
    footer: {
      eyebrow: 'Identity',
      title: '정설민 · 하리 아빠',
      description: '바이브 코딩을 가르칩니다. 함께 만들고 싶은 아이디어가 있다면 언제든 편하게 메시지 주세요.',
    },
  },
  en: {
    nav: {
      brand: 'Seolmin Jung · Hari’s Dad',
      descriptor: 'AI vibe-coding instructor',
    },
    hero: {
      headline: 'Steady guidance for AI-powered vibe coding',
      subCopy:
        'Learn through real-world flows and outcomes, with a partner who can jump into collaborations right away.',
      identity: {
        name: 'Seolmin Jung',
        nickname: "Hari's Dad",
        roles: ['Vibe-coding instructor', 'AI-powered creative educator'],
      },
      badgeNote: 'Real-world experience + AI collaboration partnership',
      ctaLabel: 'Contact for workshops or projects',
      trustNote: 'I focus on making before memorizing syntax.',
      supportLine: 'If you want a reliable partner, let’s talk first.',
      scrollHint: 'Scroll to explore',
    },
    features: {
      eyebrow: 'Features',
      title: 'Why learn through vibe coding?',
      description:
        'I focus on flow and outcomes so you can gain practical instincts and AI skills at the same time.',
      humanNotes: [
        'I treat AI as a teammate, not just a tool.',
        'I want to be a partner you can talk to whenever you need.',
      ],
      list: [
        {
          title: 'Vibe-coding approach',
          description:
            'Connect thinking flow with UI/UX and implementation order, so the code makes sense naturally.',
          icon: '🎧',
        },
        {
          title: 'Non-developer friendly',
          description: 'Translate jargon into everyday language so planners and marketers can follow along.',
          icon: '🤝',
        },
        {
          title: 'Outcome-first learning',
          description: 'Projects built in class ship to the web and automation right away.',
          icon: '🚀',
        },
        {
          title: 'Hands-on with AI agents',
          description: 'Experience collaborating with AI as a teammate in real scenarios.',
          icon: '🤖',
        },
      ],
    },
    references: {
      eyebrow: 'Experience',
      title: 'Proven workshops and collaborations',
      description: 'A track record centered on tangible outcomes and teamwork across classes and projects.',
      badgeLabel: 'Documented wins',
      list: [
        {
          title: 'AI vibe-coding workshops delivered',
          description: 'Hands-on, step-by-step sessions that ship web and automation with AI.',
        },
        {
          title: 'AI coding workshops for non-developers',
          description: 'Designed so teams unfamiliar with code can still build services themselves.',
        },
        {
          title: 'AI automation for planners',
          description: 'Define goals, map data flows, and implement together to boost team efficiency.',
        },
        {
          title: 'Content-driven teaching and partnerships',
          description: 'Talks, community sessions, and enterprise collaborations that shipped results.',
        },
      ],
    },
    cta: {
      eyebrow: 'Contact',
      heading: "Ready to build together? Let's connect.",
      subheading: 'Feel free to ask about lectures, workshops, or collaboration.',
      microcopy: 'Short questions are welcome—reach out anytime.',
      responseTime: 'I usually reply within 24 hours.',
      form: {
        contactPrompt: 'Leave your contact',
        required: 'Required',
        nameLabel: 'Name',
        namePlaceholder: 'Seolmin / Team name',
        contactLabel: 'Contact or email',
        contactPlaceholder: 'Email / Phone number',
        typeLabel: 'Inquiry type',
        typeOptional: 'Optional',
        detailLabel: 'Details',
        detailOptional: 'Optional',
        detailPlaceholder: 'e.g., May workshop, hands-on curriculum for non-developers',
      },
      inquiryTypes: [
        { label: 'Lecture', value: 'lecture' },
        { label: 'Collaboration', value: 'collaboration' },
        { label: 'Other', value: 'other' },
      ],
      actions: {
        submitLabel: 'Send inquiry',
        sendingLabel: 'Sending...',
      },
    },
    footer: {
      eyebrow: 'Identity',
      title: 'Seolmin Jung · Hari’s Dad',
      description: 'I teach vibe coding. If you have an idea to build together, feel free to message me.',
    },
  },
};

export const inquiryMessages: Record<LanguageKey, {
  missingFields: string;
  successPrefix: string;
  successSuffix: string;
  typeLabels: Record<'lecture' | 'collaboration' | 'other', string>;
}> = {
  ko: {
    missingFields: '이름과 연락처를 입력해 주세요.',
    successPrefix: '문의가 전달되었습니다',
    successSuffix: '빠르게 답변드릴게요!',
    typeLabels: {
      lecture: '강의',
      collaboration: '협업',
      other: '기타',
    },
  },
  en: {
    missingFields: 'Please add your name and contact info.',
    successPrefix: 'Your inquiry has been sent',
    successSuffix: "I'll reply shortly!",
    typeLabels: {
      lecture: 'Lecture',
      collaboration: 'Collaboration',
      other: 'Other',
    },
  },
};
