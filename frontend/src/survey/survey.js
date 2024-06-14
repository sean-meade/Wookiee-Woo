import axios from 'axios';

const API_URL = process.env.REACT_APP_SURVEY_BASE_URL;

axios.defaults.baseURL = API_URL;

const survey = (films, token) => {
  return axios.post('survey-results-create/', 
    
      films
    ,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

// Function to fetch survey results
const getMatches = (token, username) => {
  const URI = 'get_matches/' + username + '/';
  return axios.get(URI, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
};

const surveyService = {
  survey,
  getMatches,
};

export default surveyService;
