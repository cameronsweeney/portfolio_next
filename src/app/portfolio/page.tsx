import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/portfolio/ui/portfolio.module.css';

import projectsFromJsonFile from './projects.json';

type Project = {
    title: string;
    status: string;
    url_github: string;
    url_deployed?: string;
    description: string;
    tech_stack: string;
};

type ProjectArray = Project[];

const projectJSON: ProjectArray = projectsFromJsonFile;

type ProjectProps = {
  projectJSON: ProjectArray;
};

const ProjectDescription = (props: ProjectProps) => {
  const { projectJSON } = props;

  const projectComponents = projectJSON.map((project, index) => (
    <div key={index} className={styles.project}>
      <h2><a href={project.url_github}>{project.title}</a></h2>
      <div>
        <Image src={"/VS_Code_Screenshot.png"} width={240} height={132.25} alt="code screenshot" />
      </div>
      <p>{project.description}</p>
    </div>
  ));

  return (
    <div className={styles.project_list}>{projectComponents}</div>
  )
}

export default function Page() {
    return (
      <div id="root" className={styles.portfolio_page}>
        <h1>Portfolio Project List</h1>
        <p className="my-2">
            <Link key="profile" href="/">Back to profile</Link>
        </p>
        <ProjectDescription projectJSON={projectJSON} />
      </div>
    )
};