import Image from 'next/image';

const SkillsWidget = ({ title, content, skills = [] }) => {
  return (
    <section className="w-[398px] h-[332px] shadow flex flex-col gap-y-3 p-6 border border-zinc-100 dark:border-zinc-700/40 rounded-2xl">
      <h2 className="flex flex-row font-roboto leading-7 font-semibold text-zinc-900 gap-3 items-center"><Image src='/SkillsWidget/icon.svg' width={24} height={24} alt='Skills Widget Icon'/>{title}</h2>
      <p className=" text-sm text-zinc-600">{content}</p>
      <ul className="flex flex-col pt-6 gap-y-4">
        {skills.map((skill, index) => (
          <li key={index} className="w-[350px] h-12 gap-4">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-[50px] h-[50px] ring-1 ring-zinc-900/5 rounded-full">
                <Image className="m-auto py-3" width={28} height={28} src={skill.icon} alt={`Item ${index} Name Icon`} />
              </div>
              <div className="w-[286px] h-12">
                <h3 className="font-medium font-sm leading-6">{skill.name}</h3>
                <div className="w-[286px] h-6 flex flex-row gap-2 items-center justify-between border border-zinc-900/10 bg-zinc-200">
                  <div className="bg-teal-500 h-[22px]" style={{width: `${skill.proficiency}%`}}/>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsWidget;
