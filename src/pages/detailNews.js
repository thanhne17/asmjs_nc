/* eslint-disable linebreak-style */
import axios from "axios";
import Header from "../components/homeHeader";
import footer from "../components/footer";

const detailNews = {
    async print(id) {
        const { data } = await axios.get(`http://localhost:3001/post/${id}`);
        return /* html */`
            ${Header.print()}
            <div class="section1 max-w-6xl m-auto my-[10px]">
            <h5>${data.title}</h5>
            <a href="/news/${data.id}"><img src="${data.img}" alt=""></a>
            <p>${data.content}</p>
              </div>
            ${footer.print()}
        `;
    },
};

export default detailNews;