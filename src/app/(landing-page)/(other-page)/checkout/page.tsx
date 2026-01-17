import { Metadata } from "next";
// import CalendarPage from "@/components/home/calender";
import CheckoutPage from "@/components/home/checkout";

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
  // other metadata
};
export default function page() {
  return (
    <div>
      <CheckoutPage />
    </div>
  );
}
