
const Jumbotron = () => {
  return (
    <div class="max-w-6xl mx-auto font-[sans-serif]">
    <div class="bg-gray-50 max-sm:px-8 px-12 py-8 w-full rounded">
      <h1 class="text-4xl font-extrabold text-gray-800">Tailwind CSS Jumbotron</h1>
      <div class="mt-4">
        <p class=" text-sm text-gray-800 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et
          tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
          ultrices, non consequat mauris tincidunt.</p>
      </div>

      <button type="button" class="mt-6 px-6 py-3 rounded text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700">Get started now</button>
    </div>

    <div class="grid md:grid-cols-2 gap-4 mt-4">
      <div class="bg-[#333] text-white max-sm:px-8 px-12 py-8 w-full rounded">
        <h2 class="text-2xl font-bold">Dark Card</h2>
        <div class="mt-4">
          <p class="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et
            tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.</p>
        </div>
        <button type="button" class="mt-6 px-6 py-3 rounded text-sm tracking-wider border-none outline-none bg-gray-600 hover:bg-gray-700">Learn more</button>
      </div>

      <div class="bg-gray-50 max-sm:px-8 px-12 py-8 w-full rounded">
        <h2 class="text-gray-800 text-2xl font-bold">Gray Card</h2>
        <div class="mt-4">
          <p class="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et
            tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.</p>
        </div>
        <button type="button" class="mt-6 px-6 py-3 rounded text-sm text-gray-800 tracking-wider border-none outline-none bg-gray-200 hover:bg-gray-300">Learn more</button>
      </div>
    </div>
  </div>
  )
}

export default Jumbotron