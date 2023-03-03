const RETRY_COUNT = 2;
const RETRY_DELAY = 1500;
const API_ENDPOINT = "";

export const GET = async (path) => {
  return retry(
    API_ENDPOINT + path,
    {
      method: "GET",
      headers: await header(),
    },
    RETRY_COUNT
  );
};

export const POST = async (path, body) => {
  return retry(
    API_ENDPOINT + path,
    {
      method: "POST",
      headers: await header(),
      body: JSON.stringify(body),
    },
    RETRY_COUNT
  );
};

export const PUT = async (path, body) => {
  return retry(
    API_ENDPOINT + path,
    {
      method: "PUT",
      headers: await header(),
      body: JSON.stringify(body),
    },
    RETRY_COUNT
  );
};

export const DELETE = async (path) => {
  return retry(
    API_ENDPOINT + path,
    {
      method: "DELETE",
      headers: await header(),
    },
    RETRY_COUNT
  );
};

const header = async () => {
  return {
    "Content-Type": "application/json"
  };
};

const delay = (time) => {
  console.warn(`retry again after ${time}ms`);
  return new Promise((resolve) => setTimeout(resolve, time));
}

const retry = async (url, options, n) => {
  try {
    return await fetch(url, options).then((response) => {
      if (!response.ok) throw response;
      return response;
    });
  } catch (response) {
    if (n === 1) return response;
    console.warn(`retry cont ${n}`);
    await delay(RETRY_DELAY);
    return await retry(url, options, n - 1);
  }
};