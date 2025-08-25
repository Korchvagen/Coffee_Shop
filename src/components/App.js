import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';
import '../styles/header.scss';
import MainPage from '../pages/MainPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route></Route>
        <Route></Route>
      </Routes>
    </Layout>
  );
}

export default App;
