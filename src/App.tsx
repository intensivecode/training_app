import Exercises from "./components/Exercises";
import ExerciseModal from "./components/ExerciseModal";

export default function App() {
  return (
    <div className="bg-base-100">
      <h1 className="text-3xl font-bold text-center py-10">Training App</h1>
      <Exercises />
      <ExerciseModal />
    </div>
  );
}
