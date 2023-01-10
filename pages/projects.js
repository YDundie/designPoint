import Button from '../components/Button';
import Project from '../components/Project';
import styles from '../styles/Projects.module.css';
import { useRouter } from 'next/router';

export default function Projects() {
  const router = useRouter();
  const projects = [
    {
      id: 4,
      image: './images/projects/dDubrava/1.png',
      title: 'Potkrovlje',
      date: 'Donja Dubrava',
      to: '/projects/4',
    },
    {
      id: 1,
      image: './images/projects/zapresic/1.png',
      title: 'Stan u potkrovlju',
      date: 'Zaprešić',
      to: '/projects/1',
    },
    {
      id: 3,
      image: './images/projects/office/1.png',
      title: 'Office',
      date: 'Sveta Marija',
      to: '/projects/2',
    },
    {
      id: 5,
      image: './images/projects/djecjaCakovec/1.png',
      title: 'Dječja soba',
      date: 'Čakovec',
      to: '/projects/5',
    },
    // {
    //   id: 2,
    //   image: './images/projects/kucaSVM/1.png',
    //   title: 'Kuća',
    //   date: 'Sveta Marija',
    //   to: '/projects/3',
    // },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.designerHeader} onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
          • <span className={styles.line}></span>Projekti
        </h2>
        <div>
          {projects.map((project) => (
            <Project key={project.id} image={project.image} title={project.title} date={project.date} to={project.to} />
          ))}
        </div>
      </div>
    </div>
  );
}
