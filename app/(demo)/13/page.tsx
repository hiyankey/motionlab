'use client';

export default function Page() {
  return (
    <div className="flex">
      <div className="mx-auto flex h-auto w-full min-w-[calc(100px+16px)] max-w-[600px] flex-wrap gap-2 rounded-lg border border-[#fff]/5 bg-white/3 p-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="h-10 w-[100px] grow-1 rounded-md bg-white/5"
          />
        ))}
      </div>
    </div>
  );
}
