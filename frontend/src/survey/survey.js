import axios from 'axios';

const API_URL = process.env.REACT_APP_SURVEY_BASE_URL;

axios.defaults.baseURL = API_URL

const survey = (movie1, movie2) => {
  return axios.post(API_URL + 'survey-results-create/', {
    movie1,
    movie2
  });
};

const surveyService = {
    survey
};

export default surveyService;
