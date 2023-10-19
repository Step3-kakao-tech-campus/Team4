import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import LandingPage from './components/page/landingPage';
import UserPage from './components/page/userPage';
import MainPage from './components/page/mainPage';
import SearchResultPage from './components/page/searchResultPage';
import MainLayout from './components/layouts/mainLayout';
import { queryClient } from './utils/query';
import { worker } from './mocks/worker';
import LikedStorePage from './components/page/likedStorePage';
import CoinRechargePage from './components/page/coinRechargePage';
import WritedReviewPage from './components/page/writedReviewPage';
import RecentlyViewdStorePage from './components/page/recentlyViewdStorePage';
import LikedReviewPage from './components/page/likedReviewPage';

if (process.env.NODE_ENV === 'development') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* 공통 레이아웃 */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/mypage" element={<UserPage />} />
            <Route path="/search" element={<SearchResultPage />} />
            <Route path="/likedStores" element={<LikedStorePage />} />
            <Route path="/coinRechargeHistory" element={<CoinRechargePage />} />
            <Route path="/writtenReview" element={<WritedReviewPage />} />
            <Route path="/likedReview" element={<LikedReviewPage />} />
            <Route path="/recentStores" element={<RecentlyViewdStorePage />} />
          </Route>
          {/* 단독 레이아웃 */}
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
