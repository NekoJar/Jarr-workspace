import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-[var(--red-7)] hover:bg-[var(--red-11)]  text-white font-medium py-2.5 px-5 rounded-lg w-full  transition-all focus:scale-102 hover:scale-102 active:scale-102 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send Message
          {/* <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "} */}
        </>
      )}
    </button>
  );
}
