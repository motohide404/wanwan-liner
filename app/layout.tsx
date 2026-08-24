import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"わんわんライナー｜東京―大阪 愛犬同伴高速路線バス",description:"愛犬と、もっと遠くへ。東京―大阪を結ぶ愛犬同伴高速路線バス『わんわんライナー』は2026年11月運行開始予定です。",other:{"codex-preview":"development"},icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
