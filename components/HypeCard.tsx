import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface HypeCardProps {
  label: string;
  icon: LucideIcon;
  imageSlot: string;
  variant?: "default" | "dark";
}

export function HypeCard({ label, icon: Icon, imageSlot, variant = "default" }: HypeCardProps) {
  const isDark = variant === "dark";
  return (
    <button
      type="button"
      className="group relative shrink-0 overflow-hidden rounded-[14px] bg-white text-left shadow-[0_2px_6px_rgba(0,26,64,0.06),0_1px_2px_rgba(0,26,64,0.04)] transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-[0_14px_28px_rgba(0,26,64,0.12),0_4px_10px_rgba(0,26,64,0.08)]"
      style={{ width: 220, height: 260 }}
    >
      {/* Image area: top 65% = 169px */}
      <div
        className="flex w-full items-center justify-center bg-placeholder"
        style={{ height: 169, backgroundColor: "var(--color-placeholder)" }}
      >
        <span className="font-body text-[11px] uppercase tracking-wider text-gray-500">
          [IMAGE: {imageSlot}]
        </span>
      </div>

      {/* Label bar: bottom 35% = 91px */}
      <div
        className="flex h-[91px] items-center gap-3 px-4"
        style={{
          backgroundColor: isDark ? "var(--color-navy)" : "#ffffff",
        }}
      >
        <Icon
          size={24}
          color={isDark ? "var(--color-blue-mid)" : "var(--color-red)"}
          strokeWidth={2}
        />
        <span
          className="flex-1 font-display text-[14px] font-semibold leading-tight"
          style={{ color: isDark ? "var(--color-offwhite)" : "var(--color-navy)" }}
        >
          {label}
        </span>
        <ArrowRight size={18} color={isDark ? "var(--color-blue-soft)" : "var(--color-blue-mid)"} />
      </div>

      {/* Hover red border */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-red transition-transform duration-200 ease-out group-hover:scale-x-100"
        style={{ backgroundColor: "var(--color-red)" }} />
    </button>
  );
}
