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
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Button
          className="bg-[#550022] text-white hover:bg-[#44001B]"
          onClick={handleTestConnection}
          disabled={loading}
        >
          {loading ? "Testing..." : "Test Backend Connection"}
        </Button>

        {message && (
          <pre className="max-w-md whitespace-pre-wrap rounded-lg border p-4 text-sm">
            {message}
          </pre>
        )}
      </div>
    </main>
  );
}
