import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./styles/index.scss";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Sidebar } from "@/components/layout/Sidebar";
import { StoreProvider } from "./providers/StoreProvider";
import ClientApp from "./providers/ClientApp/ClientApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media",
  description: "Best social media web app for everyone!",
  authors: { url: "", name: "Babiy M.O." },
};

export const viewport: Viewport = {
  themeColor: "black",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="app h-[84vh] m-24 flex rounded-3xl">
          <StoreProvider>
            <ThemeProvider>
              <ClientApp>{children}</ClientApp>
            </ThemeProvider>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
