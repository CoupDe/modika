import { useState } from "react";
import LoadingScreen from "../components/animation/LoadingScreen";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import BrandIntro from "../components/pages/BrandIntro";
import IntroDesigner from "../components/pages/IntroDesigner";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleIsLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className={`flex flex-col ${!isLoading ? "min-h-screen" : ""}`}>
      {!isLoading && <NavBar />}
      <main className="flex-grow relative">
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
