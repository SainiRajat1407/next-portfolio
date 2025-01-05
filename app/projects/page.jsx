import data from "../../details.json";
import CustomCard from "../../components/card/card.component";


export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center mt-10 ">
      {data.projects.map((project) => (
        <CustomCard
          key={project.name}
          heading={project.name}
          description={project.description}
          otherDetails={project.otherDetails}
        />
      ))}
    </div>
  );
}
