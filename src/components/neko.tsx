"use client";
import Script from "next/script";

export function NekoScript() {
  return (
    <Script
      src="https://louisabraham.github.io/nekojs/neko.js"
      strategy="afterInteractive"
      onLoad={() => {
        // behaviorMode 0 = always chase the mouse pointer
        // @ts-ignore
        const neko = createNeko({ behaviorMode: 0 });
        neko.start();
      }}
    />
  );
}
