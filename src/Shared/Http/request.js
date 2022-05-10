const baseURL = "http://localhost:8080/api";

const checkStatus = (response) => {
  if (response.status === 200) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = (response) => {
  return response.json();
};

export const request = (url, options) => {
  return fetch(`${baseURL + url}`, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch((error) => {
      return new Error(error);
    });
};
