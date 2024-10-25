import card  from "@/public/card.png";
import styles, { layout }from "@/src/app/datainspection/data/style";
import Button from "@/src/components/ui/MagicButton";
import Image from "next/image";
const CardDeal: React.FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Fortify Your Visual Data: Intelligent <br className="sm:block hidden" /> Security for Videos and Images
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our state-of-the-art AI-powered system ensures your data remains secure by meticulously analyzing videos and images for any hidden or visible sensitive information. Our technology uses refined pattern recognition to detect possible threats and send out real-time alerts, allowing you to effectively manage and safeguard your visual data. Stay compliant with cybersecurity regulations and guard against unintentional data breaches with our integrated inspection capabilities.
      </p>
      {/* <Button styles="mt-10" /> */}
    </div>
    <div className={layout.sectionImg}>
      <Image src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
