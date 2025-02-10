interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      className="flex justify-center items-center pt-0 p-4 gap-3"
      aria-label="Pagination"
    >
      <button
        className="w-full max-w-4 sm:max-w-6 p-1 aspect-square rounded-sm border"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        {"<"}
      </button>

      <div className="hidden sm:flex gap-1">
        {pageNumbers.map((number) => (
          <button
            className={`w-full max-w-4 sm:max-w-8 p-1 aspect-square rounded-sm border
                      ${currentPage === number ? "bg-primary-purple/85" : "bg-primary-purple/15"}`}
            key={number}
            onClick={() => onPageChange(number)}
            aria-label={`Page ${number}`}
            aria-current={currentPage === number ? "page" : undefined}
          >
            {number}
          </button>
        ))}
      </div>

      <div className="sm:hidden">
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <button
        className="w-full max-w-4 sm:max-w-6 p-1 aspect-square rounded-sm border"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        {">"}
      </button>
    </nav>
  );
}
