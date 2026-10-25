import type { ReactNode } from "react";

export function SectionHeading({
  prompt,
  title,
  children,
}: {
  prompt: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="font-mono text-sm text-primary">{prompt}</p>
      <h2 className="mt-2 text-3xl text-ink md:text-4xl">{title}</h2>
      {children ? <div className="mt-3 text-base leading-normal text-muted">{children}</div> : null}
    </div>
  );
}
