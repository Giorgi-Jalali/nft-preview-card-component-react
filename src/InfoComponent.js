import styles from "./info.module.css";
import ethereum from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";

export default function InfoComponent() {
  return (
    <div>
      <h2>Equilibrium #3429</h2>
      <p className={styles.paragraph}>
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className={styles.info}>
        <div className={styles["info-divs"]}>
          <img src={ethereum} alt="ethereum" />
          <span className={styles.eth}>0.041 ETH</span>
        </div>
        <div className={styles["info-divs"]}>
          <img src={clock} alt="clock" />
          <span className={styles.clock}>3 days left</span>
        </div>
      </div>
    </div>
  );
}
