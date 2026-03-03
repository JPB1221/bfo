import React from 'react';
import { Link } from 'react-router-dom';

export function BtnPrimary({ children, to, href, onClick, className = '', ...props }) {
  const cls = `inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-heading font-bold text-[0.65rem] uppercase tracking-[0.2em] py-3.5 px-8 transition-all duration-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] active:scale-[0.98] ${className}`;
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button onClick={onClick} className={cls} {...props}>{children}</button>;
}

export function BtnOutline({ children, to, href, onClick, className = '', ...props }) {
  const cls = `inline-flex items-center gap-2 border border-slate-700 text-slate-400 hover:border-blue-500 hover:text-white hover:bg-blue-500/10 font-heading font-bold text-[0.65rem] uppercase tracking-[0.2em] py-3.5 px-8 transition-all duration-400 active:scale-[0.98] ${className}`;
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button onClick={onClick} className={cls} {...props}>{children}</button>;
}
