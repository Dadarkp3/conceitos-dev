import React, { useState } from 'react';
import Header from './components/Header';

import './App.css';

import background from './assets/background.jpeg' 

export default function App(){
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web' ]);

  function handleAddProject(){
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    console.log(projects);
  }
    return (
      <>
        <Header title="Projects"/>
        <img width="300" src={background} alt="background"/>
        <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
        </ul>
        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
      </>
    );
  }