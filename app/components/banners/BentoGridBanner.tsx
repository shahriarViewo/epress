import Image from 'next/image';
import Link from 'next/link';

// 1. Define the shape of a single item (src, alt, href)
interface BannerItem {
  src: string;
  alt: string;
  href: string;
}

// 2. Define the shape of the main data object
interface BannerData {
  left: BannerItem;
  center: BannerItem;
  rightTop: BannerItem;
  rightBottom: BannerItem;
}

// 3. Define the props for the component
interface BentoGridBannerProps {
  bannerData: BannerData;
}

const BentoGridBanner = ({ bannerData }: BentoGridBannerProps) => {
  // Guard clause for safety
  if (!bannerData) return null;

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 md:px-16 py-8">
      <div className="w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Left Column */}
          <Link href={bannerData.left.href} className="group relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[16px] overflow-hidden">
            <Image
              src={bannerData.left.src}
              alt={bannerData.left.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
          </Link>

          {/* Center Column */}
          <Link href={bannerData.center.href} className="group relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[16px] overflow-hidden">
            <Image
              src={bannerData.center.src}
              alt={bannerData.center.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
          </Link>

          {/* Right Column */}
          <div className="flex flex-col gap-4 h-[300px] md:h-[400px] lg:h-[500px] md:col-span-2 lg:col-span-1">
            
            {/* Top Right */}
            <Link href={bannerData.rightTop.href} className="group relative flex-1 rounded-[16px] overflow-hidden">
              <Image
                src={bannerData.rightTop.src}
                alt={bannerData.rightTop.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
            </Link>

            {/* Bottom Right */}
            <Link href={bannerData.rightBottom.href} className="group relative flex-1 rounded-[16px] overflow-hidden">
              <Image
                src={bannerData.rightBottom.src}
                alt={bannerData.rightBottom.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGridBanner;