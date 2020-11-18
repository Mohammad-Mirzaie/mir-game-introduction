import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames, clearSearch } from "../actions/gamesAction";
import GameDetail from "../components/GameDetail";

//Styling and Animation
import styled, { css } from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animations";

import Game from "../components/Game";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(pathId);
  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const handleClearSearch = () => {
    dispatch(clearSearch());
  };

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length > 0 && (
          <>
            <SearchTitl>
              <h2>Searched Games</h2>
              <span onClick={handleClearSearch}>Clear Search &#x2715;</span>
            </SearchTitl>
            <Games>
              {searched.map((game) => (
                <Game key={game.id} game={game} />
              ))}
            </Games>
          </>
        )}
        {popular.length > 0 && (
          <>
            <h2>Popular Games</h2>
            <Games>
              {popular.map((game) => (
                <Game key={game.id} game={game} />
              ))}
            </Games>
          </>
        )}
        {upcoming.length > 0 && (
          <>
            <h2>Upcomming Games</h2>
            <Games>
              {upcoming.map((game) => (
                <Game key={game.id} game={game} />
              ))}
            </Games>
          </>
        )}
        {newGames.length > 1 && (
          <>
            <h2>New Games</h2>
            <Games>
              {newGames.map((game) => (
                <Game key={game.id} game={game} />
              ))}
            </Games>
          </>
        )}
      </AnimateSharedLayout>
    </GameList>
  );
};
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  min-height: 70vh;
  h2 {
    padding: 3rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

const SearchTitl = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span {
    margin-left: 1rem;
    padding: 0.5rem;
    border: #fff solid 1px;
    border-radius: 15px;
    color: #fff;
    cursor: pointer;
  }
`;

export default Home;
