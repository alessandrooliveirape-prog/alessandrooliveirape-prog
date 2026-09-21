import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Agente de Emprego | Painel",description:"Agente pessoal para encontrar, analisar e preparar candidaturas a vagas de emprego."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}