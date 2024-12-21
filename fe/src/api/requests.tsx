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
    let response;
    if (method === 'POST' || method === 'PUT') {
      response = await fetch(`${API_BASE_URL}/${subroute}/${endpoint}`, {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
      });
    } else if (method === 'GET') {
      response = await fetch(`${API_BASE_URL}/${subroute}/${endpoint}?` 
        + new URLSearchParams(body).toString(), {
        method: method,
        headers: headers
      });
    }

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