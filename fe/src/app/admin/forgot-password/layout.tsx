import styles from "./page.module.css";

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles["container"]}>
    {children}
  </div>
}