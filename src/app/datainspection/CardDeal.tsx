import DataInspectionpdf  from "@/public/DataInspectionpdf.png";
import styles, { layout }from "@/src/app/datainspection/data/style";
import Button from "@/src/components/ui/MagicButton";
import carddatainspection1 from "@/public/carddatainspection1.png";
import cardinspection2 from "@/public/cardinspection2.png";
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
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image
          src={carddatainspection1}
          alt="servermalware"
          className="w-[200px] h-[200px] object-contain mr-5 cursor-pointer"
        />
        <Image
          src={cardinspection2}
          alt="securitybreach"
          className="w-[200px] h-[200px] object-contain cursor-pointer"
        />
      </div>
    </div>
    <div className={layout.sectionImg}>
      <Image src={DataInspectionpdf} alt="card" className="w-auto h-auto max-w-full max-h-full object-contain" />
    </div>
  </section>
);

export default CardDeal;
