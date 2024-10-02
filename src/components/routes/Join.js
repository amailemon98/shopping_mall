import React from "react";

const Join = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-[60%] h-full mx-auto flex flex-col py-5">
        <div className="py-5">
          <label for="name">
            이름
            <input
              className="w-full py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300  focus:border-sky-300"
              id="name"
              name="name"
              type="text"
            />
          </label>
        </div>
        <div className="py-5">
          <label for="id">
            아이디
            <input
              className="w-full py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300  focus:border-sky-300"
              id="id"
              name="id"
              type="text"
            />
          </label>
        </div>
        <div className="py-5">
          <label for="passwd">
            비밀번호
            <input
              className="w-full py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300  focus:border-sky-300"
              id="passwd"
              name="passwd"
              type="password"
            />
          </label>
        </div>
        <div className="py-5">
          <label for="email">
            이메일
            <input
              className="w-full py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300  focus:border-sky-300"
              id="email"
              name="email"
              type="text"
            />
          </label>
        </div>
        <div className="py-5">
          <label for="phone">
            전화번호
            <input
              className="w-full py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300  focus:border-sky-300"
              id="phone"
              name="phone"
              type="tel"
            />
          </label>
        </div>
        <div className="py-5">
          <label for="email">
            주소
            <input
              className="w-full py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300  focus:border-sky-300"
              id="email"
              name="email"
              type="text"
            />
          </label>
        </div>
        <button className="mx-auto border shadow-md border-blue-600 rounded-md h-14 w-36 bg-blue-600 hover:bg-blue-700 text-white py-3 px-3">
          보내기
        </button>
      </div>
    </div>
  );
};

export default Join;
