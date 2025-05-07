'use client';

import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

type ServiceCardProps = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Tilt className="shadow-2xl p-6 rounded-lg bg-[#814ced]">
      <Image src={service.icon} alt={service.title} width={50} height={50} />
      <h1 className="mt-4 text-lg font-bold text-gray-100">{service.title}</h1>
      <p className="mt-4 text-sm text-white/80 ">{service.description}</p>
    </Tilt>
  );
};
export default ServiceCard;
