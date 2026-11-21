const files = import.meta.glob('/Datas/projects/*.json', { eager: true, import: 'default' });

export const companies = Object.keys(files).map((path) => path.split('/').pop().replace('.json', ''));

export default Object.entries(files).flatMap(([path, projects]) =>
  projects.map((project) => ({
    ...project,
    company: path.split('/').pop().replace('.json', ''),
  }))
);
