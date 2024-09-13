"use client";
import React from "react";
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Introduction from '@/components/Introduction';
import ItemList from '@/components/ItemList';
import SocialMedia from '@/components/SocialMedia';
import LinkBanners from '@/components/LinkBanner';
import ScrollableContainer from '@/components/ScrollableContainer';
import { linkBanners } from '@/data/linkBanners';
import Footer from '@/components/Footer';

function ItemList2() {
  return (
    <div>
      <h3 className="font-bold mb-2">最近の更新</h3>
      <ScrollableContainer height="150px">
        <p className="text-sm">
        <p>hoge</p>
        <p>hoge</p>
        <p>2024-09-11 noteで<a href="https://note.com/deryck/n/n6ef6441621cb" target="_blank">Sky 星を紡ぐ子どもたち - 小ネタ、便利ワザ</a>を公開した</p>
        <p>2023-02-15 deryck2000.jp.eu.orgドメイン取得</p>
        <p>2023-02-06 <a href="https://misskey.art" target="_blank">Misskey.art</a>爆誕日！🎉</p>
        </p>
      </ScrollableContainer>
    </div>
  );
}

const MainComponent = () => (
  <div className="min-h-screen font-sans text-[#000] p-4 flex flex-col">
    <div className="max-w-xl mx-auto bg-[#c0c0c0] shadow-md flex-grow border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080]">
      <Header />
      <div className="p-4 space-y-4">
        <Profile />
        <Introduction />
        {/* <Skills /> */}
        {/* <Contact /> */}
        <ItemList2 />
        <SocialMedia />
        <LinkBanners banners={linkBanners} />
      </div>
    </div>
    <Footer />
  </div>
);

export default MainComponent;