interface ButtonProps {
  name: string;
  isBeam?: boolean;
  containerClass: string;
}

export default function Button({ name, isBeam = false, containerClass }: ButtonProps) {
  return (
    <button type="button" className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex size-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );
}
