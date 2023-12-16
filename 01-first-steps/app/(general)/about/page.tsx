import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is the about page",
};

function AboutPage() {
  return <div className="text-7xl"> AboutPage </div>;
}

export default AboutPage;
