import data from "../../details.json";
import CustomCard from "../../components/card/card.component";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center mt-8">
      {data.experiences.map((experience) => (
        <CustomCard
          key={experience.jobTitle}
          heading={experience.jobTitle}
          description={experience.description}
          otherDetails={experience.otherDetails}
        />
      ))}
    </div>
  );
}
