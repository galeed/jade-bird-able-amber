import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { a as DISTROS, c as SKILL_GROUPS, i as CATEGORIES, l as categoryLabel, n as DISTRO_COUNT, o as NAV, r as useDistro, s as PROJECTS } from "./router-mKPFRtj1.mjs";
import { t as ChevronDown } from "../_libs/lucide-react.mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "../_libs/@radix-ui/react-popover+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D-0w_LWt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ prompt, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-sm text-primary",
				children: prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-3xl text-ink md:text-4xl",
				children: title
			}),
			children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 text-base leading-normal text-muted",
				children
			}) : null
		]
	});
}
function AboutSection() {
	const distro = useDistro();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "acerca",
		className: "mx-auto w-full max-w-6xl px-4 py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-8 md:grid-cols-2 md:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				prompt: "$ cat acerca.txt",
				title: "acerca",
				children: "Trabajo entre la interfaz y el sistema. Me interesan los programas que arrancan en seco, se manejan con el teclado y no esconden su estado."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl space-y-4 text-base leading-normal text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Paso el día en Linux. De un kanban que cabe en un archivo a un selector de mirrors que mide la latencia de verdad: si un programa no puede decir qué está haciendo, todavía no está listo." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Este sitio sigue la misma regla. Hay diez skins con nombre de distro. El fondo no se aclara; cambian el neón, el acento y el tinte de la sala. La elección se queda en este navegador." })]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "tty-card p-5 md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm text-primary",
						children: "guillaume@tty"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-xs text-faint",
						children: "-------------------------"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative size-20 shrink-0",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full border-2 border-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-2.5 rounded-full border border-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "min-w-0 flex-1 space-y-2 font-mono text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FetchRow, {
									label: "usuario",
									value: "guillaume"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FetchRow, {
									label: "distro",
									value: distro.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FetchRow, {
									label: "neón",
									value: distro.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FetchRow, {
									label: "editor",
									value: "helix"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FetchRow, {
									label: "foco",
									value: "cli y web"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FetchRow, {
									label: "base",
									value: "México"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FetchRow, {
									label: "red",
									value: "@guillaumexj"
								})
							]
						})]
					})
				]
			})]
		})
	});
}
function FetchRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[5.5rem_1fr] gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-accent",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-ink",
			children: value
		})]
	});
}
var schema = object({
	name: string().trim().min(2, "Escribe al menos 2 caracteres.").max(80, "Ese nombre es demasiado largo."),
	email: string().trim().min(1, "Falta el correo.").max(120, "Ese correo es demasiado largo.").email("Ese correo no parece válido."),
	subject: string().trim().min(2, "Falta el asunto.").max(120, "Acorta el asunto."),
	message: string().trim().min(12, "Cuéntame un poco más (12 caracteres o más).").max(2e3, "Máximo 2000 caracteres.")
});
var EMPTY = {
	name: "",
	email: "",
	subject: "",
	message: ""
};
function ContactSection() {
	const [values, setValues] = (0, import_react.useState)(EMPTY);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [receipt, setReceipt] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [copyFailed, setCopyFailed] = (0, import_react.useState)(false);
	function update(field, value) {
		setValues((current) => ({
			...current,
			[field]: value
		}));
		setErrors((current) => ({
			...current,
			[field]: void 0
		}));
	}
	function onSubmit(event) {
		event.preventDefault();
		const parsed = schema.safeParse(values);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (typeof key === "string" && !next[key]) next[key] = issue.message;
			}
			setErrors(next);
			const first = parsed.error.issues[0]?.path[0];
			if (typeof first === "string") document.getElementById(first)?.focus();
			return;
		}
		setErrors({});
		setCopied(false);
		setCopyFailed(false);
		setReceipt({
			...parsed.data,
			id: crypto.randomUUID().slice(0, 8),
			at: new Intl.DateTimeFormat("es-MX", {
				dateStyle: "medium",
				timeStyle: "short"
			}).format(/* @__PURE__ */ new Date())
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "mx-auto w-full max-w-6xl px-4 py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				prompt: "$ mail -s hola",
				title: "contacto",
				children: "Si quieres hablar de una herramienta, un bug o una colaboración, deja el mensaje. Se valida aquí y queda solo en esta sesión: no hay servidor detrás."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-sm text-muted",
				children: [
					"También en",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-primary underline-offset-4 hover:underline",
						href: "https://x.com/guillaumexj",
						target: "_blank",
						rel: "noreferrer noopener",
						children: "@guillaumexj"
					}),
					"."
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tty-card tty-window p-5 md:p-6",
				children: receipt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "status",
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm text-primary",
							children: "$ mailq"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl text-ink",
							children: "en cola"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "space-y-2 font-mono text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "id"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-ink tabular-nums",
										children: receipt.id
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "cuando"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-right text-ink",
										children: receipt.at
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "de"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "truncate text-ink",
										children: [
											receipt.name,
											" · ",
											receipt.email
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted",
										children: "asunto"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "truncate text-ink",
										children: receipt.subject
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-normal text-muted",
							children: receipt.message
						}),
						copyFailed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-primary",
							children: "No pude copiarlo. Selecciona el texto a mano."
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-primary",
								onClick: () => void copyReceipt(),
								children: copied ? "copiado" : "copiar mensaje"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-ghost",
								onClick: () => {
									setReceipt(null);
									setValues(EMPTY);
									setCopied(false);
									setCopyFailed(false);
								},
								children: "escribir otro"
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-4",
					onSubmit,
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "name",
								label: "nombre",
								value: values.name,
								error: errors.name,
								autoComplete: "name",
								onChange: (value) => update("name", value)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "email",
								label: "correo",
								type: "email",
								value: values.email,
								error: errors.email,
								autoComplete: "email",
								onChange: (value) => update("email", value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "subject",
							label: "asunto",
							value: values.subject,
							error: errors.subject,
							onChange: (value) => update("subject", value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "message",
							label: "mensaje",
							multiline: true,
							value: values.message,
							error: errors.message,
							onChange: (value) => update("message", value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn btn-primary w-full sm:w-auto",
							children: "enviar a la bandeja"
						})
					]
				})
			})]
		})
	});
}
function Field({ id, label, value, error, onChange, type = "text", multiline = false, autoComplete }) {
	const errorId = `${id}-error`;
	const shared = {
		id,
		name: id,
		className: "field",
		value,
		"aria-invalid": error ? true : void 0,
		"aria-describedby": error ? errorId : void 0,
		onChange: (event) => onChange(event.currentTarget.value)
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: id,
				className: "mb-1.5 block font-mono text-sm text-muted",
				children: label
			}),
			multiline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				...shared,
				rows: 5
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				...shared,
				type,
				autoComplete
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: errorId,
				role: "alert",
				className: "mt-1.5 text-sm text-primary",
				children: error
			}) : null
		]
	});
}
function SiteFooter() {
	const distro = useDistro();
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "footer-rule" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm text-primary",
						children: "guest@tty:~"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-sm text-base leading-normal text-muted",
						children: "Una consola personal. El fondo se queda oscuro; el neón lo pone la distro."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm text-faint",
						children: "navegar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex h-11 items-center font-mono text-sm text-muted hover:text-primary",
							href: "#top",
							children: "inicio"
						}) }), NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex h-11 items-center font-mono text-sm text-muted hover:text-primary",
							href: item.href,
							children: item.label
						}) }, item.id))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm text-faint",
						children: "sesión"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-1 font-mono text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex h-11 items-center text-muted hover:text-primary",
								href: "#contacto",
								children: "escribir"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex h-11 items-center text-muted hover:text-primary",
								href: "https://x.com/guillaumexj",
								target: "_blank",
								rel: "noreferrer noopener",
								children: "@guillaumexj"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex h-11 items-center text-ink",
								children: ["skin ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 text-accent",
									children: distro.name
								})]
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 font-mono text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["utf-8 · lf · skin ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-ink",
					children: distro.name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "tabular-nums",
					children: [
						"© ",
						year,
						" Guillaume · exit 0"
					]
				})]
			})
		})
	] });
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var SECTION_IDS = NAV.map((item) => item.id);
function SiteHeader() {
	const distro = useDistro();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter((node) => Boolean(node));
		if (nodes.length === 0) return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-35% 0px -50% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 px-4 py-3 md:grid-cols-[auto_1fr_auto]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "min-w-0 truncate font-mono text-sm text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "~"
					}), "/guillaume"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Secciones",
					className: "col-span-2 -mx-4 flex gap-1 overflow-x-auto px-4 md:col-span-1 md:mx-0 md:justify-center md:px-0",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "nav-link inline-flex h-11 shrink-0 items-center rounded-md px-3 font-mono text-sm text-muted transition-colors hover:text-ink",
						"aria-current": active === item.id ? "page" : void 0,
						children: item.label
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger, {
						className: "distro-trigger btn btn-ghost px-3",
						"aria-label": `Skin de distro, actual ${distro.name}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("swatch", `swatch-${distro.id}`),
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "max-w-28 truncate sm:max-w-none",
								children: distro.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: "distro-chevron size-4",
								"aria-hidden": "true"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content2, {
						className: "distro-panel",
						align: "end",
						sideOffset: 8,
						collisionPadding: 16,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-2 pb-2 font-mono text-sm text-muted",
							children: "El fondo se queda oscuro."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-1",
							role: "radiogroup",
							"aria-label": "Skins de distro",
							children: DISTROS.map((item) => {
								const selected = item.id === distro.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									role: "radio",
									"aria-checked": selected,
									className: "distro-option flex min-h-11 items-center gap-2 rounded-md px-2 py-2 text-left",
									onClick: () => {
										distro.select(item.id);
										setOpen(false);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("swatch", `swatch-${item.id}`),
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block truncate font-mono text-sm text-ink",
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs text-faint",
											children: item.note
										})]
									})]
								}, item.id);
							})
						})]
					}) })]
				})
			]
		})
	});
}
function HeroSection() {
	const distro = useDistro();
	const count = String(PROJECTS.length).padStart(2, "0");
	const skins = String(DISTRO_COUNT).padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "mx-auto grid w-full max-w-6xl gap-4 px-4 pt-8 pb-16 md:grid-cols-[1.45fr_0.8fr] md:pt-14 md:pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "tty-card tty-window",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[1fr_auto_1fr] items-center border-b border-line px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex gap-1.5",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-faint" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-muted" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-primary" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-muted",
						children: "guest@tty — zsh"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5 p-5 md:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-sm text-muted md:text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "guest@tty"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-faint",
								children: ":~$"
							}),
							" whoami"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-5xl leading-none text-ink md:text-6xl",
						children: "Guillaume"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base leading-normal text-muted md:text-lg",
						children: "Software que cabe en una terminal. Herramientas rápidas, teclado primero, y un neón que cambia con la distro."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-sm text-muted md:text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "guest@tty"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-faint",
								children: ":~$"
							}),
							" ls ./proyectos",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tty-cursor",
								"aria-hidden": "true"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "btn btn-primary",
							href: "#proyectos",
							children: "ver proyectos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "btn btn-ghost",
							href: "#contacto",
							children: "escribir"
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "tty-card flex flex-col justify-between gap-6 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-sm text-primary",
				children: "$ session"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 font-mono text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionRow, {
						label: "distro",
						value: distro.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionRow, {
						label: "proyectos",
						value: count
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionRow, {
						label: "skins",
						value: skins
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionRow, {
						label: "base",
						value: "México"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionRow, {
						label: "shell",
						value: "zsh"
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-sm text-accent",
				children: "colaboraciones abiertas"
			})]
		})]
	});
}
function SessionRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-b-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right text-ink tabular-nums",
			children: value
		})]
	});
}
function ProjectsSection() {
	const [filter, setFilter] = (0, import_react.useState)("todos");
	const visible = (0, import_react.useMemo)(() => filter === "todos" ? PROJECTS : PROJECTS.filter((project) => project.category === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "proyectos",
		className: "mx-auto w-full max-w-6xl px-4 py-16 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				prompt: "$ find ./work -type d",
				title: "proyectos",
				children: "Ocho piezas entre la web, el sistema y la terminal."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hint-hover -mt-4 mb-6 font-mono text-sm text-faint",
				children: "En escritorio, el hover abre la descripción. Con teclado, enfoca la ficha."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Filtrar por categoría",
				children: CATEGORIES.map((category) => {
					const count = category.id === "todos" ? PROJECTS.length : PROJECTS.filter((project) => project.category === category.id).length;
					const pressed = filter === category.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "chip",
						"aria-pressed": pressed,
						onClick: () => setFilter(category.id),
						children: [category.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("tabular-nums", pressed ? "text-on-primary" : "text-faint"),
							children: count
						})]
					}, category.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-mono text-sm text-muted tabular-nums",
				"aria-live": "polite",
				children: [
					visible.length,
					" ",
					visible.length === 1 ? "proyecto" : "proyectos"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: visible.map((project) => {
					const index = String(PROJECTS.findIndex((item) => item.id === project.id) + 1).padStart(2, "0");
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rise",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "tty-card tty-project p-5",
							tabIndex: 0,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3 font-mono text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-faint tabular-nums",
											children: index
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-1.5 text-faint",
											"aria-hidden": "true",
											children: "·"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: categoryLabel(project.category)
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-faint tabular-nums",
										children: project.year
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-xl text-ink transition-colors",
									children: project.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 flex flex-wrap gap-2",
									children: project.stack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-full bg-elevated px-2.5 py-1 font-mono text-xs text-muted",
										children: item
									}, item))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "project-reveal",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "pt-4 text-sm leading-normal text-muted",
										children: project.summary
									}) })
								})
							]
						})
					}, `${filter}-${project.id}`);
				})
			})
		]
	});
}
function SkillsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "habilidades",
		className: "mx-auto w-full max-w-6xl px-4 py-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			prompt: "$ neofetch --skills",
			title: "habilidades",
			children: "Lo que uso para construir. La barra es práctica, no un examen: cinco bloques es lo que tengo más a mano."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-3",
			children: SKILL_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "tty-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-mono text-sm text-primary",
					children: ["./", group.title]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm text-ink",
								children: item.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "sr-only",
								children: [item.level, " de 5"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex gap-1",
								"aria-hidden": "true",
								children: Array.from({ length: 5 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: index < item.level ? "meter-on" : "meter-off" }, index))
							})
						]
					}, item.name))
				})]
			}, group.id))
		})]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip-link",
			href: "#top",
			children: "Saltar al contenido"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
