export default async function Home() {

  return (<div className="px-[30px] py-5 flex flex-col gap-[30px] min-h-screen">

    <div className="bg-white rounded-[10px] flex flex-row justify-between items-center px-[30px] h-[100px]">

      <div>
        <h1 className="font-cairo font-bold text-[24px] leading-[45px] text-[#161919]">Товары</h1>
      </div>

      <div className="flex flex-row items-center gap-2 bg-[#F3F3F3] rounded-[8px] px-5 py-3">

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7.5" stroke="#999999" stroke-width="2"/>
          <path d="M16.5 16.5L21 21" stroke="#999999" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span className="font-roboto text-[14px] leading-[24px] text-text-grey flex-1">Найти&nbsp;&nbsp;</span>
      </div>

    </div>


    <div className="flex flex-col gap-[30px] flex-1">

      <div className="bg-white rounded-[12px] px-[30px] py-[30px] flex flex-col gap-[40px]" >

        <div className="flex flex-row justify-between items-center">
          <h2 className="font-cairo font-bold text-[20px] leading-[20px] text-col-black">Все позиции</h2>
          <div className="flex flex-row items-center gap-2">


            <button
              className="flex flex-row items-center gap-2 p-[10px] border border-gray-2 rounded-[8px] hover:bg-gray-50 transition">

              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C13.5182 2.75 15.7855 3.84029 17.3611 5.5625"
                  stroke="#515161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5625 2.0625V5.5625H15.0625" stroke="#515161" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </button>

            <button
              className="flex flex-row items-center gap-[15px] px-5 py-[10px] bg-brand-blue rounded-[6px] hover:bg-blue-700 transition">

              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="9.5" stroke="#EBF3EA" stroke-width="1.5"/>
                <path d="M11 7V15M7 11H15" stroke="#EBF3EA" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span className="font-cairo font-semibold text-[14px] text-soft-green">Добавить</span>

              <span className="bg-white text-brand-blue text-xs font-bold rounded-full px-1.5 py-0.5 ml-1">NEW <span
                className="ml-1 bg-brand-blue text-white rounded-full px-1">17</span></span>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full">

          <div className="flex flex-row items-center px-[18px] gap-[79px] border-b border-gray-2 pb-3">

            <div className="flex flex-row items-center gap-5 py-[1px]">

              <div className="w-[22px] h-[22px] border border-gray-3 rounded-[4px] flex-shrink-0"></div>
              <span className="font-cairo font-bold text-[16px] leading-[30px] text-gray-3">Наименование</span>
            </div>

            <div className="flex flex-row items-center gap-[150px] flex-1">
              <span
                className="font-cairo font-bold text-[16px] leading-[30px] text-gray-3 w-[125px] text-center">Вендор</span>
              <span
                className="font-cairo font-bold text-[16px] leading-[30px] text-gray-3 w-[125px] text-center">Артикул</span>
              <span
                className="font-cairo font-bold text-[16px] leading-[30px] text-gray-3 w-[125px] text-center">Оценка</span>
              <span className="font-cairo font-bold text-[16px] leading-[30px] text-gray-3 w-[125px] text-center">Цена, ₽</span>
            </div>
          </div>

          <div className="flex flex-row items-center px-[18px] gap-[215px] border-b border-border-row">

            <div className="flex flex-row items-center gap-[18px]">
              <div className="w-[22px] h-[22px] border border-gray-3 rounded-[4px] flex-shrink-0 bg-white"></div>
              <div className="w-12 h-12 rounded-[8px] border border-gray-2 bg-[#C4C4C4] flex-shrink-0"></div>
              <div className="flex flex-col gap-[10px]">
                <span
                  className="font-cairo font-bold text-[16px] leading-[30px] text-[#161919]">USB Флэшкарта 16GB</span>
                <span className="font-cairo font-normal text-[14px] text-gray-3">Аксессуары</span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[132px] flex-1">
              <span className="font-opensans font-bold text-[16px] text-center w-[125px]">Samsung</span>
              <span className="font-opensans font-normal text-[16px] text-center w-[160px]">RCH45Q1A</span>
              <span className="font-opensans font-normal text-[16px] text-center w-[125px]">4.3/5</span>
              <span className="font-mono font-normal text-[16px] text-center text-text-black w-[160px]">48 652,00</span>

              <div className="flex flex-row items-center gap-2 w-[133px] justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#B2B3B9" stroke-width="1.5"/>
                  <circle cx="8" cy="12" r="1.5" fill="#B2B3B9"/>
                  <circle cx="12" cy="12" r="1.5" fill="#B2B3B9"/>
                  <circle cx="16" cy="12" r="1.5" fill="#B2B3B9"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center px-[18px] gap-[215px] border-b border-border-row"
               >
            <div className="flex flex-row items-center gap-[18px]">
              <div className="w-[22px] h-[22px] border border-gray-3 rounded-[4px] flex-shrink-0 bg-white"></div>
              <div className="w-12 h-12 rounded-[8px] border border-gray-2 bg-[#C4C4C4] flex-shrink-0"></div>
              <div className="flex flex-col gap-[10px]">
                <span
                  className="font-cairo font-bold text-[16px] leading-[30px] text-text-black">Утюг Braun TexStyle 9</span>
                <span className="font-cairo font-normal text-[14px] text-gray-3">Бытовая техника</span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[132px] flex-1">
              <span className="font-opensans font-bold text-[16px] text-center w-[125px]">TexStyle</span>
              <span className="font-opensans font-normal text-[16px] text-center w-[160px]">DFCHQ1A</span>
              <span className="font-opensans font-normal text-[16px] text-center w-[125px]">4.9/5</span>
              <span className="font-mono font-normal text-[16px] text-center text-text-black w-[160px]">4 233,00</span>
              <div className="flex flex-row items-center gap-2 w-[133px] justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#B2B3B9" stroke-width="1.5"/>
                  <circle cx="8" cy="12" r="1.5" fill="#B2B3B9"/>
                  <circle cx="12" cy="12" r="1.5" fill="#B2B3B9"/>
                  <circle cx="16" cy="12" r="1.5" fill="#B2B3B9"/>
                </svg>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-row justify-between items-center pt-[11px] pb-[11px]">
          <span className="font-roboto font-normal text-[18px] text-col-black">Показано 1-20 из 120&nbsp;</span>
          <div className="flex flex-row items-center gap-4">

            <button className="w-5 h-5 flex items-center justify-center bg-white hover:bg-gray-50 transition rounded">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="#B2B3B9" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </button>


            <div className="flex flex-row items-center gap-2">
              <button
                className="w-[30px] h-[30px] flex items-center justify-center rounded-[4px] bg-brand-purple shadow-shadow2">
                <span className="font-cairo font-normal text-[14px] text-white">1</span>
              </button>

              <button
                className="w-[30px] h-[30px] flex items-center justify-center rounded-[4px] border border-gray-2 shadow-shadow2 hover:bg-gray-50 transition">
                <span className="font-cairo font-normal text-[14px] text-gray-3">2</span>
              </button>

              <button
                className="w-[30px] h-[30px] flex items-center justify-center rounded-[4px] border border-gray-2 shadow-shadow2 hover:bg-gray-50 transition">
                <span className="font-cairo font-normal text-[14px] text-gray-3">3</span>
              </button>

              <button
                className="w-[30px] h-[30px] flex items-center justify-center rounded-[4px] border border-gray-2 shadow-shadow2 hover:bg-gray-50 transition">
                <span className="font-cairo font-normal text-[14px] text-gray-3">4</span>
              </button>

              <button
                className="w-[30px] h-[30px] flex items-center justify-center rounded-[4px] border border-gray-2 shadow-shadow2 hover:bg-gray-50 transition">
                <span className="font-cairo font-normal text-[14px] text-gray-3">5</span>
              </button>
            </div>

            <button className="w-5 h-5 flex items-center justify-center bg-white hover:bg-gray-50 transition rounded">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="#B2B3B9" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>);
}
