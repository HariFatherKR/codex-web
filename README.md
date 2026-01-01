# codex-web

Next.js 기반으로 하리아빠 버튼 데모 페이지를 제공합니다. 이 저장소는 Vercel 배포를 염두에 두고 구성되었습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

`npm run dev` 명령으로 개발 서버가 http://localhost:3000 에서 실행됩니다.

## 프로덕션 빌드

```bash
npm run build
npm start
```

Vercel에 배포할 때는 `npm run build` 로 사전 빌드를 진행하면 됩니다.

## Vercel 배포 팁

- 환경 변수 `NEXT_PUBLIC_SITE_URL`을 배포 URL로 설정하면 Open Graph, SEO 메타데이터가 자동으로 올바른 도메인으로 채워집니다.
- Vercel 프로젝트의 Framework Preset은 **Next.js**로 설정하고, 설치/빌드/개발 명령어는 모두 package.json의 스크립트를 그대로 사용합니다.
- `vercel.json`에 Node.js 20 런타임을 명시하여 서버 액션이 최신 런타임으로 실행되도록 했습니다.
