/* eslint-disable linebreak-style */
import NewsList from '../components/newList';
import Header from '../components/homeHeader';
import footer from '../components/footer';
const NewsListPage = {
  print() {
    return `
            ${Header.print()}
            ${NewsList.print()}
            ${footer.print()}

        `;
  },
};

export default NewsListPage;
