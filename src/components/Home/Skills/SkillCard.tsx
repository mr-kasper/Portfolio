import Image from 'next/image';

type SkillCardProps = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const SkillCard = ({ skill }: SkillCardProps) => {
  const { image, title, percent } = skill;
  return (
    <div className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
      <Image src={image} alt={title} width={80} height={80} className="object-cover mx-auto" />
      <h1 className="text-lg mt-4 text-white font-semibold">{title}</h1>
      <div className="bg-black mt-4 rounded-lg p-2 text-white opacity-50">{percent}</div>
    </div>
  );
};
export default SkillCard;
