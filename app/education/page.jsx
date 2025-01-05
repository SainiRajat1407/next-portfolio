import data from "../../details.json";

export default function EducationPage() {
  return (
    <main className="flex justify-center items-center flex-col p-5 m-4 gap-8">
      {data.education.map((education) => (
        <div
          key={education.name}
          className=" w-11/12 text-center shadow-lg  primary-light-background p-[calc(2px)] rounded-lg card-wrapper"
        >

          <div className="relative primary-light-background rounded-xl p-4">
            <p className="md:heading-4 heading-5  heading-font">
              {education.type}{" "}
            </p>
            <div>
              <div>
                <p className="paragraph paragraph-font"> {education.name}</p>
              </div>
              <div>
                <p className="paragraph paragraph-font">{education.location}</p>
              </div>
              <div>
                <p className="paragraph paragraph-font">{education.major}</p>
              </div>
              <div>
                <span className="paragraph paragraph-font"> GPA : </span>
                <span className="paragraph paragraph-font">
                  {education.gpa}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
