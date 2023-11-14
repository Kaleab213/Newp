import styles from '../style';
import { discount } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col mt-[4rem]`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 items-center`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Lorem</span> Discon fun{' '}
            <span className="text-white">Lorem ipsum</span> Adolor
          </p>
        </div>

        <div className="flex-col justifuy-center items-center ">
          <h1 className="font-poppins font-semibold ss:text-[60px] text-[40px] text-[#F4CE14] flex justify-center">
            Lorem ipsum dolor ceta
          </h1>

          <h1 className="font-poppins font-semibold ss:text-[60px] text-[40px] text-[#F4CE14] flex justify-center">
            Muspi rodol alec
          </h1>

          <h1 className="font-poppins font-semibold ss:text-[60px] text-[40px] text-[#F4CE14] flex justify-center">
            Fitce encib wader
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
