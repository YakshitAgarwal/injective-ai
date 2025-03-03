"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import "dotenv/config"

export default function Providers({ children }: { children: React.ReactNode }) {
  console.log(process.env.NEXT_PUBLIC_PRIVY_APP_ID)
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID! }
      config={{
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
