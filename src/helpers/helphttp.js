export const helphttp = () => {
  const customFetch = (endpoint, options) => {
    return new Promise((resolve, reject) => {
      const defaultHeader = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      const controller = new AbortController();
      options.signal = controller.signal;
      options.method = options.method || 'GET';
      options.headers = options.headers
        ? { ...options.headers, ...defaultHeader }
        : defaultHeader;

      options.body = JSON.stringify(options.body) || false;
      if (!options.body) delete options.body;

      setTimeout(() => {
        controller.abort();
        reject({ err: true, message: 'Request timeout' });
      }, 3000);

      fetch(endpoint, options)
        .then((response) => {
          if (!response.ok) {
            return response.json().then((errorData) => {
              throw new Error(errorData.message);
            });
          } else {
            resolve(response.json());
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const get = (url, options = {}) => customFetch(url, options);
  const post = (url, options = {}) => {
    options.method = 'POST';
    return customFetch(url, options);
  };
  const patch = (url, options = {}) => {
    options.method = 'PATCH';
    return customFetch(url, options);
  };
  const del = (url, options = {}) => {
    options.method = 'DELETE';
    return customFetch(url, options);
  };

  return {
    get,
    post,
    patch,
    del,
  };
};
