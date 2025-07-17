import DynamicComponent from "@/lib/DynamicComponent";
import { fetchPageSections } from "@/lib/pageSections";

export const revalidate = 60;
export default async function Home() {
  const { sections, error } = await fetchPageSections('home');
  if (error) return <div className="text-red-600 text-center py-10">{error}</div>;
  return (
    <>
      {sections.map((section, idx) => {
        return(<DynamicComponent key={idx} id={section.code} data={section}></DynamicComponent>)
      })}
    </>
  );
}
