"use client";

export function Logo() {
  return (
    <div className="flex flex-col items-start">
      <span className="font-serif text-5xl tracking-tight leading-none text-navy dark:text-white">
        glamic
      </span>
      <div className="flex items-center">
        <span
          className="text-[0.6rem] tracking-[0.2em] uppercase ml-[2.5rem] whitespace-nowrap text-navy/70 dark:text-white/70"
          style={{ fontFamily: 'system-ui' }}
        >
          Powered by AI
        </span>
      </div>
    </div>
  );
}
