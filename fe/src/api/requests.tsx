const API_BASE_URL = "http://localhost:3000";

export default async function apiRequest(
  method:  "GET" | "POST" | "PUT",
  subroute: string,
  endpoint: string,
  body: any
) {
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

  try {
    console.log(body);
    const response = await fetch(`${API_BASE_URL}/${subroute}/${endpoint}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body)
    });

    console.log(response.body);
    return response;
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