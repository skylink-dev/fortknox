
"use client"

import React from 'react'
import { fetchPageSections } from '@/lib/pageSections'
import DynamicComponent from '@/lib/DynamicComponent'
import DataCenterHero from '@/components/HeroComponent';
import UseCaseShowcase from '@/components/UseCaseShowCase';
import DataCenterVisualization from '@/components/DataCenterVisualization';
import DataCenterTestimonials from '@/components/DataCenterTestimonials';
import TechnicalSpecs from '@/components/TechnicalSpecs';

export default async function page() {
//   const { sections, error } = await fetchPageSections('custom');
//   if (error) return <div className="text-red-600 text-center py-10">{error}</div>;
  return (
    <>
      <DataCenterHero></DataCenterHero>
      <UseCaseShowcase></UseCaseShowcase>
      <DataCenterVisualization></DataCenterVisualization>
      <DataCenterTestimonials></DataCenterTestimonials>
      <TechnicalSpecs></TechnicalSpecs>
    </>
  )
}
