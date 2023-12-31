import { Header } from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealsSummary";
import { Meals } from "./Components/Meals/Meals";
function App() {
  return (
    <div>
      <Header/>
      <MealsSummary/>
      <Meals></Meals>
    </div>
  );
}

export default App;
