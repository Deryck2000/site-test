"use client";
import React from "react";

const socialMediaLinks = [
  { href: "#", imgSrc: "/img/misskey-icon.webp", alt: "Misskey.art icon", text: "@deryck@misskey.art" },
  { href: "#", imgSrc: "/img/discord-icon.webp", alt: "Discord icon", text: "deryck2000" },
  { href: "#", imgSrc: "/img/github-icon.webp", alt: "GitHub icon", text: "deryck2000" }
];

const SocialMedia = () => (
  <div className="border-t-2 border-[#808080] pt-4">
    <h3 className="font-bold mb-2">Links</h3>
    <div className="flex flex-wrap gap-1">
      {socialMediaLinks.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] px-4 py-2 flex items-center space-x-2 text-[#000] hover:bg-[#d0d0d0] active:border-[#808080] active:border-r-[#ffffff] active:border-b-[#ffffff]"
        >
          <img src={item.imgSrc} alt={item.alt} className="w-8 h-8 object-contain" />
          <span className="text-sm">{item.text}</span>
        </a>
      ))}
    </div>
  </div>
);

export default SocialMedia;
