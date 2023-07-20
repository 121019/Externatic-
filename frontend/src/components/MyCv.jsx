import Upload from "./Upload";
import CvRender from "./CvRender";
import "./MyCv.css";

function MyCv() {
  return (
    <div>
      <div className="cv">
        <h3>Mon CV</h3>
      </div>
      <div className="designMyCv">
        <Upload />
        <CvRender />
      </div>
    </div>
  );
}

export default MyCv;
