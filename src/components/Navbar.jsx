import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    setUser([]);
    navigate("/");
  };

  return (
    <div className="bg-slate-950">
      <div className="flex flex-row items-center justify-between pl-24 pr-24 p-6 text-lg">
        <div className="bg-slate-50 p-2 pl-4 pr-4 text-slate-50 rounded-md text-slate-950 font-bold">
          <Link className="underline">BlogBlog</Link>
        </div>
        <div className="flex flex-row gap-12 capitalize font-bold text-slate-50">
          <Link className="">
            <p>gönderiler</p>
          </Link>
          {user?.length === 0 && (
            <Link to="/giris">
              <p>giris yap</p>
            </Link>
          )}
          {user?.length === 0 && (
            <Link to="/kayit">
              <p>kayit ol</p>
            </Link>
          )}
          {user?.length !== 0 && <Link>Profil</Link>}
          {user?.length !== 0 && <Link to="/gönderi">gönderi paylaş</Link>}
          {user?.length !== 0 && <Link onClick={logout}>çıkış yap</Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
