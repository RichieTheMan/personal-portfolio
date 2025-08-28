import styles from "./UnderDevTape.module.css";

type UnderDevTapeProps = {
  className?: string;
  rotation?: number;
};

export default function UnderDevTape({
  className = "",
  rotation = 0,
}: UnderDevTapeProps) {
  const textList = Array.from({ length: 35 }, (_, i) => (
    <div key={i} className={styles.underDevTextFrame}>
      <div className={styles.tapeCircleDivisor} />
      <span className={styles.underDevText}>Under Development</span>
    </div>
  ));

  return (
    <div
      className={`${styles.underDevFrame} ${className}`}
      style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
    >
      {textList}
    </div>
  );
}
