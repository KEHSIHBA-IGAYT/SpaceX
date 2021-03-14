import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../components/layout";
import FilterBox from "../components/filterBox";
import CardBox from "../components/cardBox";

import indexStyle from "../styles/index.module.css";
import utilStyles from "../styles/utils.module.css";

import getMissionDetails from "../services/_mission";

// Prepare query
const prepareRoute = ({ launch_year, launch_success, land_success }) => {
  if (!launch_year && !launch_success && !land_success) {
    return "";
  }

  let queryString = `${
    launch_success != null ? `&launch_success=${launch_success}` : ""
  }`;
  queryString += `${
    land_success != null ? `&land_success=${land_success}` : ""
  }`;
  queryString += `${launch_year != null ? `&launch_year=${launch_year}` : ""}`;

  return queryString;
};

// Server side rendering
export const getServerSideProps = async (params) => {
  const queryString = prepareRoute(params.query);
  const allMissions = await getMissionDetails(queryString);
  return {
    props: {
      allMissions,
    },
  };
};

// Home Page
export default function Home({ allMissions }) {
  const [filters, setFilters] = useState({
    launch_year: null,
    launch_success: null,
    land_success: null,
  });
  const [missionInfo, setMissionInfo] = useState(allMissions);

  const router = useRouter();

  const onChangeFilters = async (values) => {
    setFilters(values);

    // prepare the route
    const queryString = prepareRoute(values);
    if (queryString) {
      // NextJS shallow routing
      router.push(
        `/?${queryString.substr(1, queryString.length - 1)}`,
        undefined,
        { shallow: true }
      );
    } else {
      router.push("/", undefined, { shallow: true });
    }
    const allMissionsInfo = await getMissionDetails(queryString);
    setMissionInfo(allMissionsInfo);
  };

  // Set filters on page refresh
  useEffect(() => {
    const currentFilters = router.query;
    if (typeof currentFilters !== "undefined") {
      setFilters(currentFilters);
    }
  }, []);

  return (
    <Layout>
      <div className={indexStyle.bodyContainer}>
        <div className={indexStyle.filterBox}>
          <FilterBox filters={filters} onChangeFilters={onChangeFilters} />
        </div>

        <div className={indexStyle.cardsBox}>
          {missionInfo.length != 0 ? (
            <CardBox allMissions={missionInfo} />
          ) : (
            <span className={`${utilStyles.headingLg}`}>
              No Mission Found!!!
            </span>
          )}
        </div>
      </div>
    </Layout>
  );
}
