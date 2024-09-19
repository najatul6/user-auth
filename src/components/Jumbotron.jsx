
const Jumbotron = () => {
  return (
    <div className="max-w-6xl mx-auto font-[sans-serif]">
    <div className="bg-gray-50 max-sm:px-8 px-12 py-8 w-full rounded">
      <h1 className="text-4xl font-extrabold text-gray-800">Tailwind CSS Jumbotron</h1>
      <div className="mt-4">
        <p className=" text-sm text-gray-800 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et
          tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
          ultrices, non consequat mauris tincidunt.</p>
      </div>

      <button type="button" className="mt-6 px-6 py-3 rounded text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700">Get started now</button>
    </div>

    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="bg-[#333] text-white max-sm:px-8 px-12 py-8 w-full rounded">
        <h2 className="text-2xl font-bold">Dark Card</h2>
        <div className="mt-4">
          <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et
            tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.</p>
        </div>
        <button type="button" className="mt-6 px-6 py-3 rounded text-sm tracking-wider border-none outline-none bg-gray-600 hover:bg-gray-700">Learn more</button>
      </div>

      <div className="bg-gray-50 max-sm:px-8 px-12 py-8 w-full rounded">
        <h2 className="text-gray-800 text-2xl font-bold">Gray Card</h2>
        <div className="mt-4">
          <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et
            tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.</p>
        </div>
        <button type="button" className="mt-6 px-6 py-3 rounded text-sm text-gray-800 tracking-wider border-none outline-none bg-gray-200 hover:bg-gray-300">Learn more</button>
      </div>
    </div>
  </div>
  )
}

export default Jumbotron