declare const process:
  | undefined
  | {
      env?: Record<string, string | undefined>;
    };

const API_BASE_URL = "http://localhost:5000/api/demodata";
  

export async function testBackendConnection() {
  const response = await fetch(`${API_BASE_URL}`, {
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
