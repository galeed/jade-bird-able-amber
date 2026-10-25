import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { useDistro } from "@/components/distro-provider";
import { cn } from "@/lib/cn";
import { DISTROS, NAV } from "@/lib/portfolio";

const SECTION_IDS = NAV.map((item) => item.id);

export function SiteHeader() {
  const distro = useDistro();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (node): node is HTMLElement => Boolean(node),
    );
    if (nodes.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 px-4 py-3 md:grid-cols-[auto_1fr_auto]">
        <a href="#top" className="min-w-0 truncate font-mono text-sm text-ink">
          <span className="text-primary">~</span>/guillaume
        </a>
        <nav
          aria-label="Secciones"
          className="col-span-2 -mx-4 flex gap-1 overflow-x-auto px-4 md:col-span-1 md:mx-0 md:justify-center md:px-0"
        >
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="nav-link inline-flex h-11 shrink-0 items-center rounded-md px-3 font-mono text-sm text-muted transition-colors hover:text-ink"
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger
            className="distro-trigger btn btn-ghost px-3"
            aria-label={`Skin de distro, actual ${distro.name}`}
          >
            <span className={cn("swatch", `swatch-${distro.id}`)} aria-hidden="true" />
            <span className="max-w-28 truncate sm:max-w-none">{distro.name}</span>
            <ChevronDown className="distro-chevron size-4" aria-hidden="true" />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="distro-panel" align="end" sideOffset={8} collisionPadding={16}>
              <p className="px-2 pb-2 font-mono text-sm text-muted">El fondo se queda oscuro.</p>
              <div className="grid grid-cols-2 gap-1" role="radiogroup" aria-label="Skins de distro">
                {DISTROS.map((item) => {
                  const selected = item.id === distro.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      className="distro-option flex min-h-11 items-center gap-2 rounded-md px-2 py-2 text-left"
                      onClick={() => {
                        distro.select(item.id);
                        setOpen(false);
                      }}
                    >
                      <span className={cn("swatch", `swatch-${item.id}`)} aria-hidden="true" />
                      <span className="min-w-0">
                        <span className="block truncate font-mono text-sm text-ink">{item.name}</span>
                        <span className="block text-xs text-faint">{item.note}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </header>
  );
}
