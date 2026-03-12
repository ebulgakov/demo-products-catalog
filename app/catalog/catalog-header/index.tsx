function CatalogHeader() {
  return (
    <div className="flex flex-row items-center justify-between">
      <h2 className="font-cairo text-col-black text-[20px] leading-[20px] font-bold">
        Все позиции
      </h2>
      <div className="flex flex-row items-center gap-2">
        <button className="border-gray-2 flex flex-row items-center gap-2 rounded-[8px] border p-[10px] transition hover:bg-gray-50">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C13.5182 2.75 15.7855 3.84029 17.3611 5.5625"
              stroke="#515161"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.5625 2.0625V5.5625H15.0625"
              stroke="#515161"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button className="bg-brand-blue flex flex-row items-center gap-[15px] rounded-[6px] px-5 py-[10px] transition hover:bg-blue-700">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="9.5" stroke="#EBF3EA" stroke-width="1.5" />
            <path d="M11 7V15M7 11H15" stroke="#EBF3EA" stroke-width="1.5" stroke-linecap="round" />
          </svg>
          <span className="font-cairo text-soft-green text-[14px] font-semibold">Добавить</span>

          <span className="text-brand-blue ml-1 rounded-full bg-white px-1.5 py-0.5 text-xs font-bold">
            NEW <span className="bg-brand-blue ml-1 rounded-full px-1 text-white">17</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default CatalogHeader;
