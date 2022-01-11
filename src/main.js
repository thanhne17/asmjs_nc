import Navigo from "navigo";
import HomePage from "./pages/home";
import Header from "./components/homeHeader";
import TuyenSinh from "./pages/tuyensinh";
import NewsListPage from "./pages/news";
import detailNews from "./pages/detailNews";
const route = new Navigo("/", {linksSelector: "a"});

const render = (content) => {
    document.querySelector('.app').innerHTML = content;
}
render(Header);
route.on({
    "/": () => {
        render(HomePage.print());
    },
    "/ts": () => {
        render(TuyenSinh.print());
    },
    "/news": () => {
        render(NewsListPage.print());
    },
    "/news/:id": ({ data }) => {
        render(detailNews.print(data.id));
    }
});

route.resolve();