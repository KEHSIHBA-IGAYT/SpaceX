import React from "react";

import utilStyles from "../styles/utils.module.css";
import cardStyles from "./card.module.css";

function CardBox({ allMissions }) {
  return (
    <div className={`${cardStyles.mainBox}`}>
      {allMissions &&
        allMissions.map((mission, index) => {
          return (
            <div key={`card${index}`} className={`${cardStyles.card}`}>
              <div
                className={`${cardStyles.imageBox}`}
                key={`imageBox${index}`}
              >
                <img
                  alt={`${mission.mission_name}`}
                  className={`${utilStyles.imageSmall}`}
                  key={`img${index}`}
                  src={`${mission.links.mission_patch_small}`}
                />
              </div>
              <div
                key={`cardBody${index}`}
                className={`${cardStyles.cardBody}`}
              >
                <p>
                  <span
                    key={`span1${index}`}
                    className={`${utilStyles.headingBlue}`}
                  >
                    {`${mission.mission_name} #${mission.flight_number}`}
                  </span>
                </p>
                <p>
                  <span
                    className={`${utilStyles.headingBlack}`}
                    key={`span2${index}`}
                  >
                    Mission IDs:
                  </span>
                </p>
                <ul key={`ul${index}`} className={`${utilStyles.list}`}>
                  {mission.mission_id.length ? (
                    mission.mission_id.map((id) => {
                      return (
                        <li key={id} className={`${utilStyles.listItem}`}>
                          {id}
                        </li>
                      );
                    })
                  ) : (
                    <li key="mission-na" className={`${utilStyles.listItem}`}>
                      NA
                    </li>
                  )}
                </ul>
                <p>
                  <span
                    className={`${utilStyles.headingBlack}`}
                    key={`span3${index}`}
                  >
                    Launch Year:{" "}
                  </span>
                  <span className={`${utilStyles.list}`}>
                    {`${mission.launch_year}`}
                  </span>
                </p>
                <p>
                  <span
                    className={`${utilStyles.headingBlack}`}
                    key={`span4${index}`}
                  >
                    Successful Launch:{" "}
                  </span>
                  <span className={`${utilStyles.list}`}>
                    {`${mission.launch_success}`}
                  </span>
                </p>
                <p>
                  <span
                    className={`${utilStyles.headingBlack}`}
                    key={`span5${index}`}
                  >
                    Successful Landing:{" "}
                  </span>
                  <span className={`${utilStyles.list}`}>
                    {`${
                      mission.rocket.first_stage.cores[0].land_success || "NA"
                    }`}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CardBox;
