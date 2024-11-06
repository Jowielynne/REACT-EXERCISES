const ToDo = ({ item }) => {
  return (
    <>
      <div className="flex flex-row justify-center my-2">
        <p className="px-2 py-2 pr-64 h-12 bg-white text-black max-w-10 font-semibold">{item}</p>
        <div>
          <button className="h-12 bg-green-400 text-white text-2xl py-1 px-3">
            ✓
          </button>
          <button className="h-12 bg-blue-400 text-white text-2xl py-1 px-3">
            ✗
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDo;
