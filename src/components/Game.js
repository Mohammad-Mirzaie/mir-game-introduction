import React from "react";
import { Link } from "react-router-dom";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animations";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
// Change Image Size
import { smallImage } from "../util";

const Game = ({ game }) => {
  //Load Detail
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(game.id));
  };

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={game.id.toString()}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${game.id}`}>
        <motion.h3 layoutId={`title ${game.id.toString()}`}>
          {game.name}
        </motion.h3>
        <p>{game.released}</p>
        <motion.img
          layoutId={`image ${game.id.toString()}`}
          src={smallImage(game.background_image, 640)}
          alt={game.name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 50px rgba(255, 255, 255, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #404040;

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
  h3 {
    margin: 0.5rem 1rem 0.5rem 1rem;
    color: #fff;
  }
  p {
    margin: 0.5rem 1rem 0.5rem 1rem;
    color: #fff;
  }
`;

export default Game;
