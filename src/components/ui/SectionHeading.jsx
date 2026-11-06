import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  italicWord,
  subtitle,
  align = 'center', // 'center' | 'left'
  theme = 'light',  // 'light' | 'dark'
  className = '',
}) {
  const isDark = theme === 'dark';

  const alignStyles = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignStyles[align]} ${className}`}>
      {/* Eyebrow / Category Tag */}
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-[1px] bg-gold-400/60" />
          <span className="text-[11px] font-sans font-medium uppercase tracking-wide-luxury text-caramel-500">
            {eyebrow}
          </span>
          <span className="w-6 h-[1px] bg-gold-400/60" />
        </div>
      )}

      {/* Main Serif Display Title */}
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] font-normal tracking-tight ${
        isDark ? 'text-cream-100' : 'text-espresso-950'
      }`}>
        {title}{' '}
        {italicWord && (
          <span className="italic font-normal font-serif text-caramel-500">
            {italicWord}
          </span>
        )}
      </h2>

      {/* Narrative Subtitle */}
      {subtitle && (
        <p className={`mt-4 text-sm sm:text-base font-light leading-relaxed font-sans max-w-xl ${
          isDark ? 'text-cream-300/80' : 'text-espresso-700/80'
        }`}>
          {subtitle}
        </p>
      )}

      {/* Gold Ornament Divider */}
      <div className="flex items-center gap-3 mt-6">
        <span className={`w-12 h-[1px] ${isDark ? 'bg-gold-500/30' : 'bg-gold-500/40'}`} />
        <span className="text-gold-400 text-xs">✦</span>
        <span className={`w-12 h-[1px] ${isDark ? 'bg-gold-500/30' : 'bg-gold-500/40'}`} />
      </div>
    </div>
  );
}
