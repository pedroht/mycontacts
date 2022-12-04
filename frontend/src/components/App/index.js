import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import ToastContainer from '../Toast/ToastContainer';
import MyRoutes from '../../Routes';

import { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />

        <Container>
          <Header />
          <MyRoutes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
