import React, { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import '@styles/App.css';
import gameImage from '@assets/Game2.jpg';
import tasks from "../../data/tasks.json";

function SortableItem({ id }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "10px 16px",
    margin: "4px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    background: "#0000",
    cursor: "grab",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
}

const CodeBuilder = () => {
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(null);
  const [shuffled, setShuffled] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [remainingTasks, setRemainingTasks] = useState(tasks);

  const sensors = useSensors(useSensor(PointerSensor));

  const generateChallenge = () => {
    if (remainingTasks.length === 0) {
      setFeedback("🎉 All tasks are completed!");
      setCurrent(null);
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingTasks.length);
    const randomTask = remainingTasks[randomIndex];
    const newRemainingTasks = remainingTasks.filter((_, index) => index !== randomIndex);
    setRemainingTasks(newRemainingTasks);

    setCurrent(randomTask);
    setShuffled([...randomTask.codeParts].sort(() => Math.random() - 0.5));
    setFeedback("");
    setShowNext(false);
  };

  useEffect(() => {
    generateChallenge();
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = shuffled.indexOf(active.id);
    const newIndex = shuffled.indexOf(over.id);
    const newOrder = arrayMove(shuffled, oldIndex, newIndex);
    setShuffled(newOrder);

    const isCorrect = current.codeParts.join(" ") === newOrder.join(" ");

    if (isCorrect && !showNext) {
      setFeedback("✅ Correct!");
      setScore((prev) => prev + 1);
      setShowNext(true);
    }
  };

  const handleNext = () => {
    generateChallenge();
  };

  if (!current) return <div>Loading...</div>;

  return (
    <div className="bg-white shadow rounded-xl p-6 w-full max-w-lg">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">🧩 Code Builder Game</h1>
          <p className="text-gray-600 mb-4"></p>
          <ul>
            <li>Drag and drop the code blocks to form the correct solution.</li>
            <li>Read the task carefully from the left-hand game preview.</li>
            <li>Drag and drop the code blocks to form the correct line of code.</li>
            <li>Once the solution is correct, proceed to the next task!</li>
          </ul>
            
          
        </div>
        <div className=".quiz-banner">
          <img src={gameImage} alt="Quiz Banner" className="quiz-banner" />
          <p className="score">🎯 Score: {score}</p>
        </div>
        
      </div>
      <p className="text-lg font-semibold mb-2">Task: {current.instruction}</p>
      <p className="text-sm mb-4 text-gray-500">Type: {current.type}</p>

      <div className="game-environment">
        <div className="game-container">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={shuffled}
              strategy={verticalListSortingStrategy}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {shuffled.map((item) => (
                  <SortableItem key={item} id={item} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      </div>


      <p className="text-green-600 font-bold mb-2">{feedback}</p>

      <div className="flex gap-2">
        {showNext && (
          <button
            onClick={handleNext}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Next Challenge →
          </button>
        )}

        <button
          onClick={handleNext}
          className="mt-2 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Skip Task ⏭️
        </button>
      </div>
    </div>
  );
};

export default CodeBuilder;