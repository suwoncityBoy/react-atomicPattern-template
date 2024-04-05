import { Route, Routes, Navigate } from "react-router-dom";
import Tab from "@/components/Tab";
import Calendar from "@/page/calendar/Calendar";
import Sale from "@/page/sale/Sale";

function AppRouter() {
  return (
    <>
      <Tab />
      <Routes>
        <Route path="/" element={<Navigate replace to="/calendar" />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </>
  );
}

export default AppRouter;
