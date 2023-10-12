import { BrowserRouter } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Form from './components/Form';
import Header from './components/Header';
import Services from './components/Services';
import MyProvider from './context/navContext';

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Header />
        <AboutUs />
        <Services />
        <Form />
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
