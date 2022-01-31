/* eslint-disable linebreak-style */
import Data from "../../data";
import HeaderAdmin from "./headerAdmin";

const News = {
    print() {
        return /* html */ `
    ${HeaderAdmin.print()}
  <header class="bg-white shadow">
  <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between content-center">
    <h1 class="text-3xl font-bold text-gray-900">
      Tin tức
    </h1>
    <a href="/#/admin/news/add" class="bg-[#272f54] p-2 text-[#fff] rounded">Thêm</a>
  </div>
</header>

<div class="flex flex-col w-[100%] overflow-hidden">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 ">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Id
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tiêu đề
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nội dung
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ảnh
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            ${Data.map((Element) => /* html */`
            <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
               
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    ${Element.id}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-xs leading-5 font-semibold">
              ${Element.name}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 w-[400px] text-ellipsis overflow-hidden">
                ${Element.content}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <img src="${Element.img}" class="w-[50px]">
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="/admin/news/${Element.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              <a href="/admin/news/${Element.id}/delete" class="text-indigo-600 hover:text-indigo-900">Delete</a>
            </td>
          </tr>
            `).join("")}
            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

        `;
    },
};

export default News;