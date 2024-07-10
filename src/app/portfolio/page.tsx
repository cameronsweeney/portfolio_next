import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/portfolio/ui/portfolio.module.css';
import { barlow } from '@/app/ui/fonts';

import projectsFromJsonFile from './projects.json';

type Project = {
    title: string;
    url_github: string;
    url_deployed?: string;
    img_src?: string;
    description: string;
    tech_stack: string;
};

type ProjectData = {
  current_projects: Project[];
  ready_polished: Project[];
  ready_educational: Project[];
  next_to_publish: Project[];
  almost_ready: Project[];
  needs_work: Project[];
  ideas: Project[];
};

const projectJSON: ProjectData = projectsFromJsonFile;

type ProjectGridProps = {
  projects: Project[];
};

type ProjectSectionProps = {
  title: string;
  projects: Project[]
}

type MaybeExternalLinkProps = {
  url_github: string;
  title: string;
}

const MaybeExternalLink = (props: MaybeExternalLinkProps) => {
  if (props.url_github === '#') {
    return(
      <a href="#">{props.title}</a>
    );
  } else {
    return(
      <a href={props.url_github} rel="noopener noreferrer" target="_blank">{props.title}</a>
    );
  }
}

const ProjectGrid = (props: ProjectGridProps) => {
  const { projects } = props;

  const projectComponents = projects.map((project, index) => (
    <div key={index} className={styles.project}>
      <h3><MaybeExternalLink url_github={project.url_github} title={project.title} /></h3>
      <div>
        <Image src={project.img_src ? project.img_src : "/VS_Code_screenshot.png"} width={1920} height={1058} alt="code screenshot" priority={true} style={{ width: '100%', height: 'auto' }}/>
      </div>
      <p>{project.description}</p>
    </div>
  ));

  return (
    <>{projectComponents}</>
  )
}


const ProjectSection = (props: ProjectSectionProps) => {
  const { title, projects } = props;

  return (
    <div className={styles.project_section} key={title}>
      <h2 className={barlow.className}>{title}</h2>
      <div className={styles.project_grid}>
        <ProjectGrid projects={projects}/>
      </div>
    </div>
  );
}

interface StringToStringObject {
  [key: string]: string;
}

const headersInProduction: StringToStringObject = {
  "current_projects": "Projects in Progress",
  "ready_polished": "Finished Projects",
  "ready_educational": "Educational Projects/Learn to Code"
};

export default function Page() {
  const inDevEnvironment = !!process && process.env.NODE_ENV === 'development';
  let projectSectionComponents: React.ReactNode[] = [];

  // loop through parts of projectJSON to make <ProjectSection>s
  Object.entries(projectJSON).forEach(([key, value]) => {
    if (!inDevEnvironment && !(key in headersInProduction)) {
      return;
    }
    
    let title: string = key;
    if (key in headersInProduction) {
      title = headersInProduction[key]
    }

    projectSectionComponents.push(
      <ProjectSection key={key} title={title} projects={value} />
    );
    
  });

  return (
    <div id="root" className={styles.portfolio_page}>
      <section>
        <div className="mb-4 text-xl flex justify-between">
          <p><Link key="profile" href="/" className={styles.backlink}>&larr; Back to profile</Link></p>
          <p></p>
        </div>
        <article>
          <h1>Developer Portfolio</h1>
          {projectSectionComponents}
        </article>
      </section>
    </div>
  )
};