"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function ComponentsRedirect() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    router.replace(
      params.get("view") === "all" ? "/blocks?view=all" : "/blocks",
    );
  }, [params, router]);

  return (
    <p className="p-6 text-sm text-ledger-muted">Redirecting to blocks…</p>
  );
}

export default function ComponentsPage() {
  return (
    <Suspense
      fallback={
        <p className="p-6 text-sm text-ledger-muted">Redirecting to blocks…</p>
      }
    >
      <ComponentsRedirect />
    </Suspense>
  );
}
