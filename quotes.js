const quotes = [
  {
    quote: "[Monica] What day is it?\n[David] Today",
    author: "A.I. by Steven Spielberg",
  },
  {
    quote:
      "Imagine there's no countries\nIt isn't hard to do\nNothing to kill or die for\nAnd no religion too\nImagine all the people\nLiving life in peace",
    author: "John Lennon, Imagine",
  },
  {
    quote:
      "You may say that I'm a dreamer\nBut I'm not the only one\nI hope someday you'll join us\nAnd the world will be as one",
    author: "John Lennon, Imagine",
  },
  {
    quote:
      "To follow the path:\nlook to the master,\nfollow the master,\nwalk with the master,\nsee through the master,\nbecome the master.",
    author: "Modern zen Poem",
  },
  {
    quote:
      "1 - Creativity and innovation always build on the past.\n2 - The past always tries to control the creativity that builds on it.\n3 - Free societies enable the future by limiting the past.\n4 - Ours is less and less a free society.",
    author: "Lawrence Lessig, Free Culture.",
  },
  {
    quote:
      "I think everything in life is art. What you do. How you dress. The way you love someone, and how you talk. Your smile and your personality. What you believe in, and all your dreams. The way you drink your tea. How you decorate your home. Or party. Your grocery list. The food you make. How your writing looks. And the way you feel. Life is art.",
    author: "Helena Bonham Carter",
  },
  {
    quote:
      "Don't worry about what anybody else is going to do. The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote:
      "Premature optimization is the root of all evil (or at least most of it) in programming.",
    author: "Donald Knuth",
  },
  {
    quote:
      'Lisp has jokingly been called "the most intelligent way to misuse a computer". I think that description is a great compliment because it transmits the full flavor of liberation: it has assisted a number of our most gifted fellow humans in thinking previously impossible thoughts.',
    author: "Edsger Dijkstra, CACM, 15:10",
  },
  {
    quote:
      "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
    author: "Mark Twain",
  },
  {
    quote:
      "What Paul does, and does very well, is to take ideas and concepts that are beautiful in the abstract, and brings them down to a real world level. That's a rare talent to find in writing these days.",
    author: 'Jeff "hemos" Bates, Director, OSDN; Co-evolver, Slashdot',
  },
  {
    quote:
      "Since programmers create programs out of nothing, imagination is our only limitation. Thus, in the world of programming, the hero is the one who has great vision. Paul Graham is one of our contemporary heroes. He has the ability to embrace the vision, and to express it plainly. His works are my favorites, especially the ones describing language design. He explains secrets of programming, languages, and human nature that can only be learned from the hacker experience. This book shows you his great vision, and tells you the truth about the nature of hacking.",
    author: 'Yukihiro "Matz" Matsumoto, creator of Ruby',
  },
  {
    quote: "No problem should ever have to be solved twice.",
    author: "Eric S. Raymond, How to become a hacker",
  },
  {
    quote: "Attitude is no substitute for competence.",
    author: "Eric S. Raymond, How to become a hacker",
  },
  {
    quote:
      "It is said that the real winner is the one who lives in today but able to see tomorrow.",
    author: 'Juan Meng, Reviewing "The future of ideas" by Lawrence Lessig',
  },
  {
    quote:
      "Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it.",
    author: "Alan J. Perlis (Epigrams in programming)",
  },
  {
    quote:
      "A year spent in artificial intelligence is enough to make one believe in God.",
    author: "Alan J. Perlis (Epigrams in programming)",
  },
  {
    quote:
      "Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You've solved the wrong problem. Work hard to improve.",
    author: "Alan J. Perlis (Epigrams in programmi ng)",
  },
  {
    quote: "Within a computer natural language is unnatural.",
    author: "Alan J. Perlis (Epigrams in programming)",
  },
  {
    quote:
      "You think you know when you learn, are more sure when you can write, even more when you can teach, but certain when you can program.",
    author: "Alan J. Perlis (Epigrams in programming)",
  },
  {
    quote:
      "Adapting old programs to fit new machines usually means adapting new machines to behave like old ones.",
    author: "Alan J. Perlis (Epigrams in programming)",
  },
  {
    quote: "A little learning is a dangerous thing.",
    author: "Alexander Pope",
  },
  {
    quote:
      "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.",
    author: "Eric Raymond",
  },
  {
    quote:
      "Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary.",
    author: "Frederick P. Brooks, No Sliver Bullet.",
  },
  {
    quote:
      "Students should be evaluated on how well they can achieve the goals they strived to achieve within a realistic context. Students need to learn to do things, not know things.",
    author: "Roger Schank, Engines for Education",
  },
  {
    quote:
      "We remember what we learn when we care about performing better and when we believe that what we have been asked to do is representative of reality.",
    author: "Roger Schank, Engines for Education",
  },
  {
    quote: "There really is no learning without doing.",
    author: "Roger Schank, Engines for Education",
  },
  {
    quote:
      "We really have to get over the idea that some stuff is just worth knowing even if you never do anything with it. Human memories happily erase stuff that has no purpose, so why try to fill up children's heads with such stuff?",
    author: "Roger Schank, Engines for Education",
  },
  {
    quote:
      "La tactique, c'est ce que vous faites quand il y a quelque chose à faire; la stratégie, c'est ce que vous faites quand il n'y a rien à faire.",
    author: "Xavier Tartacover",
  },
  {
    quote:
      "The only problems we can really solve in a satisfactory manner are those that finally admit a nicely factored solution.",
    author: "E. W. Dijkstra, The humble programmer",
  },
  {
    quote:
      "The best way to learn to live with our limitations is to know them.",
    author: "E. W. Dijkstra, The humble programmer",
  },
  {
    quote:
      "This challenge, viz. the confrontation with the programming task, is so unique that this novel experience can teach us a lot about ourselves. It should deepen our understanding of the processes of design and creation, it should give us better control over the task of organizing our thoughts. If it did not do so, to my taste we should no deserve the computer at all! It has allready taught us a few lessons, and the one I have chosen to stress in this talk is the following. We shall do a much better programming job, provided that we approach the task with a full appreciation of its tremenduous difficulty, provided that we stick to modest and elegant programming languages, provided that we respect the intrinsec limitations of the human mind and approach the task as Very Humble Programmers.",
    author: "E. W. Dijkstra, The humble programmer",
  },
  {
    quote:
      "Ce n'est que par les relations qu'on entretient entre nos différentes connaissances qu'elles nous restent accessibles.",
    author:
      "Shnuup, sur l'hypertexte (SELFHTML -> Introduction -> Definitions sur l'hypertexte)",
  },
  {
    quote:
      "We now come to the decisive step of mathematical abstraction: we forget about what the symbols stand for. ...[The mathematician] need not be idle; there are many operations which he may carry out with these symbols, without ever having to look at the things they stand for.",
    author: "Hermann Weyl, The Mathematical Way of Thinking",
  },
  {
    quote:
      'An expert is, according to my working definition "someone who doesn\'t need to look up answers to easy questions".',
    author: "Eric Lippert.",
  },
  {
    quote:
      "The programmer must seek both perfection of part and adequacy of collection.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      "Thus, programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      'We control complexity by building abstractions that hide details when appropriate. We control complexity by establishing conventional interfaces that enable us to construct systems by combining standard, well-understood pieces in a "mix and match" way. We control complexity by establishing new languages for describing a design, each of which emphasizes particular aspects of the design and deemphasizes others.',
    author: "Alan J. Perlis",
  },
  {
    quote:
      "The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made.",
    author: "John Locke, An Essay Concerning Human Understanding (1690)",
  },
  {
    quote:
      "Lisp programmers know the value of everything but the cost of nothing.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      "An interpreter raises the machine to the level of the user program; a compiler lowers the user program to the level of the machine language.",
    author: "SICP",
  },
  {
    quote: "Everything should be made as simple as possible, but no simpler.",
    author: "Albert Einstein",
  },
  {
    quote:
      'The great dividing line between success and failure can be expressed in five words: "I did not have time."',
    author: "WestHost weekly newsletter 14 Feb 2003",
  },
  {
    quote:
      "When your enemy is making a very serious mistake, don't be impolite and disturb him.",
    author: "Napoleon Bonaparte (allegedly)",
  },
  {
    quote:
      "A charlatan makes obscure what is clear; a thinker makes clear what is obscure.",
    author: "Hugh Kingsmill",
  },
  {
    quote:
      "There are two ways of constructing a software design; one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
    author: "C. A. R. Hoare",
  },
  {
    quote:
      "And if you go too far up, abstraction-wise, you run out of oxygen. Sometimes smart thinkers just don't know when to stop, and they create these absurd, all-encompassing, high-level pictures of the universe that are all good and fine, but don't actually mean anything at all.",
    author: "Joel Spolsky",
  },
  {
    quote:
      "The three chief virtues of a programmer are: Laziness, Impatience and Hubris.",
    author: "Larry Wall (Programming Perl)",
  },
  {
    quote: "All non-trivial abstractions, to some degree, are leaky.",
    author: "Joel Spolsky (The Law of Leaky Abstractions)",
  },
  {
    quote: "XML wasn't designed to be edited by humans on a regular basis.",
    author: "Guido van Rossum",
  },
  {
    quote:
      "Premature abstraction is an equally grevious sin as premature optimization.",
    author: "Keith Devens",
  },
  {
    quote:
      "You can have premature generalization as well as premature optimization.",
    author: "Bjarne Stroustrup",
  },
  {
    quote:
      "He causes his sun to rise on the evil and the good, and sends rain on the righteous and the unrighteous.",
    author: "Matthew 5:45",
  },
  {
    quote:
      "A language that doesn't affect the way you think about programming, is not worth knowing.",
    author: "Alan Perlis",
  },
  {
    quote:
      "Je n'ai fait celle-ci plus longue que parce que je n'ai pas eu le loisir de la faire plus courte. (I have made this letter so long only because I did not have the leisure to make it shorter.)",
    author: "Blaise Pascal (Lettres Provinciales)",
  },
  {
    quote:
      "Men never do evil so completely and cheerfully as when they do it from religious conviction.",
    author: "Blaise Pascal (attributed)",
  },
  {
    quote:
      "Everybody makes their own fun. If you don't make it yourself, it ain't fun, it's entertainment.",
    author: "David Mamet (as relayed by Joss Whedon)",
  },
  {
    quote:
      "If we wish to count lines of code, we should not regard them as lines produced but as lines spent.",
    author: "Edsger Dijkstra",
  },
  {
    quote:
      'Sometimes a man with too broad a perspective reveals himself as having no real perspective at all. A man who tries too hard to see every side may be a man who is trying to avoid choosing any side. A man who tries too hard to seek a deeper truth may be trying to hide from the truth he already knows. That is not a sign of intellectual sophistication and "great thinking". It is a demonstration of moral degeneracy and cowardice.',
    author: "Steven Den Beste",
  },
  {
    quote: "Omit needless words.",
    author: "William Strunk, Jr. (The Elements of Style)",
  },
  {
    quote:
      "I have never met a man so ignorant that I couldn't learn something from him.",
    author: "Galileo Galilei",
  },
  {
    quote:
      "A society that puts equality in the sense of equality of outcome ahead of freedom will end up with neither equality nor freedom. The use of force to achieve equality will destroy freedom, and the force, introduced for good purposes, will end up in the hands of people who use it to promote their own interests.",
    author: "Milton Friedman (Thomas Sowell: A Conflict of Visions, p130)",
  },
  {
    quote:
      "Philosophy: the finding of bad reasons for what one believes by instinct.",
    author: "Brave New World (paraphrased)",
  },
  {
    quote:
      "Of all tyrannies a tyranny sincerely exercised for the good of its victims may be the most oppressive. It may be better to live under robber barons than under omnipotent moral busybodies, The robber baron's cruelty may sometimes sleep, his cupidity may at some point be satiated; but those who torment us for own good will torment us without end, for they do so with the approval of their own conscience.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "Fools! Don't they know that tears are a woman's most effective weapon?",
    author: "Catwoman (The Batman TV Series, episode 83)",
  },
  {
    quote:
      "It's like a condom; I'd rather have it and not need it than need it and not have it.",
    author:
      "some chick in Alien vs. Predator, when asked why she\nalways carries a gun",
  },
  {
    quote:
      "C++ is history repeated as tragedy. Java is history repeated as farce.",
    author: "Scott McKay",
  },
  {
    quote: "Simplicity takes effort -- genius, even.",
    author: "Paul Graham",
  },
  { quote: "Show, don't tell.", author: "unknown" },
  {
    quote:
      "In God I trust; I will not be afraid. What can mortal man do to me?",
    author: "David (Psalm 56:4)",
  },
  {
    quote: "Linux is only free if your time has no value.",
    author: "Jamie Zawinski",
  },
  { quote: "Code is poetry.", author: "wordpress.org" },
  {
    quote: "If you choose not to decide, you still have made a choice.",
    author: "Rush (Freewill)",
  },
  {
    quote:
      "Civilization advances by extending the number of important operations which we can perform without thinking about them.",
    author: "Alfred North Whitehead (Introduction to Mathematics)",
  },
  {
    quote: "The function of wisdom is to discriminate between good and evil.",
    author: "Cicero",
  },
  {
    quote:
      "The reason to do animation is caricature. Good caricature picks out the essense of the statement and removes everything else. It's not simply about reproducing reality; It's about bumping it up.",
    author: "Brad Bird, writer and director, The Incredibles",
  },
  { quote: "Mistakes were made.", author: "Ronald Reagan" },
  {
    quote:
      "I would rather be an optimist and be wrong than a pessimist who proves to be right. The former sometimes wins, but never the latter.",
    author: '"Hoots"',
  },
  { quote: "What is truth?", author: "Pontius Pilate" },
  {
    quote:
      "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    author: "Ferris Bueller",
  },
  {
    quote:
      "Lisp is worth learning for the profound enlightenment experience you will have when you finally get it; that experience will make you a better programmer for the rest of your days, even if you never actually use Lisp itself a lot.",
    author: "Eric S. Raymond",
  },
  {
    quote:
      "Any sufficiently complicated C or Fortran program contains an ad hoc, informally specified, bug-ridden, slow implementation of half of Common Lisp.",
    author: "Philip Greenspun (Greenspun's Tenth Rule)",
  },
  {
    quote:
      'I was talking recently to a friend who teaches at MIT. His field is hot now and every year he is inundated by applications from would-be graduate students. "A lot of them seem smart," he said. "What I can\'t tell is whether they have any kind of taste."',
    author: "Paul Graham",
  },
  {
    quote: "The direct pursuit of happiness is a recipe for an unhappy life.",
    author: "Donald Campbell",
  },
  {
    quote:
      "It's no trick for talented people to be interesting, but it's a gift to be interested. We want an organization filled with interested people.",
    author: "Randy S. Nelson (dean of Pixar University)",
  },
  {
    quote:
      "Why teach drawing to accountants? Because drawing class doesn't just teach people to draw. It teaches them to be more observant. There's no company on earth that wouldn't benefit from having people become more observant.",
    author: "Randy S. Nelson (dean of Pixar University)",
  },
  {
    quote:
      "All problems in computer science can be solved by another level of indirection.",
    author: "Butler Lampson",
  },
  {
    quote:
      "A designer knows he has arrived at perfection not when there is no longer anything to add, but when there is no longer anything to take away.",
    author: "Antoine de St Exupery.",
  },
  {
    quote:
      "For the things we have to learn before we can do them, we learn by doing them.",
    author: "Aristotle.",
  },
  {
    quote:
      "There are many ways to avoid success in life, but the most sure-fire just might be procrastination.",
    author: "Hara Estroff Marano.",
  },
  { quote: "PI seconds is a nanocentury.", author: "[fact]" },
  {
    quote:
      "A non negative binary integer value x is a power of 2 iff (x & (x-1)) is 0 using 2's complement arithmetic.",
    author: "[fact]",
  },
  {
    quote:
      "While I’ve always appreciated beautiful code, I share Jonathan’s concern about studying it too much. I think studying beauty in music and painting has led us to modern classical music and painting that the majority of us just don’t get. Beauty can be seen when it emerges, but isn't something to strive for in isolation of a larger context. In the software world, the larger context would be the utility of the software to the end user.",
    author: "[A comment on a blog]",
  },
  {
    quote: "Dont give users the opportunity to lock themselves.",
    author: "unknown",
  },
  {
    quote:
      "Any fool can make the simple complex, only a smart person can make the complex simple.",
    author: "unknown",
  },
  {
    quote:
      "To do something well you have to love it. So to the extent you can preserve hacking as something you love, you're likely to do it well. Try to keep the sense of wonder you had about programming at age 14. If you're worried that your current job is rotting your brain, it probably is.",
    author: "Paul Graham.",
  },
  {
    quote:
      "'If you give him a penny for his thoughts, you'd get change.', 'Not the sharpest knife in the drawer.', 'A prime candidate for natural deselection.'",
    author: "Ideas for flamewars",
  },
  {
    quote:
      "Whenever you teach you have the biggest responsibility in the planet. Either if you are teaching dance, science or to a kid to walk. Teaching is something bigger than the actual subject you are teaching. Teaching is the very inception to change. Teaching is extend the impact of your life trough time. If you teach to be eager without being greedy, if you teach to be humble without develop insecurity, if you teach to have vision without creating ambition, if you teach the right things to do without hiding the wrong you’ve done, If you discuss ideas without pushing yours into the others brain then the new generation can shape a future which is better than the present we made. No matter in which form we all have the role of a teacher for someone. I believe we can make it.",
    author: "Alessandro Steri",
  },
  {
    quote:
      "What I didn't understand was that the value of some new acquisition wasn't the difference between its retail price and what I paid for it. It was the value I derived from it. Stuff is an extremely illiquid asset. Unless you have some plan for selling that valuable thing you got so cheaply, what difference does it make what it's \"worth?\" The only way you're ever going to extract any value from it is to use it. And if you don't have any immediate use for it, you probably never will.",
    author: "Paul Graham",
  },
  {
    quote: "Only bad designers blame their failings on the users.",
    author: "unknown",
  },
  {
    quote:
      'Humans aren\'t rational they rationalize. And I don\'t just mean "some of them" or "other people". I\'m talking about everyone. We have a "logic engine" in our brains, but for the most part, it\'s not the one in the driver\'s seat -- instead it operates after the fact, generating rationalizations and excuses for our behavior.',
    author: "Paul Buchheit",
  },
  {
    quote:
      "What do Americans look for in a car? I've heard many answers when I've asked this question. The answers include excellent safety ratings, great gas mileage, handling, and cornering ability, among others. I don't believe any of these. That's because the first principle of the Culture Code is that the only effective way to understand what people truly mean is to ignore what they say. This is not to suggest that people intentionally lie or misrepresent themselves. What it means is that, when asked direct questions about their interests and preferences, people tend to give answers they believe the questioner wants to hear. Again, this is not because they intend to mislead. It is because people respond to these questions with their cortexes, the parts of their brains that control intelligence rather than emotion or instinct. They ponder a question, they process a question, and when they deliver an answer, it is the product of deliberation. They believe they are telling the truth. A lie detector would confirm this. In most cases, however, they aren't saying what they mean.",
    author: "The culture code.",
  },
  {
    quote: "When all you have is a hammer, everything looks like a nail.",
    author: "unknown",
  },
  {
    quote: "Good coders code, great reuse.",
    author: "http://www.catonmat.net",
  },
  {
    quote:
      "The lesson of the story might appear to be that self-interested and ambitious people in power are often the cause of wastefulness in developing countries. But self-interested and ambitious people are in positions of power, great and small, all over the world. In many places, they are restrained by the law, the press, and democratic opposition. Cameroon's tragedy is that there is nothing to hold self-interest in check.",
    author: "Tim Harford",
  },
  {
    quote:
      "To solve your problems you must learn new skills, adapt new thought patterns, and become a different person than you were before that problem. God has crafted you for success. In the middle of every adversity lie your best opportunities. Discover it, build upon it and move forward in your journey to live an extraordinary life. You owe it to yourself to live a great life. Don’t let negative thoughts pull you down. Be grateful and open to learn and grow.",
    author: "http://secretsofstudying.com/",
  },
  { quote: "If there is a will, there is a way.", author: "unknown" },
  {
    quote:
      "Having large case statements in an object-oriented language is a sure sign your design is flawed.",
    author: "[Fixing architecture flaws in Rails' ORM]",
  },
  {
    quote:
      "Being a programmer is the same way. The only way to be a good programmer is to write code. When you realize you haven't been writing much code lately, and it seems like all you do is brag about code you wrote in the past, and people start looking at you funny while you're shooting your mouth off, realize it's because they know. They might not even know they know, but they know. So, yes, doing what you love brings success, and by all means, throw yourself a nice big party, buy yourself a nice car, soak up the adulation of an adoring crowd. Then shut the fuck up and get back to work.",
    author: "Sincerity Theory",
  },
  {
    quote:
      "Another feature about this guy is his low threshold of boredom. He'll pick up on a task and work frantically at it, accomplishing wonders in a short time and then get bored and drop it before its properly finished. He'll do nothing but strum his guitar and lie around in bed for several days after. Thats also part of the pattern too; periods of frenetic activity followed by periods of melancholia, withdrawal and inactivity. This is a bipolar personality.",
    author: "The bipolar lisp programmer",
  },
  {
    quote:
      "My dream is that people adopt it on its own merits. We're not trying to bend Ruby on Rails to fit the enterprise, we're encouraging enterprises to bend to Ruby on Rails. Come if you like it, stay away if you don't. We're not going head over heels to accommodate the enterprise or to lure them away from Java. That's how you end up with Java, if you start bending to special interest groups.",
    author: "David Heinemeier Hansson (Ruby On Rails' creator)",
  },
  {
    quote:
      'New eyes have X-ray vision. [someone that hasn\'t written it is more likely to spot the bug. "someone" can be you after a break]',
    author: "William S. Annis",
  },
  {
    quote:
      "So - what are the most important problems in software engineering? I’d answer “dealing with complexity”.",
    author: "Mark Chu-Carroll",
  },
  {
    quote:
      "So the mere constraint of staying in regular contact with us will push you to make things happen, because otherwise you'll be embarrassed to tell us that you haven't done anything new since the last time we talked.",
    author: "Paul Graham (a talk at Y Combinator, for startup creators).",
  },
  {
    quote:
      "The choice of the university is mostly important for the piece of paper you get at the end. The education you get depends on you.",
    author: "Andreas Zwinkau",
  },
  {
    quote:
      "Remember that you are humans in the first place and only after that programmers.",
    author: "Alexandru Vancea",
  },
  {
    quote:
      "Humans differ from animals to the degree that they are not merely an end result of their conditioning, but are able to reflect on their experiences and strategies, and apply insight to make changes in the way they live to modify the outcome.",
    author: 'SlideTrombone (comment on "Programming can ruin your life")',
  },
  {
    quote:
      "As builders and creators finding the perfect solution should not be our main goal. We should find the perfect problem.",
    author: "Isaac (blog comment)",
  },
  {
    quote: "Just like carpentry, measure twice cut once.",
    author: "Super-sizing YouTube with Python (Mike Solomon, mike@youtube.com)",
  },
  {
    quote:
      "The good thing about reinventing the wheel is that you get a round one.",
    author: "Douglas Crockford (Author of JSON and JsLint)",
  },
  {
    quote:
      "I feel it is everybodies obligation to reach for the best in themselves and use that for the interest of mankind.",
    author:
      "Corneluis (comment on 'Are you going to change the world? (Really?)')",
  },
  {
    quote:
      'Abstraction is a form of data compression: absolutely necessary, because human short-term memory is so small, but the critically important aspect of abstraction is the algorithm that gets you from the name back to the "uncompressed" details.',
    author: "Bruce Wilder (blog post comment)",
  },
  {
    quote:
      "Have you ever noticed that when you sit down to write something, half the ideas that end up in it are ones you thought of while writing it? The same thing happens with software. Working to implement one idea gives you more ideas.",
    author: "Paul Graham, The other road ahead.",
  },
  {
    quote:
      "In general, we can think of data as defined by some collection of selectors and constructors, together with specified conditions that these procedures must fulfill in order to be a valid representation.",
    author: "SICP, What is meant by data?",
  },
  {
    quote:
      "Resume writing is just like dating, or applying for a bank loan, in that nobody wants you if you're desperate.",
    author: "Steve Yegge.",
  },
  {
    quote:
      "Mastering isn’t a survival instinct; it’s an urge to excel. Mastering is one of the experiences that delineates us from animals. It is striving to be more tomorrow than we are today; to perfectly pitch the ball over home plate; to craft the perfect sentence in an article; to open the oven and feel the warm, richly-scented cloud telling you dinner is going to be absolutely extraordinary. We humans crave perfection, to be masters of our domain, to distinguish ourselves by sheer skill and prowess.",
    author: "Joesgoals.com",
  },
  {
    quote: "It(mastering)’s knowing what you are doing.",
    author: "Joesgoals.com",
  },
  {
    quote:
      "Well then. How could you possibly live without automated refactoring tools? How else could you coordinate the caterpillar-like motions of all Java’s identical tiny legs, its thousands of similar parts? I’ll tell you how: Ruby is a butterfly.",
    author: "Stevey, Refactoring Trilogy, Part 1.",
  },
  {
    quote:
      "You will never become a Great Programmer until you acknowledge that you will always be a Terrible Programmer. You will remain a Great Programmer for only as long as you acknowledge that you are still a Terrible Programmer.",
    author: "Marc (http://kickin-the-darkness.blogspot.com/)",
  },
  {
    quote:
      "If I tell you I'm good, you would probably think I'm boasting. If I tell you I'm no good, you know I'm lying.",
    author: "Bruce Lee",
  },
  {
    quote:
      "Let me try to get this straight: Lisp is a language for describing algorithms. This was JohnMcCarthy's original purpose, anyway: to build something more convenient than a Turing machine. Lisp is not about file, socket or GUI programming - Lisp is about expressive power. (For example, you can design multiple object systems for Lisp, in Lisp. Or implement the now-fashionable AOP. Or do arbitrary transformations on parsed source code.) If you don't value expressive power, Lisp ain't for you. I, personally, would prefer Lisp to not become mainstream: this would necessarily involve a dumbing down.",
    author: "VladimirSlepnev",
  },
  {
    quote:
      "Je ne vous impose aucune contrainte, aucune limite. Surprenez-moi, étonnez-moi, défiez-moi, défiez-vous vous-même. Vous avez le choix: vous pouvez rester dans l'ombre ou en sortir en étant parmis les trop rares exceptions à avoir réussi. L'heure est venue d'aller bien au delà de votre potentiel. L'heure est venue maintenant de descendre vraiment en vous. L'heure est venue de démontrer pourquoi vous êtes l'élite, les quelques élus, les rares lueurs qui offrent à cette compagnie son caractère exceptionnel, sa luminescence.",
    author: 'Le PDG de NURV, dans "Anti-trust".',
  },
  {
    quote:
      "If something isn’t working, you need to look back and figure out what got you excited in the first place.",
    author: "David Gorman (ImThere.com)",
  },
  {
    quote:
      "Opportunities that present themselves to you are the consequence -- at least partially -- of being in the right place at the right time. They tend to present themselves when you're not expecting it -- and often when you are engaged in other activities that would seem to preclude you from pursuing them. And they come and go quickly -- if you don't jump all over an opportunity, someone else generally will and it will vanish.",
    author: "Marc Andreessen (http://blog.pmarca.com/)",
  },
  {
    quote:
      "Quello che tutti gli artisti hanno in comune è la capacita di sognare, di avere una visione opaca ma concreta di quello che un giorno vorrebbero essere. Quella visione è la volontà con cui lottiamo ogni giorno per essere un passo più vicini di ieri al nostro sogno e un passo più lontani di quanto non saremo domani.",
    author: "Alessandro Steri",
  },
  {
    quote:
      "Pay attention to opportunity cost at all times. Doing one thing means not doing other things. This is a form of risk that is very easy to ignore, to your detriment.",
    author: "Marc Andreessen (http://blog.pmarca.com/)",
  },
  {
    quote:
      "Seize any opportunity, or anything that looks like opportunity. They are rare, much rarer than you think...",
    author: 'Nassim Nicholas Taleb, "The Black Swan".',
  },
  {
    quote:
      "I think that a lot of programmers are ignoring an important point when people talk about reducing code repetition on large projects. Part of the idea is that large projects are intrinsically _wrong_. That you should be looking at making a number of smaller projects that are composable, even if you never end up reusing one of those smaller projects elsewhere.",
    author: "Dan Nugent",
  },
  {
    quote:
      "Students don't care how much you know, until they know how much you care...",
    author: "John Maxwell",
  },
  {
    quote:
      "We tend to seek easy, single-factor explanations of success. For most important things, though, success actually requires avoiding many separate causes of failure.",
    author: "Jared Diamond",
  },
  {
    quote:
      "Things which matter most must never be at the mercy of things which matter least.",
    author: "Johann Wolfgang Von Goethe (1749-1832)",
  },
  {
    quote:
      "I think the root of your mistake is saying that macros don't scale to larger groups. The real truth is that macros don't scale to stupider groups.",
    author: "Paul Graham, on the Lightweight Languages mailing list.",
  },
  {
    quote:
      "Argue with idiots, and you become an idiot. If you compete with slaves you become a slave.",
    author: "Paul Graham and Norbert Weiner, respectively",
  },
  {
    quote:
      'Always dive down into a problem and get your hands on the deepest issue behind the problem. All other considerations are to dismissed as "engineering details"; they can be sorted out after the basic problem has been solved.',
    author: "Chris Crawford",
  },
  {
    quote:
      "Don't have good ideas if you aren't willing to be responsible for them.",
    author: "Alan Perlis",
  },
  {
    quote:
      "It is impossible to sharpen a pencil with a blunt axe. It is equally vain to try to do it with ten blunt axes instead.",
    author: "Edsger Dijkstra",
  },
  {
    quote:
      "The most damaging phrase in the language is, It's always been done that way.",
    author: "Rear Admiral Grace Hopper",
  },
  {
    quote:
      "Getting back to failing early, I've learned it's important to completely fail. Get fired. Shoot the project, then burn its corpse. Melt the CVS repository and microwave the backup CDs. When things go wrong, I've often tried to play the hero from start to finish. Guess what? Some projects are doomed no matter what. Some need skills I don't possess. And some need a fresh face.",
    author: "Reginald Braithwaite",
  },
  {
    quote:
      "The only thing a man should ever be 100% convinced of is his own ignorance.",
    author: "DJ MacLean",
  },
  {
    quote:
      "The best people and organizations have the attitude of wisdom: the courage to act on what they know right now and the humility to change course when they find better evidence. The quest for management magic and breakthrough ideas is overrated; being a master of the obvious is underrated. Jim Maloney is right: work is an overrated activity.",
    author: "Bob Sutton",
  },
  {
    quote:
      "In theory, there’s no difference between theory and practice. But in practice, there is.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Act from reason, and failure makes you rethink and study harder. Act from faith, and failure makes you blame someone and push harder.",
    author: "Erik Naggum",
  },
  {
    quote:
      "Measure everything you can about the product, and you'll start seeing patterns.",
    author: "Max Levchin, PayPal founder, Talk at StartupSchool2007",
  },
  {
    quote:
      "Something Confusing about \"Hard\": It's tempting to think that if it's hard, then it's valuable. Most valuable things are hard. Most hard things are completely useless - (picture of someone smashing their head through concrete blocks kung-fu style). Hard DOES NOT EQUATE TO BEING valuable. Remember Friendster back in the day? You'd sign in, invite friends, have 25 friends, go to their profile, and then it'd show how you were connected to each one. That's an impressive [some geeky CS jargon] Cone traversal of a tree - 100 million string comparisons per page - it won't scale. Used to take a minute per page to load, and Friendster died a painful death. MySpace - not interested in solving problems They use the shortcut of \"Miss Fitzpatrick is in your extended network\" (i.e. even when you're not even signed up for MySpace) They didn't solve the hard problem. But they make the more relevant assumption that you want to be connected to hot women. [LOL] Shows Alexa graph showing that in early 2005 Myspace took off, and quickly bypassed Friendster and never looked back.",
    author: "Max Levchin, PayPal founder, Talk at StartupSchool2007",
  },
  {
    quote:
      "Quality of the people is better than the quality of the business idea. Crappy people can screw up the best idea in the world.",
    author: "Hadi Partovi & Ali Partovi (iLike.com), Talk at StartupSchool2007",
  },
  {
    quote: "The only constant in the world of hi-tech is change.",
    author: "Mark Ward",
  },
  {
    quote:
      "Write it properly first. It's easier to make a correct program fast, than to make a fast program correct.",
    author: "http://www.cpax.org.uk/prg/",
  },
  {
    quote:
      "J'ai toujours préféré la folie des passions à la sagesse de l'indifférence.",
    author: "Anatole France",
  },
  {
    quote: "You can’t get to version 500 if you don’t start with a version 1.",
    author: "BetterExplained.com",
  },
  {
    quote:
      "The wonderful and frustrating thing about understanding yourself is that nobody can do it for you.",
    author: "BetterExplained.com",
  },
  {
    quote:
      "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    author: "Sherlock Holmes",
  },
  {
    quote:
      "In order to understand what another person is saying, you must assume that it is true and try to find out what it could be true of.",
    author: "George Miller",
  },
  {
    quote: "A journey of a thousand miles must begin with a single step.",
    author: "Lao­Tzu",
  },
  {
    quote: "C’s great for what it’s great for.",
    author: "Ben Hoyts (micropledge)",
  },
  {
    quote:
      "There is one meaning [for static in C]: a global variable that is invisible outside the current scope, be it a function or a file.",
    author: "Paolo Bonzini",
  },
  {
    quote:
      "Processors don't get better so that they can have more free time. Processors get better so _you_ can have more free time.",
    author: "LeCamarade (freeshells.ch)",
  },
  {
    quote:
      'The venerable master Qc Na was walking with his student, Anton. Hoping to prompt the master into a discussion, Anton said "Master, I have heard that objects are a very good thing - is this true?" Qc Na looked pityingly at his student and replied, "Foolish pupil - objects are merely a poor man\'s closures." Chastised, Anton took his leave from his master and returned to his cell, intent on studying closures. He carefully read the entire "Lambda: The Ultimate..." series of papers and its cousins, and implemented a small Scheme interpreter with a closure-based object system. He learned much, and looked forward to informing his master of his progress. On his next walk with Qc Na, Anton attempted to impress his master by saying "Master, I have diligently studied the matter, and now understand that objects are truly a poor man\'s closures." Qc Na responded by hitting Anton with his stick, saying "When will you learn? Closures are a poor man\'s object." At that moment, Anton became enlightened.',
    author: "Anton van Straaten (Na = Norman Adams, Qa = Christian Queinnec)",
  },
  {
    quote:
      "Understanding why C++ is the way it is helps a programmer use it well. A deep understanding of a tool is essential for an expert craftsman.",
    author: "Bjarne Stroustrap",
  },
  {
    quote:
      "No art, however minor, demands less than total dedication if you want to excel in it.",
    author: "Alberti",
  },
  {
    quote:
      "The minute you put the blame on someone else you’ve switch things from being a problem you can control to a problem outside of your control.",
    author: "engtech (internetducttape.com)",
  },
  {
    quote:
      "State is the root of all evil. In particular functions with side effects should be avoided.",
    author: "OO Sucks (bluetail.com)",
  },
  {
    quote:
      "Ils ne sont pas forts parce qu'ils sont forts. Ils sont forts parce que nous sommes faibles.",
    author: "Ragala Khalid",
  },
  {
    quote:
      "It is better to be quiet and thought a fool than to open your mouth and remove all doubt.",
    author: "WikiHow",
  },
  {
    quote:
      "A tail call allows a function to return the result of another function without leaving an entry on the stack. Tail recursion is a specific case of tail calling.",
    author: "ASPN : Python Cookbook : Explicit Tail Call",
  },
  {
    quote:
      "Simplicity means the achievement of maximum effect with minimum means.",
    author: "Dr. Koichi Kawana",
  },
  {
    quote: "Normality is the route to nowhere.",
    author: "Ridderstrale & Nordstorm, Funky Business",
  },
  {
    quote:
      "The problem is that Microsoft just has no taste. And I don't mean that in a small way, I mean that in a big way.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Do you want to sell sugared water all your life or do you want to change the world?",
    author: "Steve Jobs, to John Sculley (former Pepsi executive)",
  },
  {
    quote: "Good work is no done by ‘humble’ men.",
    author: "H. Hardy, A mathematician's apology.",
  },
  {
    quote: "Simplicity and pragmatism beat complexity and theory any day.",
    author: "Dennis (blog comment)",
  },
  {
    quote:
      "The proof is by reductio ad absurdum, and reductio ad absurdum, which Euclid loved so much, is one of a mathematician’s finest weapons. It is a far finer gambit than any chess gambit: a chess player may offer the sacrifice of a pawn or even a piece, but a mathematician offers the game.",
    author: "G. H. Hardy",
  },
  {
    quote: "Remember, always be yourself ... unless you suck!",
    author: "Joss Whedon",
  },
  {
    quote: "All great things require great dedication.",
    author: "Chuck Norris(?)",
  },
  {
    quote:
      "I'm always happy to trade performance for readability as long as the former isn't already scarce.",
    author: "Crayz (Commentor on blog.raganwald.com)",
  },
  {
    quote:
      "The definition of insanity is doing the same thing over and over again and expecting different results.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "A no uttered from the deepest conviction is better than a yes merely uttered to please or what is worse, to avoid trouble.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      'I think it is wise, and only honest, to warn you that my goal is immodest. It is not my purpose to "transfer knowledge" to you that, subsequently, you can forget again. My purpose is no less than to effectuate in each of you a noticeable, irreversable change. I want you to gain, for the rest of your lives, the insight that beautiful proofs are not "found" by trial anf error but are the result of a consciously applied design discipline. I want you to raise your quality standards. I mean, if 10 years from now, when you are doing something quick and dirty, you suddenly visualize that I am looking over your shoulders and say to yourself "Dijkstra would not have liked this", well, that would be enough immortality for me.',
    author: "E. W. Dijkstra",
  },
  {
    quote:
      "The general principle for complexity design is this: Think locally, act locally.",
    author:
      "Richard P. Gabriel & Ron Goldman, Mob Software: The Erotic Life of Code",
  },
  {
    quote:
      "Programming is the art of figuring out what you want so precisely that even a machine can do it.",
    author: "Some guy who isn't famous",
  },
  {
    quote:
      "Change happens when you have a dream first, you wake up with those butterflies that you don’t wanna let them go, YOU work your a*s off and your yesterday’s visions becomes your today’s plan and eventually your tomorrow’s memories.",
    author: "Alessandro Steri",
  },
  {
    quote:
      "Hence my urgent advice to all of you to reject the morals of the bestseller society and to find, to start with, your reward in your own fun. This is quite feasible, for the challenge of simplification is so fascinating that, if we do our job properly, we shall have the greatest fun in the world.",
    author: "E. W. Dijkstra, On the nature of computing science.",
  },
  {
    quote:
      "Remember: you are alone. Every time you can get help from someone, it is an opportunity: you should eagerly size it. But then, promptly return to normal mode: you are alone and you must be prepared to solve every problem yourself.",
    author: "Eric KEDJI",
  },
  {
    quote: "Making All Software Into Tools Reduces Risk.",
    author: "smoothspan.com",
  },
  {
    quote:
      "Some may say Ruby is a bad rip-off of Lisp or Smalltalk, and I admit that. But it is nicer to ordinary people.",
    author: "Matz, LL2",
  },
  {
    quote:
      "C and Lisp stand at opposite ends of the spectrum; they're each great at what the other one sucks at.",
    author: "Steve Yegge, Tour de Babel.",
  },
  {
    quote:
      "Two people should stay together if together they are better people than they would be individually.",
    author: "?",
  },
  {
    quote:
      "To the optimist, the glass is half full. To the pessimist, the glass is half empty. To the engineer, the glass is twice as big as it needs to be.",
    author: "author unknown (quoted in 'Robust Systems', Gerald Jay Suseman)",
  },
  {
    quote:
      "It is practically impossible to teach good programming to students that have had a prior exposure to BASIC: as potential programmers they are mentally mutilated beyond hope of regeneration.",
    author: "Edsger Dijkstra",
  },
  {
    quote: "Whatever is worth doing at all, is worth doing well.",
    author: "Earl of Chesterfield",
  },
  {
    quote:
      "Rules of Optimization: Rule 1: Don’t do it. Rule 2 (for experts only): Don’t do it yet.",
    author: "M.A. Jackson",
  },
  {
    quote:
      "More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity.",
    author: "W.A. Wulf",
  },
  {
    quote:
      "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil.",
    author: "Donald Knuth",
  },
  { quote: "The best is the enemy of the good.", author: "Voltaire" },
  {
    quote:
      "The job of a leader today is not to create followers. It’s to create more leaders.",
    author: "Ralph Nader",
  },
  {
    quote:
      "The president was visiting NASA headquarters and stopped to talk to a man who was holding a mop. “And what do you do?” he asked. The man, a janitor, replied, “I’m helping to put a man on the moon, sir.”",
    author: "The little book of leadership",
  },
  { quote: "Only make new mistakes.", author: "Phil Dourado" },
  {
    quote:
      "You can recognize truth by its beauty and simplicity. When you get it right, it is obvious that it is right.",
    author: "Richard Feynman",
  },
  {
    quote: "Talkers are no good doers.",
    author: 'William Shakespeare, "Henry VI"',
  },
  { quote: "Photography is painting with light.", author: "Eric Hamilton" },
  {
    quote: "Good artists copy. Great artists steal.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "A guideline in the process of stepwise refinement should be the principle to decompose decisions as much as possible, to untangle aspects which are only seemingly interdependent, and to defer those decisions which concern details of representation as long as possible.",
    author: "Niklaus Wirth",
  },
  {
    quote:
      "Vigorous writing is concise. A sentence should contain no unnecessary words, a paragraph no unnecessary sentences, for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts. This requires not that the writer make all sentences short or avoid all detail and treat subjects only in outline, but that every word tell.",
    author: "William Strunk, Jr. (The Elements of Style)",
  },
  {
    quote:
      "The problem is that small examples fail to convince, and large examples are too big to follow.",
    author: "Steve Yegge.",
  },
  {
    quote:
      "We are the sum of our behaviours; excellence therefore is not an act but a habit.",
    author: "Aristotle.",
  },
  {
    quote:
      "The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise.",
    author: "Edsger Dijkstra",
  },
  {
    quote: "Every man prefers belief to the exercise of judgment.",
    author: "Seneca",
  },
  {
    quote:
      "It’s hard to grasp abstractions if you don’t understand what they’re abstracting away from.",
    author: "Nathan Weizenbaum",
  },
  {
    quote:
      'That is one of the most distinctive differences between school and the real world: there is no reward for putting in a good effort. In fact, the whole concept of a "good effort" is a fake idea adults invented to encourage kids. It is not found in nature.',
    author: "Paul Graham",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "Don't stay in bed, unless you can make money in bed.",
    author: "George Burns",
  },
  {
    quote: "If everything seems under control, you're not going fast enough.",
    author: "Mario Andretti",
  },
  { quote: "Chance favors the prepared mind.", author: "Louis Pasteur" },
  {
    quote: "Controlling complexity is the essence of computer programming.",
    author: "Brian Kernigan",
  },
  {
    quote:
      "The function of good software is to make the complex appear to be simple.",
    author: "Grady Booch",
  },
  {
    quote:
      "Programmers are in a race with the Universe to create bigger and better idiot-proof programs, while the Universe is trying to create bigger and better idiots. So far the Universe is winning.",
    author: "Rich Cook",
  },
  {
    quote:
      "A hacker on a roll may be able to produce–in a period of a few months–something that a small development group (say, 7-8 people) would have a hard time getting together over a year. IBM used to report that certain programmers might be as much as 100 times as productive as other workers, or more.",
    author: "Peter Seebach",
  },
  {
    quote:
      "The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.",
    author: "Randall E. Stross",
  },
  {
    quote:
      "A great lathe operator commands several times the wage of an average lathe operator, but a great writer of software code is worth 10,000 times the price of an average software writer.",
    author: "Bill Gates",
  },
  {
    quote:
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: "Bill Gates",
  },
  {
    quote:
      "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.",
    author: "George Carrette",
  },
  {
    quote: "To iterate is human, to recurse divine.",
    author: "L. Peter Deutsch",
  },
  {
    quote:
      "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    author: "Anonymous",
  },
  {
    quote:
      "Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.",
    author: "Stan Kelly-Bootle",
  },
  {
    quote:
      "The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense.",
    author: "E.W. Dijkstra",
  },
  {
    quote:
      "It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration.",
    author: "E. W. Dijkstra",
  },
  {
    quote:
      "One of the main causes of the fall of the Roman Empire was that–lacking zero–they had no way to indicate successful termination of their C programs.",
    author: "Robert Firth",
  },
  {
    quote:
      "Saying that Java is nice because it works on all OSes is like saying that anal sex is nice because it works on all genders.",
    author: "Alanna",
  },
  {
    quote:
      "If Java had true garbage collection, most programs would delete themselves upon execution.",
    author: "Robert Sewell",
  },
  {
    quote:
      "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.",
    author: "Eagleson’s Law",
  },
  {
    quote:
      "Good programmers use their brains, but good guidelines save us having to think out every case.",
    author: "Francis Glassborow",
  },
  {
    quote:
      "Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline.",
    author: "Bill Clinton",
  },
  {
    quote:
      "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    author: "Edsger W. Dijkstra",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    author: "Martin Golding",
  },
  {
    quote: "Everything that can be invented has been invented.",
    author: "Charles H. Duell, Commissioner, U.S. Office of Patents, 1899",
  },
  {
    quote: "I think there’s a world market for about 5 computers.",
    author: "Thomas J. Watson, Chairman of the Board, IBM, circa 1948",
  },
  {
    quote:
      "It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years.",
    author: "John Von Neumann, circa 1949",
  },
  {
    quote: "But what is it good for?",
    author:
      "Engineer at the Advanced Computing Systems Division of IBM, commenting on the microchip, 1968",
  },
  {
    quote:
      "There is no reason for any individual to have a computer in his home.",
    author: "Ken Olson, President, Digital Equipment Corporation, 1977",
  },
  {
    quote: "640K ought to be enough for anybody.",
    author: "Bill Gates, 1981",
  },
  {
    quote:
      "Windows NT addresses 2 Gigabytes of RAM, which is more than any application will ever need.",
    author: "Microsoft, on the development of Windows NT, 1992",
  },
  {
    quote:
      "We will never become a truly paper-less society until the Palm Pilot folks come out with WipeMe 1.0.",
    author: "Andy Pierson",
  },
  {
    quote:
      "If it keeps up, man will atrophy all his limbs but the push-button finger.",
    author: "Frank Lloyd Wright",
  },
  {
    quote:
      "Functional programming is like describing your problem to a mathematician. Imperative programming is like giving instructions to an idiot.",
    author: "arcus, #scheme on Freenode",
  },
  {
    quote:
      "Its a shame that the students of our generation grew up with windows and mice because that tainted our mindset not to think in terms of powerful tools. Some of us are just so tainted that we will never recover.",
    author: "Jeffrey Mark Siskind <qobi@research.nj.nec.com> in comp.lang.lisp",
  },
  {
    quote: "Lisp is a programmable programming language.",
    author: "John Foderaro",
  },
  {
    quote:
      "I guess, when you're drunk, every woman looks beautiful and every language looks (like) a Lisp :)",
    author: "Lament, #scheme@freenode.net",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas Edison",
  },
  {
    quote:
      "You must always work not just within but below your means. If you can handle three elements, handle only two. If you can handle ten, then handle five. In that way the ones you do handle, you handle with more ease, more mastery and you create a feeling of strength in reserve.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "When you’ve got the code all ripped apart, it’s like a car that’s all disassembled. You’ve got all the parts tying all over your garage and you have to replace the broken part or the car will never run. It’s not fun until the code gets back to the baseline again.",
    author:
      "Gary Kildall (inventor of CP/M, one of the first OS for the micro).",
  },
  {
    quote:
      "Well, if you talk about programming to a group of programmers who use the same language, they can become almost evangelistic about the language. They form a tight-knit community, hold to certain beliefs, and follow certain rules in their programming. It’s like a church with a programming language for a Bible.",
    author:
      "Gary Kildall (inventor of CP/M, one of the first OS for the micro).",
  },
  {
    quote:
      "It’s a problem if the design doesn’t let you add features at a later date. If you have to redo a program, the hours you spend can cause you to lose your competitive edge. A flexible program demonstrates the difference between a good designer and someone who is just getting a piece of code out.",
    author:
      "Gary Kildall (inventor of CP/M, one of the first OS for the micro).",
  },
  {
    quote:
      "[How friendly will this machine be?] Well, I don’t think it’s a matter of friendliness, because ultimately if the program is going to accomplish anything of value, it will probably be relatively complex.",
    author:
      "Gary Kildall (inventor of CP/M, one of the first OS for the micro).",
  },
  {
    quote:
      "Some people suggest that machines would be friendlier if input could be in a natural language. But natural language is probably the worst kind of input because it can be quite ambiguous. The process of retrieving information from the computer would be so time-consuming that you would be better off spending that time getting the information directly from an expert.",
    author:
      "Gary Kildall (inventor of CP/M, one of the first OS for the micro).",
  },
  {
    quote:
      "The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
    author: "Arthur C. Clarke",
  },
  {
    quote:
      "Any sufficiently advanced technology is undistinguishable from magic.",
    author: "Arthur C. Clarke",
  },
  {
    quote:
      "That is the inevitable human response. We’re reluctant to believe that great discoveries are in the air. We want to believe that great discoveries are in our heads—and to each party in the multiple the presence of the other party is invariably cause for suspicion.",
    author: "Malcolm Gladwell, Who says big ideas are rare?",
  },
  {
    quote:
      "Good ideas are out there for anyone with the wit and the will to find them.",
    author: "Malcolm Gladwell, Who says big ideas are rare?",
  },
  {
    quote:
      "A person won't become proficient at something until he or she has done it many times. In other words., if you want someone to be really good at building a software system, he or she will have to have built 10 or more systems of that type.",
    author: "Philip Greenspun",
  },
  {
    quote:
      "A person won't retain proficiency at a task unless he or she has at one time learned to perform that task very rapidly. Learning research demonstrates that the skills of people who become accurate but not fast deteriorate much sooner than the skills of people who become both accurate and fast.",
    author: "Philip Greenspun",
  },
  {
    quote:
      "Training research shows that if you get speed now you can get quality later. But if you don't get speed you will never get quality in the long run.",
    author: "Philip Greenspun",
  },
  {
    quote:
      "Beware of bugs in the above code; I have only proved it correct, not tried it.",
    author: "Donald Knuth",
  },
  {
    quote:
      "Wear your best for your execution and stand dignified. Your last recourse against randomness is how you act — if you can’t control outcomes, you can control the elegance of your behaviour. You will always have the last word.",
    author: "Nassim Taleb",
  },
  {
    quote:
      "The human brain starts working the moment you are born and never stops until you stand up to speak in public.",
    author: "Anonymous",
  },
  {
    quote:
      "The trouble with the world is that the stupid are always cocksure and the intelligent are always filled with doubt.",
    author: "Bertrand Russell",
  },
  {
    quote:
      "Simple, clear purpose and principles give rise to complex, intelligent behavior. Complex rules and regulations give rise to simple, stupid behavior.",
    author: "Dee Hock, Birth of the Chaordic Age",
  },
  {
    quote:
      "C++ is like teenage sex: Everybody is talking about it all the time, only few are really doing it.",
    author: "unknown",
  },
  {
    quote:
      "Functional programming is to algorithms as the ubiquitous little black dress is to women's fashion.",
    author: 'Mark Tarver (of "The bipolar Lisp programmer" fame)',
  },
  {
    quote:
      "Java and C++ make you think that the new ideas are like the old ones. Java is the most distressing thing to hit computing since MS-DOS.",
    author: "Alan Kay",
  },
  {
    quote:
      "For complex systems, the compiler and development environment need to be in the same language that its supporting. It's the only way to grow code.",
    author: "Alan Kay",
  },
  {
    quote: "Simple things should be simple. Complex things should be possible.",
    author: "Alan Kay",
  },
  {
    quote:
      "I invented the term Object-Oriented, and I can tell you I did not have C++ in mind.",
    author: "Alan Kay",
  },
  {
    quote: "All creativity is an extended form of a joke.",
    author: "Alan Kay",
  },
  {
    quote:
      "If you don't fail at least 90 percent of the time, you're not aiming high enough.",
    author: "Alan Kay",
  },
  {
    quote:
      "Revolutions come from standing on the shoulders of giants and facing in a better direction.",
    author: "Alan Kay",
  },
  {
    quote:
      "Ce n’est que par les beaux sentiments qu’on parvient à la fortune !",
    author: "Charles Baudelaire, Conseils aux jeunes littérateurs.",
  },
  {
    quote:
      "La haine est une liqueur précieuse, un poison plus cher que celui des Borgia, - car il est fait avec notre sang, notre santé, notre sommeil, et les deux tiers de notre amour! Il faut en être avare!",
    author: "Charles Baudelaire, Conseils aux jeunes littérateurs.",
  },
  {
    quote:
      "L’art qui satisfait le besoin le plus impérieux sera toujours le plus honoré.",
    author: "Charles Baudelaire, Conseils aux jeunes littérateurs.",
  },
  {
    quote:
      "If it looks like a duck, walks like a duck, and quacks like a duck, it's a duck.",
    author: 'Official definition of "duck typing"',
  },
  {
    quote:
      "In OO, it's the data that is the \"important\" thing: you define the class which contains member data, and only incidentally contains code for manipulating the object. In FP, it's the code that's important: you define a function which contains code for working with the data, and only incidentally define what the data is.",
    author: "almkgor, on reddit",
  },
  {
    quote:
      "Des mots simples, quand ils sont bien utilisés, font faire à des gens ordinaires des choses extraordinaires.",
    author: "Khaled TANGAO",
  },
  {
    quote:
      "It was Edison who said ‘1% inspiration, 99% perspiration’. That may have been true a hundred years ago. These days it's ‘0.01% inspiration, 99.99% perspiration’, and the inspiration is the easy part.",
    author: "Linux Torvalds",
  },
  {
    quote:
      "The greatest challenge to any thinker is stating the problem in a way that will allow a solution.",
    author: "Bertrand Russell",
  },
  {
    quote:
      "No matter how much you plan you’re likely to get half wrong anyway. So don’t do the ‘paralysis through analysis’ thing. That only slows progress and saps morale.",
    author: "37 Signal, Getting real",
  },
  {
    quote:
      "[Innovation] comes from saying no to 1,000 things to make sure we don’t get on the wrong track or try to do too much. We’re always thinking about new markets we could enter, but it’s only by saying no that you can concentrate on the things that are really important.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The ability to simplify means to eliminate the unnecessary so that the necessary may speak.",
    author: "Hans Hofmann",
  },
  {
    quote:
      "However beautiful the strategy, you should occasionally look at the results.",
    author: "Winston Churchill",
  },
  {
    quote: "Genius is 1% inspiration and 99% perspiration.",
    author: "Thomas Edison",
  },
  {
    quote: "I’d rather write programs to write programs than write programs.",
    author: "Richard Sites",
  },
  {
    quote:
      "Heureux l'étudiant qui comme la Rivière peut suivre son cours sans quitter son lit...",
    author: "Sebastien, sur commentcamarche.net",
  },
  {
    quote:
      "Side projects are less masturbatory than reading RSS, often more useful than MobileMe, more educational than the comments on Reddit, and usually more fun than listening to keynotes.",
    author: "Chris Wanstrath",
  },
  {
    quote: ":nunmap can also be used outside of a monastery.",
    author: "Vim user manual",
  },
  {
    quote: "I had to learn how to teach less, so that more could be learned.",
    author: "Tim Gallwey, The inner game of work",
  },
  {
    quote:
      'Workers of the world, the chains that bind you are not held in place by a ruling class, a "superior" race, by society, the state, or a leader. They are held in place by none other than yourself. Those who seek to exploit are not themselves free, for they place no value in freedom. Who is it that really employs you and commands you to pick up your daily load? And who is it that you allow to pass judgment on the adequacy of your toil? Who have you empowered to dangle the carrot before you and threaten with disapproval? Who, when you wake each morning, sends you off to what you call your work? Is there an "I want to" behind all your "I have to," or have you been so long forgotten to yourself that "I want" exists only as an idea in your head? If you have disconnected from your soul\'s desire and are drowning in an ocean of "have to," then rise up and overthrow your master. Begin the journey toward emancipation. Work only in such a way that you are truly self-employed.',
    author: "Tim Gallwey, The inner game of work",
  },
  {
    quote:
      "The Work Begins Anew, The Hope Rises Again, And The Dream Lives On.",
    author: "Ted Kennedy",
  },
  {
    quote: "The hardest part of design ... is keeping features out.",
    author: "Donald Norman",
  },
  {
    quote: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson",
  },
  {
    quote: "The opposite of love is not hate, it is indifference.",
    author: "Elie Wiesel",
  },
  {
    quote:
      "Ecoute, crois en ton projet... Implique toi à fond... Trouve des aspects innovants pour te distinguer des autres. Tu verras que tu te feras remarquer très facilement...",
    author: "Khaled Tangao",
  },
  {
    quote: "Perpetual optimism is a force multiplier.",
    author: "Colin Powell",
  },
  {
    quote: "Be the change you want to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "The art of getting someone else to do something you want done because he wants to do it [Leadership].",
    author: "Dwight D. Enseinhover.",
  },
  {
    quote:
      "No one is all evil. Everybody has a good side. If you keep waiting, it will come up.",
    author: "Randy Pausch",
  },
  {
    quote: "Experience is what you get when you don't get what you want.",
    author: "Cited by Randy Pausch",
  },
  {
    quote: "Luck is where preparation meets opportunity.",
    author: "Randy Pausch",
  },
  { quote: "Bonne bosse et reste le boss.", author: "Darryl Amedon" },
  {
    quote: "The greatest of all weaknesses is the fear of appearing weak.",
    author: "J. B. Bossuet, Politics from Holy Writ, 1709",
  },
  {
    quote: "It's easier to ask forgiveness than it is to get permission.",
    author: "Rear Admiral Dr. Grace Hopper",
  },
  {
    quote: "An investment in knowledge always pays the best interest.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Natives who beat drums to drive off evil spirits are objects of scorn to smart Americans who blow horns to break up traffic jams.",
    author: "Mary Ellen Kelly",
  },
  {
    quote:
      "A CS professor once explained recursion as follows: A child couldn't sleep, so her mother told her a story about a little frog, who couldn't sleep, so the frog's mother told her a story about a little bear, who couldn't sleep, so the bear's mother told her a story about a little weasel... who fell asleep. ...and the little bear fell asleep; ...and the little frog fell asleep; ...and the child fell asleep.",
    author: "everything2.com",
  },
  {
    quote:
      "Never do the impossible. People will expect you to do it forever after.",
    author: "pigsandfishes.com",
  },
  {
    quote:
      "Hire people smarter than you. Work with people smarter than you. Listen to them. Let them lead you. Take the blame for all failures, give away the credit for all successes.",
    author: "How to fail: 25 secrets learned through failure",
  },
  {
    quote: "Give up control. You never really had it anyway.",
    author: "How to fail: 25 secrets learned through failure",
  },
  {
    quote:
      "Ne te mets pas de limite, la vie se chargera de la mettre a ta place.",
    author: "Darryl AMEDON",
  },
  {
    quote:
      "Only two things are infinite, the universe and human stupidity. And I'm not so sure about the former.",
    author: "Albert Einstein",
  },
  {
    quote: "The important thing is not to stop questioning.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Do not accept anything because it comes from the mouth of a respected person.",
    author: "Buddha",
  },
  {
    quote: "Work as intensely as you play and play as intensely as you work.",
    author: "Eric S. Raymond, How To Be A Hacker",
  },
  { quote: "A witty saying proves nothing.", author: "Voltaire" },
  {
    quote:
      "Sound methodology can empower and liberate the creative mind; it cannot inflame or inspire the drudge.",
    author: "Frederick P. Brooks, No Sliver Bullet.",
  },
  {
    quote:
      "La connaissance d'un défaut ne l'enlève pas, elle nous torture jusqu'à sa correction.",
    author: "Daniel Lovewin (Guillaume Kpotufe)",
  },
  {
    quote: "Je crois au flooding.",
    author: "Karim BAINA (en parlant du dailogue avec les administrations)",
  },
  {
    quote:
      "Il y a très loin de la velléité à la volnt, de la volonté à la résolution, de la résolution au choix des moyens, du choix ds moyens à lapplication.",
    author: "Jean-François Paul de Gondi de Retz",
  },
  {
    quote:
      "Do not spoil what you have by desiring what you have not; but remember that what you now have was once among the things only hoped for.",
    author: "Greek philosopher Epicurus",
  },
  {
    quote: "Nobody can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },
  {
    quote: "The opposite of love is not hate, it's indifference.",
    author: "Elie Wiesel",
  },
  {
    quote: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
  },
  { quote: "It's easy if you try.", author: "John Lennon" },
  {
    quote: "Our society is run by insane people for insane objectives.",
    author: "John Lennon",
  },
  {
    quote:
      "Count your age by friends, not years. Count your life by smiles, not tears.",
    author: "John Lennon",
  },
  {
    quote:
      "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
    author: "John Lennon",
  },
  {
    quote:
      "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    author: "Mark Twain",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "In terms of energy, it's better to make a wrong choice than none at all.",
    author: "George Leonard, Mastery.",
  },
  { quote: "Courage is grace under pressure.", author: "Ernest Hemingway" },
  {
    quote:
      "Actually, the essence of boredom is to be found in the obsessive search for novelty. Satisfaction lies in mindful repetition, the discovery of endless richness in subtle variations on familiar themes.",
    author: "George Leonard, Mastery.",
  },
  {
    quote:
      "Before enlightenment, chop wood and carry water. After enlightenment, chop wood and carry water.",
    author: "Ancient Eastern adage",
  },
  {
    quote:
      "Acknowledging the negative doesn't mean sniveling [whining, complaining]; it means facing the truth and then moving on.",
    author: "George Leonard, Mastery.",
  },
  {
    quote:
      "Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it.",
    author: "Goethe",
  },
  {
    quote:
      "What we choose to fight is so tiny! What fights us is so great! ... When we win it's with small things, and the triumph itself makes us small. ... Winning does not tempt that man. This is how he grows: by being defeated, decisively, by constantly greater beings.",
    author: "Rainer Maria Rilke, The Man Watching.",
  },
  {
    quote:
      "We fail to realize that mastery is not about perfection. It's about a process, a journey. The master is the one who stays on the path day after day, year after year. The master is the one who is willing to try, and fail, and try again, for as long as he or she lives.",
    author: "George Leonard, Mastery.",
  },
  {
    quote: "Are you willing to wear your white belt?",
    author: "George Leonard, Mastery.",
  },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  {
    quote:
      "Whatever you hold in your mind on a consistent basis is exactly what you will experience in your life.",
    author: "Tony Robbins",
  },
  {
    quote:
      "Some people make your laugh a little louder, your smile a little brighter and your life a little better. Try to be one of those people.",
    author: "unknown",
  },
  {
    quote:
      "And when you told me what your favorite book was, I bought it and read it over and over ... trying to find pieces of you in it.",
    author: "unknown",
  },
  {
    quote:
      "People are not good to each other. Perhaps if they were, our deaths would not be so sad.",
    author: "Charles Bukowski",
  },
  {
    quote:
      "I am completely independent, of the good or bad opionions of others.",
    author: "Leo from Actualized.org",
  },
  {
    quote:
      "A society grows great when old men plant trees in whose shade they know they shall never sit.",
    author: "an ancient Greek proverb?",
  },
  {
    quote:
      "You are here, and life exists and identity. The powerful play goes on and you may contribute a verse. What will your verse be?",
    author: "Dead Poet's Society",
  },
  {
    quote:
      "We don't read and write poetry because it's cute. We read and write poetry because we're members of the human race and the human race is filled with passion.",
    author: "Dead Poet's Society",
  },
  {
    quote:
      "Medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.",
    author: "Dead Poet's Society",
  },
  {
    quote:
      "No matter what anybody tells you, words and ideas can change the world.",
    author: "Dead Poet's Society",
  },
  {
    quote:
      "If I had asked people what they wanted, they would have said faster horses.",
    author: "Henry Ford",
  },
  {
    quote: "We have art in order not to die from the truth.",
    author: "Nietzsche",
  },
  {
    quote:
      "Society is collapsing, and people are starting to recognize that the reason they feel mentally ill is because they're living in a system that is not designed to suit the human spirit.",
    author: "Jim Carrey",
  },
  {
    quote:
      "When you truly don’t care what the fuck people think of you, you’ve reached a dangerous level of freedom.",
    author: "Jim Carrey",
  },
  {
    quote:
      "You know the secret, the difference between heaven and hell, is like, doing your work: you feel really shitty if you don't do your work but if you do your work, it's fucking awesome.",
    author: "Terry A. Davis",
  },
  {
    quote:
      "What's reality? I don't know. When my bird was looking at my computer monitor I thought \"Whoa! That bird has no idea what he's looking at.\" And yet what does the bird do? Does he panic? No, he can't really panic, he just does the best he can. Is he able to live in a world where he's so ignorant? Well, he doesn't really have a choice. The bird is okay even though he doesn't understand the world. You're that bird looking at the monitor, and you're thinking to yourself, I can figure this out. Maybe you have some bird ideas. Maybe that's the best you can do.",
    author: "Terry A. Davis",
  },
  {
    quote: "One day I will find the right words, and they will be simple.",
    author: "Jack Kerouac",
  },
  {
    quote:
      "An idiot admires complexity, a genius admires simplicity. A physicist tries to make it simple. Anyway, an idiot, anything the more complicated is the more he will admire it. If you make something so complicated he can't understand it, he's gonna think you're a god 'cause you made it so complicated nobody can understand it.",
    author: "Terry A. Davis",
  },
  {
    quote: "We need reasons to wake up in the morning.",
    author: "Elon Musk",
  },
  {
    quote:
      "We always want the future to be better than the past, a future that is exciting and one that the people want to live in.",
    author: "Elon Musk",
  },
  {
    quote:
      "Perhaps I could best describe my experience of doing mathematics in terms of entering a dark mansion. One goes into the first room, and it's dark, completely dark. One stumbles around bumping into the furniture, and gradually, you learn where each piece of furniture is, and finally, after six months or so, you find the light switch. You turn it on, and suddenly, it's all illuminated. You can see exactly where you were.",
    author: "Andrew Wiles",
  },
  {
    quote:
      "Most people overestimate what they can get done in a year and underestimate what they can do in a decade.",
    author: "Bill Gates",
  },
  {
    quote: "After all, love is a good reason for everything to go wrong.",
    author: "La Casa de papel | Tokyo",
  },
  {
    quote: "I'm going, she said. I love you but you're crazy, you're doomed.",
    author: "Charles Bukowski",
  },
  {
    quote:
      "If you're going to try, go all the way. Otherwise, don't even start. This could mean losing girlfriends, wives, relatives and maybe even your mind. It could mean not eating for three or four days. It could mean freezing on a park bench. It could mean jail. It could mean derision. It could mean mockery--isolation. Isolation is the gift. All the others are a test of your endurance, of how much you really want to do it. And, you'll do it, despite rejection and the worst odds. And it will be better than anything else you can imagine. If you're going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It's the only good fight there is.",
    author: "Charles Bukowski",
  },
  {
    quote:
      "I'm one of those people who feel good on their own, so if I'm looking for you, it's because I really want you.",
    author: "Anonymous",
  },
  {
    quote: "The most courageous act is still to think for yourself. Aloud.",
    author: "Coco Chanel",
  },
  {
    quote:
      "I have no money, no resources, no hopes. I am the happiest man alive.",
    author: "Henry Miller",
  },
  {
    quote: "The government has no money of its own. It's all your money.",
    author: "Margaret Thatcher",
  },
  {
    quote:
      "(1.00)³⁶⁵ = 1.00\n(1.01)³⁶⁵ = 37.7\nVery small steps are better than doing nothing at all.",
    author: "(source unknown)",
  },
  {
    quote: "Art is how we decorate space; Music is how we decorate time.",
    author: "Jean Michel Basquait",
  },
  {
    quote:
      "If the brain were so simple we could understand it, we would be so simple we couldn't.",
    author: "Lyall Watson",
  },
  {
    quote:
      "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.",
    author: "Edsger W. Dijkstra",
  },
  {
    quote: "If you get tired, learn to rest, not to quit.",
    author: "Banksy",
  },
  {
    quote:
      "There is a difference between knowing the path and walking the path.",
    author: "Morpheus, The Matrix",
  },
  {
    quote:
      "What is real? How do you define 'real'? If you're talking about what you can feel, what you can smell, what you can taste and see, then 'real' is simply electrical signals interpreted by your brain.",
    author: "Morpheus, The Matrix",
  },
  {
    quote:
      "I'm trying to free your mind, Neo. But I can only show you the door. You're the one that has to walk through it.",
    author: "Morpheus, The Matrix",
  },
  {
    quote:
      "You have the look of a man who accepts what he sees because he is expecting to wake up. Ironically, that's not far from the truth.",
    author: "Morpheus, The Matrix",
  },
  {
    quote:
      "You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes.",
    author: "Morpheus, The Matrix",
  },
  {
    quote:
      "You have to let it all go, Neo. Fear, doubt, and disbelief. Free your mind.",
    author: "Morpheus, The Matrix",
  },
  {
    quote: "Excellence is doing ordinary things extraordinarily well.",
    author: "John W. Gardner",
  },
  {
    quote:
      "We are what we repeatedly do. Excellence, therefore is not an act but an habit.",
    author: "Aristotle",
  },
  {
    quote: "I would never die for my beliefs because I might be wrong.",
    author: "Bertrand Russell",
  },
  {
    quote: "Life without love, is no life at all.",
    author: "Leonardo Da Vinci",
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo Da Vinci",
  },
  {
    quote: "All our knowledge has its origins in our perceptions.",
    author: "Leonardo Da Vinci",
  },
  {
    quote:
      "Learn how to see. Realize that everything connects to everything else.",
    author: "Leonardo Da Vinci",
  },
  {
    quote:
      "Why does the eye see a thing more clearly in dreams than the imagination when awake?",
    author: "Leonardo Da Vinci",
  },
  {
    quote: "Art is never finished, only abandoned.",
    author: "Leonardo Da Vinci",
  },
  {
    quote:
      "Learning is the only thing the mind never exhausts, never fears, and never regrets.",
    author: "Leonardo Da Vinci",
  },
  {
    quote:
      "People buy things they don't need with money they don't have to impress people they don't even like.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  {
    quote:
      "There are some things you can't share without ending up linking each other, and knocking out a twelve-foot mountain troll is one of them.",
    author: "Harry Potter and the Philosopher's Stone by J.K. Rowling",
  },
  {
    quote:
      "A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness.",
    author: "Albert Einstein",
  },
  {
    quote:
      "You are truly successful when you genuinely wish that things work out for everyone else too.",
    author: "unknown",
  },
  {
    quote:
      "A truly successful person is not one who achieves his highest ambitions, but one who enjoys helping others reach theirs.",
    author: "Charbel Tadros",
  },
  {
    quote: "Love is like the legal system: as real as you think it is.",
    author: "Grant Sanderson (3Blue1Brown)",
  },
  {
    quote:
      "Self-love is a sincere acceptance of the past, an agreement to make the most of the present and a willingness to allow the best to occur in the future (wholehearted)",
    author: "yung pueblo",
  },
  {
    quote: "If you don't like where you are, change it. You're not a tree.",
    author: "Jim Rohn",
  },
  {
    quote:
      "If you just sit and observe, you will see how restless your mind is. If you try to calm it, it only makes it worse, but over time it does calm, and when it does, there’s room to hear more subtle things – that’s when your intuition starts to blossom and you start to see things more clearly and be in the present more. Your mind just slows down, and you see a tremendous expanse in the moment. You see so much more than you could see before. It’s a discipline; you have to practice it.",
    author: "Steve Jobs",
  },
  {
    quote:
      "When people think you're dying, they really, really listen to you, instead of just waiting for their turn to speak.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      "I say never be complete, I say stop being perfect, I say let... lets evolve, let the chips fall where they may.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      "The things you own end up owning you. It's only after you lose everything that you're free to do anything.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      "We've all been raised on television to believe that one day we'd all be millionaires, and movie gods, and rock stars. But we won't. And we're slowly learning that fact. And we're very, very pissed off.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      "Shouldn't we be content to be cosmic sloths, enjoying the universe from the comfort of Earth? The answer is, no, The Earth is under threat from so many areas that it is difficult for me to be positive.",
    author: "Stephen Hawking",
  },
  {
    quote:
      "No matter how difficult life may seem, there is always something you can do and succeed at.",
    author: "Stephen Hawking",
  },
  {
    quote:
      "The future is an unknown, but a somewhat predictable unknown. To look to the future we must first look back upon the past. That is where the seeds of the future were planted. I never think of the future. It comes soon enough.",
    author: "Albert Einstein",
  },
  {
    quote:
      "When a distinguished but elderly scientist states that something is possible, he is almost certainly right. When he states that something is impossible, he is very probably wrong.",
    author: "Arthur C. Clarke",
  },
  {
    quote:
      "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
  },
  {
    quote:
      "The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
    author: "Arthur C. Clarke",
  },
  {
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
  },
  {
    quote:
      "The first step is to establish that something is possible. Then probability will occour.",
    author: "Elon Musk",
  },
  {
    quote:
      "If you get up in the mornnig and think the future is going to be better, it is a bright day. Otherwise, it's not.",
    author: "Elon Musk",
  },
  {
    quote: "If you need inspiring words, don't do it.",
    author: "Elon Musk",
  },
  {
    quote: "Good ideas are always crazy until they're not.",
    author: "Elon Musk",
  },
  {
    quote:
      "I think it is possible for ordinary people to choose to be extraordinary.",
    author: "Elon Musk",
  },
  {
    quote:
      "Don't confuse schooling with education. I didn't go to Harvard but the people that work for me did.",
    author: "Elon Musk",
  },
  {
    quote:
      "Failure is an option here. If things are not failing, you are not innovating.",
    author: "Elon Musk",
  },
  {
    quote: "Your will is the most accurate way to predict the future.",
    author: "Elon Musk",
  },
  {
    quote:
      "Patience is a virtue, and I'm learning patience. It's a tough lesson.",
    author: "Elon Musk",
  },
  {
    quote:
      "If the rules are such that you can't make progress, then you have to fight the rules.",
    author: "Elon Musk",
  },
  {
    quote:
      "You have to be pretty driven to make it happen. Otherwise, you will just make yourself miserable.",
    author: "Elon Musk",
  },
  {
    quote: "If there is one thing Voldemort cannot understand, it is love.",
    author: "Professor Dumbledore",
  },
  {
    quote:
      "After all, to the well-organized mind, death is but the next great adventure. You know, the Stone was really not such a wonderful thing. As much money and life as you could want! The two things most human beings would choose above all — the trouble is, humans do have a knack of choosing precisely those things that are worst for them.",
    author: "Professor Dumbledore",
  },
  {
    quote: "Funny, the way people’s minds work, isn't it?",
    author: "Professor Dumbledore",
  },
  {
    quote: "Find someone who shares your definition of love.",
    author: "@vintagefeeling on instagram",
  },
  {
    quote:
      "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
    author: "Albert Einstein",
  },
  {
    quote: "Imagination is more important than knowledge.",
    author: "Albert Einstein",
  },
  {
    quote:
      "We dance for laughter, we dance for tears, we dance for madness, we dance for fears, we dance for hopes, we dance for screams, we are the dancers, we create the dreams.",
    author: "Albert Einstein",
  },
  {
    quote:
      "If you can't fly then run. If you can't run then walk. If you can't walk, then crawl, but by all means, keep moving.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "Only in the darkness can you see the stars.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "It's impossible to fail if you learn from your mistakes. Don't give up.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote: "Dance first. Talk later. It's the natural order.",
    author: "Samuel Beckett",
  },
  {
    quote: "The best angle from which to approach any problem is the TRYangle.",
    author: "unknown",
  },
  {
    quote:
      "Feeling embarrassed by your old work isn't a sign of incompetence. It's a mark of growth. Being critical of your past performance means you've raised your standards, refined your taste, or improved your judgement. It's a path to producing something better in the future.",
    author: "Adam Grant",
  },
  {
    quote:
      "I gained nothing at all from Supreme Enlightenment, and for that very reason it is called Supreme Enlightenment.",
    author: "Buddha",
  },
  { quote: "Wherever you go, there you are.", author: "Jon Kabbat Zinn" },
  {
    quote:
      'CFO asks CEO: "What happens if we invest in developing out people and then they leave us?" CEO: "What happens if we don\'t, and they stay?"',
    author: "unknown",
  },
  {
    quote:
      "He is a great man who uses earthenware dishes as if they were silver; but he is equally great who uses silver as if it were earthenware. It is the sign of an unstable mind not to be able to endure riches.",
    author: "Seneca",
  },
  {
    quote:
      "I don’t think I was ever motivated by the notion of winning prizes, although I have a couple of dozen of them in the other room. I was more motivated by curiosity. Never by the desire for financial gain. I just wondered how things were put together. Or what laws or rules govern a situation, or if there are theorems about what one can’t or can do. Mainly because I wanted to know myself.",
    author: "Claude Shannon",
  },
  {
    quote: "Life is short my friend. Make each second count.",
    author: "unknown",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    quote:
      "Porn isn't real sex.\nCocaine isn't real energy.\nAlcohol isn't real courage.\nGambling isn't real investing.\nVideo games aren't real life.\nCaffeine isn't real adrenaline.\nNightly news aren't real facts.\nSocial media isn't really social.\nBusiness book aren't real business.",
    author: "unknown",
  },
  {
    quote: "Folks who want porn can buy an android.",
    author: "Steve Jobs",
  },
  {
    quote: "The trouble is, you think you have time.",
    author: "probably Buddha",
  },
  {
    quote:
      "Look at the birds in the air. They don’t plant or harvest or store food in barns, but your heavenly Father feeds them. And you know that you are worth much more than the birds. You cannot add any time to your life by worrying about it.",
    author: "Jesus | Matthew 6:26-27",
  },
  {
    quote:
      "So don’t worry about tomorrow, for tomorrow will bring its own worries. Today’s trouble is enough for today.",
    author: "Jesus | Matthew 6:34",
  },
  {
    quote:
      "Peace is what I leave with you; it is my own peace that I give you. I do not give it as the world does. Do not be worried and upset; do not be afraid.",
    author: "Jesus | John 14:27",
  },
  {
    quote:
      "Love each other. Just as I have loved you, you should love each other.",
    author: "Jesus | John 13:34-35",
  },
  {
    quote: "You can have what you want but you have to figure out what it is.",
    author: "Jordan Peterson",
  },
  {
    quote:
      "Non credo di aver mai avuto un weekend libero negli ultimi 10 anni, però tutto quello che facevo era appassionante. Quindi se per esempio avevo un weekend in Germania per uno stage oppure in America per fare una lezione, ero contento, ed anche se già il giorno dopo avevo una lezione all'università, anche quella mi piaceva. Questo non vuol dire che uno non si stanca, però la stanchezza fatta di cose che ti appassionano si recupera molto in fretta. L'importante è stancarsi per cose che si amano, ed allora lì la stanchezza non la senti.",
    author: "Alessandro Steri",
  },
  {
    quote:
      "The alternative to valued responsibility is impulsive low-class pleasure.",
    author: "Jordan Peterson",
  },
  {
    quote: "That's your life and its ending one moment at a time.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      "How happy is the blameless vestal’s lot! The world forgetting, by the world forgot. Eternal sunshine of the spotless mind! Each pray’r accepted, and each wish resign’d",
    author: "Alexander Pope",
  },
  {
    quote:
      "You are not your job, you're not how much money you have in the bank. You are not the car you drive. You're not the contents of your wallet. You are not your fucking khakis. You are not special. You're not a beautiful and unique snowflake. You are all singing, all dancing crap of the world. We're all singing, all dancing crap of the world. You're the same decaying organic matter as everything else. We're all part of the same compost heap.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      "You buy furniture. You tell yourself, this is the last sofa I will ever need in my life. Buy the sofa, then for a couple years you're satisfied that no matter what goes wrong, at least you've got your sofa issue handled. Then the right set of dishes. Then the perfect bed. The drapes. The rug. Then you're trapped in your lovely nest, and the things you used to own, now they own you.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      "We've all been raised on television to believe that one day we'd all be millionaires, and movie gods, and rock stars. But we won't. And we're slowly learning that fact. And we're very, very pissed off.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      '"If you don\'t know what you want," the doorman said, "you end up with a lot you don\'t.”',
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      "I used to think that the world was doing something to me, that the world owed me something. And that either the conservatives or the socialists or the fascists or the communists or the Christians or the Jews or the fascists were doing something to me. And when you're a teeny-booper, that's what you think. I'm 40 now, I don't think that anymore—because I found out it doesn't fucking work. I am part of them. There's no separation. Were all one. \"Give peace a chance,\" not \"Shoot people for peace.\" \"All you need is love.\" I believe it. It's damn hard, but I absolutely believe it.",
    author: "John Lennon",
  },
  {
    quote:
      "The most powerful person in the world is the storyteller. The storyteller sets the vision, values and agenda of an entire generation that is to come.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Every gun that is made, every warship launched, every rocket fired signifies in the final sense, a theft from those who hunger and are not fed, those who are cold and are not clothed. This world in arms is not spending money alone. It is spending the sweat of its laborers, the genius of its scientists, the hopes of its children. This is not a way of life at all in any true sense. Under the clouds of war, it is humanity hanging on a cross of iron.",
    author: "Dwight D. Eisenhower",
  },
  {
    quote: "Great art stretches the taste, it doesn't follow tastes.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Here's to the crazy ones.\n The misfits.\nThe rebels.\nThe troublemakers.\nThe round pegs in the square holes.\nThe ones who see things differently.\nThey're not fond of rules.\nAnd they have no respect for the status quo.\nYou can quote them, disagree with them,\nglorify or vilify them.\nAbout the only thing you can't do is ignore them.\nBecause they change things.\nThey invent. They imagine. They heal.\nThey explore. They create. They inspire.\nThey push the human race forward.\nMaybe they have to be crazy.\nHow else can you stare at an empty canvas and see a work of art?\nOr, sit in silence and hear a song that’s never been written?\nOr, gaze at a red planet and see a laboratory on wheels?\nWe make tools for these kinds of people.\nWhile some may see them as the crazy ones,\nwe see genius.\nBecause the people who are crazy enough to think\nthey can change the world, are the ones who do.",
    author: "Apple, 1997, Think Different",
  },
  {
    quote:
      "You can easily judge the character of a man by how he treats those who can do nothing for him.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "To play a wrong note is insignificant; to play without passion is inexcusable.",
    author: "Ludwig van Beethoven",
  },
  {
    quote:
      "If you treat an individual as he is, he will remain how he is. But if you treat him as if he were what he ought to be and could be, he will become what he ought to be and could be.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "A man should hear a little music, read a little poetry, and see a fine picture every day of his life, in order that worldly cares may not obliterate the sense of the beautiful which God has implanted in the human soul.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "There's beauty in everything, just not everyone sees it.",
    author: "Park Jimin",
  },
  {
    quote: "Nobody is born with insecurities we are told to have them.",
    author: "Lili Reinhart",
  },
  {
    quote: "No one is born ugly, we're just born in a judgemental society.",
    author: "Kim Namjoon",
  },
  {
    quote:
      "If it is not gonna matter in 5 years, don't spend more than 5 minutes being upset about it.",
    author: "Matthew McConaughey",
  },
  {
    quote:
      "If you seek peace, be still. If you seek wisdom, be silent. If you seek love, be yourself.",
    author: "@psychepage on instagram",
  },
  {
    quote:
      "No problem can be solved from the same level of consciousness that created it.",
    author: "Albert Einstein",
  },
  {
    quote: "Polymorphism abstracts types, just as functions abstract values.",
    author: "Jeremy Yallop and Leo White",
  },
  {
    quote: "The Future is already here. It's just not evenly distributed yet.",
    author: "William Gibson",
  },
  {
    quote:
      'I think that in terms of creating a company, what Edison said (which was like "it\'s 1% inspiration and 99% perspiration") is true, so a lot of creating a company is execution: you start off with an idea and that idea is mostly wrong and then you adapt that idea, keep refining it, listen to your criticism (try to discard the wrong criticism, try to listen to the correct criticism) and then engage in a sort of recursive self-improvement, constantly refining it and making it better (it\'s very important to work super hard) and finally just keep making sure you keep iterating on a loop which says "am I doing something useful for other people?" because that\'s what a company is supposed to do, a company is just a group of people gathered together to produce a product or service and a company should only exist if that product or service is truly useful to customers.',
    author: "Elon Musk",
  },
  {
    quote:
      "I discovered that the best innovation is sometimes the company, the way you organize the company. The whole notion of how you build a company is fascinating. When I got the chance to come back to Apple, I realized that I would be useless without the company, and that's why I decided to stay and rebuild it.",
    author:
      "Steve Jobs about why a properly run company could spawn innovation far more than any single creative individual",
  },
  {
    quote:
      "Ask yourself the 3 things you must always ask yourself before you say anything:\n  1. Does this need to be said?\n  2. Does this need to be said by me?\n  3. Does this need to be said my me now?",
    author: "Craig Ferguson",
  },
  {
    quote: "Elegance is not about being noticed, it's about being remembered.",
    author: "Giorgio Armani",
  },
  {
    quote:
      "Knowing is not enough, we must apply. Willing is not enough, we must do.",
    author: "Bruce Lee",
  },
  {
    quote:
      "Out of every one hundred men, ten shouldn't even be there, eighty are just targets, nine are the real fighters, and we are lucky to have them, for they make the battle. Ah, but the one, one is a warrior, and he will bring the others back.”",
    author: "Heraclitus",
  },
  {
    quote: "Glossy surfaces reflect much more than they reveal.",
    author: "Goggins",
  },
  {
    quote:
      '"Monetize your passions" it\'s more like exploiting your passions to the point where they become a source of stress and pressure in your life and you end up loosing/hating the passion',
    author: "Random comment on YouTube",
  },
  {
    quote: "Life is a constant war between mind and hearth.",
    author: "unknown",
  },
  { quote: "Flow is meditation while doing.", author: "Naval Rakikant" },
  { quote: "Happiness is peace in motion.", author: "Naval Rakikant" },
  {
    quote: "Be a good person but don't waste your time proving it.",
    author: "Wise Chimp on Twitter",
  },
  { quote: "Play Stupid Games, Win Stupid Prizes", author: "unknown" },
  {
    quote:
      "Never start a business just to make money. Start a business to make a difference.",
    author: "Marie Forleo",
  },
  {
    quote: "Unlike energy, creativity grows the more you use it.",
    author: "Brainiac on Twitter",
  },
  {
    quote:
      "To the constant beginners who sing off-key against the beat. To those unfamiliar with convention, unmoved by rules, and reborn with every new discovery. Those open to daydreams and night dreams and visions and mirages. Who can see the millions of shades of green in a field of grass. Whose days are filled with mysteries that cannot be solved with facts. You are more powerful than you think... and you are welcome here.",
    author: 'Apple "Join us. Be you." ad',
  },
  {
    quote:
      "Measure your wealth by what you'd have left if you lost all your money.",
    author: "@wealth_director on Twitter",
  },
  {
    quote: "Are you adding to the noise, or are you cutting through the noise?",
    author: "Michael Reyes on Twitter",
  },
  {
    quote: "Never explain why something important is important.",
    author: "Nassim Nicholas Taleb on Twitter",
  },
  {
    quote: "The more silence you appreciate the more powerful you become.",
    author: "Nico James on Twitter",
  },
  {
    quote: "Silence is a source of great strength.",
    author: "Lao Tzu",
  },
  {
    quote: "Time spent has nothing to do with job done.",
    author: "Naval Ravikant",
  },
  {
    quote: "People need to understand that comparison isn't motivation.",
    author: "Richard Feynman",
  },
  {
    quote: "If your target audience is everyone, it's no one.",
    author: "Thea Knobel on Twitter",
  },
  {
    quote: "Read what you love until you love to read.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Trade money for time, not time for money. You're going to run out of time first.",
    author: "Naval Ravikant",
  },
  {
    quote: "Rich people get paid by the project and pay by the hour.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Never let someone make you feel guilty for doing what's best for yourself.",
    author: "@Risk7aker on Twitter",
  },
  { quote: "Anatt? : The self is an illusion", author: "Buddha" },
  { quote: "What we think, we become.", author: "Buddha" },
  {
    quote: "Don't expect what you don't communicate.",
    author: "We're Not Really Strangers on Twitter",
  },
  {
    quote: "It's better to conquer grief than to deceive it.",
    author: "Seneca",
  },
  {
    quote:
      "If you don't want to go to the meeting right now, your future self won't want to go to it later, either.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "It's shocking how many important life decisions I make by scouring Internet forums.",
    author: "Naval Ravikant",
  },
  {
    quote: "If you think of someone, let them know.",
    author: "@flcnhvy on Twitter",
  },
  {
    quote: "Clear thinkers take feedback from reality, not society.",
    author: "Naval Ravikant",
  },
  {
    quote: "Don't be afraid to express yourself. Be YOU.",
    author: "Naval Ravikant",
  },
  {
    quote: "No one knows how to do anything until they do it.",
    author: "@shl on Twitter",
  },
  {
    quote: "Freedom is a fast car and an open road.",
    author: "Naval Ravikant",
  },
  {
    quote: "Love people. Use things. The opposite never works.",
    author: "The Minimalists",
  },
  {
    quote:
      "The best way, perhaps the only way, to change others is to become an example.",
    author: "Naval Ravikant",
  },
  {
    quote: "I'm smart enough to know that I'm dumb.",
    author: "Richard Feynman",
  },
  {
    quote:
      "To avoid pain, they avoid pleasure.\n To avoid death, they avoid life.",
    author: "Osho",
  },
  {
    quote: "Learning is a privilege for the brain.",
    author: "@Th3Brainiac on Twitter",
  },
  {
    quote: "In order to be irreplaceable one must always be different.",
    author: "Coco Chanel",
  },
  {
    quote:
      "A vacation is a very expensive way to schedule the time to read a book in peace.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "At every job you should either learn or earn. Either is fine. Both is best. But if it's neither, quit.",
    author: "@garrytan on Twitter",
  },
  {
    quote:
      "The great viruses of our time spread through minds, not through bodies.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "You can't prepare for everything but if you engage in strategic visualization ahead of time, you'll be as prepared as you possibly can be.",
    author: "David Goggins",
  },
  {
    quote:
      "When you grow up you tend to get told that the world is the way it is and your life is just to live your life inside the world. Try not to bash into the walls too much. Try to have a nice family life, have fun, save a little money. That's a very limited life. Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it… Once you learn that, you'll never be the same again.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The power of accurate observation is commonly called cynicism by those who have not got it.",
    author: "George Bernard Shaw",
  },
  {
    quote: "You get what you work for, not what you wish for.",
    author: "@Wealthy_Brains on Twitter",
  },
  {
    quote:
      "If you tell the truth, it becomes a part of your past. If you lie, it becomes a part of your future.",
    author: "John Spence",
  },
  {
    quote:
      "People think a soulmate is your perfect fit, and that’s what everyone wants. But a true soulmate is a mirror, the person who shows you everything that is holding you back, the person who brings you to your own attention so you can change your life. A true soul mate is probably the most important person you’ll ever meet because they tear down your walls and smack you awake. A soulmate's purpose is to shake you up, tear apart your ego a little bit, show you your obstacles and addictions, break your heart open so new light can get in, Make you so out of control that you have to transform your life.",
    author: "Elizabeth Gilbert",
  },
  {
    quote:
      "We didn't realize we were making memories, we just knew we were having fun.",
    author: "Winnie the Pooh",
  },
  {
    quote: "The best project you'll ever work on is yourself.",
    author: "Sonny Franco",
  },
  {
    quote:
      "Investing should be more like watching paint dry of watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
    author: "Paul Samuelson",
  },
  {
    quote:
      "People who are living far below their means enjoy a freedom that people busy upgrading their lifestyles just can’t fathom.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Going to work isn't exactly like spending the day in a theme park, unless you work in a theme park.",
    author: "An article on studenthut.com",
  },
  {
    quote:
      "The hard part wasn't going to prison. It was getting out and trying to be part of society again. Because at one time I was a contractor, I had four employees, a three-bedroom house, blah blah blah blah, and I had to lose it all to realize it was just stuff. When I discharged my sentence, February 11, 2011, I became a citizen again. Now I can go in and vote for the president, but I can't get a job here or there, and I can't have any apartments because they won't accept felons. I even went through an agency that took felons, and they'll give a pedophile an apartment before me because I had a drug charge. I wasn't even dealing drugs: I just had possession, but they're worried for anybody that had drugs that they could sell it in their apartments, and they won't give them one. They give pedophiles an apartment and not me because I had a drug felony. So the hard part was becoming part of society again. It's like they didn't want me to be part of their society anymore. So I just decided <<Fuck it! I'm going to sleep in a tent. I'm going to do what I love for a living, which is playing music. And If I make a little bit of money, I'd prefer to do what I love with passion rather than go back to contracts and try to make a lot of money and be part of a society that doesn't even want me anymore>>. Fuck them, you know, fuck society. That's what I feel. I'm just trying to make the world a better place, a more beautiful place, and if music and art can do it, and somebody appreciates it, and I can make a positive difference in one person's life, that's all that matters.",
    author:
      'The guy from the viral YouTube video "Homeless guy spits some truth."',
  },
  {
    quote: "Love your neighbor as yourself.",
    author: "Jesus",
  },
  {
    quote:
      "Pro tip: whenever you see people defining themselves by one thing, that culture is going to be toxic.",
    author: "Jarvis Johnson",
  },
  {
    quote: "Art is a lie that reveals the truth.",
    author: "Picasso",
  },
  {
    quote: "You’re offended when you fear that it might be true.",
    author: "Naval Ravikant",
  },
  {
    quote: "Vibes speak louder than words",
    author: "Probably Gabby Bernstein",
  },
  {
    quote:
      "Rich is measured in $. Wealth is measured in time. Ho long you can survive without working is how wealthy you are. For example, most people think $1 million is rich but if you spend $100k a month, your wealth is only 10 months. Rich is some shit you can lose with a crazy summer and a drug habit",
    author: "?",
  },
  {
    quote:
      "Without communication, there is no relationship. Without respect there is no love. Without trust, there's no reason to continue.",
    author: "?",
  },
  {
    quote: "What you deserve will always find its way in the end",
    author: "?",
  },
  {
    quote: "Discipline today leads to options tomorrow.",
    author: "?",
  },
  {
    quote: "Escape competition through authenticity.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Be teachable! You're not always right. Humility is necessary for growth!",
    author: "Richard Feynman",
  },
  {
    quote:
      "When you have exhausted all possibilities, remember this - you haven't.",
    author: "Thomas Edison",
  },
  {
    quote: "The less scheduled you are, the more creative you’re going to be.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "If you create it for yourself, it's art.\n If you create it for others, it's business.",
    author: "Naval Ravikant",
  },
  {
    quote: "Be - don't try to become.",
    author: "Osho",
  },
  {
    quote: "Adults play characters.\nChildren only play.",
    author: "@zen_fi on Twitter",
  },
  {
    quote: "Your consistency can beat any talent. Don't let it down.",
    author: "@Wealthy_Brains on Twitter",
  },
  {
    quote: "Social science is fake science.",
    author: "Naval Ravikant",
  },
  {
    quote: "Life is a comedy to those who think, a tragedy to those who feel.",
    author: "Jean Racine",
  },
  {
    quote: "Excitement fades, but the value remains.",
    author: "Matt D'Avella",
  },
  {
    quote: "Anything that just costs money is cheap.",
    author: "John Steinbeck",
  },
  {
    quote:
      "Anger is a big part of the formula, for passion is anger and love combined",
    author: "Robert Kiyosaki",
  },
  {
    quote: "Computers are like a bicycle for our minds.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is never owned, it is rented, and the rent is due every day.",
    author: "Rory Vaden",
  },
  {
    quote:
      "It is not the critic who counts: not the man who points out how the strong man stumbles or where the doer of deeds could have done better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood, who strives valiantly, who errs and comes up short again and again, because there is no effort without error or shortcoming, but who knows the great enthusiasms, the great devotions, who spends himself for a worthy cause; who, at the best, knows, in the end, the triumph of high achievement, and who, at the worst, if he fails, at least he fails while daring greatly, so that his place shall never be with those cold and timid souls who knew neither victory nor defeat.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "When force of circumstance upsets your equanimity, lose no time in recovering your self-control, and do not remain out of tune longer than you can help. Habitual recurrence to the harmony will increase you mastery of it.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "A gift consists not in what is done or given, but in the intention of the giver or doer.",
    author: "Seneca",
  },
  {
    quote:
      "God never tries of forgiving us; we are the ones who tire of seeking his mercy.",
    author: "Pope Francis",
  },
  {
    quote:
      "As is a tale, so is life: not how long it is, but how good it is, is what matters.",
    author: "Seneca",
  },
  {
    quote:
      "Happiness and freedom begin with a clear understanding of one principle: some things are within our control, and some things are not.",
    author: "Epictetus",
  },
  {
    quote:
      "It is not events that disturb people, it is their judgements concerning them.",
    author: "Epictetus",
  },
  {
    quote: "We suffer more in imagination than in reality",
    author: "Seneca",
  },
  {
    quote:
      "If you would not have a man flinch when the crisis comes, train him before it comes.",
    author: "Seneca",
  },
  {
    quote:
      "When you're alone you should call this condition tranquillity and freedom, and think of yourself like the gods; and when you are with many, you shouldn't call it a crowd, or trouble, or uneasiness, but festival and company, and contentedly accept it.",
    author: "Epictetus",
  },
  {
    quote:
      "Life's most persistent and urgent question is, 'What are you doing for others?'",
    author: "Martin Luther King",
  },
  {
    quote:
      "Doctors won’t make you healthy. Nutritionists won’t make you slim. Teachers won’t make you smart. Gurus won’t make you calm. Mentors won’t make you rich. Trainers won’t make you fit. Ultimately, you have to take responsibility. Save yourself.",
    author: "Naval Ravikant",
  },
  {
    quote: "Passion doesn’t pay bills, customers do.",
    author: "unknown",
  },
  {
    quote:
      "The most important decision we make is wheter we believe we live in a friendly or hostile universe.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Wisdom is knowing I am nothing, Love is knowing I am everything, and between the two my life moves.",
    author: "Nisargadatta Maharaj",
  },
  {
    quote:
      "Two possibilities exist: either we are alone in the universe, or we are not. Both are equally terrifying.",
    author: "Arthur C. Clarke",
  },
  {
    quote: "It is a rough road that leads to the heights of greatness.",
    author: "Seneca",
  },
  {
    quote:
      "O Divine Providence, I ask not for more riches but more wisdom with which to make wiser use of the riches you gave me at birth, consisting in the power to control and direct my own mind to whatever ends I might desire.",
    author: "Napoleon Hill",
  },
  {
    quote:
      "This may be the last generation that has a powerful tool like the Internet, and the focused attention span to do deep work.",
    author: "Naval",
  },
  {
    quote:
      "If you were a character in a book, what would your readers be yelling at you to do?",
    author: "Eliexer Yudkowsky on Twitter",
  },
  {
    quote: "The less confident you are, the more serious you have to act.",
    author: "Tara Ploughman",
  },
  {
    quote:
      "The condition of man is already close to satiety and arrogance, and there is danger of destruction of everything in existence.",
    author: "a Brahmin to Onesicritus, 327 BC, reported in Strabo's Geography",
  },
  {
    quote: "Change breaks the brittle.",
    author: "Jan Houtema",
  },
  {
    quote:
      "The sons of Hermes love to play,\nAnd only do their best when they\nAre told they oughtn't;\nApollo's children never shrink\nFrom boring jobs but have to think\nTheir work important.",
    author: "W. H. Auden, Under Which Lyre",
  },
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Abelson & Sussman, SICP, preface to the first edition",
  },
  {
    quote:
      "That language is an instrument of human reason, and not merely a medium for the expression of thought, is a truth generally admitted.",
    author: "George Boole, quoted in Iverson's Turing Award Lecture",
  },
  {
    quote: "Short words are best and the old words when short are best of all.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Many big people were chasing me. I didn't know what to do. So I thought I would surprise them and throw it.",
    author:
      "Garo Yepremian, Miami placekicker, after a disastrous attempt to throw a pass in the Super Bowl.",
  },
  {
    quote:
      "That book is good in vain which the reader throws away. He only is the master who keeps the mind in pleasing captivity; whose pages are perused with eagerness, and in hope of new pleasure are perused again; and whose conclusion is perceived with an eye of sorrow, such as the traveller casts upon departing day.",
    author: "Johnson, Lives of the Poets: Dryden",
  },
  {
    quote:
      "Don't worry about what anybody else is going to do. The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote:
      "But the audience is right. They're always, always right. You hear directors complain that the advertising was lousy, the distribution is no good, the date was wrong to open the film. I don't believe that. The audience is never wrong. Never.",
    author: "William Friedkin, in a NYT interview",
  },
  {
    quote:
      "Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You've solved the wrong problem. Work hard to improve.",
    author: "Alan Perlis",
  },
  {
    quote:
      "Frankly, I don't think you could have driven a needle up my sphincter using a sledgehammer.",
    author: "Col. Barry Horne, F-117 pilot, on first mission over Baghdad",
  },
  {
    quote:
      "Two centuries later a most clear-sighted historian of the Second Crusade can find space in a short narrative to record on many occasions the flattery, perjury, perfidy, blasphemy, heresy, arrogance, servility, deceit, pride, cunning and infidelity of the Greeks.",
    author: "R. W. Southern, The Making of the Middle Ages",
  },
  {
    quote:
      "The imagination of nature is far, far greater than the imagination of man.",
    author: "Richard Feynman",
  },
  {
    quote:
      "The greatest dangers to liberty lurk in insidious encroachment by men of zeal, well-meaning but without understanding.",
    author: "Brandeis",
  },
  {
    quote:
      "People who read Cosmopolitan magazine are very different from those who do not.",
    author: "Donald Berry, Statistics: A Bayesian Perspective",
  },
  {
    quote:
      "The art of handling university students is to make oneself appear, and this almost ostentatiously, to be treating them as adults....",
    author: "Arnold Toynbee, Experiences",
  },
  {
    quote:
      "Americans spend an average of four hours a day watching TV, an hour of that enduring ads. That adds up to an astounding 10% of total leisure time; at current rates, a typical viewer fritters away three years of his life getting bombarded with commercials.",
    author: "Scott Woolley, Forbes",
  },
  {
    quote: "The best writing is rewriting.",
    author: "E. B. White",
  },
  {
    quote:
      "Modern invention has been a great leveller. A machine may operate far more quickly than a political or economic measure to abolish privilege and wipe out the distinctions of class or finance.",
    author: "Ivor Brown, The Heart of England",
  },
  {
    quote:
      "If our goal is to write poetry, the only way we are likely to be any good is to try to be as great as the best.",
    author: "Donald Hall, Poetry and Ambition",
  },
  {
    quote:
      "I am annoyed to find myself continually described by people whom I have never set eyes on as bad-tempered.",
    author: "Evelyn Waugh, Diary (26 Dec 47)",
  },
  {
    quote:
      "Premature optimization is the root of all evil (or at least most of it) in programming.",
    author: "Donald Knuth",
  },
  {
    quote:
      "In France those absurd perversions of the art of war which covered themselves under the name of chivalry were more omnipotent than in any other country of Europe. The strength of the armies of Philip and John of Valois was composed of a fiery and undisciplined aristocracy which imagined itself to be the most efficient military force in the world, but which was in reality little removed from an armed mob.",
    author: "C. W. C. Oman, The Art of War in the Middle Ages",
  },
  {
    quote:
      "The public should always be wondering how it is possible to give so much for the money.",
    author: "Henry Ford",
  },
  {
    quote: "None ever wished it longer than it is.",
    author: "Johnson on Paradise Lost",
  },
  {
    quote:
      "Many large and high class greengrocers of my acquaintance have never heard of the Golden Wonder potato.",
    author: "Roy Genders, Vegetables for the Epicure",
  },
  {
    quote:
      "The best lack all conviction, while the worst\nAre full of passionate intensity.",
    author: "Yeats, The Second Coming",
  },
  {
    quote:
      "We act as though comfort and luxury were the chief requirements of life, when all that we need to make us happy is something to be enthusiastic about.",
    author: "Charles Kingsley",
  },
  {
    quote: "The path from good to evil goes through bogus.",
    author: "Tara Ploughman",
  },
  {
    quote:
      'Lisp has jokingly been called "the most intelligent way to misuse a computer". I think that description is a great compliment because it transmits the full flavor of liberation: it has assisted a number of our most gifted fellow humans in thinking previously impossible thoughts.',
    author: "Edsger Dijkstra, CACM, 15:10",
  },
  {
    quote:
      "Many who burnt heretics in the ordinary way of their business were otherwise excellent people.",
    author: 'G. M. Trevelyan, "Bias in History"',
  },
  {
    quote:
      "He became an object of ridicule in 1993 when a paper published an intercepted phone call in which he told his lover Camilla Parker Bowles he wanted to be reincarnated as her tampon.",
    author: "Reuters story, on Prince Charles",
  },
  {
    quote: "We're even wrong about which mistakes we're making.",
    author: "Carl Winfeld",
  },
  {
    quote:
      "From this place she sent into the world those novels, which by many have been placed on the same shelf as the works of a D'Arblay and an Edgeworth.",
    author: "Henry Austen on his sister Jane, in a preface to Persuasion",
  },
  {
    quote:
      "The key to performance is elegance, not battalions of special cases.",
    author: "Jon Bentley and Doug McIlroy",
  },
  {
    quote:
      "The economic depression that struck Europe in the fourteenth century was followed ultimately by economic and technological recovery. But the depression we have moved into will have no end. We can anticipate centuries of decline and exhaustion.",
    author: "Jean Gimpel, The Medieval Machine, 1975",
  },
  {
    quote:
      "Politics is not the art of the possible. It consists in choosing between the disastrous and the unpalatable.",
    author: "J. K. Galbraith, Letter to Kennedy, 1962",
  },
  {
    quote:
      "A typical dinner from the ape menu would be tofu bake with ratatouille of aubergine, onions and sweet peppers, with pearled barley and vegetable side dishes, says the team.",
    author: "New Scientist",
  },
  {
    quote:
      "Guy Steele leads a small team of researchers in Burlington, Massachusetts, who are taking on an enormous challenge — create a programming language better than Java.",
    author: "Sun.Com",
  },
  {
    quote:
      "I had my own reactions to Paul's essay — on the whole I liked it but when I connected some dots I found some suggestions of things I strongly disliked — not so much in the essay as suggested by it.",
    author: "reaction to What You Can't Say in a blog",
  },
  {
    quote:
      "Your twenties are always an apprenticeship, but you don't always know what for.",
    author: "Jan Houtema",
  },
  {
    quote:
      "In addition, the board rewrote the definition of science, so that it is no longer limited to the search for natural explanations of phenomena.",
    author: "AP story on Kansas Board of Education",
  },
  {
    quote:
      "A danger sign that fellow-obsessionals will at once recognize is the tendency to regard the happiest moments of your life as those that occur when someone who has an appointment to see you is prevented from coming.",
    author: "Peter Medawar, Memoirs of a Thinking Radish",
  },
  {
    quote: "Never offer what you'd hate someone for accepting.",
    author: "Tara Ploughman",
  },
  {
    quote:
      "The pagans were incensed at the rashness of a recent and obscure sect, which presumed to accuse their countrymen of error, and to devote their ancestors to eternal misery.",
    author: "Gibbon, The Decline and Fall of the Roman Empire",
  },
  {
    quote:
      "The pagans were incensed at the rashness of a recent and obscure sect, which presumed to accuse their countrymen of error, and to devote their ancestors to eternal misery.",
    author: "Gibbon, The Decline and Fall of the Roman Empire",
  },
  {
    quote:
      "Simultaneously reifying and challenging hegemonic codes of race, class, gender and regional or national identity, his characters explore the complex and changing postmodern cultural landscape.",
    author:
      "Robert Bennett, English professor at Montana State, announcing a panel discussion about Brad Pitt",
  },
  {
    quote:
      "In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise of misplaced power exists and will persist.",
    author: "Eisenhower, Farewell Address",
  },
  {
    quote:
      "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
    author: "Mark Twain",
  },
  {
    quote: "However little television you watch, watch less.",
    author: "David McCullough",
  },
  {
    quote: "Any word you have to hunt for in a thesaurus is the wrong word.",
    author: "Stephen King",
  },
  {
    quote:
      "The people can always be brought to the bidding of the leaders. That is easy. All you have to do is tell them they are being attacked, and denounce the pacifists for lack of patriotism, and exposing the country to greater danger.",
    author: "Goering at the Nuremberg Trials",
  },
  {
    quote:
      "As all these results were obtained, not by any heroic method, but by patient and detailed reasoning, I began to think it probable that philosophy had erred in adopting heroic remedies for intellectual difficulties, and that solutions were to be found merely by greater care and accuracy. This view I have come to hold more and more strongly as time went on, and it has led me to doubt whether philosophy, as a study distinct from science and possessed of a method of its own, is anything more than an unfortunate legacy from theology.",
    author: "Bertrand Russell, Logical Atomism",
  },
  {
    quote: "Get the important things right.",
    author: "N. P. Calderwood",
  },
  {
    quote:
      "The power of instruction is seldom of much efficacy except in those happy dispositions where it is almost superfluous.",
    author: "Gibbon",
  },
  {
    quote:
      "I do not know what the Lord's anointed, his Vicegerent upon earth, divinely appointed by him, and accountable to none but him for his actions, will either think or do, upon these symptoms of reason and good sense which seem to be breaking out all over France: but this I foresee, that, before the end of this century, the trade of both King and Priest will not be half so good a one as it has been.",
    author: "Chesterfield, letter to his son, 13 Apr 1752",
  },
  {
    quote:
      "filter(P, S) is almost always written clearer as [x for x in S if P(x)]",
    author: "Guido van Rossum on Python",
  },
  {
    quote:
      "I'm surrounded by postmodern idiots and blatherers. Your writings give me hope.",
    author: "email to Paul Graham from a reader of his blog",
  },
  {
    quote:
      "In the last analysis, productivity of labour is the most important, the principal thing for the victory of the new social system.",
    author:
      "Lenin, quoted in First Five-Year Plan for the Development of the National Economy of the People's Republic of China in 1953-1957",
  },
  {
    quote: "Most interesting phenomena have multiple causes.",
    author: "N. P. Calderwood",
  },
  {
    quote:
      "From 1911 to 1920, the mood of the city varied between utter dullness and tremendous excitement.",
    author: "Arthur Coffman, An Illustrated History of Palo Alto",
  },
  {
    quote:
      "A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it.",
    author: "Max Planck",
  },
  {
    quote:
      "No man who ever held the office of President would congratulate a friend on obtaining it.",
    author: "John Adams",
  },
  {
    quote: "PowerPoint makes us stupid.",
    author: "General James N. Mattis, USMC",
  },
  {
    quote:
      "The best way to do something 'lean' is to gather a tight group of people, give them very little money, and very little time.",
    author: "Bob Klein, chief engineer of the F-14 program",
  },
  {
    quote:
      "But camels, though odious to view and endowed with the offensive spirit, did not enjoy the blessing of pachydermaty.",
    author: "F. E. Adcock, The Greek and Macedonian Art of War",
  },
  {
    quote:
      "As it turned out, the obvious clearly stated, and combined with new observations, was sometimes close to revolutionary.",
    author: "Wallace Stegner on John Wesley Powell",
  },
  {
    quote: "Focusing is about saying no.",
    author: "Steve Jobs",
  },
  {
    quote:
      'The very word "secrecy" is repugnant in a free and open society; and we are as a people inherently and historically opposed to secret societies, to secret oaths and to secret proceedings. We decided long ago that the dangers of excessive and unwarranted concealment of pertinent facts far outweighed the dangers which are cited to justify it. Even today, there is little value in opposing the threat of a closed society by imitating its arbitrary restrictions. Even today, there is little value in insuring the survival of our nation if our traditions do not survive with it.',
    author: "John F. Kennedy",
  },
  {
    quote:
      "In the Zenith Color chassis there are no printed circuits, no production shortcuts. Every connection is carefully hand-wired with the same exacting care that makes Zenith America's largest selling TV, and your best Color TV buy.",
    author: "Zenith TV ad, 1964",
  },
  {
    quote: "Semper aut discere, aut docere, aut scribere dulce habui.",
    author: "Bede",
  },
  {
    quote:
      "The qualities that made for success in a fighter-pilot seemed to be just those sturdy qualities that made for success in other professions; observation, initiative, determination, courage, including the courage to run away. In course of time it appeared that men who had a private axe to grind beyond the public axe of the King's enemies were especially successful.",
    author: "Jim Bailey, The Sky Suspended",
  },
  {
    quote:
      "Everything about it was visibly mis-shapen, corrupt, crawling, verminous; for a time I could not bear to look at it, and passed with averted eyes; recovering from this weakness, I forced myself to look, and to face day by day the question: a thing so obviously, so incontrovertibly, so indefensibly bad, why had Scott done it?",
    author: "R. G. Collingwood on the Albert Memorial",
  },
  {
    quote:
      "Anybody who cares less about wanting to be cool, I think, is more interesting.",
    author: "Aimee Mann",
  },
  {
    quote:
      "The late Richard Feynman, a superb physicist, said once as we talked about the laser that the way to tell a great idea is that, when people hear it, they say, 'Gee, I could have thought of that.'",
    author: "Charles Townes, How the Laser Happened",
  },
  {
    quote:
      "If we chose always to be wise we should rarely need to be virtuous. But inclinations which we could easily overcome irresistibly attract us. We give in to slight temptations and minimize the danger. We fall insensibly into dangerous situations, from which we could easily have safeguarded ourselves, but from which we cannot withdraw without heroic efforts which appal us. So finally, as we tumble into the abyss, we ask God why he has made us so feeble. But, in spite of ourselves, He replies through our consciences: 'I have made you too feeble to climb out of the pit, because I made you strong enough not to fall in.'",
    author: "Rousseau, Confessions, Cohen trans.",
  },
  {
    quote:
      "Constantly fortified with the new blood of immigrants who saw America as a place where anything was possible, the nation had adopted an ethos that elevated problem solving to the status of religion.",
    author: "John Hoyt Williams, A Great and Shining Road",
  },
  {
    quote:
      "That 95 per cent. fail of those who start in business upon their own account seems incredible, and yet such are said to be the statistics upon the subject.",
    author: "Andrew Carnegie, 1896",
  },
  {
    quote:
      "You should never turn a man's generosity as a sword against him. Any virtue that a man has, even if he has many vices, should not be used as a tool against him.",
    author: "Rabi to Feynman",
  },
  {
    quote:
      "You can't say I didn't try really hard, 'cause I'm trying really hard to be good.",
    author: "Tom Petty",
  },
  {
    quote:
      "He begins working calculus problems in his head as soon as he awakens. He did calculus while driving in his car, while sitting in the living room, and while lying in bed at night.",
    author: "divorce complaint of Richard Feynman's second wife",
  },
  {
    quote:
      "The development of this aircraft was long and complex even by Soviet standards, partially explained by the fact that its entire design team was in jail.",
    author: "Howard Moon on the TU-2",
  },
  {
    quote:
      "It is said that there is a technical term for people who believe that little boys and little girls are born indistinguishable and are molded into their natures by parental socialization. The term is 'childless.'",
    author: "Steven Pinker",
  },
  {
    quote:
      "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    author: "Sherlock Holmes",
  },
  {
    quote:
      "His notions fitted things so well,\nThat which was which he could not tell;\nBut oftentimes mistook th' one\n For th' other, as great clerks have done.",
    author: "Samuel Butler, Hudibras",
  },
  {
    quote:
      "A complex system that works is invariably found to have evolved from a simple system that worked. The inverse proposition also appears to be true: A complex system designed from scratch never works and cannot be made to work.",
    author: "John Gall",
  },
  {
    quote:
      "The Muslims of al-Andalus had nothing to learn from their Christian neighbours and were incurious about them. Geographers' accounts of Christian Spain tended to be cursory in the extreme: it was cold, the inhabitants were barbarians who ate pigs, you could get slaves there - that was about the sum of it.",
    author: "Richard Fletcher, Moorish Spain",
  },
  {
    quote:
      "When the enemy is making a false movement we must take good care not to interrupt him.",
    author: "Napoleon",
  },
  {
    quote:
      "Leave me alone, I'm trying to build! Don't you know how people build? By concentrating!",
    author: "Paul Graham's 5 year old son, building Lego",
  },
  {
    quote:
      "An expert is a man who has made all the mistakes which can be made in a very narrow field.",
    author: "Niels Bohr",
  },
  {
    quote: "Don't fear moving slowly. Fear standing still.",
    author: "Chinese proverb",
  },
  {
    quote:
      "I think a life properly lived is just learn, learn, learn all the time.",
    author: "Charlie Munger",
  },
  {
    quote:
      "The handicap under which most beginning writers struggle is that they don't know how to write.",
    author: "Wodehouse",
  },
  {
    quote:
      "Then in 1888 came the publication of Denton's history of England in the fifteenth century. This was a masterpiece of egregious perversity, depicting the later Middle Ages as a culminating period of ruinous taxation, iniquitous labour laws, demoralizing pestilences, and lavish dissipation of national resources upon violent and embittered domestic feuds and futile and indecisive foreign wars. The credulity of even the most undiscriminating reader was taxed to a degree by a portrayal in which horror succeeded upon cataclysm, in a thickening atmosphere of crime and terror, want, degradation, and wretchedness.",
    author: "A. R. Bridbury",
  },
  {
    quote:
      "We are all agreed that your theory is crazy. The question that divides us is whether it is crazy enough to have a chance of being correct.",
    author: "Neils Bohr",
  },
  {
    quote: "Pessimists sound smart. Optimists make money.",
    author: "Nat Friedman",
  },
  {
    quote:
      "Immature poets imitate; mature poets steal; bad poets deface what they take, and good poets make it into something better, or at least something different.",
    author: "T. S. Eliot",
  },
  {
    quote:
      "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka' but 'That's funny...'",
    author: "Isaac Asimov",
  },
  {
    quote:
      "We always want to make sure that our machines haven't by accident learned something that isn't what we intended.",
    author: "Susan Wojcicki",
  },
  {
    quote:
      "The population is made up of four types of people: A small number hunt witches. A large number go along with the hunt. A larger number are silent. A tiny number oppose it. The final group — as if by magic — become witches.",
    author: "Bret Weinstein",
  },
  {
    quote:
      "People who can't laugh at themselves will always be outwitted by people who can.",
    author: "T. K. Coleman",
  },
  {
    quote:
      "Political correctness is America's newest form of intolerance, and it is especially pernicious because it comes disguised as tolerance. It presents itself as fairness, yet attempts to restrict and control people's language with strict codes and rigid rules.",
    author: "George Carlin",
  },
  {
    quote:
      "I sometimes ask students what their position on slavery would have been had they been white and living in the South before abolition. Guess what? They all would have been abolitionists! They all would have bravely spoken out against slavery, and worked tirelessly against it.",
    author: "Robert P. George",
  },
  {
    quote:
      "Lies are often much more plausible, more appealing to reason, than reality, since the liar has the great advantage of knowing beforehand what the audience wishes or expects to hear.",
    author: "Hannah Arendt",
  },
  {
    quote: "If you want to have good ideas, you must have many ideas.",
    author: "Linus Pauling",
  },
  {
    quote:
      "A good notation has a subtlety and suggestiveness which at times make it almost seem like a live teacher.",
    author: "Bertrand Russell",
  },
  {
    quote:
      "I didn't make a decision to pursue astronomy. Rather, it just grabbed me, and I had no thought of escaping.",
    author: "Carl Sagan",
  },
  {
    quote: "How we spend our days is, of course, how we spend our lives.",
    author: "Annie Dillard",
  },
  {
    quote:
      "Tis not in mortals to command success; but we'll do more, Sempronius, we'll deserve it.",
    author: "Addison",
  },
  {
    quote:
      "Sometimes, magic is just someone spending more time on something than anyone else might reasonably expect.",
    author: "Teller",
  },
  {
    quote:
      "Few people are capable of expressing with equanimity opinions which differ from the prejudices of their social environment. Most people are even incapable of forming such opinions.",
    author: "Einstein",
  },
  {
    quote: "All buildings are predictions. All predictions are wrong.",
    author: "Stewart Brand",
  },
  {
    quote: "It's easier to win an argument with a genius than an idiot.",
    author: "Gurwinder Bhogal",
  },
  {
    quote:
      "Now, most people hate to admit they're wrong, but it didn't bother Bill one bit. All he cared about was what was right, not who was right. That's what makes Bill very, very dangerous.",
    author: "Larry Ellison on Bill Gates",
  },
  {
    quote:
      "Because most entrenched bureaucracies tend to develop a strong aversion to changing the status quo, state-run technological progress is not likely to be sustained over long periods.",
    author: "Joel Mokyr",
  },
  {
    quote:
      "The German historians of the nineteenth century were explicit and vastly successful in the exercise of what they regarded as social responsibility. Nor did they see any conflict between their ethics as historians and their obligations as citizens. But we can now perceive that they were building not only a united Germany but a Germany united in authoritarian terms.",
    author: "Lynn White",
  },
  {
    quote:
      "We are the masters of the unsaid words, but slaves of those we let slip out.",
    author: "Churchill",
  },
  {
    quote:
      "The others, step by step, will follow\n The living imprint of your feet;\nBut you yourself must not distinguish\n Your victory from your defeat.\n\nAnd never for a single moment\nBetray your credo or pretend,\nBut be alive-this only matters-\nAlive and burning to the end.",
    author: "Boris Pasternak",
  },
  {
    quote:
      "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
    author: "Napoleon Hill",
  },
  {
    quote:
      "Writing is thinking. To write well is to think clearly. That's why it's so hard.",
    author: "David McCullough",
  },
  {
    quote:
      '"Computer science" is a terrible name. Astronomy is not called "telescope science", and biology is not called "microscope science"',
    author: "unknown",
  },
  {
    quote:
      "Computer science is no more about computers than astronomy is about telescopes, biology is about microscopes or chemistry is about beakers and test tubes. Science is not about tools. It is about how we use them, and what we find out when we do.",
    author: "unknown",
  },
  {
    quote: "Praise by name, criticize by category",
    author: "Peter Bevelin",
  },
  {
    quote:
      "I’m just going to give you some good, general advice. And the first bit is – play to your strengths.",
    author: "Mad-Eye Moody",
  },
  {
    quote:
      "Life is like arriving late for a movie, having to figure out what was going on without bothering everybody with a lot of questions.",
    author: "Joseph Campbell",
  },
  {
    quote:
      "And that's the thing about people who mean everything they say. They think everyone else does too.",
    author: "Khaled Hosseini, The Kite Runner",
  },
  {
    quote:
      "I must study politics and war, that our sons may have liberty to study mathematics and philosophy … in order to give their children a right to study painting, poetry, music.",
    autor: "John Adams",
  },
  {
    quote: "As soon as it works, no one calls it AI anymore.",
    author: "John McCarthy",
  },
  {
    quote:
      "AI has by now succeded in doing essentially everything that requires 'thinking' but has failed to do most of what people and animals do 'without thinking' - that, somehow, is much harder!",
    author: "Donald Knuth",
  },
  {
    quote: "Math always trumps brute force!",
    author: "@jlsajfj on GitHub",
  },
  {
    quote:
      'No one on his death bed ever said, "I wish I had spent more time on my business."',
    author: "Paul Tsongas",
  },
  {
    quote: "The whole future lies in uncertainty: live immediately.",
    author: "Seneca",
  },
  {
    quote: "Death is only the end if you assume the story is about you",
    author: "Welcome to Night Vale",
  },
  {
    quote:
      "Once you have a name for something you get power over it: you can start to talk about it.",
    author: "Patrick Winston",
  },
  {
    quote:
      "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.",
    author: "Konstantin Tsiolkovsky",
  },
  {
    quote: "Start coloring inside the lines you live between.",
    author: "Natalie Lynn",
  },
  {
    quote: "Nothing matters in the end so make it matter right now.",
    author: "Natalie Lynn",
  },
];
