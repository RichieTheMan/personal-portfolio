import "./styles.css";

type UnderDevelopmentTapeProps = {
  className?: string;
  rotation?: number;
};

export function UnderDevelopmentTape({
  className = "",
  rotation = 0,
}: UnderDevelopmentTapeProps) {
  return (
    <div
      className={`under-development-frame ${className}`}
      style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
    >
      {[...Array(35)].map((_, i) => (
        <div key={i} className="under-development-text-frame">
          <div className="tape-circle-divisor" />
          <span className="under-dev-text">Under Development</span>
        </div>
      ))}
    </div>
  );
}
