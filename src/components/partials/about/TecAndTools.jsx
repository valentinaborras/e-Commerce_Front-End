import React from "react";
import reactIcon from "../../../assets/img//react-icon.png";
import nodeIcon from "../../../assets/img/nodejs-icon.png";
import javaScriptIcon from "../../../assets/img/javascript-icon.png";
import bootstrapIcon from "../../../assets/img/bootstrap-icon.png";
import discordIcon from "../../../assets/img/discord-icon.png";
import reduxIcon from "../../../assets/img/redux-icon.png";
import githubIcon from "../../../assets/img/github-icon.png";
import trelloIcon from "../../../assets/img/trello-icon.png";
import cssIcon from "../../../assets/img/css-icon.png";
import sequelizeIcon from "../../../assets/img/sequelize-icon.png";
import supabaseIcon from "../../../assets/img/supabase-icon.png";
import mysqlIcon from "../../../assets/img/mysql-icon.png";
import "./TecAndTools.css";

function TecAndTools() {
  return (
    // <div className="background-Tech">
    //   <div className="container tech-Container mt-3 p-5">
    <div className="container-fluid tech-Container">
      <div className="">
        <div className="background-Tech  pb-5 justify-content-center align-items-center row">
          <div className="content-Tech-Container">
            <div className="align-self-center mb-2 col-lg-8 col-md-10 col-12">
              <h2 className="fw-bolder title-About">TECHNOLOGIES & TOOLS</h2>
              <p className="mt-4">
                During the coding bootcamp,{" "}
                <span className="bold-Letter">
                  we extensively explored various technologies
                </span>
                , covering both{" "}
                <span className="bold-Letter">
                  backend and frontend development.
                </span>{" "}
                We acquired practical experience with{" "}
                <span className="bold-Letter">databases</span> and effectively
                utilized tools to{" "}
                <span className="bold-Letter">
                  streamline our work processes.
                </span>
              </p>
              <p>
                To enhance teamwork and task management, we adopted{" "}
                <span className="bold-Letter">Trello</span> as our project
                management tool.{" "}
                <span className="bold-Letter">
                  We structured the project into three sprints,{" "}
                </span>
                relying on <span className="bold-Letter">Github</span> as our
                primary collaboration platform.{" "}
                <span className="bold-Letter">Discord</span> played a pivotal
                role in ensuring smooth communication during the entire
                development journey.
              </p>
              <p>
                <span className="bold-Letter">To optimize productivity</span>{" "}
                for this project, we carefully selected the{" "}
                <span className="bold-Letter">following set of tools.</span>
              </p>
            </div>
            {/* <div className="row"> */}
            <div className="d-flex justify-content-center align-self-center flex-wrap gap-2 m-0 col-xl-8 col-md-8 col-sm-10 col-12 mt-4">
              <div className="icon-Container-Tech">
                <img
                  src={bootstrapIcon}
                  alt="Bootstrap Icon"
                  className="img-fluid icon-Size-Tech"
                />
                <small className="mt-1">Bootstrap</small>
              </div>
              <div className="icon-Container-Tech">
                <img
                  src={cssIcon}
                  alt="CSS Icon"
                  className="img-fluid icon-Size-Tech"
                />
                <small className="mt-1">CSS3</small>
              </div>
              <div className="icon-Container-Tech">
                <img
                  src={githubIcon}
                  alt="Github Icon"
                  className="img-fluid icon-Size-Tech"
                />
                <small className="mt-1">Github</small>
              </div>
              <div className="icon-Container-Tech">
                <img
                  src={javaScriptIcon}
                  alt="JavaScript Icon"
                  className="img-fluid icon-Size-Tech"
                />
                <small className="mt-1">JavaScript</small>
              </div>
              <div className="icon-Container-Tech">
                <img
                  src={mysqlIcon}
                  alt="MySQL Icon"
                  className="img-fluid icon-Size-Tech"
                />
                <small className="mt-1">MySQL</small>
              </div>
              <div className="icon-Container-Tech">
                <img
                  src={sequelizeIcon}
                  alt="Sequelize Icon"
                  className="img-fluid icon-Size-Tech"
                />
                <small className="mt-1">Sequelize</small>
              </div>
              <div className="icon-Container-Tech">
                <img
                  src={nodeIcon}
                  alt="NodeJS Icon"
                  className="img-fluid icon-Size-Tech"
                />
                <small className="mt-1">NodeJS</small>
              </div>
              <div className="icon-Container-Tech col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <img
                  src={reactIcon}
                  alt="React Icon"
                  className="img-fluid icon-Size-Tech"
                />
                <small className="mt-1">React</small>
              </div>
              <div className="icon-Container-Tech">
                <img
                  src={reduxIcon}
                  alt="Redux Icon"
                  className="img-fluid icon-Size-Tech"
                />
                <small className="mt-1">Redux</small>
              </div>
              <div className="icon-Container-Tech">
                <img
                  src={trelloIcon}
                  alt="Trello Icon"
                  className="img-fluid icon-Size-Tech"
                />
                <small className="mt-1">Trello</small>
              </div>
              <div className="icon-Container-Tech">
                <img
                  src={discordIcon}
                  alt="Discord Icon"
                  className="img-fluid icon-Size-Tech"
                />
                <small className="mt-1">Discord</small>
              </div>
              <div className="icon-Container-Tech">
                <img
                  src={supabaseIcon}
                  alt="Supabase Icon"
                  className="img-fluid icon-Size-Tech"
                />
                <small className="mt-1">Supabase</small>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}

export default TecAndTools;
