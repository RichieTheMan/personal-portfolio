import React from "react";
import styles from "./GroupToggle.module.css";

type GroupToggleProps = {
  isToggled: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function GroupToggle({ isToggled, setState }: GroupToggleProps) {
  return (
    <div className={styles.toggleFrame}>
      <button
        className={isToggled ? styles.toggleButtonActive : styles.toggleButton}
        onClick={() => setState(true)}
      >
        By Type
      </button>
      <span className={styles.toggleDivisor}>{`/`}</span>
      <button
        className={!isToggled ? styles.toggleButtonActive : styles.toggleButton}
        onClick={() => setState(false)}
      >
        By End
      </button>
    </div>
  );
}
