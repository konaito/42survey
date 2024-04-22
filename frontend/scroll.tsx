import React, { useRef, useEffect } from 'react';
import './ScrollList.css'; // CSS ファイルをインポート

const ScrollList = ({ items }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;

        if (container.scrollHeight - container.scrollTop === container.clientHeight) {
          setTimeout(() => {
            container.scrollTop = 0; // 最上部にスクロール
          }, 6000); // 3秒後に最上部に戻る
        } else {
          container.scrollTop += 1; // スクロールを1ピクセル下へ移動
        }
      }
    }, 50); // 10ミリ秒ごとにスクロール位置を更新

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="scroll-container" // CSS クラスを適用
      style={{paddingBottom:150}}
    >
      {items.map((item, index) => (
        <div key={index} className={`item ${(item.startsWith("このモニタ")||item.startsWith("この仕組み"))?"blue":""}`}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ScrollList;
