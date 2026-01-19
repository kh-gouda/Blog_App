import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PageNotFound from "./pages/404";
import PostDetails from "./pages/PostDetails";
import PostsContextProvider from "./contexts/PostsContextProvider";

function App() {
  return (
    <PostsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="post/:id" element={<PostDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsContextProvider>
  );
}

export default App;
