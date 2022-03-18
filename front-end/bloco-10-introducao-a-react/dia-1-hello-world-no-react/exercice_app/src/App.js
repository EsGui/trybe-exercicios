import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  )
}

const tarefas = ['Estudar', 'Jogar games', 'Estudar', 'Jogar games', 'Estudar', 'Jogar games', 'Estudar', 'Jogar games'];

function App() {
  return (
    <div>
      <ul>{tarefas.map((element) => task(element))}</ul>
    </div>
  );
}

export default App;
