function Pagination() {
  return (
    <div className="flex flex-row items-center justify-between pt-[11px] pb-[11px]">
      <span className="font-roboto text-col-black text-[18px] font-normal">
        Показано 1-20 из 120&nbsp;
      </span>
      <div className="flex flex-row items-center gap-4">
        <button className="flex h-5 w-5 items-center justify-center rounded bg-white transition hover:bg-gray-50">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="#B2B3B9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div className="flex flex-row items-center gap-2">
          <button className="bg-brand-purple shadow-shadow2 flex h-[30px] w-[30px] items-center justify-center rounded-[4px]">
            <span className="font-cairo text-[14px] font-normal text-white">1</span>
          </button>

          <button className="border-gray-2 shadow-shadow2 flex h-[30px] w-[30px] items-center justify-center rounded-[4px] border transition hover:bg-gray-50">
            <span className="font-cairo text-gray-3 text-[14px] font-normal">2</span>
          </button>

          <button className="border-gray-2 shadow-shadow2 flex h-[30px] w-[30px] items-center justify-center rounded-[4px] border transition hover:bg-gray-50">
            <span className="font-cairo text-gray-3 text-[14px] font-normal">3</span>
          </button>

          <button className="border-gray-2 shadow-shadow2 flex h-[30px] w-[30px] items-center justify-center rounded-[4px] border transition hover:bg-gray-50">
            <span className="font-cairo text-gray-3 text-[14px] font-normal">4</span>
          </button>

          <button className="border-gray-2 shadow-shadow2 flex h-[30px] w-[30px] items-center justify-center rounded-[4px] border transition hover:bg-gray-50">
            <span className="font-cairo text-gray-3 text-[14px] font-normal">5</span>
          </button>
        </div>

        <button className="flex h-5 w-5 items-center justify-center rounded bg-white transition hover:bg-gray-50">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 5L12.5 10L7.5 15"
              stroke="#B2B3B9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
