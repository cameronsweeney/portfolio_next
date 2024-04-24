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

const NavLinks = () => {

    return (    
        <div className={styles.header_links}>
            <div className={styles.link_wrapper}>
            <div key="email">
                <div>
                  <a href="mailto:camswee@gmail.com">
                    <div className={styles.link_icon}>
                      <div>
                        <Image
                          height={256}
                          width={256}
                          src={"/icons/email.svg"}
                          alt="Email"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>  
              <div key="linkedin">
                <div>
                  <a href="https://www.linkedin.com/in/camswee/">
                    <div className={styles.link_icon}>
                      <div>
                        <Image
                          height={256}
                          width={256}
                          src={"/icons/linkedin.svg"}
                          alt="LinkedIn"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>  
              <div key="github">
                <div>
                  <a href="https://github.com/cameronsweeney/">
                    <div className={styles.link_icon}>
                      <div>
                        <Image
                          height={256}
                          width={256}
                          src={"/icons/github.svg"}
                          alt="Github"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div key="blog">
                <div>
                  <ExampleBlogLink />
                </div>
              </div>
              <div key="portfolio">
                <div>
                  <ExamplePortfolioLink />
                </div>
              </div>
            </div>
        </div>
    );
  
  };

export default function Home() {
  return (
    <div>
      <div className={styles.left_background}></div>
      <div className={styles.right_background}></div>
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
  );
}
