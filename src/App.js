import About from './components/About';
import Achievement from './components/Achievement';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import { useEffect, useState } from 'react';
import { getListAllBlog } from './utils/APIFetch';

function App() {
  const [articles, setArticles] = useState();
  console.log(articles);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await getListAllBlog();
        setArticles(response);
      } catch (e) {
        alert(e);
      }
    };
    getArticle();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Achievement />
      <Experience />
      <Contact />
      <Blog />
    </>
  );
}

export default App;
