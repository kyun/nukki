import UploadButton from "~/src/components/UploadButton";
import styles from "./root.module.css";
import RootContainer from "~/src/containers/RootContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <RootContainer />
      <p className={styles.description}>최대 10장 업로드 가능합니다.</p>
    </main>
  );
}
