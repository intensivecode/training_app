import Exercises from "./components/Exercises";
import ExerciseModal from "./components/ExerciseModal";
import { useEffect, useState } from "react";
import { Exercise, getExercises } from "./services/fakeExerciseService";

export default function App() {
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
    <div className="bg-base-100">
      <h1 className="text-3xl font-bold text-center py-10">Training App</h1>
      <Exercises exercises={exercises} />
      <ExerciseModal onSave={handleSave} />
    </div>
  );
}
