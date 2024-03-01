import { Route, Routes } from "react-router-dom"
import EditPost from "./pages/EditPost"
import Post from "./pages/Post"
import PostLists from "./pages/PostLists"
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';

function App() {

  return (
    <PrimeReactProvider>
    <div>
      <h1>DCX Tasks Management</h1>
      <Routes>
        <Route path="/" element={<PostLists />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
      </Routes>
    </div>
    </PrimeReactProvider>
  )
}

export default App