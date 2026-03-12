import Container from "@/app/components/container";

function Search() {
  return (
    <Container>
      <div className="flex">
        <div>
          <h1 className="font-cairo text-[24px] leading-[45px] font-bold text-[#161919]">Товары</h1>
        </div>

        <div className="flex flex-1 flex-row items-center gap-2 rounded-[8px] bg-[#F3F3F3] px-5 py-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="7.5" stroke="#999999" stroke-width="2" />
            <path d="M16.5 16.5L21 21" stroke="#999999" stroke-width="2" stroke-linecap="round" />
          </svg>
          <span className="font-roboto text-text-grey flex-1 text-[14px] leading-[24px]">
            Найти&nbsp;&nbsp;
          </span>
        </div>
      </div>
    </Container>
  );
}

export default Search;
