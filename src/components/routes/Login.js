import React from "react";

const Login = () => {
  return (
    <div className="w-full h-full text-center py-12 my-12 rounded-md border border-gray-200">
      <h1 className="mx-auto text-3xl content-center">로그인</h1>
      <div className="w-[60%] h-full mx-auto flex flex-col py-5">
        <div className="py-5">
          <label for="id">
            <input
              className="w-full py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300  focus:border-sky-300"
              id="id"
              name="id"
              type="text"
              placeholder="아이디"
            />
          </label>
        </div>
        <div className="py-5">
          <label for="passwd">
            <input
              className="w-full py-3 rounded-md border px-3 bg-gray-100 shadow-sm focus:ring-sky-300  focus:border-sky-300"
              id="passwd"
              name="passwd"
              type="password"
              placeholder="비밀번호"
            />
          </label>
        </div>
        <button className="mt-8 mx-auto border shadow-md border-blue-600 rounded-md h-14 w-36 bg-blue-600 hover:bg-blue-700 text-white py-3 px-3">
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
