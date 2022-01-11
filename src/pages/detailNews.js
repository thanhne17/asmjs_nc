import Data from "../data";

const detailNews = {
    print(id){
        const result = Data.find((Element) => Element.id === id);
        return `
            <div class="section1">
            <a href="/news/${result.id}"><img src="${result.img}" alt=""></a>
            <h5>“Cây ngủ gật” Poly từng nghi ngờ đam mê MC Hype và cái kết</h5>
            <p>Chia sẻ về hành trình “2 năm 4 tháng” tại FPT Polytechnic Tây Nguyên, Công Đức cho biết,
              trong thời gian học ở trường, để có chi phí trang trải nên anh chàng này đã đi làm thêm DJ
              và MC Hype cho một số quán Bar.</p>
              </div>
        `;

            

    },
};

export default detailNews;