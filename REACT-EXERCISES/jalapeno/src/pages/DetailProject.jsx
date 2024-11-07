import { useNavigate, useParams } from "react-router-dom";
import data from "../data";

const DetailProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = data.find((proj) => proj.id == Number(id));

  if (![project]) {
    return <h2>Project niet gevonden!</h2>;
  }

  return (
    <section className="project__Card">
      <img src={project.image} alt="" />
      <h2>{project.title}</h2>
      <h3>{project.date}</h3>
      <p>{project.description}</p>
      <button onClick={() => navigate(-1)}>Terug</button>
    </section>
  );
};

export default DetailProject;
