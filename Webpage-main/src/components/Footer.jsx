import React from 'react'
import {BsGithub, BsLinkedin, BsInstagram} from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import styled from 'styled-components';

const linkedIn = "https://www.linkedin.com/in/bryan-terranova-069b0a210/";
const gitHub = 'https://github.com/Jterranova23'
const instagram = 'https://www.instagram.com/jamesterranova_/'
const tiktok = 'https://www.tiktok.com/@infocustech?lang=es'

const Footer = () => {
  return (
    <div className="footer">
      <small
        style={{ display: "flex", justifyContent: "center", color: "#fff3" }}
      >
        © JamesTerranova Developer. All rights reserved.
      </small>
      <small
        style={{ display: "flex", justifyContent: "center", color: "#fff3" }}
      >
        Guayas/Guayaquil - Ecuador
      </small>
      <small
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#fff3",
          textAlign: "center",
        }}
      >
        Pagina web y diseño 100% UNICO y ORIGINAL
      </small>
      <Redes>
        <a href={gitHub} target="_blank" without rel="noreferrer">
          <BsGithub className="icons" />
        </a>
        <a href={linkedIn} target="_blank" without rel="noreferrer">
          <BsLinkedin className="icons" />
        </a>
        <a href={instagram} target="_blank" without rel="noreferrer">
          <BsInstagram className="icons" />
        </a>
        <a href={tiktok} target="_blank" without rel="noreferrer">
          <FaTiktok className="icons" />
        </a>
      </Redes>
    </div>
  );
}

export default Footer
 
const Redes = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
    a{
      color:#fff5;
      margin:10px;
    }
`