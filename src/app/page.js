import Contact from "@/components/Contact";
import CustomButton from "@/components/CustomButton";
import CustomTitle from "@/components/CustomTitle";
import InfoSection from "@/components/InfoSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center bg-slate-400 py-24 md:py-48 mb-16 md:mb-20">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-5">
          혁신적인 디지털 솔루션
        </h1>
        <p className="text-md md:text-lg font-medium tracking-wider text-white mb-6 md:mb-10">
          다양한 산업에서 맞춤형 디지털 솔루션을 제공하는 종합 IT 서비스
          회사입니다.
        </p>

        <CustomButton title="Learn more" />
      </div>

      {/* Title Section */}
      <CustomTitle
        title="What we believe in"
        subtitle="비즈니스 솔루션, ERP, 3D 모델링, AI 서비스
‍당신의 아이디어를 현실로 만듭니다."
      />

      {/* Info Sections */}
      <div className="flex flex-col gap-10">
        <InfoSection
          subtitle="Company"
          title="Who we are"
          content="맞춤형 소프트웨어 개발, 이커머스 플랫폼 구축, AI기반 솔루션, ERP 시스템, 모바일 및 웹 애플리케이션 개발 등 Firgate는 혁신적인 소프트웨어 솔루션을 제공하는 IT 전문 기업입니다."
          buttonText="Learn More"
          imagePosition="left"
        />

        <InfoSection
          subtitle="Team"
          title="What we do"
          content="우리는 고객의 요구에 맞춘 최적의 솔루션을 제공하며, 다양한 산업 분야에서 풍부한 경험을 쌓았습니다. 우리의 목표는 기술을 통해 고객의 비즈니스를 상장시키고, 효율성을 극대화하는 것입니다."
          buttonText="Learn More"
          imagePosition="right"
        />
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
