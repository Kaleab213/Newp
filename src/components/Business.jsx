import { features } from "../constants";
import styles, { layout } from "../style";
import Avatar from "./Avatar";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-col md:flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] md:w-[80px] md:h-[80px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <Avatar />
    </div>
    <div className="flex-1 flex flex-col md:ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] md:text-[20px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[rgba(255, 255, 255, 0.24)] text-[16px] md:text-[18px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={`layout.section py-10 sm:py-20`}>
    <div className="flex flex-col sm:flex-row py-5 sm:py-0">
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2__white} sm:mb-5`}>
          Lorem ipsum dolor ceta <br className="sm:block hidden" /> Ut enim ad
          minim
        </h2>
        <p className={`${styles.paragraph__white} max-w-[470px] mb-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col mt-10 sm:mt-0`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Business;
