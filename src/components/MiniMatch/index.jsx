import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  formatCurrentDate,
  formatMatchTime,
  formatDay,
} from "../../utils/formatTime";
import { truncateTeamName } from "../../utils/truncate";
import { getPremierLeagueFixtures } from "../../services/fixturesService";
const today = new Date();
const MiniMatch = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getFixtures = async () => {
      const day = formatDay(today);
      const { data: fixtures } = await getPremierLeagueFixtures(day);
      setFixtures(fixtures);
      setLoading(false);
    };

    getFixtures();
  }, []);

  return (
    <div className="sm:w-2/3 sm:mx-auto lg:w-full">
      <div className="bg-white py-1 text-sm text-center font-bold m-auto">
        <h1 className="text-blue-800">Today's Fixtures</h1>
      </div>
      <p className="text-xs text-center py-1 font-bold bg-blue-900 text-white">
        {formatCurrentDate(today)}
      </p>
      <div className="bg-gray-200 py-8 border-b">
        {!loading && fixtures.length === 0 && (
          <h1 className="text-sm font-semibold text-blue-900 text-center mx-auto">
            No fixtures for the current day
          </h1>
        )}
        {fixtures.map((fixture, index) => (
          <Link
            key={index}
            to={`/fixture/${fixture.fixture_id}/${
              fixture.status === "Not Started" ? `head-to-head` : `events`
            }`}
          >
            <div className="bg-gray-400 flex items-center text-xs text-blue-800 font-bold p-2 mb-2">
              <div className="text-center w-1/3">
                <p className="">
                  {truncateTeamName(fixture.homeTeam.team_name)}
                </p>
              </div>

              <div className="w-1/3 flex items-center justify-center mx-1">
                <img className="h-5 w-5" src={fixture.homeTeam.logo} alt="" />
                {fixture.status === "Not Started" ? (
                  <p className="bg-blue-800 text-xs text-white mx-1 px-1 py-1">
                    {formatMatchTime(fixture.event_date)}
                  </p>
                ) : fixture.status === "Match Finished" ? (
                  <div className="text-xs text-white mx-1 px-1 py-1">
                    <span className="px-2 py-1 bg-blue-800 border-r border-r-white">
                      {fixture.goalsHomeTeam}
                    </span>
                    <span className="px-2 py-1 bg-blue-800">
                      {fixture.goalsAwayTeam}
                    </span>
                  </div>
                ) : (
                  <div className="text-sm text-white mx-1 py-1">
                    <span className="px-2 py-1 bg-pink-500 border-r border-r-white">
                      {fixture.goalsHomeTeam}
                    </span>
                    <span className="px-2 py-1 bg-pink-500">
                      {fixture.goalsAwayTeam}
                    </span>
                  </div>
                )}

                <img className="h-5 w-5" src={fixture.awayTeam.logo} alt="" />
              </div>

              <div className="w-1/3 text-center">
                <p>{truncateTeamName(fixture.awayTeam.team_name)}</p>
              </div>
            </div>
            <div className="mb-2 mx-1 px-1 text-center">
              <p className="text-center text-xs font-bold text-blue-800">
                {fixture.status !== "Not Started" && fixture.statusShort}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-right text-xs px-2 py-1 font-bold mb-8 text-blue-900">
        <Link to="/fixtures">View All</Link>
      </div>
    </div>
  );
};

export default MiniMatch;
