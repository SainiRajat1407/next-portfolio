import Image from "next/image";
import { useFormStatus } from "react-dom";
import loadingImage from "@/public/images/spinner.png";

export default function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return (
      <button
        type="submit"
        className={`text-white
               focus:ring-4  font-medium rounded-lg text-sm px-10 py-1  background-set focus:ring-blue-500 shadow-lg button flex justify-center items-center hover:secondary-background`}
      >
        Submitting..
        <Image
          src={loadingImage}
          width={80}
          height={80}
          lazy
          className="animate-spin"
        />
      </button>
    );
  }
  return (
    <button
      type="submit"
      className={`text-white
               focus:ring-4  font-medium rounded-lg text-sm px-10 py-5 me-1 mb-1 background-set focus:ring-blue-500 shadow-lg button hover:secondary-background`}
    >
      Contact me!
    </button>
  );
}
