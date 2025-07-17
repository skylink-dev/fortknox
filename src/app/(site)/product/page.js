import DynamicComponent from '@/lib/DynamicComponent';
import { fetchPageSections } from '@/lib/pageSections'

export default async function page() {
  const { sections, error } = await fetchPageSections('product');
  if (error) return <div className="text-red-600 text-center py-10">{error}</div>;
  return (
    <>
      {sections.map((section, idx) => {
      return(<DynamicComponent key={idx} id={section.code} data={section}></DynamicComponent>)
      })}
    </>
  )
}
