export const DISTRO_STORAGE_KEY = "tty-distro";

export const DISTROS = [
  { id: "ubuntu", name: "Ubuntu", note: "Naranja" },
  { id: "debian", name: "Debian", note: "Carmesí" },
  { id: "arch", name: "Arch", note: "Cian" },
  { id: "fedora", name: "Fedora", note: "Índigo" },
  { id: "mint", name: "Linux Mint", note: "Lima" },
  { id: "pop", name: "Pop!_OS", note: "Acqua" },
  { id: "gentoo", name: "Gentoo", note: "Violeta" },
  { id: "kali", name: "Kali", note: "Azul" },
  { id: "manjaro", name: "Manjaro", note: "Esmeralda" },
  { id: "nixos", name: "NixOS", note: "Hielo" },
] as const;

export type DistroId = (typeof DISTROS)[number]["id"];

export function isDistroId(value: string | null): value is DistroId {
  return DISTROS.some((distro) => distro.id === value);
}

export function getDistro(id: DistroId) {
  return DISTROS.find((distro) => distro.id === id) ?? DISTROS[0];
}

export const BOOT_SCRIPT = `try{var d=localStorage.getItem(${JSON.stringify(DISTRO_STORAGE_KEY)});var ok=${JSON.stringify(
  DISTROS.map((distro) => distro.id),
)};if(ok.indexOf(d)!==-1)document.documentElement.setAttribute("data-distro",d);}catch(e){}`;

export const NAV = [
  { id: "proyectos", href: "#proyectos", label: "proyectos" },
  { id: "acerca", href: "#acerca", label: "acerca" },
  { id: "habilidades", href: "#habilidades", label: "habilidades" },
  { id: "contacto", href: "#contacto", label: "contacto" },
] as const;

export const CATEGORIES = [
  { id: "todos", label: "todos" },
  { id: "web", label: "web" },
  { id: "sistemas", label: "sistemas" },
  { id: "herramientas", label: "herramientas" },
  { id: "abierto", label: "código abierto" },
] as const;

export type FilterId = (typeof CATEGORIES)[number]["id"];
export type CategoryId = Exclude<FilterId, "todos">;

export type Project = {
  id: string;
  title: string;
  year: string;
  category: CategoryId;
  stack: string[];
  summary: string;
};

export const PROJECTS: Project[] = [
  {
    id: "orilla",
    title: "Orilla",
    year: "2026",
    category: "abierto",
    stack: ["fuentes", "diseño"],
    summary: "Una mono donde las cajas de la terminal no se rompen al estrechar la ventana.",
  },
  {
    id: "callejon",
    title: "Callejón",
    year: "2025",
    category: "web",
    stack: ["TypeScript", "mapas"],
    summary: "Caminos a pie con sombra y tiempos de transporte. Sin cuentas.",
  },
  {
    id: "nocturne",
    title: "Nocturne",
    year: "2025",
    category: "herramientas",
    stack: ["Rust", "ratatui"],
    summary: "Notas en la terminal, búsqueda difusa y archivos que no salen del disco.",
  },
  {
    id: "espejo",
    title: "Espejo",
    year: "2024",
    category: "sistemas",
    stack: ["Python", "pacman"],
    summary: "Mirrors de Arch elegidos por latencia real, no por la tabla del wiki.",
  },
  {
    id: "mesa",
    title: "Mesa",
    year: "2024",
    category: "web",
    stack: ["React", "teclado"],
    summary: "Un kanban de un solo archivo, con atajos y sin onboarding.",
  },
  {
    id: "jardin",
    title: "Jardín",
    year: "2024",
    category: "herramientas",
    stack: ["Go", "SVG"],
    summary: "Logs de un servidor casero dibujados como tallos que crecen con el error.",
  },
  {
    id: "ventana",
    title: "Ventana",
    year: "2023",
    category: "abierto",
    stack: ["TypeScript", "a11y"],
    summary: "Prompts, tablas y spinners para CLIs web que un lector de pantalla puede seguir.",
  },
  {
    id: "lumen",
    title: "Lumen",
    year: "2023",
    category: "sistemas",
    stack: ["Go", "DNS"],
    summary: "DNS de una red casera, con el diff a la vista antes de aplicar.",
  },
];

export const SKILL_GROUPS = [
  {
    id: "lenguajes",
    title: "lenguajes",
    items: [
      { name: "TypeScript", level: 5 },
      { name: "Bash", level: 5 },
      { name: "Rust", level: 4 },
      { name: "Python", level: 4 },
      { name: "SQL", level: 4 },
      { name: "Go", level: 3 },
    ],
  },
  {
    id: "interfaz",
    title: "interfaz",
    items: [
      { name: "React", level: 5 },
      { name: "CSS", level: 5 },
      { name: "Diseño de CLI", level: 5 },
      { name: "Accesibilidad", level: 4 },
    ],
  },
  {
    id: "sistemas",
    title: "sistemas",
    items: [
      { name: "Linux", level: 5 },
      { name: "Docker", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "Nix", level: 3 },
    ],
  },
] as const;

export function categoryLabel(id: CategoryId) {
  return CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
