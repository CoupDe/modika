import { useState } from "react";
import LoadingScreen from "../components/animation/LoadingScreen";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import BrandIntro from "../components/landingPages/BrandIntro";
import IntroDesigner from "../components/landingPages/IntroDesigner";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleIsLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className={`flex flex-col ${!isLoading ? "min-h-screen" : ""} bg-slate-100` }>
      {!isLoading && <NavBar />}
      <main className="flex-grow relative bg-slate-100">
        {isLoading ? (
          <LoadingScreen
            isLoading={isLoading}
            handleIsLoading={handleIsLoading}
          />
        ) : (
          <>
            <BrandIntro />
            <IntroDesigner />
          </>
        )}
      </main>
      {!isLoading && <Footer />}
    </div>
  );
};

export default MainLayout;
