import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GlassCard({
  title,
  description,
  features = [],
  buttonText,
  buttonLink,
  imgSrc,
}) {
  return (
    <div className="backdrop-blur-md bg-white border border-white shadow-lg rounded-2xl p-8 flex flex-col justify-between hover:scale-[1.02] transition">
      {/* Icon Image */}
      {imgSrc && (
        <div className="flex justify-center mb-5">
          <div className="relative w-20 h-20 p-3 bg-gray-50 rounded-2xl shadow-sm">
            <Image
              src={imgSrc}
              alt={title}
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
        </div>
      )}

      {/* Title */}
      {title && (
        <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
          {title}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p className="text-gray-700 text-center mb-4">{description}</p>
      )}

      {/* Feature List */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-800">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Button */}
      {buttonText && buttonLink && (
        <Link
          href={buttonLink}
          className="inline-block text-center bg-black hover:bg-gray-900 text-white font-medium px-5 py-2 rounded-xl shadow-md transition"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}
