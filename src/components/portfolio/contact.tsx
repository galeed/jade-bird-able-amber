import { useState, type ChangeEvent, type FormEvent } from "react";
import { z } from "zod";
import { SectionHeading } from "@/components/portfolio/section-heading";

const schema = z.object({
  name: z.string().trim().min(2, "Escribe al menos 2 caracteres.").max(80, "Ese nombre es demasiado largo."),
  email: z
    .string()
    .trim()
    .min(1, "Falta el correo.")
    .max(120, "Ese correo es demasiado largo.")
    .email("Ese correo no parece válido."),
  subject: z.string().trim().min(2, "Falta el asunto.").max(120, "Acorta el asunto."),
  message: z
    .string()
    .trim()
    .min(12, "Cuéntame un poco más (12 caracteres o más).")
    .max(2000, "Máximo 2000 caracteres."),
});

type FormValues = z.infer<typeof schema>;
type FieldName = keyof FormValues;
type FieldErrors = Partial<Record<FieldName, string>>;

const EMPTY: FormValues = { name: "", email: "", subject: "", message: "" };

type Receipt = FormValues & { id: string; at: string };

export function ContactSection() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  function update(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as FieldName]) next[key as FieldName] = issue.message;
      }
      setErrors(next);
      const first = parsed.error.issues[0]?.path[0];
      if (typeof first === "string") {
        document.getElementById(first)?.focus();
      }
      return;
    }
    setErrors({});
    setCopied(false);
    setCopyFailed(false);
    setReceipt({
      ...parsed.data,
      id: crypto.randomUUID().slice(0, 8),
      at: new Intl.DateTimeFormat("es-MX", { dateStyle: "medium", timeStyle: "short" }).format(new Date()),
    });
  }

  async function copyReceipt() {
    if (!receipt) return;
    const body = `De: ${receipt.name} <${receipt.email}>\nAsunto: ${receipt.subject}\n\n${receipt.message}`;
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      setCopyFailed(false);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  }

  return (
    <section id="contacto" className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
      <div className="grid items-start gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
        <div>
          <SectionHeading prompt="$ mail -s hola" title="contacto">
            Si quieres hablar de una herramienta, un bug o una colaboración, deja el mensaje. Se valida aquí y queda solo en esta sesión: no hay servidor detrás.
          </SectionHeading>
          <p className="font-mono text-sm text-muted">
            También en{" "}
            <a
              className="text-primary underline-offset-4 hover:underline"
              href="https://x.com/guillaumexj"
              target="_blank"
              rel="noreferrer noopener"
            >
              @guillaumexj
            </a>
            .
          </p>
        </div>
        <div className="tty-card tty-window p-5 md:p-6">
          {receipt ? (
            <div role="status" className="space-y-4">
              <p className="font-mono text-sm text-primary">$ mailq</p>
              <h3 className="text-2xl text-ink">en cola</h3>
              <dl className="space-y-2 font-mono text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">id</dt>
                  <dd className="text-ink tabular-nums">{receipt.id}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">cuando</dt>
                  <dd className="text-right text-ink">{receipt.at}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">de</dt>
                  <dd className="truncate text-ink">
                    {receipt.name} · {receipt.email}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">asunto</dt>
                  <dd className="truncate text-ink">{receipt.subject}</dd>
                </div>
              </dl>
              <p className="text-sm leading-normal text-muted">{receipt.message}</p>
              {copyFailed ? (
                <p className="text-sm text-primary">No pude copiarlo. Selecciona el texto a mano.</p>
              ) : null}
              <div className="flex flex-wrap gap-3">
                <button type="button" className="btn btn-primary" onClick={() => void copyReceipt()}>
                  {copied ? "copiado" : "copiar mensaje"}
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => {
                    setReceipt(null);
                    setValues(EMPTY);
                    setCopied(false);
                    setCopyFailed(false);
                  }}
                >
                  escribir otro
                </button>
              </div>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={onSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id="name"
                  label="nombre"
                  value={values.name}
                  error={errors.name}
                  autoComplete="name"
                  onChange={(value) => update("name", value)}
                />
                <Field
                  id="email"
                  label="correo"
                  type="email"
                  value={values.email}
                  error={errors.email}
                  autoComplete="email"
                  onChange={(value) => update("email", value)}
                />
              </div>
              <Field
                id="subject"
                label="asunto"
                value={values.subject}
                error={errors.subject}
                onChange={(value) => update("subject", value)}
              />
              <Field
                id="message"
                label="mensaje"
                multiline
                value={values.message}
                error={errors.message}
                onChange={(value) => update("message", value)}
              />
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                enviar a la bandeja
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  multiline = false,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  multiline?: boolean;
  autoComplete?: string;
}) {
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: id,
    className: "field",
    value,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(event.currentTarget.value),
  };

  return (
    <div className="block">
      <label htmlFor={id} className="mb-1.5 block font-mono text-sm text-muted">
        {label}
      </label>
      {multiline ? (
        <textarea {...shared} rows={5} />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} />
      )}
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-primary">
          {error}
        </p>
      ) : null}
    </div>
  );
}
