import Link from "next/link";
import { ReactNode } from "react";
import style from "./global-layout.module.css";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>✔Check? 📚책!</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>제작 @sonseongoh</footer>
    </div>
  );
}
