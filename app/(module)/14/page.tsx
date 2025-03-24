'use client';
import { motion } from 'motion/react';
import { useState } from 'react';
const quotes = [
  {
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
    content: 'We only live once',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhY2V8ZW58MHx8MHx8fDA%3D',
    content: 'Just saying!',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxmYWNlfGVufDB8fDB8fHww',
    content: 'What the hell',
  },
];

export default function Page() {
  const [activeIdx, setActiveIdx] = useState(0);
  const lastIdx = quotes.length - 1;

  const next = () => {
    setActiveIdx((currentIdx) => (currentIdx >= lastIdx ? 0 : currentIdx + 1));
  };
  const previous = () => {
    setActiveIdx((currentIdx) => (currentIdx === 0 ? lastIdx : currentIdx - 1));
  };
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="aspect-square w-[240px] space-y-4 rounded-lg bg-zinc-800">
        <div className="-mx-2 flex justify-center">
          {quotes.map((q, i) => (
            <div key={i} className="size-10 overflow-clip rounded-full">
              {/* biome-ignore lint/nursery/noImgElement: <explanation> */}
              <motion.img
                src={q.avatar}
                className="size-full object-cover "
                alt="Avatar"
                animate={{
                  filter: i !== activeIdx ? 'grayscale(1)' : 'grayscale(0)',
                  scale: activeIdx === i ? 1.2 : 1,
                  zIndex: activeIdx === i ? 10 : 0,
                }}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          {' '}
          {quotes.map((q, i) => (
            <motion.p
              key={i}
              className="relative [grid-area:1/1]"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: activeIdx === i ? 0 : 20,
                opacity: activeIdx === i ? 1 : 0,
              }}
            >
              {q.content}
            </motion.p>
          ))}
        </div>
      </div>
      <div className="flex space-x-4">
        <button type="button" onClick={previous}>
          previous
        </button>
        <button type="button" onClick={next}>
          next
        </button>
      </div>
    </div>
  );
}
