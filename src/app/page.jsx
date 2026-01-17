import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import Test from "@/components/Test";
import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Home",
  description:
    "Discover educational toys, STEM learning kits & kids costumes. Fun, safe and creative toys for children.",

  openGraph: {
    title: "Kids Learning Toys & Costumes",
    description:
      "Fun & educational toys for kids. Learning boards, flash cards, STEM toys & costumes.",
    images: [
      {
        url: "https://ibb.co.com/gL1zwcSc",
        width: 1200,
        height: 630,
        alt: "Kids Learning Toys Homepage",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://ibb.co.com/gL1zwcSc"],
  },
};

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="space-y-20">
      {/* <Test /> */}
      {/* <p>{JSON.stringify(session)}</p> */}
      <section>
        <Banner />
      </section>

      <section>
        <Products />
      </section>
    </div>
  );
}
