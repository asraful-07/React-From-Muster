import Auncal from "../Auncal/Auncal";
import Borther from "../Brother/Borther";
import Dad from "../Dad/Dad";
import Mom from "../Mom/Mom";
import "./Grandpa.css";
const Grandpa = () => {
  return (
    <div className="g f">
      <Dad></Dad>
      <Mom></Mom>
      <Borther></Borther>
      <Auncal></Auncal>
    </div>
  );
};

export default Grandpa;
