"use client";

import { useState } from "react";

const navItems = [
  ["#services", "洗护服务"],
  ["#process", "安心流程"],
  ["#reviews", "宠主口碑"],
  ["#booking", "联系我们"],
] as const;

export function Brand() {
  return <a className="brand" href="#home"><span className="logo">♢</span>绒光宠物洗护</a>;
}

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav wrap" aria-label="主导航">
      <Brand />
      <div className={`links${open ? " open" : ""}`} id="nav-links">
        {navItems.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </div>
      <a className="nav-cta" href="#booking">立即预约</a>
      <button className="menu" type="button" aria-label={open ? "关闭菜单" : "打开菜单"} aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen((value) => !value)}>☰</button>
    </nav>
  );
}
