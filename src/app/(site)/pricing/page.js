
import React from 'react'
import { fetchPageSections } from '@/lib/pageSections'
import DynamicComponent from '@/lib/DynamicComponent'

export default async function page() {
  const { sections, error } = await fetchPageSections('pricing');
  if (error) return <div className="text-red-600 text-center py-10">{error}</div>;
  return (
    <>
      {sections.map((section, idx) => {
        return(<DynamicComponent key={idx} id={section.code} data={section}></DynamicComponent>)
      })}
    </>
  )
}
