import { auth } from "@clerk/nextjs";
import OrgControl from "./_components/org-control";
// import { OrgControl } from "./_components/org-control";

export async function generateMetadata() {
  const { orgSlug } = auth();
  // return { title: startCase(orgSlug || "organization") };
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}

export default Layout;
