/* eslint-disable linebreak-style */
import Data from '../data';
import Header from '../components/homeHeader';
import footer from '../components/footer';


const detailNews = {
  print(id) {
    const result = Data.find((Element) => Element.id === id);
    return /* html */`
            ${Header.print()}
            <div class="section1 max-w-6xl m-auto my-[10px]">
            <h5>${result.name}</h5>
            <a href="/news/${result.id}"><img src="${result.img}" alt=""></a>
            <p>${result.content}</p>
              </div>
            ${footer.print()}
        `;
  },
};

export default detailNews;
