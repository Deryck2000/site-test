"use client";
import React from "react";
import ScrollableContainer from './ScrollableContainer';

const items = [
  { text: 'hoge' },
  { text: 'hoge' },
  { text: '2024-09-11 noteで', link: 'https://note.com/deryck/n/n6ef6441621cb', linkText: 'Sky 星を紡ぐ子どもたち - 小ネタ、便利ワザ' },
  { text: '2023-02-15 deryck2000.jp.eu.orgドメイン取得' },
  { text: '2023-02-06', link: 'https://misskey.art', linkText: 'Misskey.art' }
];

const ItemList = () => (
  <div>
    <h3 className="font-bold mb-2">最近の更新</h3>
    <ScrollableContainer height="150px">
      <div className="text-sm">
        {items.map((item, index) => (
          <p key={index}>
            {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">{item.linkText}</a> : item.text}
          </p>
        ))}
      </div>
    </ScrollableContainer>
  </div>
);

export default ItemList;
