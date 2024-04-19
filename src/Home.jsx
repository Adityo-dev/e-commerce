import { Outlet } from "react-router-dom";
import "./Home.css";

// Navbar and footer import section ----->
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

// -------------------------------------------------------------

function Home() {
  return (
    <>
      {/* Navigation bar content ------------------------------->*/}
      <div className="bg">
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <NavBar />
        </div>

        {/* OutLet content ------------------------------->*/}
        <div>
          <Outlet />
        </div>

        {/* Footer content ------------------------------->*/}
        <div className="mt-32">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
