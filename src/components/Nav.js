import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo>
        <i class="fas fa-dice-d20"></i>
        <h5>MirGame</h5>
      </Logo>
      <form onSubmit={submitSearch} className="search" style={{ width: "50%" }}>
        <input
          type="text"
          value={textInput}
          onChange={inputHandler}
          placeholder="Search your game"
        />
        <button className="btnSearch" type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 80%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.2);
    border-radius: 10px 0px 0px 10px;
    outline: none;
    color: darkgray;
    background-color: #404040;
    font-weight: normal;
  }
  .btnSearch {
    width: 20%;
    font-size: 1rem;
    padding: 1.1rem 0.85rem 0.7rem 0.85rem;
    border: none;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
    border-radius: 0px 10px 10px 0px;
    outline: none;
    cursor: pointer;
    background-color: #404040;
    color: #fff;
  }
`;

const Logo = styled(motion.div)`
  width: 50%;
  color: #fff;
  i {
    display: inline;
    font-size: 5rem;
  }
`;

export default Nav;
