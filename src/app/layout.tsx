"use client";
import { Suspense } from "react";
import { Provider } from "react-redux";
import Alert from "./components/Alert";
import Loading from "./components/Loading";
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
        <div className="h-10 w-full" />
        <Suspense fallback={<Loading />}>
          <Provider store={store}>
            <Alert />
            {children}
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
