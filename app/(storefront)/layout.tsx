export const metadata = {
  title: "Shopping Cart | Nissin",
  description: "View your cart items",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}