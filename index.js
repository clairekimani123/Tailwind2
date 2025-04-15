document.getElementById('root').innerHTML = `
  <div class="min-h-screen bg-gray-100">
    <header class="bg-blue-600 text-white p-4 shadow-md">
      <h1 class="text-2xl font-bold">This shows what my app contain.</h1>
    </header>
    
    <main class="container mx-auto p-4">
      <div class="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto mt-8">
        <h2 class="text-xl font-semibold mb-4">Welcome to My Page</h2>
        <p class="text-gray-700 mb-4">This is a simple page styled with Tailwind CSS.</p>
        
        <div class="flex space-x-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Primary Button
          </button>
          <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
            Secondary Button
          </button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="font-medium text-lg mb-2">Room 1</h3>
          <p class="text-gray-600"> Here is where consultation take place the doctor get to examine you</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="font-medium text-lg mb-2">Room 2</h3>
          <p class="text-gray-600">Here is where all the serious medical assistant take place </p>
        </div>
      </div>
    </main>
    
    <footer class="bg-gray-800 text-white p-4 mt-8">
      <p class="text-center">© 2023 Simple Page</p>
    </footer>
  </div>
`;