export default function App() {
  return (
    <section className="w-80 my-16 mx-auto">
      <div className="flex flex-row my-3">
        <img className="h-10 mr-2" src="/img/logo.png" alt="!!!!" />
        <h1 className="text-3xl font-bold text-slate-800">
          Work<span className="text-indigo-500">cation</span>
        </h1>
      </div>
      <img className="rounded-md my-3" src="/img/mainphoto.png" alt="!!" />
      <h2 className="text-4xl font-bold text-slate-800">
        You can work from anywhere. <span className="text-indigo-500">Take advantage of it.</span>
      </h2>
      <p className="text-slate-600 my-3">
        Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather, even when you're on vacation.
      </p>
      <button className="my-3 font-semibold bg-indigo-500 p-2 px-5 text-white rounded-md">BOOK YOUR ESCAPE</button>
    </section>
  )
}