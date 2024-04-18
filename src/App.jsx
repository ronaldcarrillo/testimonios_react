// import React from 'react'
import "./App.css";
import Card from "./components/Card";
import Navegacion from "./components/Navegacion";
// import img1 from "../src/assets/img/img1.png";
import "./App.css";
import database from "./data/db";

function App() {
  return (
    <>
    <Navegacion/>
    <div id="content_card">
      <h1>Esto es lo que dicen nuestro alumnos</h1>
      {
        database.map((item, i) => (
          <Card key={i} item={item}/>
        ))
      }
      {/* <Card 
      nombre={"Shawn Wang"}
      profesion={"Software Engineer at"}
      empresa={"Amazon"}
      testimonio={"\"It's scary to change careers. I only gained confidence that I could     code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.\""}
      img={img1}/>

      <Card 
      nombre={"Sarah Chima in Nigeria"}
      profesion={"Software Engineer at"}
      empresa={"ChatDesk"}
      testimonio={"\"FreeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.\""}
      img={img2}/>

      <Card 
      nombre={"Emma Bostian in Sweden"}
      profesion={"Software Engineer at"}
      empresa={"Spotify"}
      testimonio={"\"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.\""}
      img={img3}/> */}


    </div>
    </>
  )
}

export default App;
