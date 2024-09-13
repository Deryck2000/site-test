"use client";
import React from "react";

const Profile = () => (
  <div className="flex items-center space-x-4">
    <img
      src="/img/profile-picture.webp"
      alt="プロフィール写真"
      className="w-24 h-24 object-cover border-2 border-[#808080] border-t-[#ffffff] border-l-[#ffffff]"
    />
    <div>
      <h2 className="text-lg font-bold">Deryck2000</h2>
      <p className="text-sm">デデオチャン / Dormitiser / Hallcudy</p>
      <p className="text-sm">Japan, JST(UTC +9)</p>
    </div>
  </div>
);

export default Profile;
