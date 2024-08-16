"use client";

function ModalCast({ isOpen, onClose, props }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed text-white inset-0 bg-black px-2 bg-opacity-5 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-zinc-950 p-8 rounded-lg max-w-screen-lg max-h-screen-lg min-h-96 w-full relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">{props?.title}</h2>
        <div className="aspect-w-16 aspect-h-9 h-64 lg:h-96  md:h-96 w-full"></div>
      </div>
    </div>
  );
}

export default ModalCast;
