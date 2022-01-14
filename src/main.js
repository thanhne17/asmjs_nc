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

const render = (content) => {
  document.querySelector('.app').innerHTML = content;
};
route.on({
  '/': () => {
    render(HomePage.print());
  },
  '/news': () => {
    render(NewsListPage.print());
  },
  '/news/:id': ({ data }) => {
    render(detailNews.print(data.id));
  },
  '/signin': () => {
    render(Login.print());
  },
  '/signup': () => {
    render(SignUp.print());
  },
  '/admin/dashboad': () => {
    render(Dashboad.print());
  },
  '/admin/news': () => {
    render(News.print());
  },
  '/admin/news/add': () => {
    render(AddNews.print());
  },
  '/admin/news/:id/edit': ({ data }) => {
    console.log(data);
    render(EditNews.print(data.id));
  },
});

route.resolve();
