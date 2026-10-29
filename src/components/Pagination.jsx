import { useState, useEffect } from "react";
const Pagination = () => {
  const PAGE_SIZE = 10;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    //console.log(json);
    setProducts(json.products);
  };

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const ProductCard = (props) => {
    //console.log(props);

    return (
      <>
        <div className="card-container">
          <span>{props.title}</span>
          <img className="card-image" src={props.image} />
        </div>
      </>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnClick = (n) => {
    setCurrentPage(n);
    };
    
  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <>
      <div>
        <button
          disabled={currentPage == 0}
          className="page-number"
          onClick={() => handlePrev()}
        >
          prev
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            className={"page-number " + (n === currentPage ? "active" : "")}
            key={n}
            onClick={() => handleOnClick(n)}
          >
            {n}
          </button>
        ))}
        <button
          disabled={currentPage === noOfPages - 1}
          className="page-number"
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </button>
      </div>
      <div className="pagination-container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} title={p.title} image={p.images} />
        ))}
      </div>
    </>
  );
};

export default Pagination;
