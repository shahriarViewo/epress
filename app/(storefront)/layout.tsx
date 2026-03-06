import TopBar from "../components/ui/layout/topbar";
import Navbar from "../components/ui/layout/navbar";
import Footer from "../components/ui/layout/Footer";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="bg-white">{children}</main>
      <Footer />
    </>
  );
}
