import ActList from "../components/activitiList";
import NewsList from "../components/newList";
import Header from "../components/homeHeader";
import banner from "../components/banner";

const HomePage = {
    print(){
        return `
        ${Header.print()}
        <main class="max-w-6xl m-auto my-[10px]">        
        ${banner.print()}
        ${NewsList.print()}
        ${ActList.print()}
        </main>
        <footer class="max-w-6xl m-auto bg-[#272f54] p-6">
          Tên sinh viên
        </footer>
        `;
    },
};

export default HomePage;