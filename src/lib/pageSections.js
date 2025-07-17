import api from '@/lib/axios';

/**
 * Fetches and orders sections for a given page slug
 * @param {string} pageSlug - The slug of the page to fetch
 * @returns {Promise<{ sections: object[], error: string | null }>}
 */

export const fetchPageSections = async (pageSlug = 'home') => {
  try {
    const res = await api.get(`/pages/${pageSlug}/`);
    const data = res.data;
    const sections = data.pagesectionrelation_set
      ?.sort((a, b) => a.order - b.order)
      ?.map(item => item.section) || [];
    return { sections, error: null };
  } catch (error) {
    console.error('Fetch page sections error:', error);
    return { sections: [], error: 'Failed to load page sections.' };
  }
};