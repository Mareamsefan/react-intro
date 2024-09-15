export default function RootLayout({
  children, // Du trenger `children` som parameter
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children} {/* Dette vil gjengi barn av layouten */}
      </body>
    </html>
  );
}
