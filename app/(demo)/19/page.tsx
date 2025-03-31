'use client';

import { motion, useInView, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import type React from 'react';
import { useRef } from 'react';

const views = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1741850820082-ba5c8fdf4c8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1741850826386-9cb8e5543c73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1742426426875-4c16b5f4e95e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Page() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 1,
  });
  return (
    <div className="flex flex-col">
      <div className="h-screen w-full" />
      <div className="mx-auto grid w-full max-w-[600px] gap-40">
        <motion.div
          ref={ref}
          className="grid aspect-[2/1] w-full grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-2 rounded-xl bg-white/5 p-2"
          animate={isInView ? 'aboveFold' : 'belowFold'}
          initial={'belowFold'}
          variants={{
            aboveFold: {
              transition: {
                staggerChildren: 0.2,
              },
            },
            belowFold: {
              transition: {
                staggerChildren: 0.2,
                staggerDirection: -1,
              },
            },
          }}
        >
          {views.map((view, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-md"
              variants={{
                aboveFold: {
                  opacity: 1,
                  scale: 1,
                },
                belowFold: {
                  opacity: 0,
                  scale: 0.9,
                },
              }}
            >
              <Image
                src={view.imgUrl}
                width={600}
                height={600}
                alt="View"
                className="size-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="grid aspect-[2/1] w-full grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-2 rounded-xl bg-white/5 p-2">
          {views.map((view, i) => (
            <FadeIn key={i} className="overflow-hidden rounded-md">
              <Image
                src={view.imgUrl}
                width={600}
                height={600}
                alt="View"
                className="size-full object-cover"
              />
            </FadeIn>
          ))}
        </div>
      </div>
      <div className="h-screen w-full" />
    </div>
  );
}

const FadeIn = ({
  children,
  className,
}: { className?: string; children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ['center end', 'center start'],
    target: ref,
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0.9, 1, 1, 0.9]
  );

  return (
    <motion.div className={className} style={{ opacity, scale }} ref={ref}>
      {children}
    </motion.div>
  );
};
