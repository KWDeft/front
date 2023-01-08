import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import Curriculum from './domains/Curriculum/Curriculum';
import ViewCurriDetail from './domains/Curriculum/ViewCurriDetail';
import WriteCurriDetail from './domains/Curriculum/WriteCurriDetail';
import Setting from './domains/Setting/Setting';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} >
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/@:username">
          <Route index element={<PostListPage />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/curriculum/write" element={<WriteCurriDetail />} />
        <Route path="/curriculum/view" element={<ViewCurriDetail />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
    </Routes>
  );
};
export default App;
