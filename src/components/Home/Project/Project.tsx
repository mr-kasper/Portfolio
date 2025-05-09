import SectionHeading from '@/components/Helper/SectionHeading';
import { getProjectData } from '@/Data/translatedData';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Project = () => {
  const t = useTranslations('projects');
  const projectData = getProjectData();

  return (
    <div id="projects" className="py-16 bg-[#050709]">
      <SectionHeading>{t('title')}</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project, i) => (
          <div
            key={project.id}
            className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={i * 150}
          >
            <Link
              href={project.url}
              target="_blank"
              className="block w-full h-[200px] overflow-hidden"
            >
              <div className="w-full h-full relative">
                <Image
                  src={project.image}
                  alt={`Project ${project.id}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  style={{
                    objectPosition: 'center top',
                  }}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Project;
