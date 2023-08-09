import { useState } from "react";
import useData from "../hooks/useData";
import useQueryParams from "../store";
import "./Pagination.css";
import { Hide, Link, ListItem, UnorderedList } from "@chakra-ui/react";

function Pagination() {
  const { setOffset } = useQueryParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useData();
  const total = data ? Math.floor(data.total / 20) + 1 : 1;
  return (
    <nav className="p-0">
      <UnorderedList className="pagination pagination-sm justify-content-center py-lg-5">
        <ListItem
          className="page-item"
          onClick={() => {
            setOffset(currentPage > 1 ? currentPage - 1 : 1);
            setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
          }}
        >
          <Link className="page-link link-danger">
            <strong>⟨</strong>
          </Link>
        </ListItem>

        <Hide below="md">
          {[...Array(currentPage).keys()]
            .slice(
              currentPage > 5
                ? total - currentPage > 5
                  ? currentPage - 5
                  : total - 11
                : 1
            )
            .map((item) => (
              <ListItem key={item} className="page-item">
                <Link
                  className="page-link link-danger"
                  onClick={() => {
                    setCurrentPage(item);
                    setOffset(item);
                  }}
                >
                  {item}
                </Link>
              </ListItem>
            ))}
        </Hide>

        <ListItem className="page-item">
          <Link className="page-link active bg-danger border-danger">
            {currentPage}
          </Link>
        </ListItem>

        <Hide below="md">
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
              <ListItem key={item} className="page-item">
                <Link
                  className="page-link link-danger"
                  onClick={() => {
                    setCurrentPage(item);
                    setOffset(item);
                  }}
                >
                  {item}
                </Link>
              </ListItem>
            ))}
        </Hide>

        <ListItem
          className="page-item"
          onClick={() => {
            setOffset(currentPage < total ? currentPage + 1 : total);
            setCurrentPage(currentPage < total ? currentPage + 1 : total);
          }}
        >
          <Link className="page-link link-danger">
            <strong>⟩</strong>
          </Link>
        </ListItem>
      </UnorderedList>
    </nav>
  );
}

export default Pagination;
