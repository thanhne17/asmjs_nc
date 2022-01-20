/* eslint-disable linebreak-style */
import Navigo from 'navigo';
import HomePage from './pages/home';
import NewsListPage from './pages/news';
import detailNews from './pages/detailNews';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Dashboad from './pages/admin/dashboad';
import News from './pages/admin/news';
import AddNews from './pages/admin/addNews';
import EditNews from './pages/admin/editNews';

const route = new Navigo('/', { linksSelector: 'a' });

const render = async (content, id) => {
  document.querySelector('.app').innerHTML = await content.print(id);
};
route.on({
  '/': () => {
    render(HomePage);
  },
  '/news': () => {
    render(NewsListPage);
  },
  '/news/:id': (value) => {
    console.log(value)
    render(detailNews, value.data.id);
  },
  '/signin': () => {
    render(Login);
  },
  '/signup': () => {
    render(SignUp);
  },
  '/admin/dashboad': () => {
    render(Dashboad);
  },
  '/admin/news': () => {
    render(News);
  },
  '/admin/news/add': () => {
    render(AddNews);
  },
  '/admin/news/:id/edit': ({ data }) => {
    render(EditNews.print(data.id));
  },
});
route.resolve();
