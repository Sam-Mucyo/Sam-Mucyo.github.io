export const projectsConfig = {
    title: 'Projects',
    projects: [
        {
            title: 'Surround-Sound Player',
            description:
                'A peer-to-peer audio system that keeps multiple laptop “speakers” in sync without proprietary protocols. Designing gRPC/protobuf contract, CI/CD pipeline, and writing fault-tolerant code that prove seamless playback after node loss. Each client buffers tracks fetched from a lightweight server and adjusts audio timing to achieving ≤10 ms drift across Wi-Fi.',
            technologies: [
                'C++',
                'gRPC',
                'Protobuf',
                'CoreAudio',
                'Fault Torelance',
                'CI/CD'
            ],
            category: 'Distributed Systems & Music'
        },
        {
            title: 'Claude Yap – AI Podcast Generator',
            description:
                'A Full-stack web app that turns PDFs or research prompts into multi-speaker podcasts. Orchestrates Claude 3 (script generation), Cartesia TTS (distinct voices), Stable Diffusion cover art, and FFmpeg piping. Provides a React audio player with keyboard shortcuts, real-time progress dashboard, and AI video-chat via Tavus.',
            technologies: [
                'React',
                'Flask',
                'Claude 3',
                'Cartesia TTS',
                'Stable Diffusion',
                'FFmpeg',
                'Node.js'
            ],
            category: 'AI & Product Engineering - Hackathon'
        },
        {
            title: 'Optimized Column-Store Database',
            description:
                'Built a C-based, in-memory columnar DBMS from scratch for faster analytical queries than a baseline row-store. Achieved this by integrating cache-aware storage layouts, secondary B-tree indexes, and zero-copy persistence via mmap, all orchestrated with fine-grained POSIX threads.',
            technologies: ['C', 'POSIX Threads', 'B-trees', 'mmap'],
            category: 'Systems Programming'
        },
        {
            title: 'Chat App',
            description:
                'Co-designed a PyQt6 desktop chat client and Python server that supports two wire protocols (JSON + custom “SAMIRA” 🔥) and a 2-fault-tolerant replication layer. Built the custom protocol, gRPC server-to-server channel, and a Raft-inspired leader-election module for replication, automatic fail-over and dynamic replica add/remove.',
            technologies: [
                'Python',
                'PyQt6',
                'gRPC',
                'Protobuf',
                'Raft',
                'GitHub Actions',
                'Make'
            ],
            category: 'Distributed Systems'
        },
        {
            title: 'Parallel Transit-Network Optimizer',
            description:
                'Setup HPC infrastructure and performance benchmarking for a 32 768-vertex Kruskal MST study on urban-transit graphs. Automated SLURM + Bash pipelines, PAPI metrics, and Valgrind memory profiling; produced strong/weak-scaling dashboards that revealed an 18 × speed-up on 64 CPUs and ≈ 40 % weak-scaling efficiency. Contributed to algorithm-design (MPI edge partitioning, OpenMP Hyper-QuickSort, helper-thread pruning).',
            technologies: ['C++', 'OpenMP', 'MPI', 'PAPI', 'Valgrind', 'SLURM'],
            category: 'High-Performance Computing'
        },
        {
            title: 'Astrolibrary',
            description:
                'Co-developed a Python package for stellar spectral reduction and feature extraction. Drove CI/CD with GitHub Actions, pytest coverage, and Sphinx documentation.',
            technologies: ['Python', 'pytest', 'Sphinx', 'GitHub Actions'],
            category: 'Scientific Computing'
        },

    ]
};

