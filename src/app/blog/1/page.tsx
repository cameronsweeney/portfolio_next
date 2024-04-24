import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
    return(
        <div id="root">

        <h1>Blog Post Title: What game why do??? Or sth like that</h1>

        <Link href="/blog">^Back to blog posts</Link>

        <p>Hi everyone this will be chaotic. That&apos;s kind of the point.</p>

        <p>So I&apos;ve been trying to restructure my life because of burnout & also neurodivergence & I decided to gamify every aspect of my life. Mostly I started with the question of how to prioritize tasks because it&apos;s hard to decide on the next thing to do when there&apos;s like 100 tasks that are all very urgent. Or <em>feel</em> very urgent.</p>
        
        <p>I learned that there&apos;s a phrase for this feeling: task saturation. It&apos;s not pleasant.</p>
        
        <p>Here is a real-life, definitely not AI-generated picture of me running from the task saturation monster:</p>

        <Image
            height={512}
            width={512}
            src={"/chasedByBlob.png"}
            alt="The Task Saturation Monster"
        />


        <p>You may be familiar with the feeling of task saturation. For me it took the form of endless to-do lists that I couldn&apos;t ever really get a grip on. Even when I finished a lot of stuff (MORE NEEDS TO GO HERE)</p>

        <p>Even just calling this new productivity system a &quot;game&quot; has been helpful - designing new systems is an inherently creative and playful process, and gamification is a great way to engage those parts of your brain.</p>

        <p>I had already been using index cards to organize many of my recurring tasks - this was helpful for me because I didn&apos;t have to see every individual task at once, like with a long, long to-do list. A thick stack of index cards could be overwhelming in the same way, but I can only see the text from the top card.</p>

        <p>But I could do better than just some nondescript index cards with task names on them. I had to ask myself: how can I make this system more engaging / more inviting / less overwhelming? How can I make the act of sorting and choosing cards feel more like a <em>game</em>?</p>

        <p>I decided to upcycle some old Pokémon cards laying around - now that&apos;s more like a game! I chose to start with energy cards cause they&apos;re abundant and identical. But oh no!!! How do I choose what types to use for each different task??? (To be answered in another blog post maybe??? I don&apos;t fucking know).</p>

        <p>I also decided to design a reward system to encourage myself to complete tasks. As I finished tasks and put them in the &quot;done&quot; pile, I could see a physical representation of my progress throughout the day, and I give myself a point for each task I complete. (this also needs more elaboration)</p>
        
    </div>
    );
};