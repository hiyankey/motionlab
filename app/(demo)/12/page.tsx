'use client';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <motion.nav
        className="h-screen border-[#fff]/5 border-r px-4 py-6"
        variants={{
          open: {
            width: 256,
            transition: {
              staggerChildren: 0.1,
              when: 'beforeChildren',
            },
          },
          closed: {
            width: 'auto',
            transition: {
              staggerChildren: 0.1,
              staggerDirection: -1,
              when: 'afterChildren',
            },
          },
        }}
        initial={'closed'}
        animate={isOpen ? 'open' : 'closed'}
      >
        <button
          type="button"
          className="relative mb-10 rounded-lg bg-[#fff]/5 px-3 py-1"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          =
        </button>
        <ul className="flex flex-col space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.li
              key={i}
              variants={{
                open: { opacity: 1, x: 0 },
                closed: { opacity: 0, x: -100 },
              }}
            >
              Item {i + 1}
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}
