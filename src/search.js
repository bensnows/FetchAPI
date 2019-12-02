const APIKey = "c8ae5e9b3cbd6eab3f9e8783dac59a7d";

const getURL = target => {
  switch (target.API) {
    case "weatherapp":
      return `http://api.openweathermap.org/data/2.5/weather?q=${target.keyword}&APPID=${APIKey}`;
    default:
    case "githubSearch":
      return `https://api.github.com/search/repositories?q=${target.keyword}`;
  }
};

const search = target => {
  var url = getURL(target);

  return fetch(url)
    .then(response => response.json())
    .catch();
};

export default search;
