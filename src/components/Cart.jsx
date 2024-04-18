import { useSelector, useDispatch } from "react-redux"
import { remove } from "../store/cartSlice"

const Cart = () => {
    const product = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const removeItem = (id) => {
        // Dispatch a remove action
        dispatch(remove(id))

    }

    const cards = product.map((product) => (
        <div
          key={product.id}
          className="px-6 py-3 w-80 h-auto flex flex-col items-center gap-2 border border-sky-500"
        >
          <div className="w-[100px] h-auto">
            <img src={product.image} alt="product image" />
          </div>
          <div className="font-bold">
            <h1 className="">{product.title}</h1>
          </div>
          <div>
            <h2 className="">${product.price}</h2>
          </div>
          <div>
            <button onClick={() => removeItem(product.id)}
              className="bg-blue-700 rounded-full text-white px-2 py-2"
            >
              Remove Item
            </button>
          </div>
        </div>
      ));

    return (

        <div className="grid grid-cols-1 gap-y-5 gap-x-0-">{cards}</div>
    )
}

export default Cart