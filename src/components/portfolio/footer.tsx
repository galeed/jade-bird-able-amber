import { useDistro } from "@/components/distro-provider";
import { NAV } from "@/lib/portfolio";

export function SiteFooter() {
  const distro = useDistro();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-rule" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-mono text-sm text-primary">guest@tty:~</p>
          <p className="mt-3 max-w-sm text-base leading-normal text-muted">
            Una consola personal. El fondo se queda oscuro; el neón lo pone la distro.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="font-mono text-sm text-faint">navegar</p>
          <ul className="mt-3 space-y-1">
            <li>
              <a className="inline-flex h-11 items-center font-mono text-sm text-muted hover:text-primary" href="#top">
                inicio
              </a>
            </li>
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  className="inline-flex h-11 items-center font-mono text-sm text-muted hover:text-primary"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-mono text-sm text-faint">sesión</p>
          <ul className="mt-3 space-y-1 font-mono text-sm">
            <li>
              <a className="inline-flex h-11 items-center text-muted hover:text-primary" href="#contacto">
                escribir
              </a>
            </li>
            <li>
              <a
                className="inline-flex h-11 items-center text-muted hover:text-primary"
                href="https://x.com/guillaumexj"
                target="_blank"
                rel="noreferrer noopener"
              >
                @guillaumexj
              </a>
            </li>
            <li className="flex h-11 items-center text-ink">
              skin <span className="ml-2 text-accent">{distro.name}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 font-mono text-sm text-muted">
          <p>
            utf-8 · lf · skin <span className="text-ink">{distro.name}</span>
          </p>
          <p className="tabular-nums">© {year} Guillaume · exit 0</p>
        </div>
      </div>
    </footer>
  );
}
