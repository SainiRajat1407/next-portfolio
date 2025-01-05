import Link from "next/link";

export default function CustomCard({ heading, description, otherDetails }) {
  return (
    <>
      <div className="card-wrapper p-[calc(2px)] rounded-lg shadow-lg w-10/12 text-center lg:w-9/12 xl:w-9/12">
        <div className="relative primary-light-background rounded-xl p-4">
          <div className="heading-5 heading-font md:heading-4">{heading}</div>
          <div className="flex flex-col gap-4 paragraph-font">
            {otherDetails.startDate && (
              <div className="">
                <strong>Start Date: </strong>
                <span>{otherDetails.startDate}</span>
              </div>
            )}
            {otherDetails.endDate && (
              <div>
                <strong>End Date: </strong>
                <span>{otherDetails.endDate}</span>
              </div>
            )}
            {otherDetails.company && (
              <div>
                <strong>Company: </strong>
                <span>{otherDetails.company}</span>
              </div>
            )}
          </div>

          <div className="mt-4 flex justify-center items-center">
            <ul className="flex flex-col gap-1">
              {description.map((desc, index) => (
                <li
                  key={index}
                  className="list-none paragraph paragraph-font text-left hover:list-disc"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>

          {otherDetails.technologyUsed && (
            <div className="mt-4">
              <strong className=" paragraph-font">Technology: </strong>
              <span className="paragraph paragraph-font">
                {otherDetails.technologyUsed}
              </span>
            </div>
          )}

          {otherDetails.link && (
            <button type="button" className="mt-4 ">
              <Link
                href={otherDetails.link}
                passHref
                target="_black"
                className="paragraph paragraph-font "
              >
                <span className="text-red-500">Check out</span>
              </Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
