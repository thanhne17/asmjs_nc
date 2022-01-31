/* eslint-disable linebreak-style */
import axios from "axios";

const NewsList = {
    async print() {
        const { data } = await axios.get("http://localhost:3001/post");
        return /* html */ `
        <section class="my-[15px] max-w-6xl m-auto">
          <h1 class="font-bold mb-[15px]">TIN TỨC HỌC TẬP</h1>
          <div class="section grid-cols-3 grid gap-[20px]">
          ${data.map((Element) => /* html */`
          <div class="section1">
            <a href="/news/${Element.id}"><img src="${Element.img}" alt=""></a>
            <h5><a href="/news/${Element.id}">${Element.title}</a></h5>
            <p>${Element.content}</p>
          </div> 
          `).join("")}
          </div>
        </section>`;
    },
};

export default NewsList;