import React, { useRef, useState, useEffect } from 'react';
import { Container, Typography, Box, Card, CardContent, Chip, IconButton, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import { projectsConfig } from '../config/projects';

function Projects() {
    const scrollContainerRef = useRef(null);
    const [expandedProjects, setExpandedProjects] = useState(Array(projectsConfig.projects.length).fill(false));
    const pausedRef = useRef(false);

    const toggleExpand = (index) => {
        setExpandedProjects((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // auto-scroll projects carousel back and forth
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const speed = 1; // pixels per tick
        let direction = 1; // 1: right, -1: left
        const getMax = () => container.scrollWidth - container.clientWidth;
        const step = () => {
            if (pausedRef.current) return;
            if (container.scrollLeft + speed * direction >= getMax()) direction = -1;
            else if (container.scrollLeft + speed * direction <= 0) direction = 1;
            container.scrollLeft += speed * direction;
        };
        const id = setInterval(step, 20);
        return () => clearInterval(id);
    }, []);

    return (
        <Box
            id="projects"
            sx={{
                py: 8,
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Typography variant="h2" color="primary">
                            {projectsConfig.title}
                        </Typography>
                        <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
                            <IconButton
                                onClick={() => handleScroll('left')}
                                sx={{
                                    backgroundColor: 'background.paper',
                                    boxShadow: 1,
                                    '&:hover': { backgroundColor: 'grey.100' },
                                }}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => handleScroll('right')}
                                sx={{
                                    backgroundColor: 'background.paper',
                                    boxShadow: 1,
                                    '&:hover': { backgroundColor: 'grey.100' },
                                }}
                            >
                                <ArrowForwardIcon />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box
                        ref={scrollContainerRef}
                        sx={{
                            display: 'flex',
                            gap: 3,
                            overflowX: 'auto',
                            pb: 2,
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': { display: 'none' },
                            '-ms-overflow-style': 'none',
                        }}
                    >
                        {projectsConfig.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                onMouseEnter={() => { pausedRef.current = true; }}
                                onMouseLeave={() => { pausedRef.current = false; }}
                            >
                                <Card
                                    elevation={2}
                                    sx={{
                                        width: { xs: '300px', sm: '350px' },
                                        flex: '0 0 auto',
                                        height: '100%',
                                        transition: 'all 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: 3,
                                        },
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" color="primary" gutterBottom>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                            {project.category}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', mb: expandedProjects[index] ? 2 : 1 }}>
                                            <Typography
                                                variant="body1"
                                                component="span"
                                                sx={{
                                                    minHeight: expandedProjects[index] ? 'auto' : '80px',
                                                    display: expandedProjects[index] ? 'block' : '-webkit-box',
                                                    WebkitLineClamp: expandedProjects[index] ? 'none' : 4,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: expandedProjects[index] ? 'visible' : 'hidden',
                                                    textOverflow: expandedProjects[index] ? 'unset' : 'ellipsis',
                                                }}
                                            >
                                                {project.description}
                                            </Typography>
                                            {project.description.length > 100 && (
                                                <Typography
                                                    variant="body2"
                                                    component="span"
                                                    onClick={() => toggleExpand(index)}
                                                    sx={{ color: 'primary.main', cursor: 'pointer', ml: 0.5, fontWeight: 'bold' }}
                                                >
                                                    {expandedProjects[index] ? 'Show Less' : 'Read More'}
                                                </Typography>
                                            )}
                                        </Box>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                                            {project.technologies.map((tech, i) => (
                                                <Chip
                                                    key={i}
                                                    label={tech}
                                                    size="small"
                                                    sx={{ backgroundColor: 'primary.main', color: 'white' }}
                                                />
                                            ))}
                                            {project.link && (
                                                <Button
                                                    size="small"
                                                    component="a"
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    endIcon={<LaunchIcon />}
                                                    sx={{ ml: 'auto' }}
                                                >
                                                    View Project
                                                </Button>
                                            )}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}

export default Projects;
