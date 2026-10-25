import { SKILL_GROUPS } from "@/lib/portfolio";
import { SectionHeading } from "@/components/portfolio/section-heading";

export function SkillsSection() {
  return (
    <section id="habilidades" className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
      <SectionHeading prompt="$ neofetch --skills" title="habilidades">
        Lo que uso para construir. La barra es práctica, no un examen: cinco bloques es lo que tengo más a mano.
      </SectionHeading>
      <div className="grid gap-4 md:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <article key={group.id} className="tty-card p-5">
            <h3 className="font-mono text-sm text-primary">./{group.title}</h3>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm text-ink">{item.name}</span>
                  <span className="sr-only">{item.level} de 5</span>
                  <span className="flex gap-1" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index} className={index < item.level ? "meter-on" : "meter-off"} />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
