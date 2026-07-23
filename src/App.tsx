import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import GlobalContainer from "./Estilos/estiloGlobal";
import Cabecalho from "./paginas/Cabecalho";
import Menu from "./paginas/Menu";
import Inicio from "./paginas/Inicio";
import Estoque from "./paginas/Estoque";
import Login from "./paginas/Login"
import Laboratorios from "./paginas/Laboratorios";
import { AuthProvider } from "./context/AuthProvider";
import { ProtectedLayout } from "./componentes/ProtectedLayout";

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Cabecalho />}
      {!isLoginPage && <Menu />}
      <Routes>
        <Route path='/' element={<ProtectedLayout><Inicio /></ProtectedLayout>} />
        <Route path='/estoque' element={<ProtectedLayout><Estoque /></ProtectedLayout>} />
        <Route path='/laboratorios' element={<ProtectedLayout><Laboratorios /></ProtectedLayout>} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <GlobalContainer />
    </>
  );
}

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
