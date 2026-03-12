function CatalogTable() {
  return (
    <div className="flex w-full flex-col">
      <div className="border-gray-2 flex flex-row items-center gap-[79px] border-b px-[18px] pb-3">
        <div className="flex flex-row items-center gap-5 py-[1px]">
          <div className="border-gray-3 h-[22px] w-[22px] flex-shrink-0 rounded-[4px] border"></div>
          <span className="font-cairo text-gray-3 text-[16px] leading-[30px] font-bold">
            Наименование
          </span>
        </div>

        <div className="flex flex-1 flex-row items-center gap-[150px]">
          <span className="font-cairo text-gray-3 w-[125px] text-center text-[16px] leading-[30px] font-bold">
            Вендор
          </span>
          <span className="font-cairo text-gray-3 w-[125px] text-center text-[16px] leading-[30px] font-bold">
            Артикул
          </span>
          <span className="font-cairo text-gray-3 w-[125px] text-center text-[16px] leading-[30px] font-bold">
            Оценка
          </span>
          <span className="font-cairo text-gray-3 w-[125px] text-center text-[16px] leading-[30px] font-bold">
            Цена, ₽
          </span>
        </div>
      </div>

      <div className="border-border-row flex flex-row items-center gap-[215px] border-b px-[18px]">
        <div className="flex flex-row items-center gap-[18px]">
          <div className="border-gray-3 h-[22px] w-[22px] flex-shrink-0 rounded-[4px] border bg-white"></div>
          <div className="border-gray-2 h-12 w-12 flex-shrink-0 rounded-[8px] border bg-[#C4C4C4]"></div>
          <div className="flex flex-col gap-[10px]">
            <span className="font-cairo text-[16px] leading-[30px] font-bold text-[#161919]">
              USB Флэшкарта 16GB
            </span>
            <span className="font-cairo text-gray-3 text-[14px] font-normal">Аксессуары</span>
          </div>
        </div>
        <div className="flex flex-1 flex-row items-center gap-[132px]">
          <span className="font-opensans w-[125px] text-center text-[16px] font-bold">Samsung</span>
          <span className="font-opensans w-[160px] text-center text-[16px] font-normal">
            RCH45Q1A
          </span>
          <span className="font-opensans w-[125px] text-center text-[16px] font-normal">4.3/5</span>
          <span className="text-text-black w-[160px] text-center font-mono text-[16px] font-normal">
            48 652,00
          </span>

          <div className="flex w-[133px] flex-row items-center justify-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" stroke="#B2B3B9" stroke-width="1.5" />
              <circle cx="8" cy="12" r="1.5" fill="#B2B3B9" />
              <circle cx="12" cy="12" r="1.5" fill="#B2B3B9" />
              <circle cx="16" cy="12" r="1.5" fill="#B2B3B9" />
            </svg>
          </div>
        </div>
      </div>

      <div className="border-border-row flex flex-row items-center gap-[215px] border-b px-[18px]">
        <div className="flex flex-row items-center gap-[18px]">
          <div className="border-gray-3 h-[22px] w-[22px] flex-shrink-0 rounded-[4px] border bg-white"></div>
          <div className="border-gray-2 h-12 w-12 flex-shrink-0 rounded-[8px] border bg-[#C4C4C4]"></div>
          <div className="flex flex-col gap-[10px]">
            <span className="font-cairo text-text-black text-[16px] leading-[30px] font-bold">
              Утюг Braun TexStyle 9
            </span>
            <span className="font-cairo text-gray-3 text-[14px] font-normal">Бытовая техника</span>
          </div>
        </div>
        <div className="flex flex-1 flex-row items-center gap-[132px]">
          <span className="font-opensans w-[125px] text-center text-[16px] font-bold">
            TexStyle
          </span>
          <span className="font-opensans w-[160px] text-center text-[16px] font-normal">
            DFCHQ1A
          </span>
          <span className="font-opensans w-[125px] text-center text-[16px] font-normal">4.9/5</span>
          <span className="text-text-black w-[160px] text-center font-mono text-[16px] font-normal">
            4 233,00
          </span>
          <div className="flex w-[133px] flex-row items-center justify-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" stroke="#B2B3B9" stroke-width="1.5" />
              <circle cx="8" cy="12" r="1.5" fill="#B2B3B9" />
              <circle cx="12" cy="12" r="1.5" fill="#B2B3B9" />
              <circle cx="16" cy="12" r="1.5" fill="#B2B3B9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogTable;
