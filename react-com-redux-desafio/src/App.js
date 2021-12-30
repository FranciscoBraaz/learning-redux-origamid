import { useDispatch, useSelector } from 'react-redux';
import { autoLogin, fetchLogout } from './store/login';
import {
  Container,
  ContainerTitleLogin,
  Logout,
  TitleLogin,
} from './styles/appStyles';
import { Content } from './components/Content';
import { useEffect } from 'react';

function App() {
  const { token, user } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const loading = token.loading || user.loading;

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <Container>
      <ContainerTitleLogin>
        <TitleLogin>Mini Dogs</TitleLogin>
        <Logout
          className={`${loading ? 'loading' : ''} ${user.data ? 'logged' : ''}`}
          onClick={() => dispatch(fetchLogout())}
          type="button"
        />
      </ContainerTitleLogin>
      <Content />
    </Container>
  );
}

export default App;
