import { Link } from "react-router-dom";
import { getSessions } from "../services/fakeSessionService";

export default function TrainingSessionPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center py-10">
        Training Sessions
      </h1>
      <div className="container mx-auto p-5 grid grid-cols-3 place-items-center gap-5">
        {getSessions().map((session) => (
          <Link
            to={`/sessions/${session.id}`}
            key={session.id}
            className="grid place-items-center w-48 h-32 text-white text-xl font-bold bg-primary rounded-box hover:scale-110 cursor-pointer transition-transform ease-in-out duration-300"
          >
            {session.name}
          </Link>
        ))}
      </div>
    </>
  );
}
