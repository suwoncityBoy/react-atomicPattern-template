import { Route, Routes, Navigate } from 'react-router-dom';
import Tab from '@/components/organisms/tab/Tab';
import Calendar from '@/components/pages/calendar/Calendar';

function AppRouter() {
  return (
    <>
      <Tab />
      <Routes>
        <Route path='/' element={<Navigate replace to='/calendar' />} />
        <Route path='/calendar' element={<Calendar />} />
      </Routes>
    </>
  );
}

export default AppRouter;
