import React from "react";
import styles from "./homepage.module.css";
import notesImage from "../../assets/notes.png";
import { BiSolidLock } from "react-icons/bi";

function HomePage() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <img src={notesImage} alt="Pocket Notes" />
        </div>
        <div>Pocket Notes</div>
        <p>
          Exchange messages securely without needing your phone online. Utilize
          Pocket Notes across up to four linked devices and one mobile phone.
        </p>
      </div>
      <p>
        <BiSolidLock />
        End-to-end encryption ensured
      </p>
    </div>
  );
}

export default HomePage;
