import React from "react";
import { ethers } from "ethers";
import { contractABI,contractAddress } from "../utils/constants";
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {

    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const storageContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

  
  return <AppContext.Provider value={{storageContract}}>{children}</AppContext.Provider>;
};
