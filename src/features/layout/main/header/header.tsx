import Image from "next/image";
import styles from "./header.module.scss";
import { Switch } from "@/features/ui";
import Link from "next/link";

interface HeaderProps {
  page: "design" | "creative";
  color: "--ez-orange" | "--adobe-purple";
}

export function Header({ page, color }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/main_title.png"
          alt="HexaTrue"
          width={280}
          height={65}
          className={styles.headerLogo}
        />
      </Link>
      <Switch page={page} color={color} />
    </header>
  );
}
