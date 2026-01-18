import Image from "next/image";
import styles from "./header.module.scss";

export function FunnelHeader() {
  return (
    <header className={styles.logoContainer}>
      <Image
        src="/main_title.png"
        alt="HexaTrue"
        width={300}
        height={110}
        className={styles.logo}
      />
    </header>
  );
}
