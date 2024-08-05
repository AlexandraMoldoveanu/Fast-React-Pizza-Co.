import { formatCurrency } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import { getCart } from '../cart/cartSlice';
import Deleteitem from './Deleteitem';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentCart = useSelector(getCart);
  const currentQuantity =
    currentCart.find((item) => item.pizzaId === pizzaId)?.quantity ?? 0;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <UpdateItemQuantity
        pizzaId={pizzaId}
        currentQuantity={currentQuantity}
      ></UpdateItemQuantity>
      <Deleteitem pizzaId={pizzaId}></Deleteitem>
    </li>
  );
}

export default CartItem;
