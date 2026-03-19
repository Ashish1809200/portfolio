import type { BaseProps } from "../../types";

const Card = ({ children, className }: BaseProps) => {
  return (
    <div
      className={`bg-(--color-surface) p-6 rounded-xl hover:scale-105 transition ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
