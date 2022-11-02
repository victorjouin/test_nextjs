import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import react from "react";

function firstStep() {
  console.log("where we go");
}

const Info = () => {
  return (
    <div className={styles.div}>
      on est ici a faire des components pour une page !
      <button onClick={firstStep}>click sur moi pour voir ?</button>
    </div>
  );
};
export default Info;
