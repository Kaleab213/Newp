import styles from './style';
import vanillastyle from './stylecss.module.css';
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from './components';
import logoimg from './images/logo.png';
import vid from './images/vid.mp4';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={vanillastyle.ahero}>
      <video autoPlay loop muted playsInline className={vanillastyle.avid}>
        <source src={vid} type="video/mp4"></source>
      </video>
      <div className={`${styles.boxWidth} ${vanillastyle.anav}`}>
        <Navbar />
      </div>
      <div className={vanillastyle.headiv}>
        <h1 className={vanillastyle.headh1}>Addis Finder</h1>
        <p className={`max-w-[700px] mt-5 ${vanillastyle.headp}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

    <div className={`bg-primary`}>
      <div
        className={`${styles.boxWidth}  ${styles.paddingX}`}
        style={{
          display: 'flex',
          flexWrap: 'auto',
          justifyContent: 'center',
          marginTop: '1rem',
        }}
      >
        <Stats />
      </div>

      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={` ${styles.boxWidth}  ${styles.paddingX}`}>
          <Business />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={` ${styles.boxWidth}  ${styles.paddingX}`}>
          <Billing />
        </div>
      </div>

      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={` ${styles.boxWidth}  ${styles.paddingX}`}>
          <CardDeal />
        </div>
      </div>

      <div className={`bg-primary  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}  ${styles.paddingX}`}>
          <Testimonials />
        </div>
      </div>

      <div className={`bg-white ${styles.flexCenter}`}>
        <div className={` ${styles.boxWidth}  ${styles.paddingX}`}>
          <CTA />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
