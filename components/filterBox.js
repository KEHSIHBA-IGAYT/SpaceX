import React from "react";

import utilStyles from "../styles/utils.module.css";
import filterStyles from "./filter.module.css";

function FilterBox({ filters, onChangeFilters }) {
  const yearArr = Array.from({ length: 15 }, (_, i) => i + 2006);

  return (
    <>
      <section className={`${utilStyles.headingMd}`}>
        <p>Filters</p>
      </section>
      {/* Filter for Year */}
      <div className={`${filterStyles.mainBox}`}>
        <section className={`${utilStyles.headingSm}`}>
          <p>Launch Year</p>
        </section>
        <hr />
        <div className={`${filterStyles.filterSection}`}>
          {yearArr.map((year, index) => {
            return (
              <button
                className={`${utilStyles.buttonSmall} ${
                  year.toString() === filters.launch_year
                    ? utilStyles.buttonActive
                    : ""
                }`}
                key={`${index}`}
                onClick={() =>
                  onChangeFilters({
                    ...filters,
                    launch_year:
                      year.toString() === filters.launch_year
                        ? null
                        : year.toString(),
                  })
                }
              >
                {year}
              </button>
            );
          })}
        </div>

        {/* Filter for successful launch */}
        <section className={`${utilStyles.headingSm}`}>
          <p>Successful Launch</p>
        </section>
        <hr />
        <div className={`${filterStyles.filterSection}`}>
          <button
            className={`${utilStyles.buttonSmall} ${
              filters.launch_success === "true" ? utilStyles.buttonActive : ""
            }`}
            onClick={() =>
              onChangeFilters({
                ...filters,
                launch_success:
                  filters.launch_success === "true" ? null : "true",
              })
            }
          >
            true
          </button>
          <button
            className={`${utilStyles.buttonSmall} ${
              filters.launch_success === "false" ? utilStyles.buttonActive : ""
            }`}
            onClick={() =>
              onChangeFilters({
                ...filters,
                launch_success:
                  filters.launch_success === "false" ? null : "false",
              })
            }
          >
            false
          </button>
        </div>

        {/* Filter for successful landing */}
        <section className={`${utilStyles.headingSm}`}>
          <p>Successful Landing</p>
        </section>
        <hr />
        <div className={`${filterStyles.filterSection}`}>
          <button
            className={`${utilStyles.buttonSmall} ${
              filters.land_success === "true" ? utilStyles.buttonActive : ""
            }`}
            onClick={() =>
              onChangeFilters({
                ...filters,
                land_success: filters.land_success === "true" ? null : "true",
              })
            }
          >
            true
          </button>
          <button
            className={`${utilStyles.buttonSmall} ${
              filters.land_success === "false" ? utilStyles.buttonActive : ""
            }`}
            onClick={() =>
              onChangeFilters({
                ...filters,
                land_success: filters.land_success === "false" ? null : "false",
              })
            }
          >
            false
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterBox;
