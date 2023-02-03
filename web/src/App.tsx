import './styles/global.css';

import { Habit } from "./components/Habits"

function App() {

  return (
    <div>
      <Habit completed={99} />
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />
      <Habit completed={50} />
    </div>
  )
}

export default App
