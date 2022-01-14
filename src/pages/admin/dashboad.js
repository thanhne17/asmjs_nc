/* eslint-disable linebreak-style */
import Data from "../../data";
import HeaderAdmin from "./headerAdmin";
const Dashboad = {
  print() {
    return /* html */ `
    <div class="min-h-full">
      ${HeaderAdmin.print()}
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <section>
              <span class="bg-[#f8fafc] border-2 m-4 p-4 rounded-lg shadow-2xl">
                Số bài viết ${Data.length} 
              </span>
            </section>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
    
        `;
  },
};

export default Dashboad;
