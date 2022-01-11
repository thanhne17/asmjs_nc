/* eslint-disable linebreak-style */
import Data from '../data';

const detailNews = {
  print(id) {
    const result = Data.find((Element) => Element.id === id);
    return `
            <div class="section1">
            <a href="/news/${result.id}"><img src="${result.img}" alt=""></a>
            <h5>${result.name}</h5>
            <p>${result.content}</p>
              </div>
        `;
  },
};

export default detailNews;
