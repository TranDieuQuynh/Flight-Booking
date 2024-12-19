import styles from "./page.module.css";
import { SideBar } from "@/components/admin/side-bar/component";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles["container"]}>
    <SideBar></SideBar>
    {children}
  </div>
}