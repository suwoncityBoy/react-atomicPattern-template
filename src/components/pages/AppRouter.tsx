import { Route, Routes, Navigate } from 'react-router-dom';
import Calendar from '@/components/pages/calendar/Calendar';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate replace to='/calendar' />} />
        <Route path='/calendar' element={<Calendar />} />
      </Routes>
    </>
  );
}

export default AppRouter;
