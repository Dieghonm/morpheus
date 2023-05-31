import React, { useState } from 'react';
import EditCharacterSheet from './components/EditCharacterSheet';
import DisplayCharacterSheet from './components/DisplayCharacterSheet';
import './App.css';

const App = () => {
  const [ficha, setFicha] = useState({
    name: '',
    race: 'human',
    class: '',
    level: 1,
    attributes: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
    skills: {
      "Acrobacia": {valor: 0, "atributo": "DES",},
      "Trato com Animais": {valor: 0, "atributo": "SAB",},
      "Arcanismo": {valor: 0, "atributo": "INT",},
      "Atletismo": {valor: 0, "atributo": "FOR",},
      "Enganação": {valor: 0, "atributo": "CAR",},
      "História": {valor: 0, "atributo": "INT",},
      "Intuição": {valor: 0, "atributo": "SAB",},
      "Intimidação": {valor: 0, "atributo": "CAR",},
      "Investigação": {valor: 0, "atributo": "INT",},
      "Medicina": {valor: 0, "atributo": "SAB",},
      "Natureza": {valor: 0, "atributo": "INT",},
      "Percepção": {valor: 0, "atributo": "SAB",},
      "Performance": {valor: 0, "atributo": "CAR",},
      "Persuasão": {valor: 0, "atributo": "CAR",},
      "Religião": {valor: 0, "atributo": "INT",},
      "Prestidigitação": {valor: 0, "atributo": "DES",},
      "Furtividade": {valor: 0, "atributo": "DES",},
      "Sobrevivência": {valor: 0, "atributo": "SAB",}
  },
    equipment: [],
  });

  const handleSave = (updatedFicha) => {
    setFicha(updatedFicha);
  };

  return (
    <div className="App">
      <h1>D&D Character Sheet</h1>
      <EditCharacterSheet ficha={ficha} onSave={handleSave} />
      <DisplayCharacterSheet ficha={ficha} />
    </div>
  );
};

export default App;

// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Login from './components/Login';
// import FichaDndEdit from './components/FichaDndEdit';
// import FichaDndDisplay from './components/FichaDndDisplay';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Login} />
//         <Route path="/ficha/editar" component={FichaDndEdit} />
//         <Route path="/ficha/exibir" component={FichaDndDisplay} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;


