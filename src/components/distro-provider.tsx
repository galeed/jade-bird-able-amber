import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DISTRO_STORAGE_KEY,
  DISTROS,
  getDistro,
  isDistroId,
  type DistroId,
} from "@/lib/portfolio";

type DistroContextValue = {
  id: DistroId;
  name: string;
  note: string;
  select: (id: DistroId) => void;
};

const DistroContext = createContext<DistroContextValue | null>(null);

function applyDistro(id: DistroId) {
  document.documentElement.setAttribute("data-distro", id);
  try {
    localStorage.setItem(DISTRO_STORAGE_KEY, id);
  } catch {
    /* private mode or quota */
  }
  const canvas = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-canvas")
    .trim();
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta && canvas) meta.setAttribute("content", canvas);
}

export function DistroProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState<DistroId>("ubuntu");

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(DISTRO_STORAGE_KEY);
    } catch {
      stored = null;
    }
    const next = isDistroId(stored) ? stored : "ubuntu";
    applyDistro(next);
    setId(next);
  }, []);

  const select = useCallback((next: DistroId) => {
    applyDistro(next);
    setId(next);
  }, []);

  const value = useMemo(() => {
    const distro = getDistro(id);
    return { id, name: distro.name, note: distro.note, select };
  }, [id, select]);

  return <DistroContext.Provider value={value}>{children}</DistroContext.Provider>;
}

export function useDistro() {
  const context = useContext(DistroContext);
  if (!context) throw new Error("useDistro must be used within DistroProvider");
  return context;
}

export const DISTRO_COUNT = DISTROS.length;
