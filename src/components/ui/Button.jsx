import React, { useRef, useState } from 'react';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'burgundy' | 'caramel'
  size = 'md',        // 'sm' | 'md' | 'lg'
  onClick,
  className = '',
  disabled = false,
  cursorLabel,
  href,
  type = 'button',
  icon: Icon,
  ...props
}) {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Subtle magnetic drift on hover
  const handleMouseMove = (e) => {
    if (disabled || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center font-sans tracking-wide text-xs uppercase transition-all duration-300 select-none group overflow-hidden focus:outline-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-[11px] tracking-widest",
    md: "px-6 py-3 text-xs tracking-luxury",
    lg: "px-8 py-4 text-xs tracking-wide-luxury font-medium",
  };

  const variantStyles = {
    primary: "bg-espresso-900 text-cream-50 border border-gold-400/40 hover:border-gold-400 hover:bg-espresso-850 shadow-lg shadow-espresso-950/20 hover:shadow-gold-500/10",
    secondary: "bg-transparent text-cream-100 border border-cream-200/40 hover:border-gold-400 hover:text-gold-300 hover:bg-espresso-900/40 backdrop-blur-sm",
    ghost: "bg-transparent text-espresso-900 border border-espresso-800/30 hover:border-espresso-900 hover:bg-espresso-900/5",
    caramel: "bg-caramel-500 text-cream-50 border border-caramel-400 hover:bg-caramel-600 shadow-md shadow-caramel-900/30",
    burgundy: "bg-burgundy-700 text-cream-50 border border-burgundy-600 hover:bg-burgundy-800 shadow-lg shadow-burgundy-900/30",
  };

  const Comp = href ? 'a' : 'button';

  return (
    <Comp
      ref={btnRef}
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor={cursorLabel || (variant === 'primary' ? 'Order' : 'Select')}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {/* Subtle gold hover glow backdrop */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gold-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {Icon && <Icon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 text-gold-400" />}
      </span>
    </Comp>
  );
}
