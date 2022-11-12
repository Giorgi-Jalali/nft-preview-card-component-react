import styles from "./photo.module.css";
import icon from "./images/icon-view.svg";

export default function PhotoComponent() {
  return (
    <div>
      <div className={styles.photo}>
        <div className={styles["photo-view"]}>
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
}
