'use client';

import { useSound } from '@/app/hooks/use-sound';
import { useInView } from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Page() {
  const [playSound] = useSound('meow.mp3');
  const catRef = useRef(null);
  const isInView = useInView(catRef, { amount: 1 });

  useEffect(() => {
    if (isInView) {
      playSound();
    }
  }, [isInView, playSound]);
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="h-screen w-full" />
      <div ref={catRef}>
        <Image
          src={
            'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhdHxlbnwwfHwwfHx8MA%3D%3D'
          }
          width={400}
          height={400}
          alt="Cat"
        />
      </div>
      <div className="h-screen w-full" />
    </div>
  );
}
