import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import classes from "./App.module.css";
function App() {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;
  const pagesVisitedSoFar = pageNumber * itemsPerPage;
  const displayItems = items.slice(
    pagesVisitedSoFar,
    pagesVisitedSoFar + itemsPerPage
  );
  const pageChangeHandler = (data) => {
    console.log(data.selected);
    setPageNumber(data.selected);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log(data);
      setItems(data);
    };
    fetchData();
  }, []);
  return (
    <div className={classes.items}>
      {displayItems.map((item) => {
        return (
          <div>
            <h3>{item.id}</h3>
            <h3>{item.title}</h3>
          </div>
        );
      })}

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={10}
        onPageChange={pageChangeHandler}
        
      />
    </div>
  );
}

export default App;
