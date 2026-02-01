import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";
import Link from "next/link";
const GetStarted = ({ heading, subHeading, btn1, btn2, btn3, btn4,pricingKey }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {heading}
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">{subHeading}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          {btn1 && (
            <Link href="/contact-us">
              <Button className="px-4 rounded-3xl" variant="outline">
                <CirclePlay className="mr-2" />
                {btn1 || "Get Started Free"}
              </Button>
            </Link>
          )}  

          {btn2 && (
            <Link href="/contact-us">
              <Button className="px-6 rounded-3xl">
                {btn2 || "Schedule Demo"}
              </Button>
            </Link>
          )}
          {btn3 && (
            <Link href="/contact-us">
              <Button className="px-6 rounded-3xl">
                {btn3 || "Schedule Demo"}
              </Button>
            </Link>
          )}
          {btn4 && (
            <Link
              href={
                pricingKey
                  ? `/pricing?product=${encodeURIComponent(pricingKey)}`
                  : "/pricing"
              }
            >
              <Button className="px-6 rounded-3xl">
                {btn4 || "Schedule Demo"}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
