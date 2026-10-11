"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { testBackendConnection } from "@/lib/api/client";

export default function Home() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleTestConnection() {
    setLoading(true);
    setMessage("");

    try {
      const data = await testBackendConnection();
      setMessage(JSON.stringify(data, null, 2));
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="flex w-full max-w-lg flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">
          Mayuri Connection Test
        </h1>

        <Button
          className="w-full"
          onClick={handleTestConnection}
          disabled={loading}
        >
          {loading ? "Testing..." : "Test Backend Connection"}
        </Button>

        {message && (
          <pre className="max-h-80 w-full overflow-auto whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-4 text-left text-sm text-slate-700">
            {message}
          </pre>
        )}
      </div>
    </main>
  );
}
