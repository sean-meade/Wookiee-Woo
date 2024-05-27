// src/contexts/SurveyContext.js
import React, { createContext } from 'react';
import surveyService from './survey';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {


  const survey = (films, username) => {
    return surveyService.survey(films, username);
  };

  return (
    <SurveyContext.Provider value={{ survey }}>
      {children}
    </SurveyContext.Provider>
  );
};

export default SurveyContext;
