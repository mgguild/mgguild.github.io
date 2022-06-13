import React from "react";
import { ThemeContextProvider } from "contexts/ThemeContext";

const Providers: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  );
};

export default Providers;
