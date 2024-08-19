const Instruction = () => {
  return (
    <div className="flex flex-col items-center px-24 py-12">
      <div className="relative flex items-center justify-center">
        <img src="/bg.webp" className="rounded-xl border border-gray-300" />
        <img
          src="/example.png"
          className="absolute w-[70%] rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Instruction;
