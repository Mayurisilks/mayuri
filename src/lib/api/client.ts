const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export async function testBackendConnection() {
  if (!API_BASE_URL) {
    throw new Error("Backend API URL is not configured yet.");
  }

  const response = await fetch(`${API_BASE_URL}/api/health`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Backend request failed (${response.status}).`);
  }

  return response.json();
}
