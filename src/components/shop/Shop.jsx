import { ItemsList } from './components/ItemsList';
import { Cart } from './components/Cart';

/**
 * @param {0} itemList-> List of items in the online shop
 */
export const Shop = ({ itemList }) => {
  return (
    <div className="w-full flex justify-center flex-col gap-5 p-8">
      <div className="text-2xl font-black flex justify-center">
        Shopping Cart!
      </div>

      <div className="flex flex-1 w-full gap-4">
        <div className="flex-1">
          {/**
           * All the available items in the shops are to be shown and added to cart inside this component
           */}
          <ItemsList list={itemList} />
        </div>

        <div className="flex-1">
          {/**
           * All the items added to the cart are to be shown inside this component
           */}
          <Cart />
        </div>
      </div>
    </div>
  );
};
