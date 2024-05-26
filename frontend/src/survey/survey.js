import axios from 'axios';

const API_URL = process.env.REACT_APP_SURVEY_BASE_URL;

axios.defaults.baseURL = API_URL;

const survey = (movie1, movie2, token) => {
  return axios.post('survey-results-create/', 
    {
      movie1: movie1,
      movie2: movie2
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

const surveyService = {
  survey,
};

export default surveyService;