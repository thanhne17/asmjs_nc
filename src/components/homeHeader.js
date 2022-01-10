const Header = {
    print(){
        return `
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
            </ul>
          </div>

          <div class="search">
            <input type="text">
            <input type="submit" value="Tìm kiếm" class="bg-[#272f54] hover:bg-sky-700 text-white text-xs	p-[4px]">
          </div>
        </nav>

    </header>
        `
    }
};

export default Header;