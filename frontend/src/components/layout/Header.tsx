import type { ReactNode } from "react";
interface HeaderProps {
  title: string;
  text?: string;
  children: ReactNode;
  onHome: () => void;
}
export default function Header({ title, text, children, onHome }: HeaderProps) {
  return <header><div className="header-kapsayici">
    <h1><a href="#home" onClick={e => { e.preventDefault(); onHome(); }}>{title}</a></h1>
    {text && <p>{text}</p>}
    {children}
  </div></header>;
}

