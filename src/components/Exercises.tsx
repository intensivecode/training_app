import { Link } from "react-router-dom";
import { Exercise } from "../services/fakeExerciseService";

interface Props {
  exercises: Exercise[];
}

export default function Exercises({ exercises }: Props) {
  return (
    <div className="container mx-auto p-5 grid grid-cols-3 place-items-center gap-5">
      {exercises.map((exercise) => (
        <Link
          to={`/exercises/${exercise.id}`}
          key={exercise.id}
          className="relative grid place-items-center w-48 h-32 text-white text-xl font-bold bg-primary bg-opacity-100 rounded-box cursor-pointer hover:bg-opacity-80"
        >
          {exercise.name}
          <div className="absolute top-2 right-2">
            <i className="fas fa-shopping-cart" />
            <div className="absolute bottom-0 right-0 grid place-items-center w-4 h-4 rounded-full bg-red-700">
              <span className="text-white text-xs">1</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
