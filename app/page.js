'use client';

import { useMemo, useState } from 'react';

const messages = [
  '안녕하세요, 반가워요! 👋',
  '하리아빠 버튼을 눌렀네요! 🎉',
  '글자가 바뀌었습니다! ✨',
  '오늘도 좋은 하루 보내세요! 🌷',
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const totalMessages = messages.length;

  const headline = useMemo(
    () => ['하리아빠 버튼', '버튼을 눌러 새로운 메시지를 확인하세요'],
    []
  );

  const handleClick = () => {
    setIndex((current) => (current + 1) % messages.length);
  };

  const currentMessage = messages[index];

  return (
    <main className="main" role="main">
      <section className="card" aria-label="하리아빠 버튼 데모">
        <header>
          <h1 className="title" aria-label={headline[0]}>
            {headline[0]}
          </h1>
          <p className="description">{headline[1]}</p>
        </header>

        <p className="status" aria-live="polite">
          {index + 1} / {totalMessages}번째 메시지
        </p>

        <div className="message" id="message-box" aria-live="polite">
          {currentMessage}
        </div>

        <button
          className="button"
          type="button"
          aria-controls="message-box"
          onClick={handleClick}
        >
          하리아빠
        </button>

        <p className="footer">
          버튼을 누를 때마다 새로운 문장을 확인해 보세요.
        </p>
      </section>
    </main>
  );
}
