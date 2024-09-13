"use client";
import React from "react";

const headerButtons = ['_', '□', '×'];

const Header = () => (
  <div className="bg-[#000080] p-1 flex justify-between items-center">
    <h1 className="text-white text-xl font-bold">deryck2000.jp.eu.org</h1>
    <div className="flex">
      {headerButtons.map((symbol, index) => (
        <button
          key={index}
          className="w-5 h-5 bg-[#c0c0c0] border-2 border-[#808080] border-t-[#ffffff] border-l-[#ffffff] text-xs font-bold mr-1"
          style={{ marginRight: index < 2 ? '0.25rem' : '0' }}
        >
          {symbol}
        </button>
      ))}
    </div>
  </div>
);

export default Header;
