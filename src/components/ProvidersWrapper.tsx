'use client';

import { darkTheme, getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { WagmiProvider } from "wagmi";
import { mainnet,sepolia } from "wagmi/chains";



const ProvidersWrapper = ({ children }: PropsWithChildren) => {

  const queryClient = new QueryClient();

  const config = getDefaultConfig({
    appName: 'Escrow Presale',
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || "YOUR_PROJECT_ID",
    chains: [mainnet, sepolia],
    ssr: false
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          { children }
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
 
export default ProvidersWrapper;