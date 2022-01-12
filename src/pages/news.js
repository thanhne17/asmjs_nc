/* eslint-disable linebreak-style */
import NewsList from '../components/newList';

const NewsListPage = {
  print() {
    return `
            ${NewsList.print()};
        `;
  },
};

export default NewsListPage;
