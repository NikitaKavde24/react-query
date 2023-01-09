import logo from "./logo.svg";
import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Heroes } from "./Components/Heroes/Heroes";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HeroDetails } from "./Components/HeroDetails/HeroDetails";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/Hero-details/:heroId" element={<HeroDetails/>}/>
          <Route path="/" element={ <Heroes/>}/>
        </Routes>
      </Router>
    <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
    </QueryClientProvider>
   );
}

export default App;
