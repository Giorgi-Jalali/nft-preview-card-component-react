import styles from "./author.module.css";
import avatar from "./images/image-avatar.png";

export default function AuthorComponent() {
  return (
    <div>
      <div className={styles.line}></div>

      <div className={styles.info}>
        <img src={avatar} className={styles.photo} alt="author" />
        <p className={styles["author-paragraph"]}>
          Creation of{" "}
          <span className={styles["author-name"]}>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}
