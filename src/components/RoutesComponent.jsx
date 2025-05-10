// src/components/RoutesComponent.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Lessons from '../pages/LessonCard.jsx';
import LessonPage from './learning/LessonPage.jsx';
import PracticingChallenging from '../pages/PracticingChallenging.jsx';
import CodeBuilder from "./learning/CodeBuilder.jsx";
import Forum from "./community/Forum.jsx";
import Quizzes from './assessment/PracticeQuiz.jsx';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Lessons />} />
      <Route path="/lesson/:lessonId" element={<LessonPage />} />
      <Route path="/practicing-challenging" element={<PracticingChallenging />} />
      <Route path="/gamifying" element={<CodeBuilder />} /> {/* Add the /gamify route for the game */}
      <Route path="/forum" element={<Forum />} />
      <Route path="/quizzes" element={<Quizzes />} />

    </Routes>
  );
};

export default RoutesComponent;
