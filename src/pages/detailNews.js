/* eslint-disable linebreak-style */
// import Data from '../data';
import Header from '../components/homeHeader';
import footer from '../components/footer';

const detailNews = {
  print(id) {
    return fetch(`https://61e7a9ade32cd90017acbc1d.mockapi.io/post/${id}`)
    .then((posts) => posts.json())
    .then((Data)=>
     /* html */`
            ${Header.print()}
            <div class="section1 max-w-6xl m-auto my-[10px]">
            <h5>${Data.title}</h5>
            <a href="/news/${Data.id}"><img src="${Data.img}" alt=""></a>
            <p>${Data.content}</p>
              </div>
            ${footer.print()}
        `
    )


  },
};

export default detailNews;
