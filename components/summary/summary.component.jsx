import rajatImage from "@/public/images/rajathero.jpg";
import Image from "next/image";
import Link from "next/link";

export default function SummaryPage() {
  const introArray = "Hi, I'm Rajat.";
  return (
    <div className="flex flex-col justify-center text-center ">
      <div className="flex flex-col justify-center content-center ">
        <div
          className={`heading-3 heading-font gradient-text tracking-wider flex justify-center items-center mt-10`}
        >
          {introArray}
        </div>

        <div className="flex justify-center items-center">
          <Image priority src={rajatImage} alt="rajatImage" className="rounded-lg"  width={300} height={300}/>
        </div>

        <div className="heading-font  heading-3  ">
          Full Stack Web Developer
        </div>
        <div className="paragraph paragraph-font p-4 text-center mx-auto my-4 max-w-4xl">
          Welcome to my portfolio website! I&apos;m currently in the final year
          of my Advanced Diploma in Software Development, with a passion for web
          development. Here, you&apos;ll find a showcase of my projects,
          experiences, and the skills I&apos;ve acquired throughout my studies.
          I love creating functional and beautiful websites that provide great
          user experiences.
        </div>

        <div className="paragraph paragraph-font p-4 text-center mx-auto my-4 max-w-4xl">
          Take a look around to see the work I&apos;ve done and the exciting
          journey I&apos;m on as I prepare to enter the professional world. Feel
          free to reach out if you have any questions.
        </div>

      </div>

      <div className="summary-button-container mt-16 mb-28">
        <button
          type="button"
          className="transition hover:-translate-y-2 delay-100 duration-400 ease-in"
        >
          <Link
            href="/"
            target="_black"
            download="../../public/resume.pdf"
            className={`text-white focus:ring-4 font-medium rounded-lg text-sm px-10 py-5 me-2 mb-2 background-set shadow-lg  
            `}
          >
            Download CV
          </Link>
        </button>
      </div>
    </div>
  );
}
