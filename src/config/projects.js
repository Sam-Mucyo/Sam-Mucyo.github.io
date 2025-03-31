export const projectsConfig = {
  title: 'Projects',
  projects: [
    {
      title: 'Optimized Column-Store Database',
      description: 'Developed a high-performance columnar database engine with optimized storage techniques, including B-trees for indexing and memory-mapped files for persistence.',
      technologies: ['C', 'POSIX Threads', 'B-trees', 'Memory Mapping'],
      category: 'Systems Programming'
    },
    {
      title: 'Astrolibrary',
      description: 'Collaboratevely built a Python library for astronomical spectral analysis, following software engineering best practices with comprehensive testing and documentation.',
      technologies: ['Python', 'pytest', 'Sphinx', 'GitHub Actions'],
      category: 'Scientific Computing'
    },
    {
        title: 'Parallelizing Urban Transit Construction',
        description: 'Implemented parallel version of Kruskal\'s algorithm using OpenMP and OpenMPI for distributed computing. Conducted performance analysis using PAPI and Valgrind.',
        technologies: ['OpenMP', 'OpenMPI', 'PAPI', 'Valgrind', 'C++'],
        category: 'High Performance Computing'
    },
  ]
};
