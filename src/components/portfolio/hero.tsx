import { DISTRO_COUNT, useDistro } from "@/components/distro-provider";
import { PROJECTS } from "@/lib/portfolio";

export function HeroSection() {
  const distro = useDistro();
  const count = String(PROJECTS.length).padStart(2, "0");
  const skins = String(DISTRO_COUNT).padStart(2, "0");

  return (
    <section id="top" className="mx-auto grid w-full max-w-6xl gap-4 px-4 pt-8 pb-16 md:grid-cols-[1.45fr_0.8fr] md:pt-14 md:pb-24">
      <div className="tty-card tty-window">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-line px-4 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-faint" />
            <span className="size-2.5 rounded-full bg-muted" />
            <span className="size-2.5 rounded-full bg-primary" />
          </span>
          <p className="font-mono text-xs text-muted">guest@tty — zsh</p>
          <span />
        </div>
        <div className="space-y-5 p-5 md:p-7">
          <p className="font-mono text-sm text-muted md:text-base">
            <span className="text-primary">guest@tty</span>
            <span className="text-faint">:~$</span> whoami
          </p>
          <div>
            <h1 className="text-5xl leading-none text-ink md:text-6xl">Guillaume</h1>
            <p className="mt-4 max-w-xl text-base leading-normal text-muted md:text-lg">
              Software que cabe en una terminal. Herramientas rápidas, teclado primero, y un neón que cambia con la distro.
            </p>
          </div>
          <p className="font-mono text-sm text-muted md:text-base">
            <span className="text-primary">guest@tty</span>
            <span className="text-faint">:~$</span> ls ./proyectos
            <span className="tty-cursor" aria-hidden="true" />
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#proyectos">
              ver proyectos
            </a>
            <a className="btn btn-ghost" href="#contacto">
              escribir
            </a>
          </div>
        </div>
      </div>
      <aside className="tty-card flex flex-col justify-between gap-6 p-5">
        <div>
          <p className="font-mono text-sm text-primary">$ session</p>
          <dl className="mt-4 font-mono text-sm">
            <SessionRow label="distro" value={distro.name} />
            <SessionRow label="proyectos" value={count} />
            <SessionRow label="skins" value={skins} />
            <SessionRow label="base" value="México" />
            <SessionRow label="shell" value="zsh" />
          </dl>
        </div>
        <p className="font-mono text-sm text-accent">colaboraciones abiertas</p>
      </aside>
    </section>
  );
}

function SessionRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-b-0">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right text-ink tabular-nums">{value}</dd>
    </div>
  );
}
