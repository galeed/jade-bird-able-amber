import { useDistro } from "@/components/distro-provider";
import { SectionHeading } from "@/components/portfolio/section-heading";

export function AboutSection() {
  const distro = useDistro();

  return (
    <section id="acerca" className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <SectionHeading prompt="$ cat acerca.txt" title="acerca">
            Trabajo entre la interfaz y el sistema. Me interesan los programas que arrancan en seco, se manejan con el teclado y no esconden su estado.
          </SectionHeading>
          <div className="max-w-xl space-y-4 text-base leading-normal text-muted">
            <p>
              Paso el día en Linux. De un kanban que cabe en un archivo a un selector de mirrors que mide la latencia de verdad: si un programa no puede decir qué está haciendo, todavía no está listo.
            </p>
            <p>
              Este sitio sigue la misma regla. Hay diez skins con nombre de distro. El fondo no se aclara; cambian el neón, el acento y el tinte de la sala. La elección se queda en este navegador.
            </p>
          </div>
        </div>
        <div className="tty-card p-5 md:p-6">
          <p className="font-mono text-sm text-primary">guillaume@tty</p>
          <p className="mt-1 font-mono text-xs text-faint">-------------------------</p>
          <div className="mt-4 flex gap-4">
            <div className="relative size-20 shrink-0" aria-hidden="true">
              <span className="absolute inset-0 rounded-full border-2 border-primary" />
              <span className="absolute inset-2.5 rounded-full border border-accent" />
              <span className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
            </div>
            <dl className="min-w-0 flex-1 space-y-2 font-mono text-sm">
              <FetchRow label="usuario" value="guillaume" />
              <FetchRow label="distro" value={distro.name} />
              <FetchRow label="neón" value={distro.note} />
              <FetchRow label="editor" value="helix" />
              <FetchRow label="foco" value="cli y web" />
              <FetchRow label="base" value="México" />
              <FetchRow label="red" value="@guillaumexj" />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function FetchRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[5.5rem_1fr] gap-2">
      <dt className="text-accent">{label}</dt>
      <dd className="truncate text-ink">{value}</dd>
    </div>
  );
}
