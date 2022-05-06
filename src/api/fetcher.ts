export default async function fetcher(url: string, data: any = undefined) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${url}`, {
    method: data ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
