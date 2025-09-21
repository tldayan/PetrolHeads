import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Home Page",
  description: "Welcome to our site",
};

export default function Home() {
  return (
    <div className={styles.app}>
     
      <main>
        <h1>Home</h1>
          <Link href="pages/createpost">create post</Link>
        <h1>Home</h1>
      </main>

    </div>
  );
}
