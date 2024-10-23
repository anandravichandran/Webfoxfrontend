import bill from "@/public/bill.png";
import styles, { layout } from "@/app/datainspection/data/style";
import Image from "next/image";
const Billing: React.FC = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Real-Time Scanning For Hidden  <br className="sm:block hidden" />Private Information In PDFs And Text.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Our intelligent computing searches text files and PDFs for confidential data, including passwords, unique IDs, private company information, and personal identifiers. We examine content, metadata, and embedded elements using machine learning and Natural Language Processing (NLP) to find possible confidential content. Our tool detects vulnerabilities in real-time and instantly alerts you to minimize risks and guarantee data security, whether it be financial information concealed in a PDF or private text correspondence.

      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image
          src={""}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <Image
          src={""}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
