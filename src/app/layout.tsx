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
            <div className="flex flex-col min-h-screen">
              <Navbar />

              {children}
              <Footer />
            </div>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
