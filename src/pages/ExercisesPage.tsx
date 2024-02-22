import { useState, useEffect } from "react";
import ExerciseModal from "../components/ExerciseModal";
import Exercises from "../components/Exercises";
import { Exercise, getExercises } from "../services/fakeExerciseService";

export default function ExercisesPage() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const exercises = getExercises();
    setExercises(exercises);
  }, []);

  function handleSave() {
    const exercises = getExercises();
    setExercises([...exercises]);
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center py-10">Training App</h1>
      <Exercises exercises={exercises} />
      <ExerciseModal onSave={handleSave} />
    </>
  );
}
