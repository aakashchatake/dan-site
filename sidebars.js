/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Units',
      link: { type: 'generated-index', description: 'Syllabus-aligned Units 1–5 with examples and scripts.' },
      collapsed: false,
      items: ['unit01', 'unit02', 'unit03', 'unit04', 'unit05'],
    },
    {
      type: 'category',
      label: 'Practicals',
      link: { type: 'generated-index', description: 'Datasets, step-by-step procedures, outcomes, and metadata.' },
      items: ['practicals'],
    },
    {
      type: 'category',
      label: 'Assessments',
      link: { type: 'generated-index', description: 'Assignments, weekly tests, class tests, prelims—with solutions.' },
      items: ['assessments'],
    },
  ],
};
