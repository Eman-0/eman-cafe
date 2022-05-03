import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Drinks from './components/Drinks/Drinks';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Drinks />

      </main>
    </Fragment>
  );
}

export default App;
