/* eslint-disable linebreak-style */
import axios from "axios";
import HeaderAdmin from "./headerAdmin";

const EditNews = {
    async print(id) {
        const { data } = await axios.get(`http://localhost:3001/post/${id}`);
        return /* html */ `
          ${HeaderAdmin.print()}    
          <div class="p-[10px]">

          <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div class="border-t border-gray-200"></div>
          </div>
          </div>

          <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h1 class="text-2xl font-medium leading-6 text-gray-900">Chỉnh sửa tin tức</h1>
                <p class="mt-1 text-sm text-gray-600">
                  Bài viết: ${data.title}
                </p>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">Tiêu đề</label>
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" value="${data.title}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[#aaa] rounded-md">
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label for="email-address" class="block text-sm font-medium text-gray-700">Nội dung</label>
                        <textarea type="text" value="${data.content}" name="email-address" id="email-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-[100px] shadow-sm sm:text-sm border-[#aaa] rounded-md">${data.content}</textarea>
                      </div>

                      <div class="col-span-6">
                        <label for="street-address" class="block text-sm font-medium text-gray-700">Ảnh</label>
                        <img src="${data.img}">
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </div>
          </div>
        
        `;
    },
};

export default EditNews;