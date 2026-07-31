function GridIcon({ active }) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
      >
        <rect
          x="4"
          y="4"
          width="6"
          height="6"
          rx="1.2"
          stroke={active ? "#8b4b1f" : "#8a7769"}
          strokeWidth="1.8"
        />
        <rect
          x="14"
          y="4"
          width="6"
          height="6"
          rx="1.2"
          stroke={active ? "#8b4b1f" : "#8a7769"}
          strokeWidth="1.8"
        />
        <rect
          x="4"
          y="14"
          width="6"
          height="6"
          rx="1.2"
          stroke={active ? "#8b4b1f" : "#8a7769"}
          strokeWidth="1.8"
        />
        <rect
          x="14"
          y="14"
          width="6"
          height="6"
          rx="1.2"
          stroke={active ? "#8b4b1f" : "#8a7769"}
          strokeWidth="1.8"
        />
      </svg>
    );
  }
  
  function ListIcon({ active }) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
      >
        <path
          d="M6 7h2M10 7h8M6 12h2M10 12h8M6 17h2M10 17h8"
          stroke={active ? "#8b4b1f" : "#8a7769"}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect
          x="4"
          y="5.5"
          width="2"
          height="2"
          rx="0.5"
          fill={active ? "#8b4b1f" : "#8a7769"}
        />
        <rect
          x="4"
          y="10.5"
          width="2"
          height="2"
          rx="0.5"
          fill={active ? "#8b4b1f" : "#8a7769"}
        />
        <rect
          x="4"
          y="15.5"
          width="2"
          height="2"
          rx="0.5"
          fill={active ? "#8b4b1f" : "#8a7769"}
        />
      </svg>
    );
  }
  
  function ChevronDownIcon() {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 text-[#9a6a43]"
        fill="none"
      >
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  
  export default function MenuToolbar({
    sortBy,
    onSortChange,
    viewMode,
    onViewModeChange,
    sortOptions = [],
    viewOptions = [],
  }) {
    return (
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:w-auto">
          <label className="sr-only" htmlFor="menu-sort">
            Sort menu items
          </label>
  
          <div className="relative w-full sm:min-w-[280px]">
            <select
              id="menu-sort"
              value={sortBy}
              onChange={(event) => onSortChange(event.target.value)}
              className="h-[56px] w-full appearance-none rounded-[18px] border border-[#ead9ca] bg-[#fffdfa] pl-5 pr-12 text-[1rem] font-medium text-[#3e2b22] outline-none transition focus:border-[#c58a5b] focus:ring-2 focus:ring-[#e9c9ab]/40"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  Sort by: {option.label}
                </option>
              ))}
            </select>
  
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <ChevronDownIcon />
            </div>
          </div>
        </div>
  
        <div className="flex w-full sm:w-auto sm:justify-end">
          <div className="grid h-[56px] w-full grid-cols-2 rounded-[18px] border border-[#ead9ca] bg-[#fffdfa] p-1 sm:w-[112px]">
            {(viewOptions.length ? viewOptions : [
              { value: "grid", label: "Grid" },
              { value: "compact", label: "Compact" },
            ]).map((option, index) => {
              const isActive = option.value === viewMode;
              const isGrid = index === 0 || option.value === "grid";
  
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onViewModeChange(option.value)}
                  aria-label={option.label}
                  aria-pressed={isActive}
                  className={`flex h-full items-center justify-center rounded-[14px] transition ${
                    isActive
                      ? "bg-[#fbefe3] shadow-[inset_0_0_0_1px_rgba(181,99,34,0.18)]"
                      : "bg-transparent"
                  }`}
                >
                  {isGrid ? (
                    <GridIcon active={isActive} />
                  ) : (
                    <ListIcon active={isActive} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }