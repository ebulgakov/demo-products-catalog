export default async function Auth() {
  return (
    <div className="shadow-card rounded-5xl bg-white [box-shadow:0px_24px_32px_0px_rgba(0,0,0,0.04)] p-1.5">
      <div className="card-wrapper">
        <div className="card-inner flex min-w-[527px] flex-col items-center gap-8 px-12 py-12">
          <div className="logo-wrapper">
            <div className="logo-inner">
              <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4.07" y="11.43" width="1.11" height="11.14" rx="0.55" fill="#232323" />
                <rect x="5.47" y="10.81" width="1.23" height="12.38" rx="0.61" fill="#232323" />
                <rect x="7.05" y="10.12" width="1.36" height="13.76" rx="0.68" fill="#232323" />
                <rect x="8.78" y="9.36" width="1.51" height="15.29" rx="0.75" fill="#232323" />
                <rect x="10.72" y="8.51" width="1.68" height="16.99" rx="0.84" fill="#232323" />
                <rect x="12.87" y="7.56" width="1.86" height="18.88" rx="0.93" fill="#232323" />
                <rect x="15.26" y="6.51" width="2.07" height="20.97" rx="1.03" fill="#232323" />
                <rect x="17.91" y="5.35" width="2.31" height="23.30" rx="1.15" fill="#232323" />
                <rect x="20.85" y="4.05" width="2.56" height="25.89" rx="1.28" fill="#232323" />
                <rect x="24.13" y="2.62" width="2.84" height="28.76" rx="1.42" fill="#232323" />
                <rect x="27.76" y="1.02" width="3.16" height="31.96" rx="1.58" fill="#232323" />
              </svg>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-3">
            <h1 className="title-text text-dark text-center text-[40px] font-semibold leading-[1.1em] tracking-[-0.6px]">
              Добро пожаловать!
            </h1>
            <p className="w-full text-center text-[#E0E0E0] text-[18px] font-medium leading-[1.5em] [text-shadow:inset_0px_4px_4px_0px_rgba(0,0,0,0.17)]">
              Пожалуйста, авторизируйтесь
            </p>
          </div>

          <div className="flex w-[399px] flex-col gap-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-dark text-[18px] font-medium leading-[1.5em] tracking-[-0.27px]">Логин</label>
                <div className="form-input flex h-[54px] w-[399px] flex-row items-center gap-3.5 rounded-xl border-[1.5px] border-[#EDEDED] bg-white px-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <circle cx="12" cy="8" r="4" stroke="#C9C9C9" strokeWidth="2" strokeLinecap="round" />
                    <path
                      d="M4 20C4 17.2386 7.58172 15 12 15C16.4183 15 20 17.2386 20 20"
                      stroke="#C9C9C9"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <input
                    type="text"
                    value="test"
                    className="flex-1 w-[293px] bg-transparent text-dark text-[18px] font-medium leading-[1.5em] tracking-[-0.27px] outline-none"
                  />
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 cursor-pointer"
                  >
                    <path d="M1 1L13 15M13 1L1 15" stroke="#CACACA" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-dark text-[18px] font-medium leading-[1.5em] tracking-[-0.27px]">Пароль</label>
                <div className="flex h-[54px] w-[399px] flex-row items-center justify-center gap-3.5 rounded-xl border-[1.5px] border-[#EDEDED] bg-white px-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <rect x="4" y="11" width="16" height="10" rx="2" stroke="#EDEDED" strokeWidth="2" />
                    <path
                      d="M8 11V7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7V11"
                      stroke="#EDEDED"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="16" r="1" fill="#EDEDED" />
                  </svg>
                  <input
                    type="password"
                    value="password123"
                    className="flex-1 bg-transparent text-dark text-[18px] font-medium leading-[1.5em] tracking-[-0.27px] outline-none"
                  />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 cursor-pointer"
                  >
                    <path d="M3 3L21 21" stroke="#EDEDED" strokeWidth="2" strokeLinecap="round" />
                    <path d="M10.58 10.58A2 2 0 0 0 13.42 13.42" stroke="#EDEDED" strokeWidth="2" strokeLinecap="round" />
                    <path
                      d="M9.73 5.08A10.93 10.93 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                      stroke="#EDEDED"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                      stroke="#EDEDED"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2.5">
              <div className="h-6 w-6 shrink-0 cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="#EDEDED" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-muted text-[16px] font-medium leading-[1.5em]">Запомнить данные</span>
            </div>

            <div className="flex w-full flex-col gap-4">
              <button className="btn-primary flex w-full items-center justify-center rounded-xl py-4">
                <span className="text-white text-[18px] font-semibold leading-[1.2em] tracking-[-0.18px]">Войти</span>
              </button>

              <div className="flex w-full flex-row items-center gap-2.5">
                <svg className="flex-1" height="1" viewBox="0 0 1 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="0.5" x2="1" y2="0.5" stroke="#EDEDED" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                </svg>
                <span className="or-text shrink-0 text-[#EBEBEB] text-[16px] font-medium leading-[1.5em]">или</span>
                <svg className="flex-1" height="1" viewBox="0 0 1 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="0.5" x2="1" y2="0.5" stroke="#EDEDED" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
            </div>
          </div>

          <p className="text-subtle text-center text-[18px] leading-[1.5em]">
            Нет аккаунта?{' '}
            <a href="#" className="text-subtle hover:underline">
              Создать
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
