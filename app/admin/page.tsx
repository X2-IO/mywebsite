import { ContactsDashboard } from "@/components/admin/contacts-dashboard";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div
      id="main-content"
      tabIndex={-1}
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 outline-none"
    >
      <ContactsDashboard />
    </div>
  );
}
