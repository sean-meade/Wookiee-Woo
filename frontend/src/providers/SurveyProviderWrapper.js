import React from 'react';
import { SurveyProvider } from '../survey/surveycontext';
import Survey from '../components/Survey';

const SurveyProviderWrapper = () => (
  <SurveyProvider>
    <Survey />
  </SurveyProvider>
);

export default SurveyProviderWrapper;