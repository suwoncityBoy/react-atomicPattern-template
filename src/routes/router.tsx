// router 설정부 파일
import { lazy } from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import HomeLayout from '@/components/templates/homeLayout/HomeLayout';

// 코드 스플리팅 부분
// 주의사항! 페이지별로만 스플리팅 하기. 더 세분화 되게 하지 않기!
const Home = lazy(() => import('@/components/pages/home/Home'));
const NotFound = lazy(() => import('@/components/pages/notFound/NotFound'));

// 라우터 부분 (url 설정 부분)
export const router = createBrowserRouter([
  {
    path: '/',
    // 레이아웃 컴포넌트
    element: <HomeLayout />,
    //  에러페이지
    errorElement: <div>에러가 발생했습니다.</div>,
    children: [
      { index: true, loader: () => redirect('/home') },
      { path: 'home', element: <Home /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
