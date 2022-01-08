import Navigo from "navigo";
import HomePage from "./pages/home";
import TuyenSinh from "./pages/tuyensinh";
const route = new Navigo("/");

const render = (content) => {
    document.querySelector('.app').innerHTML = content.print();
}

route.on({
    "/": () => {
        render(HomePage);
    },
    "/ts": () => {
        render(TuyenSinh);
    },
});

route.resolve();