import './App.css'
import { ShoppingList } from './components/ShoppingList';
import { MyButton } from './components/ButtonSeparate/MyButton';

import { ButtonTogether } from './components/ButtonTogether/ButtonTogether';

function App() {


  return (
    <>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />

      <ShoppingList />
      <br />
      <br />

      <ButtonTogether />
    </>
  );
}

export default App
