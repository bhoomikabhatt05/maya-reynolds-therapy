import Image from "next/image";
import Link from "next/link";

type PersonCardProps = {
  image: string;
  alt: string;
  title: string;
  href?: string;
  description: string;
};

export default function PersonCard({
  image,
  alt,
  title,
  href,
  description,
}: PersonCardProps) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-sm">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 30vw, 90vw"
          className="object-cover"
          unoptimized={image.startsWith("http")}
        />
      </div>
      <h3 className="mt-5 font-serif-heading text-xl text-ink">
        {href ? (
          <Link href={href} className="hover:text-teal-dark transition-colors">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <p className="mt-2 text-sm sm:text-base text-ink-soft leading-relaxed">
        {description}
      </p>
    </div>
  );
}
