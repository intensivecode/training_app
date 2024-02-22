import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveExercise } from "../services/fakeExerciseService";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSave(): void;
}

export default function ExerciseModal({ onSave }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    saveExercise(data);
    onSave();
    modalRef.current?.close();
    reset();
  }

  return (
    <>
      <div className="text-center mt-4">
        <button
          onClick={() => modalRef.current?.showModal()}
          className="btn btn-primary text-white ml-4"
        >
          New Exercise
        </button>
      </div>
      <dialog id="modal" className="modal" ref={modalRef}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="modal-box grid place-items-center"
        >
          <h1 className="text-xl font-bold">New exercise</h1>
          <input
            {...register("name")}
            placeholder="Name of exercise..."
            className="block input input-bordered w-full max-w-xs my-4"
          />
          <button className="btn btn-primary text-white">Save</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
