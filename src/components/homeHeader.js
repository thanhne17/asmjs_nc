/* eslint-disable linebreak-style */
const Header = {
    print() {
        return /* html */`
    <header class="max-w-6xl m-auto bg-[#272f54]">
      <a href="#">
        <img class="m-auto p-4" src="https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png" style="width: 200px;" alt="">
      </a>

      <nav class="bg-[#cb7802] flex justify-between">
        <div class="menu" >
          <ul class="flex">
            <li><a href="/#/" data-navigo>Trang chủ</a></li>
            <li><a href="/#/news">Tin tức</a></li>
            <li><a href="/#/signin">Đăng nhập</a></li>
            <li><a href="/#/signup">Đăng ký</a></li>
            <li><a href="/#/admin/dashboad">Admin</a></li>
          </ul>
        </div>

        <div class="search">
          <input type="text">
          <input type="submit" value="Tìm kiếm" class="bg-[#272f54] hover:bg-sky-700 text-white text-xs	p-[2.5px]">
        </div>
      </nav>

  </header>
        `;
    },
};

export default Header;