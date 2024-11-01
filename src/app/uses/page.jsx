import UsesSection from "@/components/UsesSection/UsesSection";
import { workstationList, developmentList, designList, productivityList } from "@/components/Data";

export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

export default function Uses() {
  return (
    <div className="flex flex-col px-4 pb-16 lg:pt-6 gap-16 ">
      <div className={"w-full lg:w-[672px] gap-[24px]"}>
        <h1 className=" text-zinc-800  dark:text-zinc-100 text-5xl leading-[56px] font-bold mb-4">
          Software I use, gadgets I enjoy, and things I currently use.
        </h1>
        <p className="text-zinc-800  dark:text-zinc-100 mb-4">
          This ones are some of the highlights this year, and I will recommend them to everyone.
        </p>
      </div>
      <div className="w-full lg:w-[992px]">
        <UsesSection groupName="Workstation" items={workstationList} />
        <UsesSection groupName="Development Tools" items={developmentList} />
        <UsesSection groupName="Design" items={designList} />
        <UsesSection groupName="Productivity" items={productivityList} />
      </div>
    </div>
  );
}
