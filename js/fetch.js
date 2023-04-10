const SERVER_LINK = 'https://28.javascript.pages.academy/kekstagram';

const Route = {
  GET: '/data',
  POST: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET: 'Данные не удалось загрузить. Обновите страницу',
  POST: 'Форма не отправлена. Обновите страницу',
};

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${SERVER_LINK}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET, ErrorText.GET);

const sendData = (body) => load(Route.POST, ErrorText.POST, Method.POST, body);

export { getData, sendData };
