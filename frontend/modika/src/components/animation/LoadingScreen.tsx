import { FC } from "react";
import { ILoading } from "../../containers/type";
import Logo from "./Logo/Logo";

const LoadingScreen: FC<ILoading> = ({ isLoading, handleIsLoading }) => {
  return (
    <div className="max-w-full flex justify-center  overflow-x-hidden bg-[#242424]">
      <Logo isLoading={isLoading} handleIsLoading={handleIsLoading} />
    </div>
  );
};

export default LoadingScreen;
