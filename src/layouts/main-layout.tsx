import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth-context";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const authCtx = useContext(AuthContext);

  return (
    <div className="p-3">
      <div className="flex flex-col">
        <h1 className="text-2xl">فروشگاه من</h1>

        <ul className="flex flex-row gap-4 p-4 m-2 border-2 rounded-xl">
          <li className="bg-gray-200 p-2 rounded-xl hover:bg-gray-300">
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li className="bg-gray-200 p-2 rounded-xl hover:bg-gray-300">
            <Link to="/products">محصولات</Link>
          </li>
          <li className="bg-green-600 text-green-50 p-2 rounded-xl hover:bg-green-800">
            <Link to="/products/create">ایجاد محصول جدید</Link>
          </li>
          <li className="flex-auto"></li>
          {!authCtx.authData.isAuth && (
            <li onClick={authCtx.login} className="bg-blue-600 text-blue-50 p-2 rounded-xl hover:bg-blue-800">
              <button>ورود به سایت</button>
            </li>
          )}
          {authCtx.authData.isAuth && (
            <>
              <li>{authCtx.authData.user.name}</li>
              <li onClick={authCtx.logout} className="bg-red-600 text-red-50 p-2 rounded-xl hover:bg-red-800">
                <button>خروج از سایت</button>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default MainLayout;
