import Image from "next/image";
import styles from "./brands.module.scss";
import { BrandsGrid } from "./brandsGrid";
import { BrandsData } from "@/types";

interface FunnelBrandsProps {
  content: Array<BrandsData>;
  mobileContent: Array<BrandsData>;
}

export function FunnelBrands({ content, mobileContent }: FunnelBrandsProps) {
  return (
    <section className={styles.brandsSection}>
      <div className={styles.brandsBanner}>
        <div className={styles.brandsBannerContainer}>
          <h4 className={styles.brandsBannerText}>
            We work with businesses of all sizes in NZ <br />
            to increase revenue by as much as 5x
          </h4>
          <Image
            src="/main_title.png"
            className={styles.eltezzaLogo}
            width={250}
            height={100}
            alt="HexaTrue"
          />
        </div>
      </div>
      <BrandsGrid content={content} mobileContent={mobileContent} />
    </section>
  );
}
