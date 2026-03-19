import type { ReactNode } from "react";

export interface BaseProps {
  children: ReactNode;
  className?: string;
}

export interface SectionProps extends BaseProps {
  id?: string;
}

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;
