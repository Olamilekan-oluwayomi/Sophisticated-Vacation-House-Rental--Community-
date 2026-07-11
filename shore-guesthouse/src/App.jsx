import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Information = lazy(() => import("./pages/Information"));
const Booking = lazy(() => import("./pages/Booking"));

function App() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/information" element={<Information />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;