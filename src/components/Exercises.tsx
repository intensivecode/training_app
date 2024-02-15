import { getExercises } from "../services/fakeExerciseService";

export default function Exercises() {
  return (
    <div className="container mx-auto p-5 grid grid-cols-3 place-items-center gap-5">
      {getExercises().map((exercise) => (
        <div
          key={exercise.id}
          className="grid place-items-center w-48 h-32 text-white text-xl font-bold bg-primary rounded-box hover:scale-110 cursor-pointer transition-transform ease-in-out duration-300"
        >
          {exercise.name}
        </div>
      ))}
    </div>
  );
}
