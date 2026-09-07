import type { ReactNode } from "react";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SiteContainer({ children, className = "" }: SiteContainerProps) {
  return <div className={`mx-auto w-full max-w-content px-4 sm:px-6 lg:px-16 ${className}`}>{children}</div>;
}
