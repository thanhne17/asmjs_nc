import Navigo from "navigo";

const route = new Navigo("/");

const render = (content) => {
    document.querySelector('.app').innerHTML = content;
}

route.on({
    "/": () => {
        render(
            `
            <div class="">
            <header class="max-w-6xl m-auto bg-[#272f54]">
                <a href="#">
                  <img class="m-auto p-4" src="https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png" style="width: 200px;" alt="">
                </a>
      
                <nav class="bg-[#cb7802] flex justify-around p-2">
                  <div class="menu" >
                    <ul class="flex">
                      <li><a href="/" data-navigo>Trang chủ</a></li>
                      <li><a href="/ts">Tuyển sinh</a></li>
                      <li><a href="/ctdt">Chương trình đào tạo</a></li>
                      <li><a href="/sv">Góc sinh viên</a></li>
                      <li><a href="/td">Tuyển dụng</a></li>
                      <li><a href="/gt">Giới thiệu</a></li>
                    </ul>
                  </div>
      
                  <div class="search">
                    <input type="text">
                    <input type="submit" value="Tìm kiếm" class="bg-[#272f54] hover:bg-sky-700 text-white text-xs	p-[4px]">
                  </div>
                </nav>
      
            </header>
      
            <main class="max-w-6xl m-auto my-[10px]">
              <img src="https://ap.poly.edu.vn/images/Banner-AP.png" alt="">
              
              <section class="my-[15px]">
                <h3 class="font-bold mb-[15px]">TIN TỨC HỌC TẬP</h3>
                <div class="section grid-cols-3 grid gap-[20px]">
                  <div class="section1">
                    <a href="#"><img src="https://caodang.fpt.edu.vn/wp-content/uploads/4-224-768x512.jpg" alt=""></a>
                    <h5>“Cây ngủ gật” Poly từng nghi ngờ đam mê MC Hype và cái kết</h5>
                    <p>Chia sẻ về hành trình “2 năm 4 tháng” tại FPT Polytechnic Tây Nguyên, Công Đức cho biết,
                      trong thời gian học ở trường, để có chi phí trang trải nên anh chàng này đã đi làm thêm DJ
                      và MC Hype cho một số quán Bar.</p>
                  </div>
                  <div class="section1 grid">
                    <a href="#"><img src="https://caodang.fpt.edu.vn/wp-content/uploads/2-401-768x512.jpg" alt=""></a>
                    <h5>“Cây ngủ gật” Poly từng nghi ngờ đam mê MC Hype và cái kết</h5>
                    <p>Chia sẻ về hành trình “2 năm 4 tháng” tại FPT Polytechnic Tây Nguyên, Công Đức cho biết,
                      trong thời gian học ở trường, để có chi phí trang trải nên anh chàng này đã đi làm thêm DJ
                      và MC Hype cho một số quán Bar.</p>
                  </div>
                  <div class="section1 grid">
                    <a href="#"><img src="https://caodang.fpt.edu.vn/wp-content/uploads/6-133-768x512.jpg" alt=""></a>
                    <h5>“Cây ngủ gật” Poly từng nghi ngờ đam mê MC Hype và cái kết</h5>
                    <p>Chia sẻ về hành trình “2 năm 4 tháng” tại FPT Polytechnic Tây Nguyên, Công Đức cho biết,
                      trong thời gian học ở trường, để có chi phí trang trải nên anh chàng này đã đi làm thêm DJ
                      và MC Hype cho một số quán Bar.</p>
                  </div>
                </div>
              </section>
      
              <section class="my-[15px]">
                <h3 class="font-bold mb-[15px]">HOẠT ĐỘNG SINH VIÊN</h3>
                <div class="section grid-cols-3 grid gap-[20px]">
                  <div class="section1">
                    <a href="#"><img src="https://caodang.fpt.edu.vn/wp-content/uploads/4-224-768x512.jpg" alt=""></a>
                    <h5>“Cây ngủ gật” Poly từng nghi ngờ đam mê MC Hype và cái kết</h5>
                    <p>Chia sẻ về hành trình “2 năm 4 tháng” tại FPT Polytechnic Tây Nguyên, Công Đức cho biết,
                      trong thời gian học ở trường, để có chi phí trang trải nên anh chàng này đã đi làm thêm DJ
                      và MC Hype cho một số quán Bar.</p>
                  </div>
                  <div class="section1 grid">
                    <a href="#"><img src="https://caodang.fpt.edu.vn/wp-content/uploads/2-401-768x512.jpg" alt=""></a>
                    <h5>“Cây ngủ gật” Poly từng nghi ngờ đam mê MC Hype và cái kết</h5>
                    <p>Chia sẻ về hành trình “2 năm 4 tháng” tại FPT Polytechnic Tây Nguyên, Công Đức cho biết,
                      trong thời gian học ở trường, để có chi phí trang trải nên anh chàng này đã đi làm thêm DJ
                      và MC Hype cho một số quán Bar.</p>
                  </div>
                  <div class="section1 grid">
                    <a href="#"><img src="https://caodang.fpt.edu.vn/wp-content/uploads/6-133-768x512.jpg" alt=""></a>
                    <h5>“Cây ngủ gật” Poly từng nghi ngờ đam mê MC Hype và cái kết</h5>
                    <p>Chia sẻ về hành trình “2 năm 4 tháng” tại FPT Polytechnic Tây Nguyên, Công Đức cho biết,
                      trong thời gian học ở trường, để có chi phí trang trải nên anh chàng này đã đi làm thêm DJ
                      và MC Hype cho một số quán Bar.</p>
                  </div>
                </div>
              </section>
            </main>
      
            <footer class="max-w-6xl m-auto bg-[#272f54] p-6">
              Tên sinh viên
            </footer>
          </div>
            `
        );
    },
    "/ts": () => {
        render(`<h1>Tuyển sinh</h1>`);
    },
});

route.resolve();