'use client';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export default function Page() {
  const [toggleNotifications, setToggleNotifications] = useState(true);
  return (
    <div className="flex w-screen">
      <motion.div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 flex aspect-square w-[240px] flex-col items-start justify-start">
        <button
          type="button"
          className="mb-3 flex h-[36px] items-center justify-center rounded-full bg-black px-3"
          onClick={() => setToggleNotifications((prev) => !prev)}
        >
          See notifications
        </button>
        <AnimatePresence>
          {toggleNotifications && (
            <motion.div
              className="h-auto w-full rounded-lg border border-white/5 bg-[#161616]"
              variants={{
                open: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
                closed: {
                  opacity: 0,
                  scale: 0.9,
                  transition: {
                    staggerChildren: 0.1,
                    staggerDirection: -1,
                  },
                },
              }}
              initial={'closed'}
              animate={'open'}
              exit={'closed'}
            >
              <div className="border-[#fff]/3 border-b p-3">
                <h3 className="text-[#fff]/56 text-xs">Notifications</h3>
              </div>
              <div>
                {[
                  { message: 'Design sync', timestamp: '4 mins ago' },
                  { message: 'See you tomorrow', timestamp: '1 day ago' },
                  { message: 'Hope you good', timestamp: '2 weeks ago' },
                ].map((notification, index) => (
                  <motion.div
                    key={index}
                    className="flex w-full border-[#fff]/3 border-b p-3 text-sm text-white/80 max-md:translate-y-[var(--y)] md:translate-x-[var(--x)]"
                    variants={{
                      open: { opacity: 1, '--x': '0', '--y': '0' },
                      closed: { opacity: 0, '--x': '20px', '--y': '20px' },
                    }}
                  >
                    {notification.message}
                    <span className="ml-auto w-auto self-end text-[#fff]/24 text-xs">
                      {notification.timestamp}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
