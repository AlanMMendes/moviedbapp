"use client";
import { Suspense } from "react";
import { Provider } from "react-redux";
import Alert from "./components/Alert";
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
      <body className="bg-black">
        <Suspense fallback={<Loading />}>
          <Provider store={store}>
            <Alert />

            <Navbar />
            {children}
            <div className="h-full w-full bottom-0">
              <Footer />
            </div>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
