import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-[var(--red-7)] hover:bg-[var(--red-8)] text-[var(--red-11)] font-medium py-2.5 px-5 rounded-lg w-full transition-all disabled:cursor-not-allowed disabled:bg-neutral-900"
      disabled={pending}
    >
      {pending ? (
        <div
          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        <>
          Send Message
          {/* <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "} */}
        </>
      )}
    </button>
  );
}
