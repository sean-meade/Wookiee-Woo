import axios from 'axios';

const API_URL = process.env.REACT_APP_SURVEY_BASE_URL;

axios.defaults.baseURL = API_URL;

const survey = (films, username, token) => {
  return axios.post('survey-results-create/', 
    {
      films,
      username
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
