import "./Pagination.css";

interface Props {
  total: number;
  current: number;
  onSelect: (page: number) => void;
}
function Pagination({ total, current, onSelect }: Props) {
  return (
    <nav className="p-0">
      <ul className="pagination pagination-sm justify-content-center py-lg-5">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => onSelect(current > 1 ? current - 1 : 1)}
          >
            ⟨
          </a>
        </li>

        {[...Array(current).keys()]
          .slice(
            current - 5 > 0
              ? total - current > 5
                ? current - 5
                : total - 11
              : 1
          )
          .map((item) => (
            <li key={item} className="page-item">
              <a className="page-link" onClick={() => onSelect(item)}>
                {item}
              </a>
            </li>
          ))}

        <li className="page-item">
          <a className={"page-link active"}>{current}</a>
        </li>

        {[
          ...Array(
            total >= current + 6 ? (current > 5 ? current + 6 : 12) : total + 1
          ).keys(),
        ]
          .slice(current + 1)
          .map((item) => (
            <li key={item} className="page-item">
              <a className="page-link" onClick={() => onSelect(item)}>
                {item}
              </a>
            </li>
          ))}

        <li
          className="page-item"
          onClick={() => onSelect(current < total ? current + 1 : total)}
        >
          <a className="page-link">⟩</a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
