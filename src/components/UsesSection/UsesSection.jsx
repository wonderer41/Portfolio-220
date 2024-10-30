import UseCard from "@/components/UseCard/UsesCard";

const UsesSection = ({ groupName, items = [] }) => {
  return (
    <section className="flex flex-col p-0 lg:px-[15px] lg:border-zink-700/40 lg:border-l lg:gap-20">
      <div className="flex flex-col lg:flex-row justify-between lg:pl-[24px] border-l-1 border-zinc-100">
        <h2>{groupName}</h2>
        <div className="max-w-[738px] flex flex-col gap-y-[32px]">
          {items.map((subitem, subIndex) => (
            <UseCard key={subIndex} title={subitem.title} description={subitem.description} />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default UsesSection;
