import UseCard from "@/components/UseCard/UsesCard";

const UsesSection = ({ groupName, items = [] }) => {
  return (
    <section className="flex flex-col p-0 lg:px-[15px] gap-8">
      <div className="flex flex-col lg:gap-y-10 lg:flex-row items-start lg:gap-x-20 lg:pl-[24px] lg:border-zink-400 lg:border-l">
        <h2 className="lg:w-[200px] self-start mb-2">{groupName}</h2>
        <div className="max-w-[738px] flex flex-col gap-y-[16px]">
          {items.map((subitem, subIndex) => (
            <UseCard key={subIndex} title={subitem.title} description={subitem.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsesSection;
