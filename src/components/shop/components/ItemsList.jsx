import { useState, useCallback } from 'react';

const Item = ({ isSelected, onSelect, item }) => {
  const _onSelect = useCallback(() => onSelect(item), [onSelect, item]);

  return (
    <div
      className={`border-2 rounded-xl p-4 w-full relative flex gap-4 lg:flex-row flex-col ${
        isSelected
          ? 'border-lime-600 text-lime-600 shadow-lg'
          : 'border-gray-200'
      }`}
    >
      <div className="flex items-center">
        <img
          src={item.src}
          alt={item.name}
          className="max-lg:w-full lg:w-[180px] rounded-lg"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between w-full mb-4">
          <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
            {item.name}
          </h5>
        </div>
        <p className="font-normal text-base leading-7 text-gray-500 mb-6">
          {item.description}
        </p>
        <div className="flex justify-between items-end flex-1">
          <button
            className={`font-manrope text-lg leading-9 border px-2 rounded-xl ${
              isSelected
                ? 'text-red-600 border-red-600'
                : 'text-lime-600 border-lime-600'
            }`}
            onClick={_onSelect}
            data-testid={`item-${item.id}`}
          >
            {isSelected ? 'Remove' : 'Add to cart'}
          </button>
          <h6 className="text-indigo-600 font-manrope font-bold text-xl leading-9 text-right">
            ${item.price}
          </h6>
        </div>
      </div>
    </div>
  );
};

export const ItemsList = ({ list }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const onSelect = useCallback((selectedItem) => {
    setSelectedItems((prev) => {
      return [...prev, selectedItem];
    });
  }, []);

  return (
    <div className="flex flex-col border-2 border-gray-200 rounded-xl p-4 gap-4">
      <div className="flex-none flex items-center justify-center px-8 w-full text-2xl font-bold text-indigo-600">
        Select Item to purchase
      </div>
      <div className="flex-1 flex justify-center gap-2 w-full flex-wrap">
        {list.map((item) => (
          <Item
            key={item.id}
            item={item}
            onSelect={onSelect}
            isSelected={selectedItems.includes(item)}
          />
        ))}
      </div>
    </div>
  );
};
