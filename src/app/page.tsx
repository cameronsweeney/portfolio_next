import Image from "next/image";
import Link from "next/link";
import styles from '@/app/ui/home.module.css';

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
}


const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return(
    <div key={props.id}>
      <div>
        <Link href={props.url}>
          <div className={styles.link_icon}>
            <div>
              <Image
                height={256}
                width={256}
                src={props.img_src}
                alt={props.img_alt}
              />
            </div>
          </div>
        </Link>
      </div>
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
              />
              <LinkButton
                id="portfolio"
                url="/portfolio"
                img_src="/icons/portfolio.svg"
                img_alt="Portfolio"
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
          <h1 className={styles.header_h1}><span>hello, i&apos;m cameron.</span></h1>
          <NavLinks />
        </div>
        <div className={styles.content}>
          <div className={styles.photo}>
            <div>
              <Image 
                src={"/cameron.jpg"}
                width={1200}
                height={800}
                alt="Cameron"
              />
            </div>
          </div>
          <div className={styles.upper_left}>
            <div>
              <p>Welcome to my website! My name is Cameron Sweeney, and I&apos;m a full-stack developer and educator based in Brooklyn.</p>
    
              <p>I build websites and apps with Python, JavaScript, Ruby, and more. This website is built with React, Django, and PostgreSQL.</p>
            
              <p>For over 15 years, I have immersed myself in the world of coding, starting with tinkering on my old MySpace profile and progressing to a strong interest in web design and programming.</p>
    
              <p>During my linguistics degree, I honed my skills with Python and LaTeX, utilizing them in various school projects. At this time I also developed my first fully-fledged app, a library checkout system for my college dorm built on JavaScript/Google Apps Script.</p>
  
              <p>I also tutor math (prealgebra through calculus), test prep for the SHSAT/SAT/ACT, physics, chemistry, German, French, and English as a foreign language.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
