import Project from "../components/Project";
import data from "..";

const Projects = () => {
  return (
    <>
      <section className="projects__section">
        <h2>PROJECTS</h2>
        <div className="projects">
          {data.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
