import UsesSection from "@/components/UsesSection/UsesSection";
import { usesItems } from "@/components/Data";

export const metadata = {
  title: 'Portfolio - Uses',
  description: 'The uses page of my portfolio.',
}

export default function Uses() {
  return (
    <div>Uses
      <UsesSection items={usesItems}/>
    </div>
  );
}
