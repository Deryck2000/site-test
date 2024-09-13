"use client";
import React from "react";

const LinkBanners = ({ banners }) => (
  <div className="border-t-2 border-[#808080] pt-4">
    <div className="flex flex-wrap gap-1">
      {banners.map((banner, index) => (
        <a key={index} href={banner.href} target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={banner.imgSrc}
            alt={banner.alt}
            className="w-[200px] h-[40px] object-cover border-2 border-[#808080] border-t-[#ffffff] border-l-[#ffffff]"
          />
        </a>
      ))}
    </div>
  </div>
);

export default LinkBanners;
