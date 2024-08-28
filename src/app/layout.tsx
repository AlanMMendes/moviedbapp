"use client";
import { Suspense } from "react";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import "./globals.css";
import { store } from "./store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          <Provider store={store}>
            <div className="relative flex flex-col min-h-screen">
              <Navbar />
              {children}
              <div className="absolute bottom-0 w-full">
                <Footer />
              </div>
            </div>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
