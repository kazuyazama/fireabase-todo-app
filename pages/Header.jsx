import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthUser } from "../context/user";
import { auth, provider } from "../firebase";

const Header = () => {
  const authUserState = useAuthUser();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("ログインに成功しました");
        window.location.href = "/";
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <header className=" py-2  bg-slate-400">
      <div className=" max-w-screen-xl flex mx-auto  items-center ">
        <h1 className=" flex-1 text-lg font-semibold">Todoアプリ</h1>
        {authUserState ? (
          <button
            className="  w-32 h-12  bg-blue-400 rounded-xl hover:bg-blue-500 "
            onClick={() => signOut(auth)}
          >
            ログアウト
          </button>
        ) : (
          <button
            className="w-32 h-12  bg-blue-400 rounded-xl hover:bg-blue-500 "
            onClick={handleLogin}
          >
            ログイン
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
