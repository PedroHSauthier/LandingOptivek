import React, { useEffect, useState } from 'react';
import { Bot, Database, Cog, Zap } from 'lucide-react';

const DetailsModal = ({ product, onClose }) => {
  const [visible, setVisible] = useState(false);

  const iconMap = { Bot, Database, Cog, Zap };

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  if (!product) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div
        className="relative bg-gray-900 border border-cyan-500/50 rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-white"
          onClick={handleClose}
        >
          &times;
        </button>
        <div className={`p-4 bg-gradient-to-br ${product.gradient} rounded-lg mb-6 text-center`}>
          {iconMap[product.icon] && (
            React.createElement(iconMap[product.icon], {
              className: 'w-8 h-8 text-cyan-400 mx-auto mb-2'
            })
          )}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
            {product.title || product.name}
          </h2>
          {product.tagline && (
            <p className="text-sm text-gray-300">{product.tagline}</p>
          )}
        </div>

        <p className="text-sm text-gray-300 mb-6 text-center">
          {product.shortDescription || product.description}
        </p>
        {product.specifications && (
          <div className="mb-4">
            <h3 className="text-cyan-400 font-semibold mb-2">Especificações</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}>
                  <span className="font-medium capitalize">
                    {key.replace(/_/g, ' ')}:
                  </span>{' '}
                  {value}
                </li>
              ))}
            </ul>
          </div>
        )}
        {product.benefits && (
          <div className="mb-4">
            <h3 className="text-cyan-400 font-semibold mb-2">Benefícios</h3>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {product.benefits.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        )}
        {product.useCases && (
          <div className="mb-2">
            <h3 className="text-cyan-400 font-semibold mb-2">Casos de Uso</h3>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {product.useCases.map((u, idx) => (
                <li key={idx}>{u}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsModal;
