import Link from "next/link";
import styles from "./index.module.css";
export default function Page() {
  return (
    <div className={styles.links}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/another-page">About</Link></li>
      </ul>
    </div>
  );
}