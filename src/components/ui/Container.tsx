import type { BaseProps } from "../../types";

const Container = ({ children }: BaseProps) => {
  return <div className="max-w-5xl mx-auto px-6">{children}</div>;
};

export default Container;
