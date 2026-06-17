function ProductCard() {
  return (
    <>
      <div className="bg-white shadow rounded-lg p-4">
        <img src="https://picsum.photos/300?1" alt="" className="rounded-lg" />
        <h3 className="mt-3 font-semibold">Wireless Headphones</h3>
        <p className="text-blue-600 font-bold">₹1,999</p>
      </div>
    </>
  );
}

export default ProductCard;
