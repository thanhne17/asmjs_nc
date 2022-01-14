/* eslint-disable linebreak-style */
import ActList from '../components/activitiList';
import NewsList from '../components/newList';
import Header from '../components/homeHeader';
import banner from '../components/banner';
import footer from '../components/footer';
const HomePage = {
  print() {
    return /* html */`
        ${Header.print()}
        <main class="max-w-6xl m-auto my-[10px]">        
        ${banner.print()}
        ${NewsList.print()}
        ${ActList.print()}
        </main>
        ${footer.print()}

        `;
  },
};

export default HomePage;
