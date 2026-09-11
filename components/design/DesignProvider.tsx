"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import {
  DESIGN_KEY,
  MODE_KEY,
  validDesign,
  type DesignId,
} from "@/lib/design-system";

type Mode = "light" | "dark";
const Context = createContext<{
  design: DesignId;
  mode: Mode;
  setDesign: (value: DesignId) => void;
  setMode: (value: Mode) => void;
}>({ design: "ledger", mode: "light", setDesign: () => {}, setMode: () => {} });

export function DesignProvider({ children }: { children: ReactNode }) {
  const [design, updateDesign] = useState<DesignId>("ledger");
  const [mode, updateMode] = useState<Mode>("light");
  const pathname = usePathname();
  useEffect(() => {
    const sync = () => {
      const query = new URLSearchParams(location.search);
      let savedDesign: string | null = null;
      let savedMode: string | null = null;
      try {
        savedDesign = localStorage.getItem(DESIGN_KEY);
        savedMode = localStorage.getItem(MODE_KEY);
      } catch {}
      const preview = pathname.startsWith("/preview/");
      const nextDesign = validDesign(
        (preview && query.get("design")) || savedDesign,
      );
      const nextMode =
        ((preview && query.get("theme")) || savedMode) === "dark"
          ? "dark"
          : "light";
      updateDesign(nextDesign);
      updateMode(nextMode);
      document.documentElement.dataset.design = nextDesign;
      document.documentElement.classList.toggle("dark", nextMode === "dark");
    };
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [pathname]);
  function setDesign(value: DesignId) {
    updateDesign(value);
    document.documentElement.dataset.design = value;
    try {
      localStorage.setItem(DESIGN_KEY, value);
    } catch {}
  }
  function setMode(value: Mode) {
    updateMode(value);
    document.documentElement.classList.toggle("dark", value === "dark");
    try {
      localStorage.setItem(MODE_KEY, value);
    } catch {}
  }
  return (
    <Context.Provider value={{ design, mode, setDesign, setMode }}>
      {children}
    </Context.Provider>
  );
}
export const useDesign = () => useContext(Context);
