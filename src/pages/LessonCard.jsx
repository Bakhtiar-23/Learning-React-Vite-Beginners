import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/App.css';

const lessons = [
  { number: 1, title: 'Introduction to React' },
  { number: 2, title: 'React Basics' },
  { number: 3, title: 'JSX Basics' },
  { number: 4, title: 'Props and State' },
  { number: 5, title: 'Events in React' },
  { number: 6, title: 'Conditional Rendering' },
  { number: 7, title: 'Lists and Keys' },
  { number: 8, title: 'Forms in React' },
  { number: 9, title: 'useEffect Hook' },
  { number: 10, title: 'Custom Hooks' },
  { number: 11, title: 'React Router' },
  { number: 12, title: 'Deployment' },
];

export default function LessonCard() {
  return (
    <div className="all-lessons-container">
      {lessons.map((lesson) => {
        const image = new URL(`../assets/lesson${lesson.number}.jpg`, import.meta.url).href;
        return (
          <Link to={`/lesson/${lesson.number}`} key={lesson.number}> 
            <div className="lesson-card">
              <img src={image} alt={lesson.title} className="lesson-img" />
              <h4>{`Lesson ${lesson.number}: ${lesson.title}`}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
