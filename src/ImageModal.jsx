import React, { useState, useEffect } from 'react';

const ImageModal = ({ images = [], onClose, initialIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [fading, setFading] = useState(false);

  const changeIndex = (idx) => {
    if (idx === activeIndex) return;
    setFading(true);
    // start fade out then change image
    setTimeout(() => setActiveIndex(idx), 150);
  };

  useEffect(() => {
    if (fading) {
      const timer = setTimeout(() => setFading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, fading]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-900 border border-cyan-500/50 rounded-xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-white"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img
            src={images[activeIndex]}
            className={`w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] max-h-[80vh] object-contain rounded-lg transition-opacity duration-300 ${
              fading ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {images.length > 1 && (
            <div className="mt-4 flex gap-2">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => changeIndex(idx)}
                  className={`h-16 w-16 object-cover rounded cursor-pointer transition-opacity duration-300 ${
                    idx === activeIndex
                      ? 'border-2 border-cyan-500'
                      : 'opacity-60 hover:opacity-80'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
