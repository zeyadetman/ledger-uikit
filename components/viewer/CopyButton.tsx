"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ledger/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ledger/tooltip";

export function CopyButton({
  source,
  size = "default",
}: {
  source: string;
  size?: "default" | "sm";
}) {
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  async function copy() {
    setError(false);
    try {
      await navigator.clipboard.writeText(source);
    } catch {
      setError(true);
      return;
    }
    setCopied(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <span className="inline-flex flex-col items-end gap-1">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            size={size}
            variant={copied ? "signal" : "default"}
            onClick={copy}
            aria-label={copied ? "Copied" : "Copy code"}
          >
            {copied ? (
              <Check className="mr-2 h-3.5 w-3.5" strokeWidth={1.75} />
            ) : (
              <Copy className="mr-2 h-3.5 w-3.5" strokeWidth={1.75} />
            )}
            {copied ? "Copied" : "Copy code"}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {copied ? "Copied to clipboard" : "Copy block source"}
        </TooltipContent>
      </Tooltip>
      <span role="status" className="max-w-64 text-xs text-ledger-muted">
        {error
          ? "Clipboard unavailable. Select and copy the code manually."
          : copied
            ? "Copied to clipboard"
            : ""}
      </span>
    </span>
  );
}
