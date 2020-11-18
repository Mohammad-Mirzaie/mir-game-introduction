import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <StyledFooter>
      <div>Developed by Mohammad Mirzaie</div>
      <div>mhd.mirzaie83@gmail.com</div>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.footer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 5rem;
  margin-top: 3rem;
  margin-bottom: 0;
  // background-color: #730099;
  color: #fff;
`;
export default Footer;
