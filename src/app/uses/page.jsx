import UsesSection from "@/components/UsesSection/UsesSection";
import { usesItems } from "@/components/Data";
import Introduction from "@/components/Introduction/Introduction";

export const metadata = {
  title: 'Portfolio - Uses',
  description: 'The uses page of my portfolio.',
}

export default function Uses() {
  return (
    <div className="flex flex-col p-6">
       <h1 className=" text-zinc-800  dark:text-zinc-100 text-5xl leading-[56px] font-bold mb-4">
       Software I use, gadgets I love, and other things I recommend.
      </h1>
      <p className="text-zinc-800  dark:text-zinc-100 mb-4">
      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
      </p>
      <UsesSection items={usesItems}/>
      <UsesSection items={usesItems}/>
      <UsesSection items={usesItems}/>
      <UsesSection items={usesItems}/>
    </div>
  );
}
