import styles from "./page.module.css";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles["container"]}>
    {children}
  </div>
}