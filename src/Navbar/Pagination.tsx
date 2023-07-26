import { useState } from "react";
import useData from "../hooks/useData";
import useQueryParams from "../store";
import "./Pagination.css";

function Pagination() {
  const { setOffset } = useQueryParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useData();
  const total = data ? Math.floor(data.total / 20) + 1 : 1;
  return (
    <nav className="p-0">
      <ul className="pagination pagination-sm justify-content-center py-lg-5">
        <li
          className="page-item"
          onClick={() => {
            setOffset(currentPage > 1 ? currentPage - 1 : 1);
            setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
          }}
        >
          <a className="page-link link-danger">
            <strong>⟨</strong>
          </a>
        </li>

        {[...Array(currentPage).keys()]
          .slice(
            currentPage > 5
              ? total - currentPage > 5
                ? currentPage - 5
                : total - 11
              : 1
          )
          .map((item) => (
            <li key={item} className="page-item">
              <a
                className="page-link link-danger"
                onClick={() => {
                  setCurrentPage(item);
                  setOffset(item);
                }}
              >
                {item}
              </a>
            </li>
          ))}

        <li className="page-item">
          <a className="page-link active bg-danger border-danger">
            {currentPage}
          </a>
        </li>

        {[
          ...Array(
            total > currentPage + 5
              ? currentPage > 5
                ? currentPage + 6
                : 12
              : total + 1
          ).keys(),
        ]
          .slice(currentPage + 1)
          .map((item) => (
            <li key={item} className="page-item">
              <a
                className="page-link link-danger"
                onClick={() => {
                  setCurrentPage(item);
                  setOffset(item);
                }}
              >
                {item}
              </a>
            </li>
          ))}

        <li
          className="page-item"
          onClick={() => {
            setOffset(currentPage < total ? currentPage + 1 : total);
            setCurrentPage(currentPage < total ? currentPage + 1 : total);
          }}
        >
          <a className="page-link link-danger">
            <strong>⟩</strong>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
