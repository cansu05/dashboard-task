import "./globals.css";

export const metadata = {
  title: "Enerji Dashboard",
  description: "Enerji tüketimini anlık takip edin.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
