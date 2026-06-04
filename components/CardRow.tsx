import type { ReactNode } from "react";

interface CardRowProps {
  id?: string;
  label: string;
  children: ReactNode;
}

export function CardRow({ id, label, children }: CardRowProps) {
  return (
    <section id={id} className="w-full scroll-mt-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="border-b pb-3" style={{ borderColor: "var(--color-divider)" }}>
          <h2
            className="font-body text-[26px] font-bold tracking-tight"
            style={{ color: "var(--color-navy)" }}
          >
            {label}
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 pt-5">
        <div className="scroll-row flex gap-4 overflow-x-auto pb-4" style={{ scrollPaddingLeft: 24 }}>
          {children}
        </div>
      </div>
    </section>
  );
}
