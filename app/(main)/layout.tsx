import Navbar from "./_components/navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
