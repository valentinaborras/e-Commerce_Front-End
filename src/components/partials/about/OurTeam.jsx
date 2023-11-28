import { Link } from "react-router-dom";
import agustinLavaggi from "../../../assets/img/agustinLavaggi.jpg";
import lautaroLopez from "../../../assets/img/lautaroLopez.jpg";
import nicolasValsecchi from "../../../assets/img/nicolasValsecchi.jpg";
import liaTorres from "../../../assets/img/liaTorres2.jpg";
import valentinaBorras from "../../../assets/img/valentinaBorras.jpg";

function OurTeam() {
  return (
    <div className="container-fluid tech-Container background-Tech">
      <div className="">
        <div className=" container">
          <div className="content-Team-Container">
            <h2 className="text-center title-About mb-5 fw-bolder">OUR TEAM</h2>
            <div className="row">
              <div className="col text-center my-3">
                <div className="d-flex justify-content-center">
                  <img src={nicolasValsecchi} alt="" className="img-Avatars" />
                </div>
                <h5 className="mt-2">Nicolás Valsecchi</h5>
                <p>Full Stack Developer</p>
                <Link
                  to="https://www.linkedin.com/in/nicolas-valsecchi/"
                  className="text-dark"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin pe-2 fs-3"></i>
                </Link>
                <Link
                  to="https://github.com/nicovgz710"
                  className="text-dark"
                  target="_blank"
                >
                  <i className="fa-brands fa-github fs-3"></i>
                </Link>
              </div>
              <div className="col text-center my-3">
                <div className="d-flex justify-content-center">
                  <img src={liaTorres} alt="" className="img-Avatars" />
                </div>
                <h5 className="mt-2">Lia Torres</h5>
                <p>Full Stack Developer</p>
                <Link
                  to="https://www.linkedin.com/in/lia-torres93"
                  className="text-dark"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin pe-2 fs-3"></i>
                </Link>
                <Link
                  to="https://github.com/LiaTorres"
                  className="text-dark"
                  target="_blank"
                >
                  <i className="fa-brands fa-github fs-3"></i>
                </Link>
              </div>
              <div className="col text-center my-3">
                <div className="d-flex justify-content-center">
                  <img src={agustinLavaggi} alt="" className="img-Avatars" />
                </div>
                <h5 className="mt-2">Agustín Lavaggi</h5>
                <p>Full Stack Developer</p>
                <Link
                  to="https://www.linkedin.com/in/agustin-lavaggi/"
                  className="text-dark"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin pe-2 fs-3"></i>
                </Link>
                <Link
                  to="https://github.com/agustinlavaggi"
                  className="text-dark"
                  target="_blank"
                >
                  <i className="fa-brands fa-github fs-3"></i>
                </Link>
              </div>
              <div className="col text-center my-3">
                <div className="d-flex justify-content-center">
                  <img src={valentinaBorras} alt="" className="img-Avatars" />
                </div>
                <h5 className="mt-2">Valentina Borrás</h5>
                <p>Full Stack Developer</p>
                <Link
                  to="https://www.linkedin.com/in/valentina-borras-puig/"
                  target="_blank"
                  className="text-dark"
                >
                  <i className="fa-brands fa-linkedin pe-2 fs-3"></i>
                </Link>
                <Link
                  to="https://github.com/valentinaborras"
                  className="text-dark"
                  target="_blank"
                >
                  <i className="fa-brands fa-github fs-3"></i>
                </Link>
              </div>
              <div className="col text-center my-3 pb-5">
                <div className="d-flex justify-content-center">
                  <img src={lautaroLopez} alt="" className="img-Avatars" />
                </div>
                <h5 className="mt-2">Lautaro López</h5>
                <p>Full Stack Developer</p>
                <Link
                  to="https://www.linkedin.com/in/lautaro-lopez-diaz/"
                  className="text-dark"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin pe-2 fs-3"></i>
                </Link>
                <Link
                  to="https://github.com/lautato15"
                  className="text-dark"
                  target="_blank"
                >
                  <i className="fa-brands fa-github fs-3"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
