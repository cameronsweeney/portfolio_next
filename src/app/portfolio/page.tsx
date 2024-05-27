import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/portfolio/ui/portfolio.module.css';

import projectsFromJsonFile from './projects.json';

type Project = {
    title: string;
    url_github: string;
    url_deployed?: string;
    description: string;
    tech_stack: string;
};

type ProjectData = {
  current_projects: Project[];
  ready: Project[];
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

const ProjectGrid = (props: ProjectGridProps) => {
  const { projects } = props;

  const projectComponents = projects.map((project, index) => (
    <div key={index} className={styles.project}>
      <h3><a href={project.url_github}>{project.title}</a></h3>
      <div>
        <Image src={"/VS_Code_Screenshot.png"} width={240} height={132.25} alt="code screenshot" />
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
      <h2>{title}</h2>
      <p>---</p>
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
  "current_projects": "Current Projects",
  "ready": "Previous Projects"
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
          <p><Link key="profile" href="/" className="text-emerald-400 hover:text-emerald-200">&larr; Back to profile</Link></p>
          <p>{inDevEnvironment ? "development" : "production"}</p>
        </div>
        <article>
          <h1>Portfolio Project List</h1>
          {projectSectionComponents}
        </article>
      </section>
    </div>
  )
};