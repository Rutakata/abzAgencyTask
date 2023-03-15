import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import UsersContainer from './components/users/UsersContainer';
import FormContainer from './components/form/FormContainer';
import Preloader from './common/Preloader';

function App() {
  return (
    <div className="bg-light-gray pb-[6.25rem]">
        <Header />
        <Banner />
        <UsersContainer />
        <FormContainer />
    </div>
  )
}

export default App
