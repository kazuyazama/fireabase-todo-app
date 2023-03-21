import "../styles/globals.css";
import Header from "./Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <footer className="p-4 text-center text-gray-500">
        <p>&copy; kazuya zama</p>
      </footer>
    </>
  );
}

export default MyApp;
