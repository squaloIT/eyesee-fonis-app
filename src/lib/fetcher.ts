export const fetcher = async (url: string, data: any = undefined) => {
  // process -> https://eyesee-fonis.herokuapp.com/
  // url -> kpi/emotion/save
  const res = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
    method: data ? "POST" : "GET",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};
