import { OrganizationProfile } from "@clerk/nextjs";

function Page() {
  return (
    <OrganizationProfile
      appearance={{
        elements: {
          rootBox: { boxShadow: "none", width: "100%", height: "100%" },
          card: { border: "1px solid #e5e5e5", boxShadow: "none", width: "100%" }
        }
      }}
    />
  );
}

export default Page;
