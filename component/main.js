"use client";
import React,{lazy} from 'react'
const Header =lazy(() => import("@/component/header"));
const Footer =lazy(() => import("@/component/footer"))
import { Provider } from "react-redux";
import {store}from "@/store/store";

const main = ({children,geistSans,geistMono}) => {
  return (
    <div>
      <Provider store={store}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased box-border flex flex-col font-another max-md:overflow-x-hidden`}
        >
          <Header/>
          {children}
          <Footer/>
        </body>
      </html>
    </Provider>
    </div>
  )
}

export default main
