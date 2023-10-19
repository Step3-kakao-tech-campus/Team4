import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import LandingPage from './components/page/landingPage';
import UserPage from './components/page/userPage';
import MainPage from './components/page/mainPage';
import SearchResultPage from './components/page/searchResultPage';
import MainLayout from './components/layouts/mainLayout';
import { queryClient } from './utils/query';
import { worker } from './mocks/worker';
import LikedStorePage from './components/page/likedStorePage';
import CoinRechargePage from './components/page/coinRechargePage';
import { store } from './store';
import ModalContainer from './components/molecules/modalContainer';

if (process.env.NODE_ENV === 'development') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ModalContainer>
          <BrowserRouter>
            <Routes>
              {/* 공통 레이아웃 */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/mypage" element={<UserPage />} />
                <Route path="/search" element={<SearchResultPage />} />
                <Route path="/likedStore" element={<LikedStorePage />} />
                <Route path="/coinRechargeHistory" element={<CoinRechargePage />} />
              </Route>
              {/* 단독 레이아웃 */}
              <Route path="/landing" element={<LandingPage />} />
            </Routes>
          </BrowserRouter>
        </ModalContainer>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
