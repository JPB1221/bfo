import React from 'react';
import { Link } from 'react-router-dom';

export function BtnPrimary({ children, to, href, onClick, className = '', ...props }) {
  const cls = `inline-block bg-accent hover:bg-accent-h text-white font-heading font-bold text-xs uppercase tracking-[0.18em] py-3.5 px-8 transition-all duration-300 hover:shadow-[0_0_24px_rgba(59,130,246,0.4)] ${className}`;
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button onClick={onClick} className={cls} {...props}>{children}</button>;
}

export function BtnOutline({ children, to, href, onClick, className = '', ...props }) {
  const cls = `inline-block border border-accent/40 text-slate-300 hover:border-accent hover:text-white hover:bg-accent/10 font-heading font-bold text-xs uppercase tracking-[0.18em] py-3.5 px-8 transition-all duration-300 ${className}`;
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button onClick={onClick} className={cls} {...props}>{children}</button>;
}
