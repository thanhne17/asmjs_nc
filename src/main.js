import Navigo from "navigo";
import HomePage from "./pages/home";
import Header from "./components/homeHeader";
import TuyenSinh from "./pages/tuyensinh";
const route = new Navigo("/", {linksSelector: "a"});

const render = (content) => {
    document.querySelector('.app').innerHTML = content.print();
}
render(Header);
route.on({
    "/": () => {
        render(HomePage);
    },
    "/ts": () => {
        render(TuyenSinh);
    },
});

route.resolve();