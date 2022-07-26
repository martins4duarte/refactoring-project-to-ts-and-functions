import { FoodsProvider } from './hooks/useFoods';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { AppRoutes } from './routes'

function App() {
  return (
    <FoodsProvider>
        <GlobalStyle />
        <Router>
          <AppRoutes />
        </Router>
        
    </FoodsProvider>
  );
}

export default App;
