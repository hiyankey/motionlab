'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

const users = [
  {
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
    role: 'Design Engineer',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhY2V8ZW58MHx8MHx8fDA%3D',
    role: 'Dev Rel',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxmYWNlfGVufDB8fDB8fHww',
    role: 'CEO',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
    role: 'Design Engineer',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhY2V8ZW58MHx8MHx8fDA%3D',
    role: 'Dev Rel',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxmYWNlfGVufDB8fDB8fHww',
    role: 'CEO',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
    role: 'Design Engineer',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhY2V8ZW58MHx8MHx8fDA%3D',
    role: 'Dev Rel',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxmYWNlfGVufDB8fDB8fHww',
    role: 'CEO',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
    role: 'Design Engineer',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhY2V8ZW58MHx8MHx8fDA%3D',
    role: 'Dev Rel',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxmYWNlfGVufDB8fDB8fHww',
    role: 'CEO',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
    role: 'Design Engineer',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhY2V8ZW58MHx8MHx8fDA%3D',
    role: 'Dev Rel',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxmYWNlfGVufDB8fDB8fHww',
    role: 'CEO',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
    role: 'Design Engineer',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhY2V8ZW58MHx8MHx8fDA%3D',
    role: 'Dev Rel',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxmYWNlfGVufDB8fDB8fHww',
    role: 'CEO',
  },
];

export default function Page() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const scale = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.66, 0.72], [1, 0]);
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);
  const x3 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <div className="min-h-screen">
      <div className="h-[100vh]" />
      <div className="h-[200vh]">
        <div className="-translate-y-1/2 sticky top-1/2 flex w-auto flex-col space-y-4 overflow-hidden ">
          <motion.div
            className=" flex items-center justify-center space-x-6"
            style={{ x: x1, scale, opacity }}
          >
            {users.map((u, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="size-10 overflow-hidden rounded-full">
                  {' '}
                  <Image
                    src={u.avatar}
                    width={40}
                    height={40}
                    alt="Avatar"
                    className="size-full object-cover"
                  />
                </div>{' '}
                <span className="text-nowrap text-4xl">{u.role}</span>
              </div>
            ))}
          </motion.div>
          <motion.div
            className=" flex items-center justify-center space-x-6"
            style={{ x: x2, scale, opacity }}
          >
            {users.map((u, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="size-10 overflow-hidden rounded-full">
                  {' '}
                  <Image
                    src={u.avatar}
                    width={40}
                    height={40}
                    alt="Avatar"
                    className="size-full object-cover"
                  />
                </div>{' '}
                <span className="text-nowrap text-4xl">{u.role}</span>
              </div>
            ))}
          </motion.div>
          <motion.div
            className=" flex items-center justify-center space-x-6 "
            style={{ x: x3, scale, opacity }}
          >
            {users.map((u, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="size-10 overflow-hidden rounded-full">
                  {' '}
                  <Image
                    src={u.avatar}
                    width={40}
                    height={40}
                    alt="Avatar"
                    className="size-full object-cover"
                  />
                </div>{' '}
                <span className="text-nowrap text-4xl">{u.role}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="h-[100vh]" />
    </div>
  );
}
