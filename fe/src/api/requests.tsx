const API_BASE_URL = "http://localhost:3000";

export default async function ApiRequest(
  method:  "GET" | "POST" | "PUT",
  subroute: string,
  endpoint: string,
  body: any
) {
  try {
    return await fetch(`${API_BASE_URL}/${subroute}/${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json-patch+json'
      },
      body: JSON.stringify(body)
    });
  } catch (error) {
    console.error(`
      Error when doing request:
      Method: ${method}
      Subroute: ${subroute}
      Endpoint: ${endpoint}
      Body: ${body}
      Error: ${error}
    `);
    return null;
  }
}