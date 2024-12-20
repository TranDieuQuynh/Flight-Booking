'use client'
 
import { redirect, usePathname } from 'next/navigation'

import styles from "./page.module.css";
import { ChatWidget } from '@/components/chat-widget/component';
import { Footer } from '@/components/footer/component';
import { NavBar } from '@/components/navbar/component';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const pathlist = [
    "/profile/personal-info", "/profile/current-tickets", "/profile/ticket-history"
  ];

  let pathStyle = [
    styles["tab"], styles["tab"], styles["tab"]
  ];

  for (let i = 0; i < pathlist.length; i++) {
    if (pathlist[i] === pathname) {
      pathStyle[i] += " " + styles["active"];
    }
  }

  console.log(pathname);
  return (
    <div>
      <NavBar></NavBar>
      <div className={styles["user-dashboard"]}>
        <div className={styles["avatar"]}>
          <img src="/img/user_avatar.png"/>
          <h2>Nguyễn Văn A</h2>
        </div>

        <div className={styles["tabs"]}>
          <div className={pathStyle[0]} onClick={e => redirect("/profile/personal-info")}>Thông tin cá nhân</div>
          <div className={pathStyle[1]} onClick={e => redirect("/profile/current-tickets")}>Số vé hiện tại</div>
          <div className={pathStyle[2]} onClick={e => redirect("/profile/ticket-history")}>Lịch sử đặt vé</div>
        </div>
        {children}
      </div>
      <ChatWidget></ChatWidget>
      <Footer></Footer>
    </div>
  )
}