/* eslint-disable linebreak-style */
import Data from '../data';

const detailNews = {
  print(id) {
    const result = Data.find((Element) => Element.id === id);
    return /* html */`
            <div class="section1">
            <h5>${result.name}</h5>
            <a href="/news/${result.id}"><img src="${result.img}" alt=""></a>
            <p>${result.content}</p>
              </div>
        `;
  },
};

export default detailNews;
