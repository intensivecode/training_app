import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveSet } from "../services/fakeExerciseService";
import { useParams } from "react-router-dom";

const schema = z.object({
  weight: z.coerce.number().gt(0, { message: "Weight must be at least 1" }),
  reps: z.coerce.number().gt(0, { message: "Reps must be at least 1" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSave(): void;
}

export default function SetModal({ onSave }: Props) {
  const { id } = useParams();
  const modalRef = useRef<HTMLDialogElement>(null);
  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    saveSet(id!, data);
    onSave();
    modalRef.current?.close();
    reset();
  }

  return (
    <>
      <div className="text-center">
        <button
          onClick={() => modalRef.current?.showModal()}
          className="btn btn-primary text-white ml-5 mt-4"
        >
          New Set
        </button>
      </div>
      <dialog id="modal" className="modal" ref={modalRef}>
        <div className="modal-box">
          <h1 className="text-xl font-bold text-center mb-4">New Set</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid place-items-center gap-4"
          >
            <input
              {...register("weight")}
              placeholder="Weight"
              className="block input input-bordered w-full max-w-xs"
            />
            <input
              {...register("reps")}
              placeholder="Reps"
              className="block input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-primary text-white">Save</button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
