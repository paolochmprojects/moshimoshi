import { ThemeProvider } from "@/components/theme-provider";
import React, { FC } from "react";

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
