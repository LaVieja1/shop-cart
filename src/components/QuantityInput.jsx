/* eslint-disable react/prop-types */
export default function QuantityInput({
    decrementQuantity,
    quantity,
    incrementQuantity,
}) {
    return (
        <div className="flex items-center">
            <button
                onClick={decrementQuantity}
                className="flex h-6 w-6 items-center justify-center rounded-none border-gray-200 bg-white p-0 text-center text-lg font-bold sm:h-8 sm:w-8 sm:text-2xl"
            >
                -
            </button>
            <input
                className="input-number h-6 w-6 border bg-white text-center sm:h-8 sm:w-10"
                value={quantity} 
                type="number"
                min={1}
            />
            <button
                onClick={incrementQuantity}
                className="flex h-6 w-6 items-center justify-center rounded-none border border-gray-200 bg-white  p-0 text-center text-lg font-bold sm:h-8 sm:w-8 sm:text-2xl"
            >
                +
            </button>
        </div>
    );
}