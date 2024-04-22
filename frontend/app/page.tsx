"use client"

import React, { useEffect, useState } from 'react';
import ScrollList from "@/scroll";
import Image from 'next/image';

export default function Home() {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_GAS_API;

    const fetchReminders = () => {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const remindersFromApi = data.map(item => item[0]);
          setReminders(remindersFromApi);
        })
        .catch(error => {
          console.error('Error fetching reminders:', error);
        });
    };

    fetchReminders(); 
    const intervalId = setInterval(fetchReminders, 300000); // 5分ごとにリフレッシュ

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div>
      <div className='flex text-xl' style={{height:150}}>42Tokyoをより良くするために意見をお願いします            GoogleForm->
    <Image
      src="/image.png" // 画像のパス
      alt="説明テキスト"
      width={100} // 表示幅
      height={100} // 表示高さ
    />
      </div>
      <ScrollList items={reminders} />
    </div>
  );
}

