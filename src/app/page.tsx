import Image from "next/image";
import Link from "next/link";
import styles from '@/app/ui/home.module.css';
import { lato } from '@/app/ui/fonts';

const ExamplePortfolioLink = () => {
  return(
    <Link key="portfolio" href="/portfolio">
      <div className={styles.link_icon}>portfolio</div>
    </Link>
  );
}

const ExampleBlogLink = () => {
  return(
    <Link key="blog" href="/blog">
      <div className={styles.link_icon}>blog</div>
    </Link>
  );
}

interface LinkButtonProps {
  id: string;
  url: string;
  img_src: string;
  img_alt: string;
  title?: string;
}


const LinkButton: React.FC<LinkButtonProps> = (props) => {

  let imageComponent = <Image height={256} width={256} src={props.img_src} alt={props.img_alt}/>;

  let linkButtonComponent;

  if (props.title) {
    linkButtonComponent = (
      <div>
        <Image height={256} width={256} src={props.img_src} alt={props.img_alt}/>
        <p className={lato.className}>{props.title}</p>
      </div>
    )
  } else {
   linkButtonComponent = <div>{imageComponent}</div>;
  }


  return(
    <div key={props.id}>
      <Link href={props.url}>
        <div>
          <div className={styles.link_icon}>
            {linkButtonComponent}
          </div>
        </div>
      </Link>
    </div>  
  );
}

const NavLinks = () => {

    return (    
        <div className={styles.header_links}>
            <div className={styles.link_wrapper}>
              <LinkButton
                id="email"
                url="mailto:camswee@gmail.com"
                img_src="/icons/email.svg"
                img_alt="Email"
              />
              <LinkButton
                id="linkedin"
                url="https://www.linkedin.com/in/camswee/"
                img_src="/icons/linkedin.svg"
                img_alt="LinkedIn"
              />
              <LinkButton
                id="github"
                url="https://github.com/cameronsweeney/"
                img_src="/icons/github.svg"
                img_alt="Github"
              />
              <LinkButton
                id="blog"
                url="/blog"
                img_src="/icons/blog.svg"
                img_alt="Blog"
                title="blog"
              />
              <LinkButton
                id="portfolio"
                url="/portfolio"
                img_src="/icons/portfolio.svg"
                img_alt="Portfolio"
                title="portfolio"
              />
            </div>
        </div>
    );
  
  };

export default function Home() {
  return (
    <div>
      <div className={styles.left_background}></div>
      <div className={styles.right_background}></div>
      <div className={styles.home_page}>
        <div className={styles.header}>
          <h1 className={`${styles.header_h1} ${lato.className}`}><span>hello,&nbsp;i&apos;m&nbsp;cameron.</span></h1>
          <NavLinks />
        </div>
        <div className={styles.content}>
          <div className={styles.photo}>
            <div>
              <Image src={"/cameron.jpg"} width={1200} height={800} alt="Cameron" priority={true} />
            </div>
          </div>
          <div className={styles.main_text}>
            <div>
              <p>Welcome to my website! My name is Cameron Sweeney, and I'm a full-stack developer and educator based in Brooklyn. I teach math, language, test prep, and science, and I build websites and programs with <strong>Python</strong>, <strong>JavaScript/Typescript</strong>, and more. This website is built with <strong>HTML</strong>, <strong>CSS/Tailwind</strong>, <strong>Typescript</strong>, <strong>React</strong>, and <strong>Next.js</strong>, and it is hosted on <strong>Vercel</strong>.</p>

              <p>Recently, I've been diving into the latest AI technologies to make software development faster and more efficient. My work mainly involves ML Ops and using tools like <strong>AutoGen</strong>, <strong>LM Studio</strong>, and <strong>Oobabooga</strong> to harness the power of <strong>ChatGPT</strong> and open-source language models for tackling complex challenges. I'm actively engaged in prompt engineering and agent swarm architecture research, with my current focus on the automated generation of non-trivial, production-grade software.</p>

              <p>My project experience includes building RESTful APIs with <strong>Python</strong> and <strong>FastAPI</strong>, <strong>Django-REST-Framework</strong>, and <strong>Ruby on Rails</strong>, as well as <strong>PostgreSQL</strong> and <strong>SQLite</strong> databases. I first learned to code like many devs I know &ndash; by writing <strong>HTML/CSS</strong> and <strong>JavaScript</strong> in middle and high school. My studies in college led me to write <strong>Python</strong>, <strong>JavaScript</strong>, <strong>LaTeX</strong>, and <strong>Google Apps Script</strong>. Over the last year I've built many web servers, front-ends, and I've been focusing on keeping up with the rapidly advancing AI and ML space. I've focused deeply on Prompt Engineering, and now Generative AI supercharges my development speed.</p>

              <p>I've kept up with the rapid pace of development in <strong>Prompt Engineering</strong> and <strong>Large Language Models</strong>, by getting involved in several interesting projects with folks from The Multiverse School, such as the Life Gamification project (automated project management), TreeOfAttacks (automated hacking), JASON (automated resume management), and Friendship Is Magic (an AI-powered CRM for managing communications and plans with friends).</p>

              <p>I am a passionate educator with over 10 years of teaching experience across a wide range of subjects and contexts. In the past few years I've mostly been teaching <strong>math</strong> from <strong>prealgebra through calculus</strong>, <strong>physics</strong>, and <strong>test prep for the SAT, ACT, and SHSAT</strong>. I've also tutored some <strong>chemistry</strong>, <strong>French</strong>, and even <strong>math in German</strong>. Before returning to New York, I spent XYZ time teaching test prep in and around London, and spent 2 years teaching <strong>English as a foreign language</strong> in Düsseldorf.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
