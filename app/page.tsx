import styles from "./root.module.css";
import RootContainer from "~/src/containers/RootContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <RootContainer />
    </main>
  );
}
