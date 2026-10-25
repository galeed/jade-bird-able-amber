import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import {
  CATEGORIES,
  PROJECTS,
  categoryLabel,
  type FilterId,
} from "@/lib/portfolio";
import { SectionHeading } from "@/components/portfolio/section-heading";

export function ProjectsSection() {
  const [filter, setFilter] = useState<FilterId>("todos");
  const visible = useMemo(
    () => (filter === "todos" ? PROJECTS : PROJECTS.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <section id="proyectos" className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
      <SectionHeading prompt="$ find ./work -type d" title="proyectos">
        Ocho piezas entre la web, el sistema y la terminal.
      </SectionHeading>
      <p className="hint-hover -mt-4 mb-6 font-mono text-sm text-faint">
        En escritorio, el hover abre la descripción. Con teclado, enfoca la ficha.
      </p>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
        {CATEGORIES.map((category) => {
          const count =
            category.id === "todos"
              ? PROJECTS.length
              : PROJECTS.filter((project) => project.category === category.id).length;
          const pressed = filter === category.id;
          return (
            <button
              key={category.id}
              type="button"
              className="chip"
              aria-pressed={pressed}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
              <span className={cn("tabular-nums", pressed ? "text-on-primary" : "text-faint")}>{count}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-4 font-mono text-sm text-muted tabular-nums" aria-live="polite">
        {visible.length} {visible.length === 1 ? "proyecto" : "proyectos"}
      </p>
      <ul className="mt-6 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => {
          const index = String(PROJECTS.findIndex((item) => item.id === project.id) + 1).padStart(2, "0");
          return (
            <li key={`${filter}-${project.id}`} className="rise">
              <article className="tty-card tty-project p-5" tabIndex={0}>
                <div className="flex items-center justify-between gap-3 font-mono text-xs">
                  <p>
                    <span className="text-faint tabular-nums">{index}</span>
                    <span className="px-1.5 text-faint" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-primary">{categoryLabel(project.category)}</span>
                  </p>
                  <p className="text-faint tabular-nums">{project.year}</p>
                </div>
                <h3 className="mt-3 text-xl text-ink transition-colors">{project.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-elevated px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="project-reveal">
                  <div>
                    <p className="pt-4 text-sm leading-normal text-muted">{project.summary}</p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
