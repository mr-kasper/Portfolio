import SectionHeading from '@/components/Helper/SectionHeading';
import { getSkillsData } from '@/Data/translatedData';
import { useTranslations } from 'next-intl';
import SkillCard from './SkillCard';

const Skills = () => {
  const t = useTranslations('skills');
  const skillsData = getSkillsData();

  return (
    <div id="skills" className="py-16 bg-[#0F0715]">
      <SectionHeading>{t('title')}</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skill, i) => (
          <div
            key={skill.id}
            data-aos="flip-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay={i * 150}
          >
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
