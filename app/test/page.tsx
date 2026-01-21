import HelpBanner from '../components/banners/HelpBanner';
import TestingBanner from '../components/delete/TestingBanner';
import BentoGridBanner from '../components/banners/BentoGridBanner';
const griddata = {
  left: {
    src: "/images/banners/GridBannerImages/1.jpg",
    alt: "Caps Collection",
    href: "/category/caps"
  },
  center: {
    src: "/images/banners/GridBannerImages/2.jpg",
    alt: "T-Shirts",
    href: "/category/tshirts"
  },
  rightTop: {
    src: "/images/banners/GridBannerImages/3.jpg",
    alt: "Mugs",
    href: "/category/mugs"
  },
  rightBottom: {
    src: "/images/banners/GridBannerImages/4.jpg",
    alt: "Merch",
    href: "/category/skills"
  }
};
export default function testing() {
    return <>
        <TestingBanner />
        <BentoGridBanner bannerData={griddata} />
        <HelpBanner
            title="We’re Here to Help"
            subtitle={`Need product info or support? Contact us anytime.\nYour satisfaction is our priority.`}
            images={{
                leftMain: "/images/banners/Frame 1171278359.jpg",
                leftCard: "/images/banners/Frame 1171278360.jpg",
                rightMain: "/images/banners/Frame 1171278361.jpg",
                rightCard: "/images/banners/Frame 1171278362.jpg"
            }}
        />
    </>
}
