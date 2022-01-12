/* eslint-disable linebreak-style */
import Data from '../data';

const NewsList = {
  print() {
    return /* html */ `
        <section class="my-[15px]">
          <h1 class="font-bold mb-[15px]">TIN TỨC HỌC TẬP</h1>
          <div class="section grid-cols-3 grid gap-[20px]">
        ${Data.map((Element) => /* html */`
        <div class="section1">
        <a href="/news/${Element.id}"><img src="${Element.img}" alt=""></a>
        <h5><a href="/news/${Element.id}">“Cây ngủ gật” Poly từng nghi ngờ đam mê MC Hype và cái kết</a></h5>
        <p>Chia sẻ về hành trình “2 năm 4 tháng” tại FPT Polytechnic Tây Nguyên, Công Đức cho biết,
          trong thời gian học ở trường, để có chi phí trang trải nên anh chàng này đã đi làm thêm DJ
          và MC Hype cho một số quán Bar.</p>
          </div> 
          `).join('')
}
        </div>
      </section>`;
  },
};

export default NewsList;
