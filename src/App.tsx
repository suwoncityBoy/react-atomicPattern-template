import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { globalStyles } from "@/styles/stitches.config";
import AppRouter from "@/page/AppRouter";

// stitches 설정
globalStyles();
// 리액트 쿼리 init
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
