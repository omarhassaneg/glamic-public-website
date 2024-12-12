"use client";

export function Logo({ isDark }: { isDark?: boolean }) {
  return (
    <div className="flex flex-col items-start">
      <span className={`font-serif text-5xl tracking-tight leading-none ${isDark ? 'text-white' : 'text-navy'}`}>
        glamic
      </span>
      <div className="flex items-center">
        <span className={`text-[0.6rem] tracking-[0.2em] uppercase ml-[2.5rem] whitespace-nowrap ${isDark ? 'text-white/70' : 'text-navy/70'}`} style={{ fontFamily: 'system-ui' }}>
          Powered by AI
        </span>
      </div>
    </div>
  );
}