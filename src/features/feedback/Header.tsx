
export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <div className="bg-[#0b1220] py-16 text-center">
        <h2 className="text-4xl font-extrabold text-white">{children}</h2>
      </div>
  )
}
