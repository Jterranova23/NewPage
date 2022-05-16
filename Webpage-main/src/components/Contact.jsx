import React, {useRef} from 'react'
import styled from 'styled-components'
import {Container} from './Global.style'
import { Cabecera } from './Projects'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import swal from '@sweetalert/with-react'

const Contact = () => {

  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8vtwh6w",
      "template_z1obo4d",
      form.current,
      "VX5Z4ZqouF0hGc2EC"
    );

    e.target.reset();
    swal("Muchas gracias!", "El mensaje ha sido enviado correctamente", "success");


  };


  return (
    <Container>
      <Cabecera>
        <small>Gracias por revisar mi trabajo</small>
        <h2>Contactame</h2>
        <p>
          Enviame un mail dandome tus recomendaciones o la oportunidad
          de trabajar, aprender y crecer junto a ti o tu empresa.
        </p>
        <hr className="linea2" />
      </Cabecera>
      <ContenedorContactos>
        <Formulario onSubmit={sendEmail} ref={form}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            style={{ resize: "none" }}
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </Formulario>
        <TotalDm>
        <Contactos>
          <a href="mailto:bryanterranova89@gmail.com" without rel="noreferrer" target="_blank">
            <MdOutlineMail/>
            <h3>Email</h3>
            Send a message
          </a>
        </Contactos>
       
        <Contactos>
          <a
            href="https://wa.me/+54593980753946?text=Hi"
            target="_blank"
            without rel="noreferrer"
          >
            <BsWhatsapp/>
            <h3>Whatsapp</h3>
            Enviame un Mesaje
          </a>
        </Contactos>
        </TotalDm>
      </ContenedorContactos>
    </Container>
  );
}

export default Contact


const Formulario = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
    input, textarea{
      width:80vw;
      padding:8px;
      margin:5px 0;
      border-radius:5px;
      border:none;
      outline:none;
      border:2px solid #2dfff5;
      background: rgba( 255, 255, 255, 0.05 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 2.5px );;
      transition:all 0.2s;
      color:white;
      &::placeholder{
        color:white;
      }
        &:focus{
          background: rgba( 255, 255, 255, 0.25 );
          box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
          backdrop-filter: blur( 2.5px );
        }
    }
    button{
      width:80vw;
      border:none;
      border-radius:5px;
      padding:10px;
      color:white;
      background:#0005;
      text-transform:uppercase;
      letter-spacing:2px;
      font-weight:700;
      border:2px solid #2dfff5;
      transition:all 0.2s;
      cursor:pointer;
      &:hover{
        background:#0009;
      }
    }
    @media screen and (min-width: 880px){
      input, textarea{
        width:40vw;
      }
      button{
        width:40vw;
      }
    }
`
const TotalDm = styled.div`
    display:flex;
    flex-direction:column;
    @media screen and (min-width: 834px){
      flex-direction:column;
    }
`

const ContenedorContactos = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media screen and (min-width: 880px){
      display:inline-flex;
      flex-direction:row-reverse;
      gap:1rem;
      margin:auto 10%;
    }
`

const Contactos = styled.article`
    display:flex;
    flex-direction:column;
    align-items:center;
    background: linear-gradient(rgba( 215, 98, 217, 0.6 ), transparent);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    text-align:center;
    padding:30px;
    margin:10px auto;
    width:80vw;
    transition:all 0.2s;
    animation: fadeIn 1s;
    
    &:hover{
      box-shadow: 4px 4px #D762D9, 6px 6px #B150F2, 8px 8px #883DF2;
      transform: translateX(-3px);
    }
    h3{
      color:#2dfff5;
    }
      a{
        color:white;
        text-decoration:none;
      }
      @media screen and (min-width: 880px){
        display:inline-flex;
        width:20vw;
      }
`