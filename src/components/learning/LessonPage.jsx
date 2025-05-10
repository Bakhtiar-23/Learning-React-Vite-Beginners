import React from 'react';
import { useParams } from 'react-router-dom';
import lessons from '../../data/curriculum/lessonData';

// Import specific lesson components
import IntroToReact from '../Lessons/IntroToReact';
import Lesson9UseEffect from '../Lessons/UseEffectHook'

const lessonComponents = {
  1: <IntroToReact />,
  9: <Lesson9UseEffect />,
  // Add more mappings as needed, e.g., 2: <ReactBasics />, etc.
};

export default function LessonPage() {
  const { lessonId } = useParams();
  const lessonTitle = lessons[lessonId];
  const lessonContent = lessonComponents[lessonId] || (
    <p>This page will contain content for {lessonTitle}. Stay tuned!</p>
  );

  return (
    <div className="lesson-page">
      <h1>{`Lesson ${lessonId}: ${lessonTitle}`}</h1>
      {lessonContent}
    </div>
  );
}
