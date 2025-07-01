import "./globals.css";

export const metadata = {
  title: "Dr. Serena Blake | Therapist",
  description: "Professional therapy services to help you find clarity and peace.",
  icons: {
    icon: "/icon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`font-sans text-gray-800 bg-white max-sm:px-0`}
      >
        
        {children}
      </body>
    </html>
  );
}
