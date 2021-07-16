const quotes = [
  {
    quote:
      "About death: Whether it is a dispersion, or a resolution into atoms, or annihilation, it is either extinction or change.",
    author: "Marcus Aurelius, Meditations, VII.32",
  },
  {
    quote:
      "A boxer derives the greatest advantage from his sparring partner – and my accuser is my sparring partner. He trains me in patience, civility and even temper.",
    author: "Epictetus, Discourses III, 20.9",
  },
  {
    quote:
      "A brief existence is common to all things, and yet you avoid and pursue all things as if they would be eternal.",
    author: "Marcus Aurelius, Meditations, X.34",
  },
  {
    quote:
      'Abstraction is a form of data compression: absolutely necessary, because human short-term memory is so small, but the critically important aspect of abstraction is the algorithm that gets you from the name back to the "uncompressed" details.',
    author: "Bruce Wilder (blog post comment)",
  },
  {
    quote:
      "A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Accept things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Accustom yourself to attend carefully to what is said by another, and as much as it is possible, try to inhabit the speaker's mind.",
    author: "Marcus Aurelius, Meditations VI.53",
  },
  {
    quote: "Accustom yourself to criticism.",
    author: "Robert Greene",
  },
  {
    quote:
      "A charlatan makes obscure what is clear; a thinker makes clear what is obscure.",
    author: "Hugh Kingsmill",
  },
  {
    quote:
      "Acknowledging the negative doesn't mean sniveling [whining, complaining]; it means facing the truth and then moving on.",
    author: "George Leonard, Mastery.",
  },
  {
    quote:
      "A complex system that works is invariably found to have evolved from a simple system that worked. The inverse proposition also appears to be true: A complex system designed from scratch never works and cannot be made to work.",
    author: "John Gall",
  },
  {
    quote:
      "Acquire the contemplative way of seeing how all things change into one another, and constantly attend to it, and exercise yourself about this part of philosophy. For nothing is so much adapted to produce magnanimity.",
    author: "Marcus Aurelius, Meditations, X.11",
  },
  {
    quote:
      "A CS professor once explained recursion as follows: A child couldn't sleep, so her mother told her a story about a little frog, who couldn't sleep, so the frog's mother told her a story about a little bear, who couldn't sleep, so the bear's mother told her a story about a little weasel... who fell asleep. ...and the little bear fell asleep; ...and the little frog fell asleep; ...and the child fell asleep.",
    author: "everything2.com",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    quote:
      "Act from reason, and failure makes you rethink and study harder. Act from faith, and failure makes you blame someone and push harder.",
    author: "Erik Naggum",
  },
  {
    quote:
      "Actually, the essence of boredom is to be found in the obsessive search for novelty. Satisfaction lies in mindful repetition, the discovery of endless richness in subtle variations on familiar themes.",
    author: "George Leonard, Mastery.",
  },
  {
    quote:
      '"A cucumber is bitter." Throw it away. "There are briars in the road." Turn aside from them. This is enough. Do not add, "And why were such things made in the world?"',
    author: "Marcus Aurelius, Meditations, VIII.50",
  },
  {
    quote:
      "A danger sign that fellow-obsessionals will at once recognize is the tendency to regard the happiest moments of your life as those that occur when someone who has an appointment to see you is prevented from coming.",
    author: "Peter Medawar, Memoirs of a Thinking Radish",
  },
  {
    quote:
      "Adapting old programs to fit new machines usually means adapting new machines to behave like old ones.",
    author: "Alan J. Perlis (Epigrams in programming)",
  },
  {
    quote:
      "A designer knows he has arrived at perfection not when there is no longer anything to add, but when there is no longer anything to take away.",
    author: "Antoine de St Exupery.",
  },
  {
    quote: "Adults play characters.\nChildren only play.",
    author: "@zen_fi on Twitter",
  },
  {
    quote: "Advice for nearly everything: start slowly and maintain traction.",
    author: "Michael",
  },
  {
    quote:
      "A fit body, a calm mind, a house full of love. These things cannot be bought — they must be earned.",
    author: "Naval Ravikant",
  },
  {
    quote:
      '"A fool cannot be convinced or even compelled to renounce his folly." God save me from fools with a little philosophy – no one is more difficult to reach.',
    author: "Epictetus, Discourses II, 15.13-14",
  },
  {
    quote: "After all, love is a good reason for everything to go wrong.",
    author: "La Casa de papel | Tokyo",
  },
  {
    quote:
      "After all, to the well-organized mind, death is but the next great adventure. You know, the Stone was really not such a wonderful thing. As much money and life as you could want! The two things most human beings would choose above all — the trouble is, humans do have a knack of choosing precisely those things that are worst for them.",
    author: "Professor Dumbledore",
  },
  {
    quote:
      "A gem cannot be polished without friction, nor a man perfected without trials.",
    author: "Seneca",
  },
  {
    quote:
      "A gift consists not in what is done or given, but in the intention of the giver or doer.",
    author: "Seneca",
  },
  {
    quote:
      "A good notation has a subtlety and suggestiveness which at times make it almost seem like a live teacher.",
    author: "Bertrand Russell",
  },
  {
    quote:
      "A great lathe operator commands several times the wage of an average lathe operator, but a great writer of software code is worth 10,000 times the price of an average software writer.",
    author: "Bill Gates",
  },
  {
    quote:
      "A guideline in the process of stepwise refinement should be the principle to decompose decisions as much as possible, to untangle aspects which are only seemingly interdependent, and to defer those decisions which concern details of representation as long as possible.",
    author: "Niklaus Wirth",
  },
  {
    quote:
      "A hacker on a roll may be able to produce–in a period of a few months–something that a small development group (say, 7-8 people) would have a hard time getting together over a year. IBM used to report that certain programmers might be as much as 100 times as productive as other workers, or more.",
    author: "Peter Seebach",
  },
  {
    quote:
      "AI has by now succeded in doing essentially everything that requires 'thinking' but has failed to do most of what people and animals do 'without thinking' - that, somehow, is much harder!",
    author: "Donald Knuth",
  },
  {
    quote: "A journey of a thousand miles must begin with a single step.",
    author: "Lao­Tzu",
  },
  {
    quote:
      "A language that doesn't affect the way you think about programming, is not worth knowing.",
    author: "Alan Perlis",
  },
  {
    quote:
      "Alexander the Macedonian and his groom were brought to the same state by death; for either they were received among the same seminal principles of the universe, or they were alike dispersed among the atoms.",
    author: "Marcus Aurelius, Meditations VI.24",
  },
  {
    quote:
      "A limit of time is fixed for you, which if you do not use for clearing away the clouds from your mind, it will go and you will go, and it will never return.",
    author: "Marcus Aurelius, Meditations II.4",
  },
  {
    quote: "A little learning is a dangerous thing.",
    author: "Alexander Pope",
  },
  {
    quote: "All buildings are predictions. All predictions are wrong.",
    author: "Stewart Brand",
  },
  {
    quote: "All creativity is an extended form of a joke.",
    author: "Alan Kay",
  },
  {
    quote: "All cruelty springs from weakness.",
    author: "Seneca",
  },
  {
    quote: "All greatness comes from suffering.",
    author: "Naval Ravikant",
  },
  {
    quote: "All great things require great dedication.",
    author: "Chuck Norris(?)",
  },
  {
    quote: "All non-trivial abstractions, to some degree, are leaky.",
    author: "Joel Spolsky (The Law of Leaky Abstractions)",
  },
  {
    quote:
      "All our efforts must be directed towards an end, or we will act in vain. If it is not the right end, we will fail utterly.",
    author: "Epictetus, Discourses III, 23.3",
  },
  {
    quote: "All our knowledge has its origins in our perceptions.",
    author: "Leonardo Da Vinci",
  },
  {
    quote:
      "All problems in computer science can be solved by another level of indirection.",
    author: "Butler Lampson",
  },
  {
    quote:
      "All things are changing: and you yourself are in continuous mutation and in a manner in continuous destruction, and the whole universe, too.",
    author: "Marcus Aurelius, Meditations, IX.19",
  },
  {
    quote:
      "All you need are these: certainty of judgment in the present moment; action for the common good in the present moment; and an attitude of gratitude in the present moment for anything that comes your way.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Altogether the interval is small between birth and death; and consider with how much trouble, and in company with what sort of people and in what a feeble body, this interval is laboriously passed.",
    author: "Marcus Aurelius, Meditations IV.50",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    author: "Martin Golding",
  },
  {
    quote:
      'Always dive down into a problem and get your hands on the deepest issue behind the problem. All other considerations are to dismissed as "engineering details"; they can be sorted out after the basic problem has been solved.',
    author: "Chris Crawford",
  },
  {
    quote:
      "Always observe how ephemeral and worthless human things are, and what was yesterday a speck of semen tomorrow will be a mummy or ashes.",
    author: "Marcus Aurelius, Meditations IV.48",
  },
  {
    quote:
      "Always resignation and acceptance. Always prudence and honour and duty.",
    author: "Jane Austen",
  },
  {
    quote: "A man is no bigger than the smallest thing that provokes him.",
    author: "Dan Horton",
  },
  {
    quote:
      "A man must learn a great deal to enable him to pass a correct judgment on another man's acts.",
    author: "Marcus Aurelius, Meditations, XI.18",
  },
  {
    quote:
      "A man should always have these two rules in readiness: one, to do only whatever the reason of the ruling and legislating faculty may suggest for the use of men; the other, to change your opinion, if anyone sets you right and dissuades you from any opinion.",
    author: "Marcus Aurelius, Meditations IV.12",
  },
  {
    quote:
      "A man should hear a little music, read a little poetry, and see a fine picture every day of his life, in order that worldly cares may not obliterate the sense of the beautiful which God has implanted in the human soul.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "A man thus grounded must, whether he wills or not, necessarily be attended by constant cheerfulness and a joy that is deep and issues from deep within, since he finds delight in his own resources, and desires no joys greater than his inner joys.",
    author: "Seneca",
  },
  {
    quote:
      "A man when he has done a good act, does not call out for others to come and see, but he goes on to another act, as a vine goes on to produce again the grapes in season.",
    author: "Marcus Aurelius, Meditations V.6",
  },
  {
    quote:
      "Americans spend an average of four hours a day watching TV, an hour of that enduring ads. That adds up to an astounding 10% of total leisure time; at current rates, a typical viewer fritters away three years of his life getting bombarded with commercials.",
    author: "Scott Woolley, Forbes",
  },
  {
    quote:
      "A minute of rage can undo a lifetime of diligent effort. Self-control is self-preservation. Most of us won't look back on the moments we acted in anger as among our finest.",
    author: "@TheStoicEmperor",
  },
  {
    quote: 'Amor fati - "Love your fate", which is in fact your life.',
    author: "Unknown",
  },
  {
    quote: "A nation is born stoic, and dies epicurean.",
    author: "Will Durant",
  },
  {
    quote: "Anatt? : The self is an illusion",
    author: "Buddha",
  },
  {
    quote:
      "And a stomach firmly under control, one that will put up with hard usage, marks a considerable step towards independence.",
    author: "Seneca, Letter CXXII",
  },
  {
    quote:
      "And if you go too far up, abstraction-wise, you run out of oxygen. Sometimes smart thinkers just don't know when to stop, and they create these absurd, all-encompassing, high-level pictures of the universe that are all good and fine, but don't actually mean anything at all.",
    author: "Joel Spolsky",
  },
  {
    quote: "And no one has power over us when death is within our own power.",
    author: "Seneca, Letter CIV",
  },
  {
    quote:
      "And so it is inexcusable for man to begin and end where the beasts do. He should begin where they do, but only end where nature left off dealing with him; which is to say, in contemplation and understanding.",
    author: "Epictetus, Discourses I, 6.20",
  },
  {
    quote:
      "And that's the thing about people who mean everything they say. They think everyone else does too.",
    author: "Khaled Hosseini, The Kite Runner",
  },
  {
    quote:
      "And when you told me what your favorite book was, I bought it and read it over and over ... trying to find pieces of you in it.",
    author: "unknown",
  },
  {
    quote:
      'And yet I won\'t have done you any harm – any more than a mirror is to blame when it shows a plain person what they look like; or a doctor is mean if he tells a patient, "Look, you may think this is insignificant, but you\'re really sick; no food for you today, only water." No one thinks, "How rude!" But say to someone, "Your desires are unhealthy, your powers of aversion are weak, your plans are incoherent, your impulses are at odds with nature and your system of values is false and confused," – and off they go alleging slander.',
    author: "Epictetus, Discourses II, 14.21-22",
  },
  {
    quote:
      "A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it.",
    author: "Max Planck",
  },
  {
    quote:
      'An expert is, according to my working definition "someone who doesn\'t need to look up answers to easy questions".',
    author: "Eric Lippert.",
  },
  {
    quote:
      "An expert is a man who has made all the mistakes which can be made in a very narrow field.",
    author: "Niels Bohr",
  },
  {
    quote:
      "An eye, when open, has no option but to see. The decision whether to look at a particular man's wife, however, and how, belongs to the will. And the determination whether to trust what someone says, and then, if we trust them, whether we should be angered by it – that also belongs to the will.",
    author: "Epictetus, Discourses II, 23.11-13",
  },
  {
    quote:
      "Anger is a big part of the formula, for passion is anger and love combined",
    author: "Robert Kiyosaki",
  },
  {
    quote:
      "An hour of deeply contemplating your own moral failures will leave you feeling much more forgiving of the foibles of others.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "An idiot admires complexity, a genius admires simplicity. A physicist tries to make it simple. Anyway, an idiot, anything the more complicated is the more he will admire it. If you make something so complicated he can't understand it, he's gonna think you're a god 'cause you made it so complicated nobody can understand it.",
    author: "Terry A. Davis",
  },
  {
    quote:
      "An ignorant person is inclined to blame others for his own misfortune. To blame oneself is proof of progress. But the wise man never has to blame another or himself.",
    author: "Epictetus, Enchiridion 5",
  },
  {
    quote:
      "An interpreter raises the machine to the level of the user program; a compiler lowers the user program to the level of the machine language.",
    author: "SICP",
  },
  {
    quote: "An investment in knowledge always pays the best interest.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "A non negative binary integer value x is a power of 2 iff (x & (x-1)) is 0 using 2's complement arithmetic.",
    author: "[fact]",
  },
  {
    quote:
      "Another feature about this guy is his low threshold of boredom. He'll pick up on a task and work frantically at it, accomplishing wonders in a short time and then get bored and drop it before its properly finished. He'll do nothing but strum his guitar and lie around in bed for several days after. Thats also part of the pattern too; periods of frenetic activity followed by periods of melancholia, withdrawal and inactivity. This is a bipolar personality.",
    author: "The bipolar lisp programmer",
  },
  {
    quote:
      "A no uttered from the deepest conviction is better than a yes merely uttered to please or what is worse, to avoid trouble.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Anybody who cares less about wanting to be cool, I think, is more interesting.",
    author: "Aimee Mann",
  },
  {
    quote:
      "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.",
    author: "Eagleson’s Law",
  },
  {
    quote:
      "Any fool can make the simple complex, only a smart person can make the complex simple.",
    author: "unknown",
  },
  {
    quote:
      "Anyone who affirms that, in a circle, lines that extend from the centre to the circumference can be unequal is not going to win the respect of mathematicians. So – a true philosopher is under no obligation to respect vulgar opinion as to what is religious or irreligious, what is just or unjust.",
    author: "Epictetus, Discourses I, 29.53-54",
  },
  {
    quote:
      "Any sufficiently advanced technology is undistinguishable from magic.",
    author: "Arthur C. Clarke",
  },
  {
    quote:
      "Any sufficiently complicated C or Fortran program contains an ad hoc, informally specified, bug-ridden, slow implementation of half of Common Lisp.",
    author: "Philip Greenspun (Greenspun's Tenth Rule)",
  },
  {
    quote: "Anything that just costs money is cheap.",
    author: "John Steinbeck",
  },
  {
    quote: "Any word you have to hunt for in a thesaurus is the wrong word.",
    author: "Stephen King",
  },
  {
    quote:
      "A person who has built his life around pleasure is bound to be disillusioned. Hedonism is not sustainable, and it leaves a person empty. We are not meant to experience sustained pleasure. Therefore, to cope with the drab routine of daily existence, one must find meaning somewhere.",
    author: "@TheAncientSage",
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
      "A plant or animal fares poorly when it acts contrary to its nature; and a human being is no different. Well, then, biting, kicking, wanton imprisonment and beheading – is that what our nature entails? No; rather, acts of kindness, cooperation and good will. And so, whether you like it or not, a person fares poorly whenever he acts like an insensitive brute.",
    author: "Epictetus, Discourses IV, 1.121-122",
  },
  {
    quote:
      "A rational person can find peace by cultivating indifference to things outside of their control.",
    author: "Unknown",
  },
  {
    quote: "Are you adding to the noise, or are you cutting through the noise?",
    author: "Michael Reyes on Twitter",
  },
  {
    quote: "Are you willing to wear your white belt?",
    author: "George Leonard, Mastery.",
  },
  {
    quote:
      "Argue with idiots, and you become an idiot. If you compete with slaves you become a slave.",
    author: "Paul Graham and Norbert Weiner, respectively",
  },
  {
    quote: "Art is a lie that reveals the truth.",
    author: "Picasso",
  },
  {
    quote: "Art is how we decorate space; Music is how we decorate time.",
    author: "Jean Michel Basquait",
  },
  {
    quote: "Art is never finished, only abandoned.",
    author: "Leonardo Da Vinci",
  },
  {
    quote:
      "As all these results were obtained, not by any heroic method, but by patient and detailed reasoning, I began to think it probable that philosophy had erred in adopting heroic remedies for intellectual difficulties, and that solutions were to be found merely by greater care and accuracy. This view I have come to hold more and more strongly as time went on, and it has led me to doubt whether philosophy, as a study distinct from science and possessed of a method of its own, is anything more than an unfortunate legacy from theology.",
    author: "Bertrand Russell, Logical Atomism",
  },
  {
    quote:
      "As builders and creators finding the perfect solution should not be our main goal. We should find the perfect problem.",
    author: "Isaac (blog comment)",
  },
  {
    quote:
      "As each day arises, welcome it as the very best day of all, and make it your own possession. We must seize what flees.",
    author: "Seneca",
  },
  {
    quote:
      "A setback has often cleared the way for greater prosperity. Many things have fallen only to rise to more exalted heights.",
    author: "Seneca, Letter XCI",
  },
  {
    quote:
      "A single day among the learned lasts longer than the longest life of the ignorant.",
    author: "Posidonius",
  },
  {
    quote:
      "As is a tale, so is life: not how long it is, but how good it is, is what matters.",
    author: "Seneca",
  },
  {
    quote:
      "As it turned out, the obvious clearly stated, and combined with new observations, was sometimes close to revolutionary.",
    author: "Wallace Stegner on John Wesley Powell",
  },
  {
    quote:
      "Ask me what the real good in man's case is, and I can only say that it is the right kind of moral character.",
    author: "Epictetus, Discourses I, 8.16",
  },
  {
    quote:
      "Ask yourself the 3 things you must always ask yourself before you say anything:\n  1. Does this need to be said?\n  2. Does this need to be said by me?\n  3. Does this need to be said my me now?",
    author: "Craig Ferguson",
  },
  {
    quote:
      "As long as you remember that everything is exactly how it's supposed to be, you will always be sane.",
    author: "Alan Watts",
  },
  {
    quote:
      "A society grows great when old men plant trees in whose shade they know they shall never sit.",
    author: "an ancient Greek proverb?",
  },
  {
    quote:
      "A society that puts equality in the sense of equality of outcome ahead of freedom will end up with neither equality nor freedom. The use of force to achieve equality will destroy freedom, and the force, introduced for good purposes, will end up in the hands of people who use it to promote their own interests.",
    author: "Milton Friedman (Thomas Sowell: A Conflict of Visions, p130)",
  },
  {
    quote:
      "Associate with people who are likely to improve you. Welcome those who you are capable of improving. The process is a mutual one: men learn as they teach.",
    author: "Seneca",
  },
  {
    quote: "As soon as it works, no one calls it AI anymore.",
    author: "John McCarthy",
  },
  {
    quote:
      "Assume life will be really tough, and then ask if you can handle it. If the answer is yes, you've won.",
    author: "Charlie Munger",
  },
  {
    quote: "A stoic is a Buddhist with attitude.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "As you are careful when you walk not to step on a nail or turn your ankle, so you should take care not to do any injury to your character at the same time.",
    author: "Epictetus, Enchiridion 38",
  },
  {
    quote:
      "As you intend to live when you are gone, so it is in your power to live here. But if men do not permit you, then get away out of life, as if you were suffering no harm. The house is smoky, and I quit it. Why do you think that this is any trouble? But so long as nothing of the kind drives me out, I remain, am free, and no man shall hinder me from doing what I choose; and I choose to do what is according to the nature of the rational and social animal.",
    author: "Marcus Aurelius, Meditations V.29",
  },
  {
    quote:
      "As you yourself are a component part of a social system, so let every act of yours be a component part of social life.",
    author: "Marcus Aurelius, Meditations, IX.23",
  },
  {
    quote:
      "A tail call allows a function to return the result of another function without leaving an entry on the stack. Tail recursion is a specific case of tail calling.",
    author: "ASPN : Python Cookbook : Explicit Tail Call",
  },
  {
    quote:
      "At any given moment, you can choose to follow the chain of thoughts, emotions, and sensations that reinforce a perception of yourself as vulnerable and limited, or to remember that your true nature is pure, unconditioned, and incapable of being harmed.",
    author: "Mingyur Rinpoche",
  },
  {
    quote:
      "At every job you should either learn or earn. Either is fine. Both is best. But if it's neither, quit.",
    author: "@garrytan on Twitter",
  },
  {
    quote: "A thing is neither better nor worse for having been praised.",
    author: "Marcus Aurelius, Meditations IV.20",
  },
  {
    quote:
      "A truly successful person is not one who achieves his highest ambitions, but one who enjoys helping others reach theirs.",
    author: "Charbel Tadros",
  },
  {
    quote:
      'At this point you run the risk of him saying, "What business is that of yours, sir? What are you to me?" Pester him further, and he is liable to punch you in the nose. I myself was once keen for this sort of discourse, until I met with just such a reception.',
    author: "Epictetus, Discourses II, 12.24-25",
  },
  {
    quote: "Attitude is no substitute for competence.",
    author: "Eric S. Raymond, How to become a hacker",
  },
  {
    quote:
      "A typical dinner from the ape menu would be tofu bake with ratatouille of aubergine, onions and sweet peppers, with pearled barley and vegetable side dishes, says the team.",
    author: "New Scientist",
  },
  {
    quote:
      "A vacation is a very expensive way to schedule the time to read a book in peace.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "A vine cannot behave olively, nor an olive tree vinely – it is impossible, inconceivable. No more can a human being wholly efface his native disposition.",
    author: "Epictetus, Discourses II, 20.18-19",
  },
  {
    quote:
      "A will that never fails to get what it wants, a faculty of aversion that always avoids what it dislikes, proper impulse, careful purpose and disciplined assent. That's the human specimen you should prepare yourselves to see.",
    author: "Epictetus, Discourses II, 8.29",
  },
  {
    quote: "A witty saying proves nothing.",
    author: "Voltaire",
  },
  {
    quote:
      "A year spent in artificial intelligence is enough to make one believe in God.",
    author: "Alan J. Perlis (Epigrams in programming)",
  },
  {
    quote:
      "Bad companies are destroyed by crisis. Good companies survive them. Great individuals, like great companies, find a way to transform weakness into strength.",
    author: "Ryan Holiday",
  },
  {
    quote:
      "Barley porridge, or a crust of bread, and water do not make a very cheerful diet, but nothing gives one keener pleasure than the ability to derive pleasure even from that — and the feeling of having arrived at something which one cannot be deprived of by any unjust stroke of fortune.",
    author: "Seneca",
  },
  {
    quote: "Be a good person but don't waste your time proving it.",
    author: "Wise Chimp on Twitter",
  },
  {
    quote: "Be a master of the mind, not mastered by the mind.",
    author: "Zen proverb",
  },
  {
    quote: "Be an island of calm in the sea of craziness.",
    author: "Unknown",
  },
  {
    quote:
      "Because most entrenched bureaucracies tend to develop a strong aversion to changing the status quo, state-run technological progress is not likely to be sustained over long periods.",
    author: "Joel Mokyr",
  },
  {
    quote:
      "Because most of what we say and do is not essential. If you can eliminate it, you'll have more time, and more tranquility. Ask yourself at every moment, 'Is this necessary?'.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Because we're the only animals who not only die but are conscious of it even while it happens, we are beset by anxiety.",
    author: "Epictetus, Discourses II, 6.14",
  },
  {
    quote:
      "Because what is a human being? Part of a community – the community of gods and men, primarily, and secondarily that of the city we happen to inhabit, which is only a microcosm of the universe in toto.",
    author: "Epictetus, Discourses II, 5.26",
  },
  {
    quote:
      "Become your own worst critic; see your work as if through the eyes of others.",
    author: "Robert Greene",
  },
  {
    quote:
      "Becoming a carpenter or pilot, we realize, requires some formal training. Is it unreasonable to suppose that it will take more than just the desire to be good or bad – that the student of philosophy will also have to learn a few things of his own?",
    author: "Epictetus, Discourses II, 14.10",
  },
  {
    quote: "Be disentangled from all perceptions. They are not you.",
    author: "Brian Thompson",
  },
  {
    quote: "Be - don't try to become.",
    author: "Osho",
  },
  {
    quote:
      "Be Fearful When Others Are Greedy and Greedy When Others Are Fearful",
    author: "Warren Buffet",
  },
  {
    quote:
      "Before enlightenment, chop wood and carry water. After enlightenment, chop wood and carry water.",
    author: "Ancient Eastern adage",
  },
  {
    quote: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson",
  },
  {
    quote:
      "Before we even start to read this passage together, it's probably worthwhile to stress that we should get pumped about reading this passage, because if we're interested in it, we will comprehend it better. But even more importantly, we're about to spend a few minutes of out life on this passage, and so if we're gonna spend a few minutes of our life on something, we might as well enjoy it.",
    author:
      "Sal Khan (from Khan Academy) before going through an example of the SAT Reading test",
  },
  {
    quote:
      "Begin at once to live, and count each separate day as a separate life.",
    author: "Seneca",
  },
  {
    quote:
      "Begin the morning by saying to yourself, I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil. ... I can neither be injured by any of them, for no one can fix on me what is ugly, nor can I be angry with my kinsman, nor hate him.",
    author: "Marcus Aurelius, Meditations II.1",
  },
  {
    quote:
      "Being angry means your lizard brain took control. Being calm means you stayed above your emotions.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "Being a programmer is the same way. The only way to be a good programmer is to write code. When you realize you haven't been writing much code lately, and it seems like all you do is brag about code you wrote in the past, and people start looking at you funny while you're shooting your mouth off, realize it's because they know. They might not even know they know, but they know. So, yes, doing what you love brings success, and by all means, throw yourself a nice big party, buy yourself a nice car, soak up the adulation of an adoring crowd. Then shut the fuck up and get back to work.",
    author: "Sincerity Theory",
  },
  {
    quote:
      "Being attached to many things, we are weighed down and dragged along with them.",
    author: "Epictetus, Discourses I, 1.15",
  },
  {
    quote:
      '"Being healthy is good, being sick is bad." No, my friend: enjoying health in the right way is good; making bad use of your health is bad.',
    author: "Epictetus, Discourses III, 20.4",
  },
  {
    quote:
      "Be like the promontory against which the waves continually break; but it stands firm and tames the fury of the water around it.",
    author: "Marcus Aurelius, Meditations IV.49",
  },
  {
    quote: "Be present above all else.",
    author: "Unknown",
  },
  {
    quote:
      "Be silent for the most part, or, if you speak, say only what is necessary and in a few words.",
    author: "Epictetus",
  },
  {
    quote:
      "Be so busy building your own life that other people's bullshit is of no concern.",
    author: "Ed Latimore",
  },
  {
    quote: "Be stoic: Just do the right thing. Just keep going.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "Be teachable! You're not always right. Humility is necessary for growth!",
    author: "Richard Feynman",
  },
  {
    quote: "Be the change you want to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Be tolerant with others and strict with yourself.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Be true to whoever or whatever you are and wear it like a badge of honor. Fit in with one person and one person only: yourself.",
    author: "David Goggins",
  },
  {
    quote:
      "Between stimulus and response, there is a space. In that space is our power to choose our response.",
    author: "Viktor Frankl",
  },
  {
    quote:
      "Beware of bugs in the above code; I have only proved it correct, not tried it.",
    author: "Donald Knuth",
  },
  {
    quote: "Bonne bosse et reste le boss.",
    author: "Darryl Amedon",
  },
  {
    quote:
      "Brief is man's life and small the nook of the earth where he lives; brief, too, is the longest posthumous fame, buoyed only by a succession of poor human beings who will very soon die and who know little of themselves, much less of someone who died long ago.",
    author: "Marcus Aurelius, Meditations III.10",
  },
  {
    quote:
      "But camels, though odious to view and endowed with the offensive spirit, did not enjoy the blessing of pachydermaty.",
    author: "F. E. Adcock, The Greek and Macedonian Art of War",
  },
  {
    quote:
      '"But I get to wear a crown of gold." If you have your heart set on wearing crowns, why not make one out of roses – you will look even more elegant in that.',
    author: "Epictetus, Discourses I, 19.29",
  },
  {
    quote:
      '"But it is not worthwhile to live if this cannot be done." Take your departure then from life contentedly.',
    author: "Marcus Aurelius, Meditations, VIII.47",
  },
  {
    quote:
      '"But my nose is running!" What do you have hands for, idiot, if not to wipe it? "But how is it right that there be running noses in the first place?" Instead of thinking up protests, wouldn\'t it be easier just to wipe your nose?',
    author: "Epictetus, Discourses I, 6.30",
  },
  {
    quote:
      'But suppose I choose to walk, and someone obstructs me?" What part of you will they obstruct? Certainly not your power of assent? "No, my body." Your body, yes – as they might obstruct a rock. "Perhaps; but the upshot is, now I\'m not allowed to walk." Whoever told you, "Walking is your irrevocable privilege\'? I said only that the will to walk could not be obstructed.',
    author: "Epictetus, Discourses IV, 1.72-73",
  },
  {
    quote:
      "But the audience is right. They're always, always right. You hear directors complain that the advertising was lousy, the distribution is no good, the date was wrong to open the film. I don't believe that. The audience is never wrong. Never.",
    author: "William Friedkin, in a NYT interview",
  },
  {
    quote:
      '"But the tyrant will chain –" What will he chain? Your leg. "He will chop off –" What? Your head. What he will never chain or chop off is your integrity.',
    author: "Epictetus, Discourses I, 18.17",
  },
  {
    quote:
      '"But we must stick with a decision." "For heaven\'s sake, man, that rule only applies to sound decisions. I suppose next you will decide that it is night now, and refuse to change your mind because you don\'t want to.',
    author: "Epictetus, Discourses II, 15.7",
  },
  {
    quote: "But what is it good for?",
    author:
      "Engineer at the Advanced Computing Systems Division of IBM, commenting on the microchip, 1968",
  },
  {
    quote:
      "By becoming deeply aware of our mortality, we intensify our experience of every aspect of life.",
    author: "Robert Greene",
  },
  {
    quote:
      "By contemplating the impermanence of everything in the world, we are forced to recognize that every time we do something could be the last time we do it, and this recognition can invest the things we do with a significance and intensity that would otherwise be absent. William B.",
    author: "Irvine",
  },
  {
    quote:
      "C and Lisp stand at opposite ends of the spectrum; they're each great at what the other one sucks at.",
    author: "Steve Yegge, Tour de Babel.",
  },
  {
    quote: "Can you take criticism and use it constructively?",
    author: "Robert Greene",
  },
  {
    quote:
      "Ce n’est que par les beaux sentiments qu’on parvient à la fortune !",
    author: "Charles Baudelaire, Conseils aux jeunes littérateurs.",
  },
  {
    quote:
      "Ce n'est que par les relations qu'on entretient entre nos différentes connaissances qu'elles nous restent accessibles.",
    author:
      "Shnuup, sur l'hypertexte (SELFHTML -> Introduction -> Definitions sur l'hypertexte)",
  },
  {
    quote:
      'CFO asks CEO: "What happens if we invest in developing out people and then they leave us?" CEO: "What happens if we don\'t, and they stay?"',
    author: "unknown",
  },
  {
    quote: "Chance favors the prepared mind.",
    author: "Louis Pasteur",
  },
  {
    quote: "Change breaks the brittle.",
    author: "Jan Houtema",
  },
  {
    quote:
      "Change happens when you have a dream first, you wake up with those butterflies that you don’t wanna let them go, YOU work your a*s off and your yesterday’s visions becomes your today’s plan and eventually your tomorrow’s memories.",
    author: "Alessandro Steri",
  },
  {
    quote:
      "Change is never painful, only your resistance to change is painful.",
    author: "Buddhist proverb",
  },
  {
    quote:
      "C++ is history repeated as tragedy. Java is history repeated as farce.",
    author: "Scott McKay",
  },
  {
    quote:
      "C++ is like teenage sex: Everybody is talking about it all the time, only few are really doing it.",
    author: "unknown",
  },
  {
    quote:
      "Civilization advances by extending the number of important operations which we can perform without thinking about them.",
    author: "Alfred North Whitehead (Introduction to Mathematics)",
  },
  {
    quote: "Clear thinkers take feedback from reality, not society.",
    author: "Naval Ravikant",
  },
  {
    quote: "Code is poetry.",
    author: "wordpress.org",
  },
  {
    quote:
      "Comfort makes you weaker. We need some variability, some stressors. Not too much, but just enough.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote: "Computers are like a bicycle for our minds.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.",
    author: "Eric Raymond",
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
    quote:
      "Concentrate every minute like a Roman— like a man— on doing what's in front of you with precise and genuine seriousness, tenderly, willingly, with justice. And on freeing yourself from all other distractions.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Consider at what price you sell your integrity; but please, for God's sake, don't sell it cheap.",
    author: "Epictetus, Discourses I, 2.33",
  },
  {
    quote:
      "Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline.",
    author: "Bill Clinton",
  },
  {
    quote:
      "Consider that as the heaps of sand piled on one another hide the former sands, so in life the events that go before are soon covered by those that come after.",
    author: "Marcus Aurelius, Meditations, VII.34",
  },
  {
    quote:
      "Consider that before long you will be nobody and nowhere, nor will any of the things exist that you now see, nor any of those who are now living. For all things are formed by nature to change and be turned and to perish in order that other things in continuous succession may exist.",
    author: "Marcus Aurelius, Meditations, XII.21",
  },
  {
    quote:
      "Consider that everything is opinion, and opinion is in your power. Take away then, when you choose, your opinion, and like a mariner who has rounded the headland, you will find calm, everything stable, and a waveless bay.",
    author: "Marcus Aurelius, Meditations, XII.22",
  },
  {
    quote:
      "Consider that men will do the same things even though you would burst with rage.",
    author: "Marcus Aurelius, Meditations, VIII.4",
  },
  {
    quote:
      "Consider that you also do many things wrong, and that you are a man like others; and even if you do abstain from certain faults, still you have the disposition to commit them, though either through cowardice, or concern about reputation, or some such mean motive, you abstain from such faults.",
    author: "Marcus Aurelius, Meditations, XI.18",
  },
  {
    quote:
      "Consider the abyss of time past, infinite future. Three das of life or three generations: what's the difference?",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Consider what men are when they are eating, sleeping, coupling, evacuating, and so forth. Then what kind of men they are when they are imperious and arrogant, or angry and scolding from their elevated place.",
    author: "Marcus Aurelius, Meditations, X.19",
  },
  {
    quote:
      "Constantly and, if it be possible, on the occasion of every impression on the soul, apply to it the principles of physics, ethics, and dialectics [logic].",
    author: "Marcus Aurelius, Meditations, VIII.13",
  },
  {
    quote:
      "Constantly fortified with the new blood of immigrants who saw America as a place where anything was possible, the nation had adopted an ethos that elevated problem solving to the status of religion.",
    author: "John Hoyt Williams, A Great and Shining Road",
  },
  {
    quote:
      "Constantly observe who those are whose approbation you wish to have, and what ruling principles they possess. For then you will neither blame those who offend involuntarily, nor will you want their approbation if you look to the sources of their opinions and appetites.",
    author: "Marcus Aurelius, Meditations, VII.62",
  },
  {
    quote:
      "Constantly recall those who have complained greatly about anything, those who have been most conspicuous by the greatest fame or misfortunes or enmities or fortunes of any kind: then think, Where are they all now? Smoke and ash and a tale, or not even a tale.",
    author: "Marcus Aurelius, Meditations, XII.27",
  },
  {
    quote:
      "Contentment doesn't mean you stop improving your situation. In fact it has nothing to do with your external situation. It is a state of mind in which your happiness does not depend on external circumstances. It is the absence of neediness. You become self sufficient.",
    author: "@TheAncientSage",
  },
  {
    quote: "Controlling complexity is the essence of computer programming.",
    author: "Brian Kernigan",
  },
  {
    quote:
      'Conviction is much more powerful than "positive thinking". Positive thinking is fragile and easily shattered by random tragedy. Random tragedy is an inevitable feature of life. Conviction guides you through misfortune. It does not wish it away. Purpose outdoes positivity.',
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "Correct judgements about externals make our character good, as perverse or distorted ones make it bad.",
    author: "Epictetus, Discourses I, 29.3",
  },
  {
    quote:
      "Count your age by friends, not years. Count your life by smiles, not tears.",
    author: "John Lennon",
  },
  {
    quote: "Courage is grace under pressure.",
    author: "Ernest Hemingway",
  },
  {
    quote:
      "1 - Creativity and innovation always build on the past.\n2 - The past always tries to control the creativity that builds on it.\n3 - Free societies enable the future by limiting the past.\n4 - Ours is less and less a free society.",
    author: "Lawrence Lessig, Free Culture.",
  },
  {
    quote: "C’s great for what it’s great for.",
    author: "Ben Hoyts (micropledge)",
  },
  {
    quote:
      "Cultivate a fearless approach to life, attack everything with boldness and energy.",
    author: "Robert Greene",
  },
  {
    quote: "Dance first. Talk later. It's the natural order.",
    author: "Samuel Beckett",
  },
  {
    quote:
      "Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You've solved the wrong problem. Work hard to improve.",
    author: "Alan J. Perlis (Epigrams in programmi ng)",
  },
  {
    quote:
      "Death and life, honor and dishonor, pain and pleasure — all these things equally happen to good men and bad, being things which make us neither better nor worse. Therefore they are neither good nor evil.",
    author: "Marcus Aurelius, Meditations II.11",
  },
  {
    quote:
      'Death and pain are not frightening, it\'s the fear of pain and death we need to fear. Which is why we praise the poet who wrote, "Death is not fearful, but dying like a coward is."',
    author: "Epictetus, Discourses II, 1.13",
  },
  {
    quote:
      "Death could be around the corner, for you, for your friends and for your family. I'm not trying to scare you. I'm just realist.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "Death, [Diogenes] said, was not evil because it was not dishonourable. Reputation was the empty noise of fools.",
    author: "Epictetus, Discourses I, 24.6",
  },
  {
    quote:
      "Death is necessary and cannot be avoided. I mean, where am I going to go to get away from it?",
    author: "Epictetus, Discourses I, 27.7-8",
  },
  {
    quote: "Death is only the end if you assume the story is about you",
    author: "Welcome to Night Vale",
  },
  {
    quote: "Death smiles at us all, but all a man can do is smile back.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      '"Define for me now what the "indifferents" are." "Whatever things we cannot control.\'"Tell me the upshot." "They are nothing to me."',
    author: "Epictetus, Discourses I, 30.3",
  },
  {
    quote:
      "Desire is a contract that you make with yourself to be unhappy until you get what you want.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Des mots simples, quand ils sont bien utilisés, font faire à des gens ordinaires des choses extraordinaires.",
    author: "Khaled TANGAO",
  },
  {
    quote:
      "Different things delight different people. But it is my delight to keep the ruling faculty sound without turning away either from any man or from any of the things that happen to men, but looking at and receiving all with welcoming eyes and using everything according to its value.",
    author: "Marcus Aurelius, Meditations, VIII.43",
  },
  {
    quote: "Difficulty is what wakes up the genius.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote: "Discipline today leads to options tomorrow.",
    author: "?",
  },
  {
    quote: "Discomfort is a wise teacher.",
    author: "Caroline Myss",
  },
  {
    quote: "Discomfort is the currency of success.",
    author: "Brooke Castillo",
  },
  {
    quote:
      "Discomfort is your friend. It doesn't matter if you're sick, if you have kids… if you're a pro, you go to work.",
    author: "Joe Rogan",
  },
  {
    quote:
      'Do as Socrates did, never replying to the question of where he was from with, "I am Athenian," or "I am from Corinth," but always, "I am a citizen of the world."',
    author: "Epictetus, Discourses, I, 9.1",
  },
  {
    quote:
      "Doctors won’t make you healthy. Nutritionists won’t make you slim. Teachers won’t make you smart. Gurus won’t make you calm. Mentors won’t make you rich. Trainers won’t make you fit. Ultimately, you have to take responsibility. Save yourself.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Does what's happened keep you from acting with justice, generosity, self-control, sanity, prudence, honesty, humility, straightforwardness, and all other qualities that allow a person's nature to fulfil itself? So remember this principle when something threatens to cause you pain: the thing itself was no misfortune at all; to endure it and prevail is great good fortune.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Do not accept anything because it comes from the mouth of a respected person.",
    author: "Buddha",
  },
  {
    quote:
      "Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, while it is in your power, be good.",
    author: "Marcus Aurelius, Meditations IV.17",
  },
  {
    quote:
      "Do not act when the tide of rage flows in. Wait for it to go out. Then act with reason and proportion.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "Do not be disgusted, discouraged, or dissatisfied if you do not succeed in doing everything according to right principles; but when you have failed, return again, and be content if the greater part of what you do is consistent with man's nature.",
    author: "Marcus Aurelius, Meditations V.9",
  },
  {
    quote:
      "Do not be perturbed, for all things are according to the nature of the universal; and in a little time you will be nobody and nowhere, like Hadrian and Augustus.",
    author: "Marcus Aurelius, Meditations, VIII.5",
  },
  {
    quote:
      "Do not be whirled about, but in every movement have respect to justice, and on the occasion of every impression maintain the faculty of comprehension or understanding.",
    author: "Marcus Aurelius, Meditations IV.22",
  },
  {
    quote:
      "Do not care what others think of you. Be an unapologetic rebel. The masses are lost. Looking up to them for guidance is like a person with eyes looking up to the blind. Feel free to do your own thing without fearing the disapproval of others. If they don't like it's their problem.",
    author: "@TheAncientSage",
  },
  {
    quote: "Do not envy those who seems naturally gifted; it is often a curse.",
    author: "Robert Greene",
  },
  {
    quote:
      "Do not indulge in dreams of having what you have not, but reckon up the chief of the blessings you do possess, and then thankfully remember how you would crave for them if they were not yours.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Do not let your thoughts at once embrace all the various troubles that you may expect to befall you: but on every occasion ask yourself, What is there in this that is intolerable and past bearing? For you will be ashamed to confess.",
    author: "Marcus Aurelius, Meditations, VIII.36",
  },
  {
    quote:
      "Do not spoil what you have by desiring what you have not; but remember that what you now have was once among the things only hoped for.",
    author: "Greek philosopher Epicurus",
  },
  {
    quote:
      "Do not waste the remainder of your life in thoughts about others ... for you lose the opportunity of doing something else when you have such thoughts as these.",
    author: "Marcus Aurelius, Meditations III.4",
  },
  {
    quote: "Don't aim to be perfect. Aim to be antifragile.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "Don't allow yourself to be heard any longer griping about public life, not even with your own ears! Marcus Aurelius",
    author: "Unknown",
  },
  {
    quote:
      "Don't argue with people nor insist on showing them truth. Maybe it is you who needs to change your mind. Even if you are right you only incur resentment by trying to correct others.",
    author: "@TheAncientSage",
  },
  {
    quote: "Don't be afraid to express yourself. Be YOU.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Don't be disappointed if you return home with the very same set of ideas you arrived with. Because you had no intention of changing, correcting or adopting others in their place.",
    author: "Epictetus, Discourses II, 21.16",
  },
  {
    quote:
      "Don't believe your situation is genuinely bad – no one can make you do that. Is there smoke in the house? If it's not suffocating, I will stay indoors; if it proves too much, I'll leave. Always remember – the door is open.",
    author: "Epictetus, Discourses I, 25.17-18",
  },
  {
    quote:
      "Don't be the person that looks at the weather report the night before to decide what you are going to do the next day.",
    author: "David Goggins",
  },
  {
    quote:
      "Don't confuse qualities that are found in the same writer only incidentally. If Plato had been strong and handsome, should I also try to become strong and handsome, as if this were essential to philosophy, since there was one particular philosopher who combined philosophy with good looks?",
    author: "Epictetus, Discourses I, 8.12-13",
  },
  {
    quote:
      "Don't confuse schooling with education. I didn't go to Harvard but the people that work for me did.",
    author: "Elon Musk",
  },
  {
    quote:
      "Don't demand or expect that events happen as you would wish them to. Accept events as they actually happen. That way peace is possible.",
    author: "Epictetus",
  },
  {
    quote: "Don't expect what you don't communicate.",
    author: "We're Not Really Strangers on Twitter",
  },
  {
    quote: "Don't explain your philosophy. Embody it.",
    author: "Epictetus",
  },
  {
    quote: "Don't fear moving slowly. Fear standing still.",
    author: "Chinese proverb",
  },
  {
    quote: "Don't get mad at others because life is kicking your ass.",
    author: "David Goggins",
  },
  {
    quote: "Dont give users the opportunity to lock themselves.",
    author: "unknown",
  },
  {
    quote: "Don't grieve. Anything you lose comes round in another form.",
    author: "Rumi",
  },
  {
    quote:
      "Don't have good ideas if you aren't willing to be responsible for them.",
    author: "Alan Perlis",
  },
  {
    quote:
      "Don't hope that events will turn out the way you want, welcome events in whichever way they happen: this is the path to peace.",
    author: "Epictetus, Enchiridion 8",
  },
  {
    quote:
      "Don't let fear, low and the negative voices hold you back from your true destiny.",
    author: "David Goggins",
  },
  {
    quote: "Don't let jerks live rent-free in your head.",
    author: "Sam Altman",
  },
  {
    quote:
      "Don't let outward appearances mislead you into thinking that someone with more prestige, power or some other distinction must on that account be happy.",
    author: "Epictetus, Enchiridion 19.2",
  },
  {
    quote:
      'Don\'t let the force of the impression when first it hits you knock you off your feet; just say to it, "Hold on a moment; let me see who you are and what you represent. Let me put you to the test."',
    author: "Epictetus, Discourses II, 18.24",
  },
  {
    quote:
      "Don't let your fears paralyze you into becoming a lesser version of yourself. Eliminate fear by confronting what you're afraid of.",
    author: "David Goggins",
  },
  {
    quote: "Don't stay in bed, unless you can make money in bed.",
    author: "George Burns",
  },
  {
    quote:
      "Don't worry about what anybody else is going to do. The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote:
      '"Do we have that many masters?" We do. Because over and above the rest we have masters in the form of circumstances, which are legion. And anyone who controls any one of them controls us as well.',
    author: "Epictetus, Discourses IV, 1.59",
  },
  {
    quote:
      "Do what is necessary, and whatever the reason of a social animal naturally requires, and as it requires.",
    author: "Marcus Aurelius, Meditations IV.24",
  },
  {
    quote:
      "Do what you will. Even if you tear yourself apart, most people will continue doing the same things.",
    author: "Marcus Aurelius",
  },
  {
    quote: "Do you have reason? I have. Why then do you not use it?",
    author: "Marcus Aurelius, Meditations IV.13",
  },
  {
    quote:
      "Do you see how many qualities you are immediately able to exhibit, in which there is no excuse of natural incapacity and unfitness, and yet you still remain voluntarily below the mark?",
    author: "Marcus Aurelius, Meditations V.5",
  },
  {
    quote:
      "Do you want to know if you are educated? Show us your values, philosopher.",
    author: "Epictetus, Discourses III, 23.9",
  },
  {
    quote:
      "Do you want to sell sugared water all your life or do you want to change the world?",
    author: "Steve Jobs, to John Sculley (former Pepsi executive)",
  },
  {
    quote:
      'Drama provides a convenient distraction. We light small fires and busy ourselves with putting them out. Short term "emergencies" give us an excuse to ignore the long term issues that we don\'t wish to acknowledge.',
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "Drop your concepts, drop your opinions, drop your prejudices, drop your judgments, and you will see that.",
    author: "Anthony de Mello",
  },
  {
    quote:
      "Drunkenness inflames and lays bare every vice, removing the reserve that acts as a chuck on impulses to wrong behaviour.",
    author: "Seneca, Letter LXXXIII",
  },
  {
    quote: "Each of us needs what nature gives us, when nature gives it.",
    author: "Marcus Aurelius, coolsville",
  },
  {
    quote:
      "Ecoute, crois en ton projet... Implique toi à fond... Trouve des aspects innovants pour te distinguer des autres. Tu verras que tu te feras remarquer très facilement...",
    author: "Khaled Tangao",
  },
  {
    quote:
      "Effortless stoicism will come when you have dismantled everything in your mind that produces reactions.",
    author: "James Pierce",
  },
  {
    quote:
      "Ego and mastery exist on opposite ends of the same continuum. The more one leans towards ego, the further one is from mastery.",
    author: "Sam Yang",
  },
  {
    quote:
      "Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary.",
    author: "Frederick P. Brooks, No Sliver Bullet.",
  },
  {
    quote:
      "Either all things proceed from one intelligent source and come together as in one body, and the part ought not to find fault with what is done for the benefit of the whole; or there are only atoms, and nothing else than mixture and dispersion.\n Why, then, are you disturbed?",
    author: "Marcus Aurelius, Meditations, IX.39",
  },
  {
    quote:
      "Either there is a fatal necessity and invincible order, or a kind Providence, or a confusion without a purpose and without a director. If then there is an invincible necessity, why do you resist? But if there is a Providence that allows itself to be propitiated, make yourself worthy of the help of the divinity. But if there is a confusion without a governor, be content that in such a tempest you have yourself a certain ruling intelligence.",
    author: "Marcus Aurelius, Meditations, XII.14",
  },
  {
    quote:
      "Either you're going to be depressed when your wish is not realized or foolishly pleased with yourself if it is, overjoyed for the wrong reasons.",
    author: "Epictetus, Discourses IV, 4.35",
  },
  {
    quote: "Elegance is not about being noticed, it's about being remembered.",
    author: "Giorgio Armani",
  },
  {
    quote:
      "Emotions are easily hijacked by illusory threats that tap into our insecurities. We can't be strategically dynamic if we are always on the defensive. We are more effective when we realize how many things don't require any response at all.",
    author: "@TheStoicEmperor",
  },
  {
    quote: "Ensure you endure.",
    author: "Maxime Lagacé",
  },
  {
    quote: "Escape competition through authenticity.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Even if you are hurting, never let your competition see the look of defeat or even vulnerability on your face.",
    author: "David Goggins",
  },
  {
    quote:
      "Even people who deny that statements can be valid or impressions clear are obliged to make use of both. You might almost say that nothing proves the validity of a statement more than finding someone forced to use it while at the same time denying that it is sound.",
    author: "Epictetus, Discourses II, 20.1",
  },
  {
    quote: "Even the smallest thing should be done with reference to an end.",
    author: "Marcus Aurelius, Meditations II.16",
  },
  {
    quote:
      "Eventually, the time that was not spent on learning skills will catch up with you, and the fall will be painful.",
    author: "Robert Greene",
  },
  {
    quote:
      "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
    author: "Napoleon Hill",
  },
  {
    quote:
      "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Everybody makes their own fun. If you don't make it yourself, it ain't fun, it's entertainment.",
    author: "David Mamet (as relayed by Joss Whedon)",
  },
  {
    quote:
      "Every day as it comes should be welcomed and reduced forthwith into our own possession as if it were the finest day imaginable. What flies past has to be seized at.",
    author: "Seneca, Letter CVIII",
  },
  {
    quote:
      "Every gun that is made, every warship launched, every rocket fired signifies in the final sense, a theft from those who hunger and are not fed, those who are cold and are not clothed. This world in arms is not spending money alone. It is spending the sweat of its laborers, the genius of its scientists, the hopes of its children. This is not a way of life at all in any true sense. Under the clouds of war, it is humanity hanging on a cross of iron.",
    author: "Dwight D. Eisenhower",
  },
  {
    quote:
      "Every hour focus your mind attentively…on the performance of the task in hand, with dignity, human sympathy, benevolence and freedom, and leave aside all other thoughts. You will achieve this, if you perform each action as if it were your last.",
    author: "Marcus Aurelius",
  },
  {
    quote: "Every man prefers belief to the exercise of judgment.",
    author: "Seneca",
  },
  {
    quote:
      "Everyone faces up more bravely to a thing for which he has long prepared himself, sufferings, even, being withstood if they have been trained for in advance. Those who are unprepared, on the other hand, are panic-stricken by the most insignificant happenings.",
    author: "Seneca",
  },
  {
    quote:
      "Every part of me then will be reduced by change into some part of the universe, and that again will change into another part of the universe, and so on forever.",
    author: "Marcus Aurelius, Meditations V.13",
  },
  {
    quote:
      "Everything about it was visibly mis-shapen, corrupt, crawling, verminous; for a time I could not bear to look at it, and passed with averted eyes; recovering from this weakness, I forced myself to look, and to face day by day the question: a thing so obviously, so incontrovertibly, so indefensibly bad, why had Scott done it?",
    author: "R. G. Collingwood on the Albert Memorial",
  },
  {
    quote:
      "Everything can be taken from a man but one thing: the last of the human freedoms – to choose one's attitude in any given set of circumstances, to choose one's own way.",
    author: "Viktor Frankl, Man's Search for Meaning",
  },
  {
    quote:
      "Everything comes and goes in life. Happiness and unhappiness are temporary experiences that rise from sense perception. Heat and cold, pleasure and pain, will come and go. They never last forever. So, do not get attached to them. We have no control over them.",
    author: "Krishna",
  },
  {
    quote:
      "Everything is only for a day, both that which remembers and that which is remembered.",
    author: "Marcus Aurelius, Meditations IV.35",
  },
  {
    quote: "Everything should be made as simple as possible, but no simpler.",
    author: "Albert Einstein",
  },
  {
    quote: "Everything that can be invented has been invented.",
    author: "Charles H. Duell, Commissioner, U.S. Office of Patents, 1899",
  },
  {
    quote:
      "Everything that happens is either endurable or not. If it's endurable, then endure it. Stop complaining. If it's unendurable… then stop complaining. Your destruction will mean its end as well. Just remember: you can endure anything your mind can make endurable, by treating it as in your interest to do so.",
    author: "Marcus Aurelius",
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "Everywhere, at each moment, you have the option: to accept this event with humility; to treat this person as he should be treated; to approach this thought with care, so that nothing irrational creeps in.",
    author: "Marcus Aurelius",
  },
  {
    quote: "Excellence is doing ordinary things extraordinarily well.",
    author: "John W. Gardner",
  },
  {
    quote: "Excitement fades, but the value remains.",
    author: "Matt D'Avella",
  },
  {
    quote: "Expectation is the only seed of disappointment.",
    author: "Mokokoma Mokhonoana",
  },
  {
    quote:
      "Expect the river to be wild, surprising and challenging. To expect the opposite is to live in delusion.",
    author: "Maxime Lagacé",
  },
  {
    quote: "Experience is what you get when you don't get what you want.",
    author: "Cited by Randy Pausch",
  },
  {
    quote: "Failure and deprivation are the best educators and purifiers.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Failure is an option here. If things are not failing, you are not innovating.",
    author: "Elon Musk",
  },
  {
    quote:
      "Failure to observe what is in the mind of another has seldom made a man unhappy; but those who do not observe the movements of their own minds must of necessity be unhappy.",
    author: "Marcus Aurelius, Meditations II.8",
  },
  {
    quote: "Fear is a natural reaction to moving closer to the truth.",
    author: "Pema Ch ödr ön",
  },
  {
    quote:
      "Fear is the basis of all suffering. Both desire and anger are manifestations of fear. Fear itself is a creation of your mind. It does not exist independently. Since it is a fabrication, you don't have to fight it. Just understand it. Understanding is the key to freedom.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "Feeling embarrassed by your old work isn't a sign of incompetence. It's a mark of growth. Being critical of your past performance means you've raised your standards, refined your taste, or improved your judgement. It's a path to producing something better in the future.",
    author: "Adam Grant",
  },
  {
    quote:
      "Few people are capable of expressing with equanimity opinions which differ from the prejudices of their social environment. Most people are even incapable of forming such opinions.",
    author: "Einstein",
  },
  {
    quote:
      "filter(P, S) is almost always written clearer as [x for x in S if P(x)]",
    author: "Guido van Rossum on Python",
  },
  {
    quote:
      "Finally, waiting for death with a cheerful mind, as being nothing else than a dissolution of the elements of which every living being is compounded. But if there is no harm to the elements themselves in each continually changing into another, why should a man have any apprehension about the change and dissolution of all the elements?",
    author: "Marcus Aurelius, Meditations II.17",
  },
  {
    quote:
      "Finding information is easier than ever. Filtering information is harder than ever. We are bombarded with irrelevant data and unsolicited stimulation. Choosing what to ignore is as important as choosing what to pay attention to.",
    author: "@TheStoicEmperor",
  },
  {
    quote: "Find someone who shares your definition of love.",
    author: "@vintagefeeling on instagram",
  },
  {
    quote:
      "First, do nothing inconsiderately or without a purpose. Second, make your acts refer to nothing else but a social end.",
    author: "Marcus Aurelius, Meditations, XII.20",
  },
  {
    quote:
      "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.",
    author: "George Carrette",
  },
  {
    quote:
      "First, see clearly. Next, act correctly. Finally, endure and accept the world as it is.",
    author: "Ryan Holiday",
  },
  {
    quote: "Flow is meditation while doing.",
    author: "Naval Rakikant",
  },
  {
    quote: "Focusing is about saying no.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Focus on the moment, not the monsters that may or may not be up ahead.",
    author: "Ryan Holiday",
  },
  {
    quote:
      "Focus on what nature demands, as if you were governed by that alone. Then do that, and accept it, unless your nature as a living being would be degraded by it.",
    author: "Marcus Aurelius",
  },
  {
    quote: "Folks who want porn can buy an android.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Fools! Don't they know that tears are a woman's most effective weapon?",
    author: "Catwoman (The Batman TV Series, episode 83)",
  },
  {
    quote:
      "Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it.",
    author: "Alan J. Perlis (Epigrams in programming)",
  },
  {
    quote:
      "For complex systems, the compiler and development environment need to be in the same language that its supporting. It's the only way to grow code.",
    author: "Alan Kay",
  },
  {
    quote:
      "For God's sake, stop honouring externals, quit turning yourself into the tool of mere matter, or of people who can supply you or deny you those material things.",
    author: "Epictetus, Discourses III, 20.8",
  },
  {
    quote:
      "Formerly, when you were devoted to worthless pursuits, your friends found you congenial company. But you can't be a hit in both roles. To the extent you cultivate one you will fall short in the other.",
    author: "Epictetus, Discourses IV, 2.6-7",
  },
  {
    quote:
      "For the things we have to learn before we can do them, we learn by doing them.",
    author: "Aristotle.",
  },
  {
    quote:
      'For what does reason purport to do? "Establish what is true, eliminate what is false and suspend judgement in doubtful cases." ... What else does reason prescribe? "To accept the consequence of what has been admitted to be correct."',
    author: "Epictetus, Discourses I, 7.5",
  },
  {
    quote:
      "For where else is friendship found if not with fairness, reliability and respect for virtue only?",
    author: "Epictetus, Discourses II, 22.30",
  },
  {
    quote: "Fragile egos make for fragile friendships.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "Frankly, I don't think you could have driven a needle up my sphincter using a sledgehammer.",
    author: "Col. Barry Horne, F-117 pilot, on first mission over Baghdad",
  },
  {
    quote: "Freedom is a fast car and an open road.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Friends, the school of a philosopher is a hospital. When you leave, you should have suffered, not enjoyed yourself.",
    author: "Epictetus, Discourses III, 23.30",
  },
  {
    quote:
      "From Alexander the Platonic [I learned not] continually to excuse the neglect of duties required by our relations to those with whom we live, by alleging urgent occupations.",
    author: "Marcus Aurelius, Meditations I.12",
  },
  {
    quote:
      "From Catulus [I learned] not to be indifferent when a friend finds fault, even if he should find fault without reason, but to try to restore him to his usual disposition.",
    author: "Marcus Aurelius, Meditations I.13",
  },
  {
    quote:
      "From Diognetus [I learned] not to busy myself about trifling things, and not to give credit to what was said by miracle-workers and jugglers about incantations and the driving away of demons and such things.",
    author: "Marcus Aurelius, Meditations I.6",
  },
  {
    quote:
      "From Fronto [I learned] that generally those among us who are called Patricians are rather deficient in paternal affection.",
    author: "Marcus Aurelius, Meditations I.11",
  },
  {
    quote:
      "From Maximus I learned self-government, and not to be led aside by anything; and cheerfulness in all circumstances, as well as in illness.",
    author: "Marcus Aurelius, Meditations I.15",
  },
  {
    quote:
      "From my brother Severus [I learned] to love my kin, and to love truth, and to love justice.",
    author: "Marcus Aurelius, Meditations I.14",
  },
  {
    quote:
      "From my grandfather Verus I learned good morals and the government of my temper.",
    author: "Marcus Aurelius, Meditations I.1",
  },
  {
    quote:
      "From my mother [I learned] abstinence, not only from evil deeds, but even from evil thoughts; and further, simplicity in my way of living, far removed from the habits of the rich.",
    author: "Marcus Aurelius, Meditations I.3",
  },
  {
    quote:
      "From Rustics [I learned] with respect to those who have offended me by words, or done me wrong, to be easily disposed to be pacified and reconciled.",
    author: "Marcus Aurelius, Meditations I.7",
  },
  {
    quote:
      "From Sextus [I learned] to tolerate ignorant persons, and those who form opinions without consideration.",
    author: "Marcus Aurelius, Meditations I.9",
  },
  {
    quote:
      "From this place she sent into the world those novels, which by many have been placed on the same shelf as the works of a D'Arblay and an Edgeworth.",
    author: "Henry Austen on his sister Jane, in a preface to Persuasion",
  },
  {
    quote:
      "From 1911 to 1920, the mood of the city varied between utter dullness and tremendous excitement.",
    author: "Arthur Coffman, An Illustrated History of Palo Alto",
  },
  {
    quote:
      "Functional programming is like describing your problem to a mathematician. Imperative programming is like giving instructions to an idiot.",
    author: "arcus, #scheme on Freenode",
  },
  {
    quote:
      "Functional programming is to algorithms as the ubiquitous little black dress is to women's fashion.",
    author: 'Mark Tarver (of "The bipolar Lisp programmer" fame)',
  },
  {
    quote: "Funny, the way people’s minds work, isn't it?",
    author: "Professor Dumbledore",
  },
  {
    quote: "Genius is 1% inspiration and 99% perspiration.",
    author: "Thomas Edison",
  },
  {
    quote: "Genius often really is just persistence in disguise.",
    author: "Ryan Holiday",
  },
  {
    quote: "Get the important things right.",
    author: "N. P. Calderwood",
  },
  {
    quote:
      "Getting back to failing early, I've learned it's important to completely fail. Get fired. Shoot the project, then burn its corpse. Melt the CVS repository and microwave the backup CDs. When things go wrong, I've often tried to play the hero from start to finish. Guess what? Some projects are doomed no matter what. Some need skills I don't possess. And some need a fresh face.",
    author: "Reginald Braithwaite",
  },
  {
    quote:
      "Getting more of something has not satisfied anyone. It will not satisfy you either. It will only increase your discontent. He who has little can be content, but not the one who has a lot. The more one attains, the higher the expectations, and the greater the discontent.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "Getting those things is not in my control – and not good or bad in any case. But the way I use them is good or bad, and depends on me.",
    author: "Epictetus, Discourses II, 5.8",
  },
  {
    quote: "Give up control. You never really had it anyway.",
    author: "How to fail: 25 secrets learned through failure",
  },
  {
    quote:
      "Give yourself fully to your endeavors. Decide to construct your character through excellent actions and determine to pay the price of a worthy goal. The trials you encounter will introduce you to your strengths.",
    author: "Epictetus",
  },
  {
    quote:
      "Glory's an empty, changeable thing, as fickle as the weather. Poverty's no evil to anyone unless he kicks against it. Death is not an evil. What is it then? The one law mankind has that is free of all discrimination. Superstition is an idiotic heresy: it fears those it should love: it dishonours those it worships. For what difference does it make whether you deny the gods or bring them into disrepute?",
    author: "Seneca, Letter CXXII",
  },
  {
    quote: "Glossy surfaces reflect much more than they reveal.",
    author: "Goggins",
  },
  {
    quote:
      "God grant me the serenity to accept the things I cannot change, courage to change the things I can, and wisdom to know the difference.",
    author: "Unknown",
  },
  {
    quote:
      "God never tries of forgiving us; we are the ones who tire of seeking his mercy.",
    author: "Pope Francis",
  },
  {
    quote:
      "Going to work isn't exactly like spending the day in a theme park, unless you work in a theme park.",
    author: "An article on studenthut.com",
  },
  {
    quote: "Good artists copy. Great artists steal.",
    author: "Pablo Picasso",
  },
  {
    quote: "Good coders code, great reuse.",
    author: "http://www.catonmat.net",
  },
  {
    quote: "Good ideas are always crazy until they're not.",
    author: "Elon Musk",
  },
  {
    quote:
      "Good ideas are out there for anyone with the wit and the will to find them.",
    author: "Malcolm Gladwell, Who says big ideas are rare?",
  },
  {
    quote:
      "Good programmers use their brains, but good guidelines save us having to think out every case.",
    author: "Francis Glassborow",
  },
  {
    quote: "Good work is no done by ‘humble’ men.",
    author: "H. Hardy, A mathematician's apology.",
  },
  {
    quote: "Great art stretches the taste, it doesn't follow tastes.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Greatness starts with the replacement of hatred with polite disdain.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote: "Great times are great softeners.",
    author: "Ryan Holiday",
  },
  {
    quote: "Growth and comfort do not coexist.",
    author: "Ginny Rometty",
  },
  {
    quote:
      "Guy Steele leads a small team of researchers in Burlington, Massachusetts, who are taking on an enormous challenge — create a programming language better than Java.",
    author: "Sun.Com",
  },
  {
    quote:
      "Happiness and freedom begin with a clear understanding of one principle: some things are within our control, and some things are not.",
    author: "Epictetus",
  },
  {
    quote: "Happiness is a choice that requires effort at times.",
    author: "Aeschylus",
  },
  {
    quote:
      "Happiness is not to acquire and enjoy, but nothing to be desired, as it is to be free.",
    author: "Epictetus",
  },
  {
    quote: "Happiness isn't outside of us, but actually comes from within.",
    author: "Leo Babauta",
  },
  {
    quote: "Happiness is peace in motion.",
    author: "Naval Rakikant",
  },
  {
    quote:
      "Have I been made for this, to lie under the blankets and keep myself warm? But this is more pleasant. Do you exist then to take your pleasure, and not at all for action or exertion?",
    author: "Marcus Aurelius, Meditations V.1",
  },
  {
    quote:
      "Have you ever noticed that when you sit down to write something, half the ideas that end up in it are ones you thought of while writing it? The same thing happens with software. Working to implement one idea gives you more ideas.",
    author: "Paul Graham, The other road ahead.",
  },
  {
    quote:
      "Having large case statements in an object-oriented language is a sure sign your design is flawed.",
    author: "[Fixing architecture flaws in Rails' ORM]",
  },
  {
    quote: "Having the fewest wants, I am nearest to the gods.",
    author: "Socrates",
  },
  {
    quote:
      "He became an object of ridicule in 1993 when a paper published an intercepted phone call in which he told his lover Camilla Parker Bowles he wanted to be reincarnated as her tampon.",
    author: "Reuters story, on Prince Charles",
  },
  {
    quote:
      "He begins working calculus problems in his head as soon as he awakens. He did calculus while driving in his car, while sitting in the living room, and while lying in bed at night.",
    author: "divorce complaint of Richard Feynman's second wife",
  },
  {
    quote:
      "He causes his sun to rise on the evil and the good, and sends rain on the righteous and the unrighteous.",
    author: "Matthew 5:45",
  },
  {
    quote:
      "He has stripped away his body and – realizing that at some point soon he will have to abandon mankind and leave all this behind – has dedicated himself to serving justice in all he does, and nature in all that happens.",
    author: "Marcus Aurelius",
  },
  {
    quote: "He has the most who is content with the least.",
    author: "Diogenes",
  },
  {
    quote:
      "He is a great man who uses earthenware dishes as if they were silver; but he is equally great who uses silver as if it were earthenware. It is the sign of an unstable mind not to be able to endure riches.",
    author: "Seneca",
  },
  {
    quote:
      "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
    author: "Epictetus",
  },
  {
    quote:
      "Hence my urgent advice to all of you to reject the morals of the bestseller society and to find, to start with, your reward in your own fun. This is quite feasible, for the challenge of simplification is so fascinating that, if we do our job properly, we shall have the greatest fun in the world.",
    author: "E. W. Dijkstra, On the nature of computing science.",
  },
  {
    quote:
      "He often acts unjustly who does not do a certain thing; not only he who does a certain thing.",
    author: "Marcus Aurelius, Meditations, IX.5",
  },
  {
    quote:
      "Here is a rule to remember in future, when anything tempts you to feel bitter: not 'This is misfortune', but 'To bear this worthily is good fortune.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Here's to the crazy ones.\n The misfits.\nThe rebels.\nThe troublemakers.\nThe round pegs in the square holes.\nThe ones who see things differently.\nThey're not fond of rules.\nAnd they have no respect for the status quo.\nYou can quote them, disagree with them,\nglorify or vilify them.\nAbout the only thing you can't do is ignore them.\nBecause they change things.\nThey invent. They imagine. They heal.\nThey explore. They create. They inspire.\nThey push the human race forward.\nMaybe they have to be crazy.\nHow else can you stare at an empty canvas and see a work of art?\nOr, sit in silence and hear a song that’s never been written?\nOr, gaze at a red planet and see a laboratory on wheels?\nWe make tools for these kinds of people.\nWhile some may see them as the crazy ones,\nwe see genius.\nBecause the people who are crazy enough to think\nthey can change the world, are the ones who do.",
    author: "Apple, 1997, Think Different",
  },
  {
    quote:
      "Here you have philosophy's starting point: we find that people cannot agree among themselves, and we go in search of the source of their disagreement.",
    author: "Epictetus, Discourses II, 11.13",
  },
  {
    quote:
      "Heroes are heroes because they are heroic in behaviour, not because they won or lost.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      'He\'s a clever young man and a fan of rhetoric." "How do you know?" "He praises me." Oh, well, that proves it, of course.',
    author: "Epictetus, Discourses III, 23.14",
  },
  {
    quote:
      "Heureux l'étudiant qui comme la Rivière peut suivre son cours sans quitter son lit...",
    author: "Sebastien, sur commentcamarche.net",
  },
  {
    quote: "He who angers you conquers you.",
    author: "Elizabeth Kenny",
  },
  {
    quote:
      "He who does not desire or fear the uncertain day or capricious fate, is equal to the gods above and loftier than mortals.",
    author: "Justus Lipsius",
  },
  {
    quote:
      "He who does wrong does wrong against himself. He who acts unjustly acts unjustly to himself, because he makes himself bad.",
    author: "Marcus Aurelius, Meditations, IX.4",
  },
  {
    quote:
      "He who fears death fears either the loss of sensation or a different kind of sensation. But if you shall have no sensation, neither will you feel any harm; and if you will acquire another kind of sensation, you will be a different kind of living being and you will not cease to live.",
    author: "Marcus Aurelius, Meditations, VIII.58",
  },
  {
    quote:
      "He who follows reason in all things is both tranquil and active at the same time, and also cheerful and collected.",
    author: "Marcus Aurelius, Meditations, X.12",
  },
  {
    quote:
      "He who has a vehement desire for posthumous fame does not consider that every one of those who remember him will himself also die very soon.",
    author: "Marcus Aurelius, Meditations IV.19",
  },
  {
    quote:
      "He who is afraid of pain will sometimes also be afraid of some of the things that will happen in the world, and even this is impiety. And he who pursues pleasure will not abstain from injustice, and this is plainly impiety.",
    author: "Marcus Aurelius, Meditations, IX.1",
  },
  {
    quote:
      "He who laughs at the human race deserves better of it than he who mourns for it, for the former leaves it some good hopes of improvement, while the latter stupidly weeps over what he has given up all hopes of mending.",
    author: "Seneca",
  },
  {
    quote:
      "He who loves fame considers another man's activity to be his own good; and he who loves pleasure, his own sensations; but he who has understanding considers his own acts to be his own good.",
    author: "Marcus Aurelius, Meditations VI.51",
  },
  {
    quote:
      "He who reigns within himself, and rules passions, desires, and fears, is more than a king.",
    author: "John Milton",
  },
  {
    quote:
      "Hippocrates, after curing many diseases, himself fell sick and died. ... Alexander and Pompeius and Gaius Caesar, after so often completely destroying whole cities ... themselves, too, at last departed from life. ... And lice destroyed Democritus; and other lice killed Socrates.",
    author: "Marcus Aurelius, Meditations III.3",
  },
  {
    quote:
      "Hire people smarter than you. Work with people smarter than you. Listen to them. Let them lead you. Take the blame for all failures, give away the credit for all successes.",
    author: "How to fail: 25 secrets learned through failure",
  },
  {
    quote:
      "His notions fitted things so well,\nThat which was which he could not tell;\nBut oftentimes mistook th' one\n For th' other, as great clerks have done.",
    author: "Samuel Butler, Hudibras",
  },
  {
    quote:
      "How do you move forward? One step at a time. How do you lose weight? One kilo at a time. How do you write a book? One page at a time. How do you build a relationship? One day at a time. In a world obsessed with speed, never forget things of real worth and value take time.",
    author: "Thibaut",
  },
  {
    quote:
      "However beautiful the strategy, you should occasionally look at the results.",
    author: "Winston Churchill",
  },
  {
    quote: "However little television you watch, watch less.",
    author: "David McCullough",
  },
  {
    quote:
      "[How friendly will this machine be?] Well, I don’t think it’s a matter of friendliness, because ultimately if the program is going to accomplish anything of value, it will probably be relatively complex.",
    author:
      "Gary Kildall (inventor of CP/M, one of the first OS for the micro).",
  },
  {
    quote:
      "How happy is the blameless vestal’s lot! The world forgetting, by the world forgot. Eternal sunshine of the spotless mind! Each pray’r accepted, and each wish resign’d",
    author: "Alexander Pope",
  },
  {
    quote:
      "How long will you wait before you demand the best of yourself, and trust reason to determine what is best?",
    author: "Epictetus, Enchiridion 51.1",
  },
  {
    quote:
      "How quickly things disappear: in the universe the bodies themselves, but in time the memory of them.",
    author: "Marcus Aurelius, Meditations II.12",
  },
  {
    quote:
      "How short is the time from birth to dissolution, and the illimitable time before birth as well as the equally boundless time after dissolution.",
    author: "Marcus Aurelius, Meditations, IX.32",
  },
  {
    quote:
      "How small a part of the boundless and unfathomable time is assigned to every man! For it is very soon swallowed up in the eternal. And how small a part of the whole substance! And how small a part of the universal soul! And on what a small clod of the whole earth you creep!",
    author: "Marcus Aurelius, Meditations, XII.32",
  },
  {
    quote:
      "How soon will time cover all things, and how many it has covered already.",
    author: "Marcus Aurelius, Meditations VI.59",
  },
  {
    quote:
      "How strangely men act. They will not praise those who are living at the same time and living with themselves; but to be themselves praised by posterity, by those whom they have never seen or ever will see, this they set much value on.",
    author: "Marcus Aurelius, Meditations VI.18",
  },
  {
    quote: "How we spend our days is, of course, how we spend our lives.",
    author: "Annie Dillard",
  },
  {
    quote:
      'Human beings want control and certainty. "Accepting fate" means the opposite. That\'s why it seems absurd to us.',
    author: "Maxime Lagacé",
  },
  {
    quote:
      'Human beings worry incessantly about their social status. Making every device "socially connected" turned every device into an anxiety machine. The machine becomes symbolic of the set of all people that may be judging you. If "hell is other people" then hell is in our pocket.',
    author: "@TheStoicEmperor",
  },
  {
    quote:
      'Humans aren\'t rational they rationalize. And I don\'t just mean "some of them" or "other people". I\'m talking about everyone. We have a "logic engine" in our brains, but for the most part, it\'s not the one in the driver\'s seat -- instead it operates after the fact, generating rationalizations and excuses for our behavior.',
    author: "Paul Buchheit",
  },
  {
    quote:
      "Humans differ from animals to the degree that they are not merely an end result of their conditioning, but are able to reflect on their experiences and strategies, and apply insight to make changes in the way they live to modify the outcome.",
    author: 'SlideTrombone (comment on "Programming can ruin your life")',
  },
  {
    quote:
      "Humility is a knowledge of our weaknesses, confidence is a knowledge of our strengths, and ego is something dangerous with none of the former and a skewed sense of the latter.",
    author: "The Daily Stoic",
  },
  {
    quote:
      "I am annoyed to find myself continually described by people whom I have never set eyes on as bad-tempered.",
    author: "Evelyn Waugh, Diary (26 Dec 47)",
  },
  {
    quote:
      "I am completely independent, of the good or bad opionions of others.",
    author: "Leo from Actualized.org",
  },
  {
    quote:
      "I am happy because I want nothing from anyone. I do not care for money. Decorations, titles or distinctions mean nothing to me. I do not crave praise. The only thing that gives me pleasure, apart from my work, my violin and my sailboat, is the appreciation of my fellow workers.",
    author: "Albert Einstein",
  },
  {
    quote:
      '"I am unhappy, because this has happened to me." Not so: say, "I am happy, though this has happened to me, because I continue free from pain, neither crushed by the present nor fearing the future."',
    author: "Marcus Aurelius, Meditations IV.49",
  },
  {
    quote:
      "I begin to speak only when I'm certain what I'll say isn't better left unsaid.",
    author: "Cato The Younger",
  },
  {
    quote:
      "I blush deeply whenever I catch myself saying anything disgraceful. It's this reflex that will not allow me to propose pleasure as the good and the goal of life.",
    author: "Epictetus, Fragments 14",
  },
  {
    quote: "I cannot escape death, but at least I can escape the fear of it.",
    author: "Epictetus, Discourses I, 27.9-10",
  },
  {
    quote:
      "I cannot say this too strongly: Do not compare yourselves to others. Be true to who you are, and continue to learn with all your might.",
    author: "Daisaku Ikeda, Discussions on Youth",
  },
  {
    quote:
      "I didn't make a decision to pursue astronomy. Rather, it just grabbed me, and I had no thought of escaping.",
    author: "Carl Sagan",
  },
  {
    quote:
      "I discovered that the best innovation is sometimes the company, the way you organize the company. The whole notion of how you build a company is fascinating. When I got the chance to come back to Apple, I realized that I would be useless without the company, and that's why I decided to stay and rebuild it.",
    author:
      "Steve Jobs about why a properly run company could spawn innovation far more than any single creative individual",
  },
  {
    quote:
      "I do not know what the Lord's anointed, his Vicegerent upon earth, divinely appointed by him, and accountable to none but him for his actions, will either think or do, upon these symptoms of reason and good sense which seem to be breaking out all over France: but this I foresee, that, before the end of this century, the trade of both King and Priest will not be half so good a one as it has been.",
    author: "Chesterfield, letter to his son, 13 Apr 1752",
  },
  {
    quote:
      "I don’t think I was ever motivated by the notion of winning prizes, although I have a couple of dozen of them in the other room. I was more motivated by curiosity. Never by the desire for financial gain. I just wondered how things were put together. Or what laws or rules govern a situation, or if there are theorems about what one can’t or can do. Mainly because I wanted to know myself.",
    author: "Claude Shannon",
  },
  {
    quote: "I’d rather write programs to write programs than write programs.",
    author: "Richard Sites",
  },
  {
    quote:
      "If a man is mistaken, instruct him kindly and show him his error. But if you are not able, blame yourself, or not even yourself.",
    author: "Marcus Aurelius, Meditations, X.4",
  },
  {
    quote:
      "If a man objects to truths that are all too evident, it is no easy task finding arguments that will change his mind. This is proof neither of his own strength nor of his teacher's weakness. When someone caught in an argument hardens to stone, there is just no more reasoning with them.",
    author: "Epictetus, Discourses I, 5.1",
  },
  {
    quote:
      "If any man is able to convince me and show me that I do not think or act right, I will gladly change; for I seek the truth by which no man was ever injured. But he is injured who abides in his error and ignorance.",
    author: "Marcus Aurelius, Meditations VI.21",
  },
  {
    quote:
      "If anyone can refute me ‚ show me I'm making a mistake or looking at things from the wrong perspective ‚ I'll gladly change. It's the truth I'm after.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, 'He was ignorant of my other faults, else he would not have mentioned these alone'.",
    author: "Epictetus",
  },
  {
    quote:
      "If a thing is in your own power, why do you do it? But if it is in the power of another, whom do you blame? The atoms (chance) or the gods? Both are foolish. You must blame nobody.",
    author: "Marcus Aurelius, Meditations, VIII.17",
  },
  {
    quote:
      "If change is forced upon you, you must resist the temptation to overreact or feel sorry for yourself.",
    author: "Robert Greene",
  },
  {
    quote:
      "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    author: "Edsger W. Dijkstra",
  },
  {
    quote:
      "I feel it is everybodies obligation to reach for the best in themselves and use that for the interest of mankind.",
    author:
      "Corneluis (comment on 'Are you going to change the world? (Really?)')",
  },
  {
    quote:
      "If even the perception of doing wrong departs, what reason is there for living any longer?",
    author: "Marcus Aurelius, Meditations, VII.24",
  },
  {
    quote: "If everything seems under control, you're not going fast enough.",
    author: "Mario Andretti",
  },
  {
    quote:
      "If evil be spoken of you and it be true, correct yourself, if it's a lie, laugh at it.",
    author: "Epictetus",
  },
  {
    quote:
      "If from the moment they get up in the morning they adhere to their ideals, eating and bathing like a person of integrity, putting their principles into practice in every situation they face – the way a runner does when he applies the principles of running, or a singer those of musicianship – that is where you will see true progress embodied, and find someone who has not wasted their time making the journey here from home.",
    author: "Epictetus, Discourses I, 4.20",
  },
  {
    quote:
      'If "good" as well as "bad" really relate to our choices, then consider whether your position does not amount to saying something like, "Well, since that guy hurt himself with the injustice he did me, shouldn\'t I wrong him in order to hurt myself in retaliation?"',
    author: "Epictetus, Discourses II, 10.25-26",
  },
  {
    quote:
      "If I admire the interpretation [of a philosophical treatise], I have turned into a literary critic instead of a philosopher, the only difference being that, instead of Homer, I'm interpreting Chrysippus.",
    author: "Epictetus, Enchiridion 49",
  },
  {
    quote:
      "If I can make money while remaining honest, trustworthy and dignified, show me how and I will do it. But if you expect me to sacrifice my own values, just so you can get your hands on things that aren't even good – well, you can see yourself how thoughtless and unfair you're being.",
    author: "Epictetus, Enchiridion 24.3",
  },
  {
    quote:
      "If I had asked people what they wanted, they would have said faster horses.",
    author: "Henry Ford",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "If it doesn't challenge you, it won't change you.",
    author: "Unknown",
  },
  {
    quote:
      "If I tell you I'm good, you would probably think I'm boasting. If I tell you I'm no good, you know I'm lying.",
    author: "Bruce Lee",
  },
  {
    quote:
      "If it is not gonna matter in 5 years, don't spend more than 5 minutes being upset about it.",
    author: "Matthew McConaughey",
  },
  {
    quote:
      "If it is not right, do not do it: if it is not true, do not say it. For let your impulse be in your own power.",
    author: "Marcus Aurelius, Meditations, XII.17",
  },
  {
    quote:
      "If it is time to rest, rest completely. A good rest rejuvenates you so that you may do quality work. If it is time to work, work with complete focus. Time spent working earnestly earns you a well deserved rest. Don't mix work and rest; this compromises the quality of both.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "If it keeps up, man will atrophy all his limbs but the push-button finger.",
    author: "Frank Lloyd Wright",
  },
  {
    quote:
      "If it looks like a duck, walks like a duck, and quacks like a duck, it's a duck.",
    author: 'Official definition of "duck typing"',
  },
  {
    quote: "If it's endurable, then endure it. Stop complaining.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "If Java had true garbage collection, most programs would delete themselves upon execution.",
    author: "Robert Sewell",
  },
  {
    quote:
      "If money is your only standard, then consider that, by your lights, someone who loses their nose does not suffer any harm.",
    author: "Epictetus, Discourses II, 10.20",
  },
  {
    quote:
      "If our goal is to write poetry, the only way we are likely to be any good is to try to be as great as the best.",
    author: "Donald Hall, Poetry and Ambition",
  },
  {
    quote:
      "If someone is incapable of distinguishing good things from bad and neutral things from either – well, how could such a person be capable of love? The power to love, then, belongs only to the wise man.",
    author: "Epictetus, Discourses II, 22.3",
  },
  {
    quote:
      "If something isn’t working, you need to look back and figure out what got you excited in the first place.",
    author: "David Gorman (ImThere.com)",
  },
  {
    quote:
      "If the brain were so simple we could understand it, we would be so simple we couldn't.",
    author: "Lyall Watson",
  },
  {
    quote:
      "If the intellectual is common to all men, so is reason, in respect of which we are rational beings: if this is so, common also is the reason that commands us what to do, and what not to do; if this is so, there is a common law also; if this is so, we are fellow-citizens; if this is so, we are members of some political community.",
    author: "Marcus Aurelius, Meditations IV.4",
  },
  {
    quote: "If there is a will, there is a way.",
    author: "unknown",
  },
  {
    quote: "If there is one thing Voldemort cannot understand, it is love.",
    author: "Professor Dumbledore",
  },
  {
    quote:
      "If the rules are such that you can't make progress, then you have to fight the rules.",
    author: "Elon Musk",
  },
  {
    quote:
      "If we chose always to be wise we should rarely need to be virtuous. But inclinations which we could easily overcome irresistibly attract us. We give in to slight temptations and minimize the danger. We fall insensibly into dangerous situations, from which we could easily have safeguarded ourselves, but from which we cannot withdraw without heroic efforts which appal us. So finally, as we tumble into the abyss, we ask God why he has made us so feeble. But, in spite of ourselves, He replies through our consciences: 'I have made you too feeble to climb out of the pit, because I made you strong enough not to fall in.'",
    author: "Rousseau, Confessions, Cohen trans.",
  },
  {
    quote:
      "If we seek social status, we give other people power over us: We have to do things calculated to make them admire us, and we have to refrain from doing things that will trigger their disfavor. William B.",
    author: "Irvine",
  },
  {
    quote:
      "If we try to adapt our mind to the regular sequence of changes and accept the inevitable with good grace, our life will proceed quite smoothly and harmoniously.",
    author: "Epictetus, Fragments 8",
  },
  {
    quote:
      "If we wish to count lines of code, we should not regard them as lines produced but as lines spent.",
    author: "Edsger Dijkstra",
  },
  {
    quote:
      "If you accomplish something good with hard work, the labor passes quickly, but the good endures; if you do something shameful in pursuit of pleasure, the pleasure passes quickly, but the shame endures.",
    author: "Musonius Rufus",
  },
  {
    quote:
      "If you are able, correct by teaching those who do wrong; but if you cannot, remember that indulgence is given to you for this purpose.",
    author: "Marcus Aurelius, Meditations, IX.11",
  },
  {
    quote: "If you are easily provoked you are easily controlled.",
    author: "Unknown",
  },
  {
    quote:
      "If you are ever tempted to look for outside approval, realize that you have compromised your integrity. If you need a witness, be your own.",
    author: "Epictetus",
  },
  {
    quote:
      "If you are irritated by every rub, how will your mirror be polished?",
    author: "Unknown",
  },
  {
    quote:
      "If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it. And it is in your power to wipe out this judgment now.",
    author: "Marcus Aurelius, Meditations, VIII.47",
  },
  {
    quote:
      "If you cannot change something, it is best to accept it cheerfully rather than adding to one's misfortune by grieving over it.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "If you can't fly then run. If you can't run then walk. If you can't walk, then crawl, but by all means, keep moving.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "If you choose not to decide, you still have made a choice.",
    author: "Rush (Freewill)",
  },
  {
    quote:
      "If you commit to philosophy, be prepared at once to be laughed at and made the butt of many snide remarks.",
    author: "Epictetus, Enchiridion 22",
  },
  {
    quote:
      "If you create it for yourself, it's art.\n If you create it for others, it's business.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "If you didn't learn these things in order to demonstrate them in practice, what did you learn them for?",
    author: "Epictetus, Discourses I, 29.35",
  },
  {
    quote:
      "If you don't fail at least 90 percent of the time, you're not aiming high enough.",
    author: "Alan Kay",
  },
  {
    quote:
      '"If you don\'t know what you want," the doorman said, "you end up with a lot you don\'t.”',
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote: "If you don't like where you are, change it. You're not a tree.",
    author: "Jim Rohn",
  },
  {
    quote:
      "If you don't want to be cantankerous, don't feed your temper, or multiply incidents of anger. Suppress the first impulse to be angry, then begin to count the days on which you don't get mad.",
    author: "Epictetus, Discourses II, 18.12",
  },
  {
    quote:
      "If you don't want to go to the meeting right now, your future self won't want to go to it later, either.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "If you drop your ego, don't take things personally and adopt a detached perspective, your ability to deal with all types of people/situations will immensely improve.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "If you ever start taking things too seriously, just remember that we are talking monkeys on an organic spaceship flying through the universe.",
    author: "Joe Rogan",
  },
  {
    quote:
      'If you forfeit an external possession, make sure to notice what you get in return. If it is something more valuable, never say, "I have suffered a loss."',
    author: "Epictetus, Discourses IV, 3.1",
  },
  {
    quote: "If you get tired, learn to rest, not to quit.",
    author: "Banksy",
  },
  {
    quote:
      "If you get up in the mornnig and think the future is going to be better, it is a bright day. Otherwise, it's not.",
    author: "Elon Musk",
  },
  {
    quote:
      "'If you give him a penny for his thoughts, you'd get change.', 'Not the sharpest knife in the drawer.', 'A prime candidate for natural deselection.'",
    author: "Ideas for flamewars",
  },
  {
    quote:
      "If you have been placed in a position above others, are you automatically going to behave like a despot? Remember who you are and whom you govern – that they are kinsmen, brothers by nature, fellow descendants of Zeus.",
    author: "Epictetus, Discourses I, 13.4",
  },
  {
    quote:
      "If you have the right idea about what really belongs to you and what does not, you will never be subject to force or hindrance, you will never blame or criticize anyone, and everything you do will be done willingly.",
    author: "Epictetus, Enchiridion 1.3",
  },
  {
    quote:
      "If you have your heart set on wearing crowns, why not make one out of roses – you will look even more elegant in that.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "If you just sit and observe, you will see how restless your mind is. If you try to calm it, it only makes it worse, but over time it does calm, and when it does, there’s room to hear more subtle things – that’s when your intuition starts to blossom and you start to see things more clearly and be in the present more. Your mind just slows down, and you see a tremendous expanse in the moment. You see so much more than you could see before. It’s a discipline; you have to practice it.",
    author: "Steve Jobs",
  },
  {
    quote:
      "If you learn that someone is speaking ill of you, don't try to defend yourself against the rumours; respond instead with, \"Yes, and he doesn't know the half of it, because he could have said more.\"",
    author: "Epictetus, Enchiridion 33.9",
  },
  {
    quote:
      "If you like doing something, do it regularly; if you don't like doing something, make a habit of doing something different. The same goes for moral inclinations. When you get angry, you should know that you aren't guilty of an isolated lapse, you've encouraged a trend and thrown fuel on the fire.",
    author: "Epictetus, Discourses II, 18.4-5",
  },
  {
    quote: "If you lose self-control everything will fall.",
    author: "John Wooden",
  },
  {
    quote:
      "If you lost the capacity to read, or play music, you would think it was a disaster, but you think nothing of losing the capacity to be honest, decent and civilized.",
    author: "Epictetus, Discourses II, 10.15",
  },
  {
    quote:
      "If you make happiness your goal, you'll be disappointed. If you make presence your goal, you'll be satisfied.",
    author: "Maxime Lagacé",
  },
  {
    quote: "If you need inspiring words, don't do it.",
    author: "Elon Musk",
  },
  {
    quote:
      "If your body was turned over to just anyone, you would doubtless take exception. Why aren't you ashamed that you have made your mind vulnerable to anyone who happens to criticize you, so that it automatically becomes confused and upset?",
    author: "Epictetus, Enchiridion 28",
  },
  {
    quote:
      "If your brother mistreats you, don't try to come to grips with it by dwelling on the wrong he's done (because that approach makes it unbearable); remind yourself that he's your brother, that you two grew up together; then you'll find that you can bear it.",
    author: "Epictetus, Enchiridion 43",
  },
  {
    quote:
      "If you're going to try, go all the way. Otherwise, don't even start. This could mean losing girlfriends, wives, relatives and maybe even your mind. It could mean not eating for three or four days. It could mean freezing on a park bench. It could mean jail. It could mean derision. It could mean mockery--isolation. Isolation is the gift. All the others are a test of your endurance, of how much you really want to do it. And, you'll do it, despite rejection and the worst odds. And it will be better than anything else you can imagine. If you're going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It's the only good fight there is.",
    author: "Charles Bukowski",
  },
  {
    quote:
      "If you're more passionate about founding a business than the business itself, you can fall into a ten year trap. Better to stay emotionally unattached and select the best opportunity that arises. Applies to relationships too.",
    author: "Naval Ravikant",
  },
  {
    quote: "If your target audience is everyone, it's no one.",
    author: "Thea Knobel on Twitter",
  },
  {
    quote:
      "If you seek peace, be still. If you seek wisdom, be silent. If you seek love, be yourself.",
    author: "@psychepage on instagram",
  },
  {
    quote:
      "If you seek tranquility, do less. Or (more accurately) do what's essential – what the reason of a social being requires, and in the requisite way. Which brings a double satisfaction: to do less, better.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "If you shall be afraid not because you must some time cease to live, but if you shall fear never to have begun to live according to nature—then you will be a man worthy of the universe that has produced you, and you will cease to be a stranger in your native land.",
    author: "Marcus Aurelius, Meditations, XII.1",
  },
  {
    quote:
      "If you tell the truth, it becomes a part of your past. If you lie, it becomes a part of your future.",
    author: "John Spence",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote: "If you think of someone, let them know.",
    author: "@flcnhvy on Twitter",
  },
  {
    quote: "If you torture the data long enough, it will confess to anything.",
    author: "Ronald Coase",
  },
  {
    quote:
      "If you treat an individual as he is, he will remain how he is. But if you treat him as if he were what he ought to be and could be, he will become what he ought to be and could be.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "If you want to be a man of honour and a man of your word, who is going to stop you? You say you don't want to be obstructed or forced to do something against your will – well, who is going to force you to desire things that you don't approve, or dislike something against your better judgement?",
    author: "Epictetus, Discourses II, 2.4",
  },
  {
    quote: "If you want to have good ideas, you must have many ideas.",
    author: "Linus Pauling",
  },
  {
    quote:
      "If you want to improve, be content to be thought foolish and stupid.",
    author: "Epictetus",
  },
  {
    quote:
      "If you want to know just how little concerned you are about things good and bad, and how serious about things indifferent, compare your attitude to going blind with your attitude about being mentally in the dark. You will realize, I think, how inappropriate your values really are.",
    author: "Epictetus, Discourses I, 20.12",
  },
  {
    quote:
      "If you were a character in a book, what would your readers be yelling at you to do?",
    author: "Eliexer Yudkowsky on Twitter",
  },
  {
    quote:
      "If you would not have a man flinch when the crisis comes, train him before it comes.",
    author: "Seneca",
  },
  {
    quote:
      "I gained nothing at all from Supreme Enlightenment, and for that very reason it is called Supreme Enlightenment.",
    author: "Buddha",
  },
  {
    quote:
      "Ignoring someone is more powerful than hating them. Hate means that you are somehow bothered by the person and can't stop thinking about them. They possess you. Indifference indicates that you just don't care. It is freedom.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "I guess, when you're drunk, every woman looks beautiful and every language looks (like) a Lisp :)",
    author: "Lament, #scheme@freenode.net",
  },
  {
    quote:
      "I had my own reactions to Paul's essay — on the whole I liked it but when I connected some dots I found some suggestions of things I strongly disliked — not so much in the essay as suggested by it.",
    author: "reaction to What You Can't Say in a blog",
  },
  {
    quote: "I had to learn how to teach less, so that more could be learned.",
    author: "Tim Gallwey, The inner game of work",
  },
  {
    quote:
      "I have a bad neighbour – bad, that is, for himself. For me, though, he is good: he exercises my powers of fairness and sociability.",
    author: "Epictetus, Discourses III, 20.11",
  },
  {
    quote:
      "I have never met a man so ignorant that I couldn't learn something from him.",
    author: "Galileo Galilei",
  },
  {
    quote:
      "I have no money, no resources, no hopes. I am the happiest man alive.",
    author: "Henry Miller",
  },
  {
    quote:
      "I have often wondered how it is that every man loves himself more than all the rest of men, but yet sets less value on his own opinion of himself than on the opinion of others.",
    author: "Marcus Aurelius, Meditations, XII.4",
  },
  {
    quote:
      "I have to die. If it is now, well then I die now; if later, then now I will take my lunch, since the hour for lunch has arrived – and dying I will tend to later.",
    author: "Epictetus, Discourses I, 1.32",
  },
  {
    quote:
      "I invented the term Object-Oriented, and I can tell you I did not have C++ in mind.",
    author: "Alan Kay",
  },
  {
    quote:
      "I like times of turbulence more than times of stability. More opportunity to seize and grow.",
    author: "@LifeMathMoney",
  },
  {
    quote:
      "I like to see what I'm made of. I want to see if there is a limit to the human soul.",
    author: "David Goggins",
  },
  {
    quote: "I love to go and see all the things I am happy without.",
    author: "Socrates, On going to the market",
  },
  {
    quote:
      "Ils ne sont pas forts parce qu'ils sont forts. Ils sont forts parce que nous sommes faibles.",
    author: "Ragala Khalid",
  },
  {
    quote:
      "Il y a très loin de la velléité à la volnt, de la volonté à la résolution, de la résolution au choix des moyens, du choix ds moyens à lapplication.",
    author: "Jean-François Paul de Gondi de Retz",
  },
  {
    quote: "Imagination is more important than knowledge.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Imagine there's no countries\nIt isn't hard to do\nNothing to kill or die for\nAnd no religion too\nImagine all the people\nLiving life in peace",
    author: "John Lennon, Imagine",
  },
  {
    quote:
      "I'm always happy to trade performance for readability as long as the former isn't already scarce.",
    author: "Crayz (Commentor on blog.raganwald.com)",
  },
  {
    quote: "I'm going, she said. I love you but you're crazy, you're doomed.",
    author: "Charles Bukowski",
  },
  {
    quote:
      "I'm happy as hell, but I'm also real. Happy didn't get me here. But going through hell to get to where I'm at made me happy.",
    author: "David Goggins",
  },
  {
    quote:
      "I’m just going to give you some good, general advice. And the first bit is – play to your strengths.",
    author: "Mad-Eye Moody",
  },
  {
    quote:
      "Immature poets imitate; mature poets steal; bad poets deface what they take, and good poets make it into something better, or at least something different.",
    author: "T. S. Eliot",
  },
  {
    quote: "I'm not afraid of dying. I'm afraid not to have lived.",
    author: "Wim Hof",
  },
  {
    quote:
      "I'm not asking you to be fearless. I'm asking you to be courageous.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "I'm one of those people who feel good on their own, so if I'm looking for you, it's because I really want you.",
    author: "Anonymous",
  },
  {
    quote:
      "Impressions (which philosophers call), striking a person's mind as soon as he perceives something within range of his senses, are not voluntary or subject to his will, they impose themselves on people's attention almost with a will of their own. But the act of assent (which they call) which endorses these impressions is voluntary and a function of the human will.",
    author: "Epictetus, Fragments 9",
  },
  {
    quote: "I'm smart enough to know that I'm dumb.",
    author: "Richard Feynman",
  },
  {
    quote:
      "I'm surrounded by postmodern idiots and blatherers. Your writings give me hope.",
    author: "email to Paul Graham from a reader of his blog",
  },
  {
    quote:
      "I'm trying to free your mind, Neo. But I can only show you the door. You're the one that has to walk through it.",
    author: "Morpheus, The Matrix",
  },
  {
    quote:
      "I must study politics and war, so that our sons may have liberty to study mathematics and philosophy … in order to give their children a right to study painting, poetry, music.",
    author: "John Adams",
  },
  {
    quote:
      "In addition, the board rewrote the definition of science, so that it is no longer limited to the search for natural explanations of phenomena.",
    author: "AP story on Kansas Board of Education",
  },
  {
    quote:
      "In a little while you will have forgotten everything; in a little while everything will have forgotten you.",
    author: "Marcus Aurelius, Meditations, VII.21",
  },
  {
    quote: "In all things we should try to make ourselves be.",
    author: "Seneca",
  },
  {
    quote:
      "In a word, if there is a god, all is well; and if chance rules, do not also be governed by it.",
    author: "Marcus Aurelius, Meditations, IX.28",
  },
  {
    quote:
      "In France those absurd perversions of the art of war which covered themselves under the name of chivalry were more omnipotent than in any other country of Europe. The strength of the armies of Philip and John of Valois was composed of a fiery and undisciplined aristocracy which imagined itself to be the most efficient military force in the world, but which was in reality little removed from an armed mob.",
    author: "C. W. C. Oman, The Art of War in the Middle Ages",
  },
  {
    quote:
      "In general, we can think of data as defined by some collection of selectors and constructors, together with specified conditions that these procedures must fulfill in order to be a valid representation.",
    author: "SICP, What is meant by data?",
  },
  {
    quote:
      "In God I trust; I will not be afraid. What can mortal man do to me?",
    author: "David (Psalm 56:4)",
  },
  {
    quote:
      "Injustice is impiety. For since the universal nature has made rational animals for the sake of one another to help one another according to their deserts, but in no way to injure one another, he who transgresses her will is clearly guilty of impiety toward the highest divinity.",
    author: "Marcus Aurelius, Meditations, IX.1",
  },
  {
    quote:
      "In life, it doesn't matter what happens to you or where you came from. It matters what you do with what happens and what you've been given.",
    author: "Ryan Holiday",
  },
  {
    quote:
      "In like manner view also the other epochs of time and of whole nations, and see how many after great efforts soon fell and were resolved into the elements.",
    author: "Marcus Aurelius, Meditations IV.32",
  },
  {
    quote:
      "[Innovation] comes from saying no to 1,000 things to make sure we don’t get on the wrong track or try to do too much. We’re always thinking about new markets we could enter, but it’s only by saying no that you can concentrate on the things that are really important.",
    author: "Steve Jobs",
  },
  {
    quote:
      "In OO, it's the data that is the \"important\" thing: you define the class which contains member data, and only incidentally contains code for manipulating the object. In FP, it's the code that's important: you define a function which contains code for working with the data, and only incidentally define what the data is.",
    author: "almkgor, on reddit",
  },
  {
    quote: "In order to be irreplaceable one must always be different.",
    author: "Coco Chanel",
  },
  {
    quote:
      "In order to understand what another person is saying, you must assume that it is true and try to find out what it could be true of.",
    author: "George Miller",
  },
  {
    quote: "Intelligence consists in ignoring things that are irrelevant.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "In terms of energy, it's better to make a wrong choice than none at all.",
    author: "George Leonard, Mastery.",
  },
  {
    quote:
      "In the application of your principles you must be like the pancratiast, not like the gladiator. For the latter lays aside the blade he uses, and takes it up again, but the former always has his hand and needs only to clench it.",
    author: "Marcus Aurelius, Meditations, XII.9",
  },
  {
    quote:
      "In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise of misplaced power exists and will persist.",
    author: "Eisenhower, Farewell Address",
  },
  {
    quote:
      "In the last analysis, productivity of labour is the most important, the principal thing for the victory of the new social system.",
    author:
      "Lenin, quoted in First Five-Year Plan for the Development of the National Economy of the People's Republic of China in 1953-1957",
  },
  {
    quote:
      "In the mean time, cling tooth and nail to the following rule: not to give in to adversity, not to trust prosperity, and always take full note of fortune's habit of behaving just as she pleases.",
    author: "Seneca",
  },
  {
    quote:
      "In the morning, when you rise unwillingly, let this thought be present: I am rising to the work of a human being.",
    author: "Marcus Aurelius, Meditations V.1",
  },
  {
    quote:
      "In theory, there’s no difference between theory and practice. But in practice, there is.",
    author: "Albert Einstein",
  },
  {
    quote:
      "In the writings of the Ephesians there was this precept: constantly to think of one of the men of former times who practiced virtue.",
    author: "Marcus Aurelius, Meditations, XI.26",
  },
  {
    quote:
      "In the Zenith Color chassis there are no printed circuits, no production shortcuts. Every connection is carefully hand-wired with the same exacting care that makes Zenith America's largest selling TV, and your best Color TV buy.",
    author: "Zenith TV ad, 1964",
  },
  {
    quote:
      "Investing should be more like watching paint dry of watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
    author: "Paul Samuelson",
  },
  {
    quote:
      "Inwardly, we ought to be different in every respect, but our outward dress should blend in with the crowd.",
    author: "Seneca",
  },
  {
    quote:
      "In whatever I do, either by myself or with another, I must direct my energies to this alone, that it shall conduce to the common interest and be in harmony with it.",
    author: "Marcus Aurelius, Meditations, VII.5",
  },
  {
    quote:
      "In your conversation, don't dwell at excessive length on your own deeds or adventures. Just because you enjoy recounting your exploits doesn't mean that others derive the same pleasure from hearing about them.",
    author: "Epictetus, Enchiridion 33.14",
  },
  {
    quote:
      "Is any man afraid of change? What can take place without change? What then is more pleasing or more suitable to the universal nature? And can you take a hot bath unless the wood for the fire undergoes a change? And can you be nourished unless the food undergoes a change? And can anything else that is useful be accomplished without change? Do you not see then that for yourself also to change is just the same, and equally necessary for the universal nature?",
    author: "Marcus Aurelius, Meditations, VII.18",
  },
  {
    quote:
      "I say never be complete, I say stop being perfect, I say let... lets evolve, let the chips fall where they may.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      "I say that virtue is more valuable than wealth to the same degree that eyes are more valuable than fingernails.",
    author: "Epictetus, Fragments 13",
  },
  {
    quote:
      "I see no virtue that is opposed to justice; but I see a virtue that is opposed to love of pleasure, and that is temperance.",
    author: "Marcus Aurelius, Meditations, VIII.39",
  },
  {
    quote:
      "I sometimes ask students what their position on slavery would have been had they been white and living in the South before abolition. Guess what? They all would have been abolitionists! They all would have bravely spoken out against slavery, and worked tirelessly against it.",
    author: "Robert P. George",
  },
  {
    quote: "Is there such a thing as a cheerful pessimist? That's what I am.",
    author: "Charlie Munger",
  },
  {
    quote:
      "It can ruin your life only if it ruins your character. Otherwise it cannot harm you — inside or out.",
    author: "Marcus Aurelius",
  },
  {
    quote: "It does not matter what you bear, but how you bear it.",
    author: "Seneca",
  },
  {
    quote:
      "I think a life properly lived is just learn, learn, learn all the time.",
    author: "Charlie Munger",
  },
  {
    quote:
      "I think everything in life is art. What you do. How you dress. The way you love someone, and how you talk. Your smile and your personality. What you believe in, and all your dreams. The way you drink your tea. How you decorate your home. Or party. Your grocery list. The food you make. How your writing looks. And the way you feel. Life is art.",
    author: "Helena Bonham Carter",
  },
  {
    quote:
      "I think it is possible for ordinary people to choose to be extraordinary.",
    author: "Elon Musk",
  },
  {
    quote:
      'I think it is wise, and only honest, to warn you that my goal is immodest. It is not my purpose to "transfer knowledge" to you that, subsequently, you can forget again. My purpose is no less than to effectuate in each of you a noticeable, irreversable change. I want you to gain, for the rest of your lives, the insight that beautiful proofs are not "found" by trial anf error but are the result of a consciously applied design discipline. I want you to raise your quality standards. I mean, if 10 years from now, when you are doing something quick and dirty, you suddenly visualize that I am looking over your shoulders and say to yourself "Dijkstra would not have liked this", well, that would be enough immortality for me.',
    author: "E. W. Dijkstra",
  },
  {
    quote:
      "I think that a lot of programmers are ignoring an important point when people talk about reducing code repetition on large projects. Part of the idea is that large projects are intrinsically _wrong_. That you should be looking at making a number of smaller projects that are composable, even if you never end up reusing one of those smaller projects elsewhere.",
    author: "Dan Nugent",
  },
  {
    quote:
      'I think that in terms of creating a company, what Edison said (which was like "it\'s 1% inspiration and 99% perspiration") is true, so a lot of creating a company is execution: you start off with an idea and that idea is mostly wrong and then you adapt that idea, keep refining it, listen to your criticism (try to discard the wrong criticism, try to listen to the correct criticism) and then engage in a sort of recursive self-improvement, constantly refining it and making it better (it\'s very important to work super hard) and finally just keep making sure you keep iterating on a loop which says "am I doing something useful for other people?" because that\'s what a company is supposed to do, a company is just a group of people gathered together to produce a product or service and a company should only exist if that product or service is truly useful to customers.',
    author: "Elon Musk",
  },
  {
    quote: "I think there’s a world market for about 5 computers.",
    author: "Thomas J. Watson, Chairman of the Board, IBM, circa 1948",
  },
  {
    quote:
      "I think the root of your mistake is saying that macros don't scale to larger groups. The real truth is that macros don't scale to stupider groups.",
    author: "Paul Graham, on the Lightweight Languages mailing list.",
  },
  {
    quote:
      "It is a narrow passageway that leads to the garden of contentment. Big egos don't fit.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "It is a proper work of a man to be benevolent to his own kind, to despise the movements of the senses, to form a just judgment of plausible appearances, and to take a survey of the nature of the universe and of the things that happen in it.",
    author: "Marcus Aurelius, Meditations, VIII.26",
  },
  {
    quote:
      "It is a ridiculous thing for a man not to fly from his own badness, which is indeed possible, but to fly from other men's badness, which is impossible.",
    author: "Marcus Aurelius, Meditations, VII.71",
  },
  {
    quote: "It is a rough road that leads to the heights of greatness.",
    author: "Seneca",
  },
  {
    quote: "It is a sign of weakness to avoid showing signs of weakness.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "It is better to be quiet and thought a fool than to open your mouth and remove all doubt.",
    author: "WikiHow",
  },
  {
    quote:
      "It is better to perform one's own predetermined duty, even if one performs that duty imperfectly, than perform the duty of another. When one performs his own predetermined duty in accordance with one's nature, one does not incur any sin.",
    author: "Krishna",
  },
  {
    quote:
      'It is easy to blame "them". It is hard to confront "me". The easy path is the road to ruin. The hard path is the way of growth.',
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "It is essential to make oneself used to putting up with a little. Even the wealthy and the well provided are continually met and frustrated by difficult times and situations. It is in no man's power to have whatever he wants; but he has it in his power not to wish for what he hasn't got, and cheerfully make the most of the things that do come his way.",
    author: "Seneca, Letter CXXII",
  },
  {
    quote:
      "It is impossible that happiness, and yearning for what is not present, should ever be united.",
    author: "Epictetus",
  },
  {
    quote:
      "It is impossible to sharpen a pencil with a blunt axe. It is equally vain to try to do it with ten blunt axes instead.",
    author: "Edsger Dijkstra",
  },
  {
    quote:
      "It is in our power to have no opinion about a thing and not to be disturbed in our soul; for things themselves have no natural power to form our judgments.",
    author: "Marcus Aurelius, Meditations VI.52",
  },
  {
    quote:
      "It is in your power whenever you choose to retire into yourself. For there is no retreat that is quieter or freer from trouble than a man's own soul.",
    author: "Marcus Aurelius, Meditations IV.3",
  },
  {
    quote:
      'It is just charming how people boast about qualities beyond their control. For instance, "I am better than you because I have many estates, while you are practically starving\'; or, "I\'m a consul," "I\'m a governor," or "I have fine curly hair."',
    author: "Epictetus, Fragments 18",
  },
  {
    quote:
      "It is necessary to remember that the attention given to everything has its proper value and proportion. For you will not be dissatisfied if you apply yourself to smaller matters no further than is fit.",
    author: "Marcus Aurelius, Meditations IV.32",
  },
  {
    quote:
      "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "It is not daily increase but daily decrease, hack away the unessential. The closer to the source, the less wastage there is.",
    author: "Unknown",
  },
  {
    quote:
      "It is not events that disturb people, it is their judgements concerning them.",
    author: "Epictetus, Enchiridion 5",
  },
  {
    quote:
      "It is not right that anything of any other kind, such as praise from the many, or power, or enjoyment of pleasure, should come into competition with that which is rationally and politically and practically good.",
    author: "Marcus Aurelius, Meditations III.6",
  },
  {
    quote:
      "It is not so much our friends' help that helps us as the confident knowledge that they will help us.",
    author: "Epicurus",
  },
  {
    quote:
      "It is not the critic who counts: not the man who points out how the strong man stumbles or where the doer of deeds could have done better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood, who strives valiantly, who errs and comes up short again and again, because there is no effort without error or shortcoming, but who knows the great enthusiasms, the great devotions, who spends himself for a worthy cause; who, at the best, knows, in the end, the triumph of high achievement, and who, at the worst, if he fails, at least he fails while daring greatly, so that his place shall never be with those cold and timid souls who knew neither victory nor defeat.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "It is not the man who has too little, but the man who craves more, that is poor.",
    author: "Seneca",
  },
  {
    quote:
      "It isn't death, pain, exile or anything else you care to mention that accounts for the way we act, only our opinion about death, pain and the rest.",
    author: "Epictetus, Discourses I, 11.33",
  },
  {
    quote:
      "It is our own opinions that disturb us. Take away these opinions then, and resolve to dismiss your judgment about an act as if it were something grievous, and your anger is gone.",
    author: "Marcus Aurelius, Meditations, XI.18",
  },
  {
    quote:
      "It is peculiar to man to love even those who do wrong. And this happens, if when they do wrong it occurs to you that they are fellow humans and that they do wrong through ignorance and unintentionally, and that soon both of you will die; and above all, that the wrongdoer has done you no harm, for he has not made your ruling faculty worse than it was before.",
    author: "Marcus Aurelius, Meditations, VII.22",
  },
  {
    quote:
      "It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration.",
    author: "E. W. Dijkstra",
  },
  {
    quote:
      "It is said that the real winner is the one who lives in today but able to see tomorrow.",
    author: 'Juan Meng, Reviewing "The future of ideas" by Lawrence Lessig',
  },
  {
    quote:
      "It is said that there is a technical term for people who believe that little boys and little girls are born indistinguishable and are molded into their natures by parental socialization. The term is 'childless.'",
    author: "Steven Pinker",
  },
  {
    quote: "It(mastering)’s knowing what you are doing.",
    author: "Joesgoals.com",
  },
  {
    quote:
      "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
    author: "Marcus Aurelius, Meditations",
  },
  {
    quote:
      "It’s a problem if the design doesn’t let you add features at a later date. If you have to redo a program, the hours you spend can cause you to lose your competitive edge. A flexible program demonstrates the difference between a good designer and someone who is just getting a piece of code out.",
    author:
      "Gary Kildall (inventor of CP/M, one of the first OS for the micro).",
  },
  {
    quote:
      "Its a shame that the students of our generation grew up with windows and mice because that tainted our mindset not to think in terms of powerful tools. Some of us are just so tainted that we will never recover.",
    author: "Jeffrey Mark Siskind <qobi@research.nj.nec.com> in comp.lang.lisp",
  },
  {
    quote: "It's better to conquer grief than to deceive it.",
    author: "Seneca",
  },
  {
    quote: "It's easier to ask forgiveness than it is to get permission.",
    author: "Rear Admiral Dr. Grace Hopper",
  },
  {
    quote: "It's easier to win an argument with a genius than an idiot.",
    author: "Gurwinder Bhogal",
  },
  {
    quote: "It's easy if you try.",
    author: "John Lennon",
  },
  {
    quote:
      "It’s hard to grasp abstractions if you don’t understand what they’re abstracting away from.",
    author: "Nathan Weizenbaum",
  },
  {
    quote:
      "It's hard to prioritize the long term when you think you should feel comfortable in every moment.",
    author: "Michael",
  },
  {
    quote:
      "It's impossible to fail if you learn from your mistakes. Don't give up.",
    author: "Steve Jobs",
  },
  {
    quote:
      "It's like a condom; I'd rather have it and not need it than need it and not have it.",
    author:
      "some chick in Alien vs. Predator, when asked why she\nalways carries a gun",
  },
  {
    quote:
      "It's no trick for talented people to be interesting, but it's a gift to be interested. We want an organization filled with interested people.",
    author: "Randy S. Nelson (dean of Pixar University)",
  },
  {
    quote: "It's not supposed to be easy. Anyone who finds it easy is stupid.",
    author: "Charlie Munger",
  },
  {
    quote:
      "It's not that we have little time, but more that we waste a good deal of it.",
    author: "Seneca",
  },
  {
    quote:
      "It's shocking how many important life decisions I make by scouring Internet forums.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "It's something like going on an ocean voyage. What can I do? Pick the captain, the boat, the date, and the best time to sail. But then a storm hits. Well, it's no longer my business; I have done everything I could. It's somebody else's problem now – namely the captain's. But then the boat actually begins to sink. What are my options? I do the only thing I am in a position to do, drown – but fearlessly, without bawling or crying out to God, because I know that what is born must also die.",
    author: "Epictetus, Discourses II, 5.10-12",
  },
  {
    quote:
      "It's waiting that helps you as an investor, and a lot of people just can't stand to wait.",
    author: "Charlie Munger",
  },
  {
    quote:
      "It takes courage to accept life fully, to say yes to our life, yes to our karma, yes to our mind, emotions and whatever else unfolds.",
    author: "Dzigar Kongtrul Rinpoche",
  },
  {
    quote:
      "It was Antigonus who was anxious before their meeting. Naturally – he wanted to make a good impression, which was beyond his control. Zeno, for his part, had no wish to please the king; no expert needs validation from an amateur.",
    author: "Epictetus, Discourses II, 13, 15",
  },
  {
    quote:
      "It was Edison who said ‘1% inspiration, 99% perspiration’. That may have been true a hundred years ago. These days it's ‘0.01% inspiration, 99.99% perspiration’, and the inspiration is the easy part.",
    author: "Linux Torvalds",
  },
  {
    quote:
      "It will even do to socialize with men of good character, in order to model your life on theirs, whether you choose someone living or someone from the past.",
    author: "Epictetus, Discourses II, 18.21",
  },
  {
    quote:
      "It will only hurt if you keep remembering it but a true stoic looks forward.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years.",
    author: "John Von Neumann, circa 1949",
  },
  {
    quote:
      "I used to think that the world was doing something to me, that the world owed me something. And that either the conservatives or the socialists or the fascists or the communists or the Christians or the Jews or the fascists were doing something to me. And when you're a teeny-booper, that's what you think. I'm 40 now, I don't think that anymore—because I found out it doesn't fucking work. I am part of them. There's no separation. Were all one. \"Give peace a chance,\" not \"Shoot people for peace.\" \"All you need is love.\" I believe it. It's damn hard, but I absolutely believe it.",
    author: "John Lennon",
  },
  {
    quote:
      'I was talking recently to a friend who teaches at MIT. His field is hot now and every year he is inundated by applications from would-be graduate students. "A lot of them seem smart," he said. "What I can\'t tell is whether they have any kind of taste."',
    author: "Paul Graham",
  },
  {
    quote:
      '"I will throw you into prison." "Correction – it is my body you will throw there."',
    author: "Epictetus, Discourses I, 1.24",
  },
  {
    quote: "I would never die for my beliefs because I might be wrong.",
    author: "Bertrand Russell",
  },
  {
    quote:
      "I would rather be an optimist and be wrong than a pessimist who proves to be right. The former sometimes wins, but never the latter.",
    author: '"Hoots"',
  },
  {
    quote:
      "J'ai toujours préféré la folie des passions à la sagesse de l'indifférence.",
    author: "Anatole France",
  },
  {
    quote:
      "Java and C++ make you think that the new ideas are like the old ones. Java is the most distressing thing to hit computing since MS-DOS.",
    author: "Alan Kay",
  },
  {
    quote: "Je crois au flooding.",
    author: "Karim BAINA (en parlant du dailogue avec les administrations)",
  },
  {
    quote:
      "Je n'ai fait celle-ci plus longue que parce que je n'ai pas eu le loisir de la faire plus courte. (I have made this letter so long only because I did not have the leisure to make it shorter.)",
    author: "Blaise Pascal (Lettres Provinciales)",
  },
  {
    quote:
      "Je ne vous impose aucune contrainte, aucune limite. Surprenez-moi, étonnez-moi, défiez-moi, défiez-vous vous-même. Vous avez le choix: vous pouvez rester dans l'ombre ou en sortir en étant parmis les trop rares exceptions à avoir réussi. L'heure est venue d'aller bien au delà de votre potentiel. L'heure est venue maintenant de descendre vraiment en vous. L'heure est venue de démontrer pourquoi vous êtes l'élite, les quelques élus, les rares lueurs qui offrent à cette compagnie son caractère exceptionnel, sa luminescence.",
    author: 'Le PDG de NURV, dans "Anti-trust".',
  },
  {
    quote:
      "Jews, Syrians, Egyptians and Romans. They don't dispute that what is holy should be preferred above everything else and in every case pursued; but they argue, for example, over whether it is holy or unholy to eat pork.",
    author: "Epictetus, Discourses I, 22, 4",
  },
  {
    quote:
      "Judge every word and deed that are naturally fit for you, and do not be diverted by words of blame or criticism; if it is good to do or say something, do not consider it unworthy of yourself.",
    author: "Marcus Aurelius, Meditations V.3",
  },
  {
    quote:
      "Just ask whether they put their self-interest in externals or in moral choice. If it's in externals, you cannot call them friends, any more than you can call them trustworthy, consistent, courageous or free.",
    author: "Epictetus, Discourses II, 22.26-27",
  },
  {
    quote:
      "Justice will not be observed, if we either care for indifferent things or are easily deceived and careless and changeable.",
    author: "Marcus Aurelius, Meditations, XI.10",
  },
  {
    quote:
      "Just keep in mind: the more we value things outside our control, the less control we have.",
    author: "Epictetus",
  },
  {
    quote: "Just like carpentry, measure twice cut once.",
    author: "Super-sizing YouTube with Python (Mike Solomon, mike@youtube.com)",
  },
  {
    quote:
      "Just prove to me that you are trustworthy, high-minded and reliable, and that your intentions are benign – prove to me that your jar doesn't have a hole in it – and you'll find that I won't even wait for you to open your heart to me, I'll be the first to implore you to lend an ear to my own affairs.",
    author: "Epictetus, Discourses IV, 13.15",
  },
  {
    quote: "Just that you do the right thing. The rest doesn't matter.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
    author: "Mark Twain",
  },
  {
    quote: "Keep company only with people who uplift you.",
    author: "Epictetus",
  },
  {
    quote:
      "Keep death and exile before your eyes each day, along with everything that seems terrible — by doing so, you'll never have a base thought nor will you have excessive desire.",
    author: "Epictetus",
  },
  {
    quote:
      "Keep well out of the sun, then, so long as your principles are as pliant as wax.",
    author: "Epictetus, Discourses III, 16.10",
  },
  {
    quote:
      "Keep your intention pure. Emotions will try to distract you. So keep going. That's the cure.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "Knowing is not enough, we must apply. Willing is not enough, we must do.",
    author: "Bruce Lee",
  },
  {
    quote: "640K ought to be enough for anybody.",
    author: "Bill Gates, 1981",
  },
  {
    quote:
      "Labor not as one who is wretched, nor yet as one who would be pitied or admired; but direct your will to one thing only: to act or not to act as social reason requires.",
    author: "Marcus Aurelius, Meditations, IX.12",
  },
  {
    quote:
      "Labor willingly and diligently, undistracted and aware of the common interest. ... Be cheerful also, and do not seek external help or the tranquillity that others give. A man then must stand erect, not be kept erect by others.",
    author: "Marcus Aurelius, Meditations III.5",
  },
  {
    quote:
      "La connaissance d'un défaut ne l'enlève pas, elle nous torture jusqu'à sa correction.",
    author: "Daniel Lovewin (Guillaume Kpotufe)",
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
      "La tactique, c'est ce que vous faites quand il y a quelque chose à faire; la stratégie, c'est ce que vous faites quand il n'y a rien à faire.",
    author: "Xavier Tartacover",
  },
  {
    quote: "Lean into the discomfort of the work.",
    author: "Brené Brown",
  },
  {
    quote:
      "Learn how to see. Realize that everything connects to everything else.",
    author: "Leonardo Da Vinci",
  },
  {
    quote: "Learning is a privilege for the brain.",
    author: "@Th3Brainiac on Twitter",
  },
  {
    quote:
      "Learning is the only thing the mind never exhausts, never fears, and never regrets.",
    author: "Leonardo Da Vinci",
  },
  {
    quote: "Learn to be indifferent to what makes no difference.",
    author: "Marcus Aurelius",
  },
  {
    quote: "Learn to detach yourself from the chaos of the battlefield.",
    author: "Robert Greene",
  },
  {
    quote:
      "Learn to fail with pride — and do so fast and cleanly. Maximise trial and error — by mastering the error part.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "Leave me alone, I'm trying to build! Don't you know how people build? By concentrating!",
    author: "Paul Graham's 5 year old son, building Lego",
  },
  {
    quote:
      "Let it make no difference to you whether you are cold or warm, if you are doing your duty; and whether you are drowsy or satisfied with sleep; and whether ill- spoken of or praised; and whether dying or doing something else.",
    author: "Marcus Aurelius, Meditations VI.2",
  },
  {
    quote:
      "Let me try to get this straight: Lisp is a language for describing algorithms. This was JohnMcCarthy's original purpose, anyway: to build something more convenient than a Turing machine. Lisp is not about file, socket or GUI programming - Lisp is about expressive power. (For example, you can design multiple object systems for Lisp, in Lisp. Or implement the now-fashionable AOP. Or do arbitrary transformations on parsed source code.) If you don't value expressive power, Lisp ain't for you. I, personally, would prefer Lisp to not become mainstream: this would necessarily involve a dumbing down.",
    author: "VladimirSlepnev",
  },
  {
    quote:
      "Let us not postpone anything, let us engage in combats with life each day.",
    author: "Seneca",
  },
  {
    quote:
      "Let us overlook many things in those who are like antagonists in the gymnasium. For it is in our power, as I said, to get out of the way and to have no suspicion or hatred.",
    author: "Marcus Aurelius, Meditations VI.20",
  },
  {
    quote:
      "Let us prepare our minds as if we'd come to the very end of life. Let us postpone nothing.",
    author: "Seneca",
  },
  {
    quote:
      "Lies are often much more plausible, more appealing to reason, than reality, since the liar has the great advantage of knowing beforehand what the audience wishes or expects to hear.",
    author: "Hannah Arendt",
  },
  {
    quote: "Life has more meaning in the face of death.",
    author: "Robert Greene",
  },
  {
    quote: "Life is a comedy to those who think, a tragedy to those who feel.",
    author: "Jean Racine",
  },
  {
    quote: "Life is a constant war between mind and hearth.",
    author: "unknown",
  },
  {
    quote:
      "Life is all the more precious and beautiful because it is so fleeting.",
    author: "Jack Kornfield",
  },
  {
    quote:
      "Life is a shipwreck, but we must not forget to sing in the lifeboats.",
    author: "Voltaire",
  },
  {
    quote:
      "Life is a slow treadmill. People who stand still are actually going behind.",
    author: "Live Math Money",
  },
  {
    quote:
      "Life is a storm that will test you unceasingly. Don't wait for calm waters that may not arrive. Derive purpose from resilience. Learn to sail the raging sea.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "Life is full of hostility — some of it overt, some clever and underhanded.",
    author: "Robert Greene",
  },
  {
    quote:
      "Life is full of suffering. Yes. Why should it be otherwise? Embrace. Endure.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "Life is like arriving late for a movie, having to figure out what was going on without bothering everybody with a lot of questions.",
    author: "Joseph Campbell",
  },
  {
    quote:
      "Life isn't always about doing the things we like to do. It's about doing things we have to do.",
    author: "David Goggins",
  },
  {
    quote: "Life is short my friend. Make each second count.",
    author: "unknown",
  },
  {
    quote: "Life is so hard, how can we be anything but kind?",
    author: "Jack Kornfield",
  },
  {
    quote: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    author: "Ferris Bueller",
  },
  {
    quote:
      "Life's most persistent and urgent question is, 'What are you doing for others?'",
    author: "Martin Luther King",
  },
  {
    quote: "Life's three best teachers: heartbreak, empty pocket, failures.",
    author: "Haemin Sunim",
  },
  {
    quote:
      "Life will punch you in the face if your head gets too big. Don't ever pretend, don't lie, don't feel superior. Just be honest and do your own thing.",
    author: "Maxime Lagacé",
  },
  {
    quote: "Life without love, is no life at all.",
    author: "Leonardo Da Vinci",
  },
  {
    quote:
      "Life without love would be a strange thing. But don't be surprised if you get burned.",
    author: "Maxime Lagacé",
  },
  {
    quote: "Linux is only free if your time has no value.",
    author: "Jamie Zawinski",
  },
  {
    quote:
      'Lisp has jokingly been called "the most intelligent way to misuse a computer". I think that description is a great compliment because it transmits the full flavor of liberation: it has assisted a number of our most gifted fellow humans in thinking previously impossible thoughts.',
    author: "Edsger Dijkstra, CACM, 15:10",
  },
  {
    quote: "Lisp is a programmable programming language.",
    author: "John Foderaro",
  },
  {
    quote:
      "Lisp is worth learning for the profound enlightenment experience you will have when you finally get it; that experience will make you a better programmer for the rest of your days, even if you never actually use Lisp itself a lot.",
    author: "Eric S. Raymond",
  },
  {
    quote:
      "Lisp programmers know the value of everything but the cost of nothing.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      "Live as if you died, but were resuscitated and every minute was a gift.",
    author: "The Daily Stoic",
  },
  {
    quote: "Live your life like you're the hero in your movie.",
    author: "Joe Rogan",
  },
  {
    quote:
      "Look at the birds in the air. They don’t plant or harvest or store food in barns, but your heavenly Father feeds them. And you know that you are worth much more than the birds. You cannot add any time to your life by worrying about it.",
    author: "Jesus | Matthew 6:26-27",
  },
  {
    quote:
      'Look, can you be forced to assent to what appears to you wrong?" "No." "Or to dissent from the plain truth?" "No." "Then you see you do have within you a share of freedom."',
    author: "Epictetus, Discourses III, 22.42",
  },
  {
    quote:
      "Look not round at the depraved morals of others, but run straight along the line without deviating from it.",
    author: "Marcus Aurelius, Meditations IV.18",
  },
  {
    quote:
      "Love each other. Just as I have loved you, you should love each other.",
    author: "Jesus | John 13:34-35",
  },
  {
    quote: "Love is like the legal system: as real as you think it is.",
    author: "Grant Sanderson (3Blue1Brown)",
  },
  {
    quote: "Love people. Use things. The opposite never works.",
    author: "The Minimalists",
  },
  {
    quote: "Love without sacrifice is like theft.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote: "Love your neighbor as yourself.",
    author: "Jesus",
  },
  {
    quote: "Luck is where preparation meets opportunity.",
    author: "Randy Pausch",
  },
  {
    quote: "Make the mind tougher by exposing it to adversity.",
    author: "Robert Greene",
  },
  {
    quote: "Making All Software Into Tools Reduces Risk.",
    author: "smoothspan.com",
  },
  {
    quote: "Man conquers the world by conquering himself.",
    author: "Zeno of Citium",
  },
  {
    quote: "Man's character is his fate.",
    author: "Heraclitus",
  },
  {
    quote:
      "Many big people were chasing me. I didn't know what to do. So I thought I would surprise them and throw it.",
    author:
      "Garo Yepremian, Miami placekicker, after a disastrous attempt to throw a pass in the Super Bowl.",
  },
  {
    quote:
      "Many large and high class greengrocers of my acquaintance have never heard of the Golden Wonder potato.",
    author: "Roy Genders, Vegetables for the Epicure",
  },
  {
    quote:
      "Many men will meet me who are drunkards, lustful, ungrateful, greedy, and excited by the frenzy of ambition.",
    author: "Seneca",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas Edison",
  },
  {
    quote:
      "Many of the anxieties that harass you are superfluous… Expand into an ampler region, letting your thought sweep over the entire universe.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Many think great success will pacify their critics. Quite the contrary. Criticism will multiply as you grow and progress. Positive attention does not come without negative attention. This is the price of having an impact.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "Many who burnt heretics in the ordinary way of their business were otherwise excellent people.",
    author: 'G. M. Trevelyan, "Bias in History"',
  },
  {
    quote:
      "Many will choose the stability of slavery over the uncertainty of freedom.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "Mastering isn’t a survival instinct; it’s an urge to excel. Mastering is one of the experiences that delineates us from animals. It is striving to be more tomorrow than we are today; to perfectly pitch the ball over home plate; to craft the perfect sentence in an article; to open the oven and feel the warm, richly-scented cloud telling you dinner is going to be absolutely extraordinary. We humans crave perfection, to be masters of our domain, to distinguish ourselves by sheer skill and prowess.",
    author: "Joesgoals.com",
  },
  {
    quote:
      "Material things per se are indifferent, but the use we make of them is not indifferent.",
    author: "Epictetus, Discourses II, 5.1",
  },
  {
    quote: "Math always trumps brute force!",
    author: "@jlsajfj on GitHub",
  },
  {
    quote: "Mathematics is not just solving for x, it's also figuring out y.",
    author: "Arthur Benjamin",
  },
  {
    quote:
      "Measure everything you can about the product, and you'll start seeing patterns.",
    author: "Max Levchin, PayPal founder, Talk at StartupSchool2007",
  },
  {
    quote:
      "Measure your wealth by what you'd have left if you lost all your money.",
    author: "@wealth_director on Twitter",
  },
  {
    quote:
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: "Bill Gates",
  },
  {
    quote:
      "Medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.",
    author: "Dead Poet's Society",
  },
  {
    quote:
      "Meditation is intermittent fasting for the mind. Too much sugar leads to a heavy body, and too many distractions lead to a heavy mind. Time spent undistracted and alone, in self-examination, journaling, meditation, resolves the unresolved and takes us from mentally fat to fit.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Men exist for the sake of one another. Teach them then or bear with them.",
    author: "Marcus Aurelius, Meditations, VIII.59",
  },
  {
    quote:
      "Men never do evil so completely and cheerfully as when they do it from religious conviction.",
    author: "Blaise Pascal (attributed)",
  },
  {
    quote:
      "Men seek out retreats for themselves in the country, by the seaside, on the mountains… nowhere can a man find a retreat more peaceful or more free from trouble than his own soul.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Missing a train is only painful if you run after it! Likewise, not matching the idea of success others expect from you is only painful if that's what you are seeking.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote: "Mistakes were made.",
    author: "Ronald Reagan",
  },
  {
    quote:
      "Modern invention has been a great leveller. A machine may operate far more quickly than a political or economic measure to abolish privilege and wipe out the distinctions of class or finance.",
    author: "Ivor Brown, The Heart of England",
  },
  {
    quote:
      '"Monetize your passions" it\'s more like exploiting your passions to the point where they become a source of stress and pressure in your life and you end up loosing/hating the passion',
    author: "Random comment on YouTube",
  },
  {
    quote: "[Monica] What day is it?\n[David] Today",
    author: "A.I. by Steven Spielberg",
  },
  {
    quote:
      "More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity.",
    author: "W.A. Wulf",
  },
  {
    quote:
      "Most apparent philosophers were philosophers not in their actions, only their words.",
    author: "Epictetus, Fragments 10",
  },
  {
    quote: "Most interesting phenomena have multiple causes.",
    author: "N. P. Calderwood",
  },
  {
    quote:
      "Most of us dread the deadening of the body and will do anything to avoid it. About the deadening of the soul, however, we don't care one iota.",
    author: "Epictetus, Discourses I, 5.4",
  },
  {
    quote:
      "Most people overestimate what they can get done in a year and underestimate what they can do in a decade.",
    author: "Bill Gates",
  },
  {
    quote:
      "Most people who doubt you doubt you because they can never see themselves doing what you are trying to do.",
    author: "David Goggins",
  },
  {
    quote: "Move toward resistance and pain.",
    author: "Robert Greene",
  },
  {
    quote: "Much of what other people know isn't worth knowing.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "My advice is really this: what we hear the philosophers saying and what we find in their writings should be applied in our pursuit of the happy life. We should hunt out the helpful pieces of teaching, and the spirited and noble-minded sayings which are capable of immediate practical application - not far-fetched or archaic expressions or extravagant metaphors and figures of speech - and learn them so well that words become works.",
    author: "Seneca, Letter CVIII",
  },
  {
    quote:
      "My baker may be out of bread, but the farm manager will have some, or the steward, or a tenant. \"Bad bread, yes!\" you'll say. Wait, then: it'll soon turn into good bread. Hunger will make you find even that bread soft and wheaty.",
    author: "Seneca, Letter CXXII",
  },
  {
    quote:
      '"My brother is unfair to me." Well then, keep up your side of the relationship; don\'t concern yourself with his behaviour, only with what you must do to keep your will in tune with nature. Another person will not hurt you without your cooperation; you are hurt the moment you believe yourself to be.',
    author: "Epictetus, Enchiridion 30",
  },
  {
    quote:
      "My city and country, so far as I am Antoninus, is Rome; but so far as I am a man, it is the world.",
    author: "Marcus Aurelius, Meditations VI.44",
  },
  {
    quote:
      "My dream is that people adopt it on its own merits. We're not trying to bend Ruby on Rails to fit the enterprise, we're encouraging enterprises to bend to Ruby on Rails. Come if you like it, stay away if you don't. We're not going head over heels to accommodate the enterprise or to lure them away from Java. That's how you end up with Java, if you start bending to special interest groups.",
    author: "David Heinemeier Hansson (Ruby On Rails' creator)",
  },
  {
    quote:
      "\"My God, what if I'm sent to Gyara?\" Well, if that's tolerable for you, you will go; if not, you have the choice of another destination, the place even the person who sent you to Gyara is headed, whether they like it or not.",
    author: "Epictetus, Discourses II, 6.22",
  },
  {
    quote:
      "My mind represents for me my medium – like wood to a carpenter, or leather to a shoemaker. The goal in my case is the correct use of impressions.",
    author: "Epictetus, Discourses III, 20.20",
  },
  {
    quote:
      "Natives who beat drums to drive off evil spirits are objects of scorn to smart Americans who blow horns to break up traffic jams.",
    author: "Mary Ellen Kelly",
  },
  {
    quote:
      "Ne te mets pas de limite, la vie se chargera de la mettre a ta place.",
    author: "Darryl AMEDON",
  },
  {
    quote:
      "Never be angry at someone for telling you the truth, no matter how unpleasant.",
    author: "@LifeMathMoney",
  },
  {
    quote:
      "Never do the impossible. People will expect you to do it forever after.",
    author: "pigsandfishes.com",
  },
  {
    quote: "Never explain why something important is important.",
    author: "Nassim Nicholas Taleb on Twitter",
  },
  {
    quote:
      "Never get into family fights over material things; give them up willingly, and your moral standing will increase in proportion.",
    author: "Epictetus, Discourses II, 10.8",
  },
  {
    quote:
      "Never have I put my trust in fortune, even when she appeared to be offering peace; all those gifts she bestowed on me in her kindness —, position, influence — I stored where she would be able to reclaim them with no disturbance to me.",
    author: "Seneca",
  },
  {
    quote:
      "Never let people who choose the path of least resistance steer you away from your chosen path of most resistance.",
    author: "David Goggins",
  },
  {
    quote:
      "Never let someone make you feel guilty for doing what's best for yourself.",
    author: "@Risk7aker on Twitter",
  },
  {
    quote: "Never offer what you'd hate someone for accepting.",
    author: "Tara Ploughman",
  },
  {
    quote:
      "Never start a business just to make money. Start a business to make a difference.",
    author: "Marie Forleo",
  },
  {
    quote:
      "Never value anything as profitable that compels you to break your promise, to lose your self-respect, to hate any man, to suspect, to curse, to act the hypocrite, to desire anything that needs walls and curtains.",
    author: "Marcus Aurelius, Meditations III.7",
  },
  {
    quote:
      'New eyes have X-ray vision. [someone that hasn\'t written it is more likely to spot the bug. "someone" can be you after a break]',
    author: "William S. Annis",
  },
  {
    quote:
      "No amount of anxiety makes any difference to anything that is going to happen.",
    author: "Alan Watts",
  },
  {
    quote:
      "No art, however minor, demands less than total dedication if you want to excel in it.",
    author: "Alberti",
  },
  {
    quote: "Nobody can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Nobody is born with insecurities we are told to have them.",
    author: "Lili Reinhart",
  },
  {
    quote:
      'No doubt you have seen dogs playing with, and fawning before, each other, and thought, "Nothing could be friendlier." But just throw some meat in the middle, and then you\'ll know what friendship amounts to.',
    author: "Epictetus, Discourses II, 22.9",
  },
  {
    quote: "No human thing is of serious importance.",
    author: "Plato",
  },
  {
    quote:
      "No longer talk at all about the kind of man that a good man ought to be, but be such.",
    author: "Marcus Aurelius, Meditations, X.16",
  },
  {
    quote:
      "No man can escape his destiny, the next inquiry being how he may best live the time that he has to live.",
    author: "Marcus Aurelius, Meditations, VII.46",
  },
  {
    quote: "No man is free who is not master of himself.",
    author: "Epictetus",
  },
  {
    quote:
      "No man who ever held the office of President would congratulate a friend on obtaining it.",
    author: "John Adams",
  },
  {
    quote:
      "No matter how difficult life may seem, there is always something you can do and succeed at.",
    author: "Stephen Hawking",
  },
  {
    quote:
      "No matter how much you plan you’re likely to get half wrong anyway. So don’t do the ‘paralysis through analysis’ thing. That only slows progress and saps morale.",
    author: "37 Signal, Getting real",
  },
  {
    quote:
      "No matter what anybody tells you, words and ideas can change the world.",
    author: "Dead Poet's Society",
  },
  {
    quote:
      "Non credo di aver mai avuto un weekend libero negli ultimi 10 anni, però tutto quello che facevo era appassionante. Quindi se per esempio avevo un weekend in Germania per uno stage oppure in America per fare una lezione, ero contento, ed anche se già il giorno dopo avevo una lezione all'università, anche quella mi piaceva. Questo non vuol dire che uno non si stanca, però la stanchezza fatta di cose che ti appassionano si recupera molto in fretta. L'importante è stancarsi per cose che si amano, ed allora lì la stanchezza non la senti.",
    author: "Alessandro Steri",
  },
  {
    quote: "None ever wished it longer than it is.",
    author: "Johnson on Paradise Lost",
  },
  {
    quote:
      "No one is all evil. Everybody has a good side. If you keep waiting, it will come up.",
    author: "Randy Pausch",
  },
  {
    quote:
      "No one is asking you to look at the world through rose-colored glasses.",
    author: "Ryan Holiday",
  },
  {
    quote: "No one is born ugly, we're just born in a judgemental society.",
    author: "Kim Namjoon",
  },
  {
    quote: "No one knows how to do anything until they do it.",
    author: "@shl on Twitter",
  },
  {
    quote:
      'No one on his death bed ever said, "I wish I had spent more time on my business."',
    author: "Paul Tsongas",
  },
  {
    quote:
      "No problem can be solved from the same level of consciousness that created it.",
    author: "Albert Einstein",
  },
  {
    quote: "No problem should ever have to be solved twice.",
    author: "Eric S. Raymond, How to become a hacker",
  },
  {
    quote: "Normality is the route to nowhere.",
    author: "Ridderstrale & Nordstorm, Funky Business",
  },
  {
    quote:
      "Not everything requires a response. This is truth for many things in life and almost everything in the news.",
    author: "@TheStoicEmperor",
  },
  {
    quote: "Nothing endures but change.",
    author: "Heraclitus",
  },
  {
    quote:
      "Nothing important comes into being overnight; even grapes or figs need time to ripen. If you say that you want a fig now, I will tell you to be patient. First, you must allow the tree to flower, then put forth fruit; then you have to wait until the fruit is ripe. So if the fruit of a fig tree is not brought to maturity instantly or in an hour, how do you expect the human mind to come to fruition, so quickly and easily?",
    author: "Epictetus, Discourses I, 15.7-8",
  },
  {
    quote:
      "...nothing is burdensome if taken lightly, and how… nothing need arouse one's irritation so long as one doesn't make it bigger than it is by getting irritated.",
    author: "Seneca, Letter CXXII",
  },
  {
    quote: "Nothing matters in the end so make it matter right now.",
    author: "Natalie Lynn",
  },
  {
    quote: "Nothing should be done without a purpose.",
    author: "Marcus Aurelius, Meditations, VIII.17",
  },
  {
    quote:
      "Not reacting to deliberate provocation is a superpower. If you have the awareness and self-control to not react predictably, there is nothing that can put you off your path. Remember: the only enemy you need to fear is your own self – your lack of awareness and loss of control.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "Not to assume it's impossible because you find it hard. But to recognize that if it's humanly possible, you can do it too.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Not to display anger or other emotions. To be free of passion and yet full of love.",
    author: "Marcus Aurelius, What Marcus learned from Sextus",
  },
  {
    quote:
      "Now is the time to get serious about living your ideals. How long can you afford to put off who you really want to be? Your nobler self cannot wait any longer. Put your principles into practice – now. Stop the excuses and the procrastination. This is your life! […] Decide to be extraordinary and do what you need to do – now.",
    author: "Epictetus",
  },
  {
    quote:
      "Now it is in my power to let no badness be in this soul, nor desire nor any perturbation at all; but looking at all things, I see their true nature, and I use each according to its value.",
    author: "Marcus Aurelius, Meditations, VIII.29",
  },
  {
    quote:
      "Now, most people hate to admit they're wrong, but it didn't bother Bill one bit. All he cared about was what was right, not who was right. That's what makes Bill very, very dangerous.",
    author: "Larry Ellison on Bill Gates",
  },
  {
    quote:
      "Now that is the first thing Socrates was known for – never turning dialogue into dispute, never introducing rudeness or invective, although he would put up with the insults of others in order to avoid a fight.",
    author: "Epictetus, Discourses II, 12.14",
  },
  {
    quote:
      "Now think of the things which goad man into destroying man: they are hope, envy, hatred, fear and contempt.",
    author: "Seneca, Letter CIV",
  },
  {
    quote: ":nunmap can also be used outside of a monastery.",
    author: "Vim user manual",
  },
  {
    quote:
      "Objective judgment, at this very moment. Unselfish action, now at this very moment. Willing acceptance – now at this very moment – of all external events. That's all you need.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "O Divine Providence, I ask not for more riches but more wisdom with which to make wiser use of the riches you gave me at birth, consisting in the power to control and direct my own mind to whatever ends I might desire.",
    author: "Napoleon Hill",
  },
  {
    quote:
      "Of all tyrannies a tyranny sincerely exercised for the good of its victims may be the most oppressive. It may be better to live under robber barons than under omnipotent moral busybodies, The robber baron's cruelty may sometimes sleep, his cupidity may at some point be satiated; but those who torment us for own good will torment us without end, for they do so with the approval of their own conscience.",
    author: "C.S. Lewis",
  },
  {
    quote: "Omit needless words.",
    author: "William Strunk, Jr. (The Elements of Style)",
  },
  {
    quote:
      "Once the ego inflates it will only come back to earth through some jarring failure.",
    author: "Robert Greene",
  },
  {
    quote:
      'Once, when [Agrippinus] was preparing for lunch, a messenger arrived from Rome announcing that Nero had sentenced him to exile. Unflustered he replied, "Then why don\'t we just move our lunch to Aricia."',
    author: "Epictetus, Fragments 21",
  },
  {
    quote:
      "Once you have a name for something you get power over it: you can start to talk about it.",
    author: "Patrick Winston",
  },
  {
    quote:
      "Once you've truly controlled your own fate, for better or for worse, you'll never let anyone else tell you what to do.",
    author: "Naval Ravikant",
  },
  {
    quote: "One day I will find the right words, and they will be simple.",
    author: "Jack Kerouac",
  },
  {
    quote:
      "One must be gullible yet skeptical, sane yet mad, proud yet humble, warm yet indifferent, faithful yet a heretic, loving yet uncompromising, fearless yet cautious, open yet decisive. These are not contradictions. They make a person whole. And above all one must be whole, not fragmentary.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "One of the main causes of the fall of the Roman Empire was that–lacking zero–they had no way to indicate successful termination of their C programs.",
    author: "Robert Firth",
  },
  {
    quote:
      "One thing here is worth a great deal: to pass your life in truth and justice, with a benevolent disposition even to liars and unjust men.",
    author: "Marcus Aurelius, Meditations VI.47",
  },
  {
    quote:
      "One thing I know: all the works of mortal man lie under sentence of mortality; we live among things that are destined to perish.",
    author: "Seneca, Letter XCI",
  },
  {
    quote:
      "Only attend to yourself, and resolve to be a good man in every act that you do.",
    author: "Marcus Aurelius, Meditations, VII.58",
  },
  {
    quote: "Only bad designers blame their failings on the users.",
    author: "unknown",
  },
  {
    quote: "Only in the darkness can you see the stars.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "Only make new mistakes.",
    author: "Phil Dourado",
  },
  {
    quote:
      "Only these two questions: Is what he's doing now the right thing to be doing? Does he accept and welcome what he's been assigned?",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Only two things are infinite, the universe and human stupidity. And I'm not so sure about the former.",
    author: "Albert Einstein",
  },
  {
    quote:
      "On the occasion of every act ask yourself, How is this with respect to me? Will I regret it? A little time and I am dead, and all is gone.",
    author: "Marcus Aurelius, Meditations, VIII.2",
  },
  {
    quote:
      "[on valuing theoretical over practical philosophy] The result is that we lie – but have no difficulty proving why we shouldn't.",
    author: "Epictetus, Enchiridion 52.2",
  },
  {
    quote:
      "Opportunities that present themselves to you are the consequence -- at least partially -- of being in the right place at the right time. They tend to present themselves when you're not expecting it -- and often when you are engaged in other activities that would seem to preclude you from pursuing them. And they come and go quickly -- if you don't jump all over an opportunity, someone else generally will and it will vanish.",
    author: "Marc Andreessen (http://blog.pmarca.com/)",
  },
  {
    quote: "Order your soul. Reduce your wants.",
    author: "Augustine of Hippo",
  },
  {
    quote:
      "Others have been plundered, indiscriminately, set upon, betrayed, beaten up, attacked with poison or with calumny - mention anything you like, it has happened to plenty of people.",
    author: "Seneca, Letter CVII",
  },
  {
    quote:
      "Our job is to find a few intelligent things to do, not to keep up with every damn thing in the world.",
    author: "Charlie Munger",
  },
  {
    quote: "Our society is run by insane people for insane objectives.",
    author: "John Lennon",
  },
  {
    quote:
      "Out of every one hundred men, ten shouldn't even be there, eighty are just targets, nine are the real fighters, and we are lucky to have them, for they make the battle. Ah, but the one, one is a warrior, and he will bring the others back.”",
    author: "Heraclitus",
  },
  {
    quote:
      "Pain is neither intolerable nor everlasting if you bear in mind that it has its limits, and if you add nothing to it in imagination.",
    author: "Marcus Aurelius, Meditations, VII.64",
  },
  {
    quote:
      "Pain too is just a scary mask: look under it and you will see. The body sometimes suffers, but relief is never far behind. And if that isn't good enough for you, the door stands open; otherwise put up with it. The door needs to stay open whatever the circumstances, with the result that our problems disappear.",
    author: "Epictetus, Discourses II, 1.19",
  },
  {
    quote:
      "Paris was Menelaus\" guest, and anyone who saw how well they treated each other would have laughed at anyone who said they weren't friends. But between the two a bit of temptation was thrown in the form of a beautiful woman, and over that there arose war.",
    author: "Epictetus, Discourses II, 22.23",
  },
  {
    quote: "Passion doesn’t pay bills, customers do.",
    author: "unknown",
  },
  {
    quote: "Passions stem from frustrated desire.",
    author: "Epictetus, Discourses I, 27.10",
  },
  {
    quote:
      "Patience is a virtue, and I'm learning patience. It's a tough lesson.",
    author: "Elon Musk",
  },
  {
    quote:
      "Pay attention to opportunity cost at all times. Doing one thing means not doing other things. This is a form of risk that is very easy to ignore, to your detriment.",
    author: "Marc Andreessen (http://blog.pmarca.com/)",
  },
  {
    quote:
      "Pay attention to your enemies, for they are the first to discover your mistakes.",
    author: "Antisthenes",
  },
  {
    quote:
      "Peace is what I leave with you; it is my own peace that I give you. I do not give it as the world does. Do not be worried and upset; do not be afraid.",
    author: "Jesus | John 14:27",
  },
  {
    quote:
      "Peace. It does not mean to be in a place where there is no noise, trouble or hard work. It means to be in the midst of those things and still be calm in your heart.",
    author: "Unknown",
  },
  {
    quote: "Peace must be found in the imperfect present.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "People act like a traveller headed for home who stops at an inn and, finding it comfortable, decides to remain there. You've lost sight of your goal, man. You were supposed to drive through the inn, not park there.",
    author: "Epictetus, Discourses II, 23.36-37",
  },
  {
    quote:
      "People are always looking for shortcuts. The only way to achieve greatness in life is to have patience, consistency, and discipline.",
    author: "David Goggins",
  },
  {
    quote:
      "People are not good to each other. Perhaps if they were, our deaths would not be so sad.",
    author: "Charles Bukowski",
  },
  {
    quote:
      "People buy things they don't need with money they don't have to impress people they don't even like.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote: "People need to understand that comparison isn't motivation.",
    author: "Richard Feynman",
  },
  {
    quote:
      "People tend to avoid the important work they fear by doing unimportant work that wears them out. They suppress anxiety with exhaustion, but they do not address the source of the problem.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "People think a soulmate is your perfect fit, and that’s what everyone wants. But a true soulmate is a mirror, the person who shows you everything that is holding you back, the person who brings you to your own attention so you can change your life. A true soul mate is probably the most important person you’ll ever meet because they tear down your walls and smack you awake. A soulmate's purpose is to shake you up, tear apart your ego a little bit, show you your obstacles and addictions, break your heart open so new light can get in, Make you so out of control that you have to transform your life.",
    author: "Elizabeth Gilbert",
  },
  {
    quote:
      "People think that if they complain about life, life or the world might change. But of course this does not happen. You cannot change and its laws. It is what it is. No amount of complaining, resentment or mourning will help. Accept, let go and move on.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "People to whom such things are still denied come to imagine that everything good will be theirs if only they could acquire them. Then they get them: and their longing is unchanged, their anxiety is unchanged, their disgust is no less, and they still long for whatever is lacking. Freedom is not achieved by satisfying desire, but by eliminating it.",
    author: "Epictetus, Discourses IV, 1.174-175",
  },
  {
    quote:
      "People who are living far below their means enjoy a freedom that people busy upgrading their lifestyles just can’t fathom.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "People who are physically ill are unhappy with a doctor who doesn't give them advice, because they think he has given up on them. Shouldn't we feel the same towards a philosopher – and assume that he has given up hope of our ever becoming rational – if he will no longer tell us what we need (but may not like) to hear?",
    author: "Epictetus, Fragments 19",
  },
  {
    quote:
      "People who can't laugh at themselves will always be outwitted by people who can.",
    author: "T. K. Coleman",
  },
  {
    quote:
      "People who know no self-restraint lead stormy and disordered lives, passing their time in a state of fear commensurate with the injuries they do to others, never able to relax. After every act they tremble, paralysed, their consciences continually demanding an answer, not allowing them to get on with other things. To expect punishment is to suffer it; and to earn it is to expect it.",
    author: "Seneca, Letter CV",
  },
  {
    quote:
      "People who read Cosmopolitan magazine are very different from those who do not.",
    author: "Donald Berry, Statistics: A Bayesian Perspective",
  },
  {
    quote:
      "People with a strong physical constitution can tolerate extremes of hot and cold; people of strong mental health can handle anger, grief, joy and the other emotions.",
    author: "Epictetus, Fragments 20",
  },
  {
    quote:
      "Perhaps I could best describe my experience of doing mathematics in terms of entering a dark mansion. One goes into the first room, and it's dark, completely dark. One stumbles around bumping into the furniture, and gradually, you learn where each piece of furniture is, and finally, after six months or so, you find the light switch. You turn it on, and suddenly, it's all illuminated. You can see exactly where you were.",
    author: "Andrew Wiles",
  },
  {
    quote:
      "Perhaps the desire of the thing called fame torments you. See how soon everything is forgotten, and look at the chaos of infinite time on each side of the present, and the emptiness of applause, and the fickleness and lack of judgment in those who pretend to give praise, and the narrowness of its domain, and be quiet at last.",
    author: "Marcus Aurelius, Meditations IV.3",
  },
  {
    quote: "Perpetual optimism is a force multiplier.",
    author: "Colin Powell",
  },
  {
    quote: "Pessimists sound smart. Optimists make money.",
    author: "Nat Friedman",
  },
  {
    quote:
      "Philosophy: the finding of bad reasons for what one believes by instinct.",
    author: "Brave New World (paraphrased)",
  },
  {
    quote: "Photography is painting with light.",
    author: "Eric Hamilton",
  },
  {
    quote: "PI seconds is a nanocentury.",
    author: "[fact]",
  },
  {
    quote: "Play Stupid Games, Win Stupid Prizes",
    author: "unknown",
  },
  {
    quote:
      "...pleasures, when they go beyond a certain limit, are but punishments…",
    author: "Seneca, Letter LXXXIII",
  },
  {
    quote:
      "Political correctness is America's newest form of intolerance, and it is especially pernicious because it comes disguised as tolerance. It presents itself as fairness, yet attempts to restrict and control people's language with strict codes and rigid rules.",
    author: "George Carlin",
  },
  {
    quote:
      "Politics is not the art of the possible. It consists in choosing between the disastrous and the unpalatable.",
    author: "J. K. Galbraith, Letter to Kennedy, 1962",
  },
  {
    quote: "Polymorphism abstracts types, just as functions abstract values.",
    author: "Jeremy Yallop and Leo White",
  },
  {
    quote:
      "Porn isn't real sex.\nCocaine isn't real energy.\nAlcohol isn't real courage.\nGambling isn't real investing.\nVideo games aren't real life.\nCaffeine isn't real adrenaline.\nNightly news aren't real facts.\nSocial media isn't really social.\nBusiness book aren't real business.",
    author: "unknown",
  },
  {
    quote: "PowerPoint makes us stupid.",
    author: "General James N. Mattis, USMC",
  },
  {
    quote: "Praise by name, criticize by category",
    author: "Peter Bevelin",
  },
  {
    quote:
      "Premature abstraction is an equally grevious sin as premature optimization.",
    author: "Keith Devens",
  },
  {
    quote:
      "Premature optimization is the root of all evil (or at least most of it) in programming.",
    author: "Donald Knuth",
  },
  {
    quote: "Problems only exist in the human mind.",
    author: "Anthony de Mello",
  },
  {
    quote:
      "Processors don't get better so that they can have more free time. Processors get better so _you_ can have more free time.",
    author: "LeCamarade (freeshells.ch)",
  },
  {
    quote:
      "Programmers are in a race with the Universe to create bigger and better idiot-proof programs, while the Universe is trying to create bigger and better idiots. So far the Universe is winning.",
    author: "Rich Cook",
  },
  {
    quote:
      "Programming is the art of figuring out what you want so precisely that even a machine can do it.",
    author: "Some guy who isn't famous",
  },
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Abelson & Sussman, SICP, preface to the first edition",
  },
  {
    quote:
      "Progress is not achieved by luck or accident, but by working on yourself daily.",
    author: "Epictetus",
  },
  {
    quote:
      "Pro tip: whenever you see people defining themselves by one thing, that culture is going to be toxic.",
    author: "Jarvis Johnson",
  },
  {
    quote:
      "Provoked by the sight of a handsome man or a beautiful woman, you will discover within you the contrary power of self-restraint. Faced with pain, you will discover the power of endurance. If you are insulted, you will discover patience. In time, you will grow to be confident that there is not a single impression that you will not have the moral means to tolerate.",
    author: "Epictetus, Enchiridion 10",
  },
  {
    quote:
      "Quality of the people is better than the quality of the business idea. Crappy people can screw up the best idea in the world.",
    author: "Hadi Partovi & Ali Partovi (iLike.com), Talk at StartupSchool2007",
  },
  {
    quote:
      "Quello che tutti gli artisti hanno in comune è la capacita di sognare, di avere una visione opaca ma concreta di quello che un giorno vorrebbero essere. Quella visione è la volontà con cui lottiamo ogni giorno per essere un passo più vicini di ieri al nostro sogno e un passo più lontani di quanto non saremo domani.",
    author: "Alessandro Steri",
  },
  {
    quote: "Read what you love until you love to read.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Realists are not afraid to look at the harsh circumstances of life.",
    author: "Robert Greene",
  },
  {
    quote:
      "Really, such a person amounts to no more than a carcass and a little blood. If he were anything more, he would realize that no one is ever unhappy because of someone else.",
    author: "Epictetus, Discourses I, 9.34",
  },
  {
    quote:
      "Receive wealth or prosperity without arrogance; and be ready to let it go.",
    author: "Marcus Aurelius, Meditations, VIII.33",
  },
  {
    quote:
      "Reflect on the other social roles you play. If you are a council member, consider what a council member should do. If you are young, what does being young mean, if you are old, what does age imply, if you are a father, what does fatherhood entail? Each of our titles, when reflected upon, suggests the acts appropriate to it.",
    author: "Epictetus, Discourses II, 10.10",
  },
  {
    quote:
      "Relentlessly prune bullshit, don't wait to do things that matter, and savor the time you have.",
    author: "Paul Graham",
  },
  {
    quote: "Remember, always be yourself ... unless you suck!",
    author: "Joss Whedon",
  },
  {
    quote:
      "Remember, it is not enough to be hit or insulted to be harmed, you must believe that you are being harmed. If someone succeeds in provoking you, realize that your mind is complicit in the provocation. ... Take a moment before reacting, and you will find it is easier to maintain control.",
    author: "Epictetus, Enchiridion 20",
  },
  {
    quote:
      "Remember kids: if you study hard, get good grades, got to a good college, get a job, work hard, never take a sick day, live within your means and do what you're told ... then one day your boss mught go to space.",
    author: "Dan Price on Linkedin (July 2021)",
  },
  {
    quote:
      "Remember that it is we who torment, we who make difficulties for ourselves – that is, our opinions do. What, for instance, does it mean to be insulted? Stand by a rock and insult it, and what have you accomplished? If someone responds to insult like a rock, what has the abuser gained with his invective?",
    author: "Epictetus, Discourses I, 25.28-29",
  },
  {
    quote:
      "Remember that you are humans in the first place and only after that programmers.",
    author: "Alexandru Vancea",
  },
  {
    quote:
      "Remember that your perception of the world is a reflection of your state of consciousness.",
    author: "Eckhart Tolle",
  },
  {
    quote:
      "Remember to act always as if you were at a symposium. When the food or drink comes around, reach out and take some politely; if it passes you by don't try pulling it back. And if it has not reached you yet, don't let your desire run ahead of you, be patient until your turn comes.",
    author: "Epictetus, Enchiridion 15",
  },
  {
    quote:
      "Remember, too, on every occasion that leads you to vexation to apply this principle: not that this is a misfortune, but that to bear it nobly is good fortune.",
    author: "Marcus Aurelius, Meditations IV.49",
  },
  {
    quote:
      "Remember: you are alone. Every time you can get help from someone, it is an opportunity: you should eagerly size it. But then, promptly return to normal mode: you are alone and you must be prepared to solve every problem yourself.",
    author: "Eric KEDJI",
  },
  {
    quote:
      "Remind yourself that the past and are 'indifferent' to you, and that the supreme good, and eudaimonia, can only exist within you, right now, in the present moment. Donald J.",
    author: "Robertson",
  },
  {
    quote:
      "Repeated failure will toughen your spirit and show you with absolute clarity how things must be done.",
    author: "Robert Greene",
  },
  {
    quote:
      "Resume writing is just like dating, or applying for a bank loan, in that nobody wants you if you're desperate.",
    author: "Steve Yegge.",
  },
  {
    quote:
      "Return to your sober senses and call yourself back; and when you have roused yourself from sleep and have perceived that they were only dreams that troubled you, now in your waking hours look at these (the things about you) as you did look at those (the dreams).",
    author: "Marcus Aurelius, Meditations VI.31",
  },
  {
    quote:
      "Revolutions come from standing on the shoulders of giants and facing in a better direction.",
    author: "Alan Kay",
  },
  {
    quote:
      "Rich is measured in $. Wealth is measured in time. Ho long you can survive without working is how wealthy you are. For example, most people think $1 million is rich but if you spend $100k a month, your wealth is only 10 months. Rich is some shit you can lose with a crazy summer and a drug habit",
    author: "?",
  },
  {
    quote: "Rich people get paid by the project and pay by the hour.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Rules of Optimization: Rule 1: Don’t do it. Rule 2 (for experts only): Don’t do it yet.",
    author: "M.A. Jackson",
  },
  {
    quote:
      "Run down the list of those who felt intense anger at something: the most famous, the most unfortunate, the most hated, the most whatever: Where is all that now? Smoke, dust, legend…or not even a legend. Think of all the examples. And how trivial the things we want so passionately are.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Saying that Java is nice because it works on all OSes is like saying that anal sex is nice because it works on all genders.",
    author: "Alanna",
  },
  {
    quote:
      "Seize any opportunity, or anything that looks like opportunity. They are rare, much rarer than you think...",
    author: 'Nassim Nicholas Taleb, "The Black Swan".',
  },
  {
    quote:
      "Self-control is all about moment to moment self awareness. You catch yourself doing – or about to do – something undesirable, see that it isn't good for you in the long term, and as a result of this awareness abstain from doing it.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "Self-control is strength. Right thought is mastery. Calmness is power.",
    author: "James Allen",
  },
  {
    quote:
      "Self-control is the chief element in self-respect, and self-respect is the chief element in courage.",
    author: "Thucydides",
  },
  {
    quote:
      "Self-discipline and self-control determine the quality of your life more than anything else.",
    author: "Ed Latimore",
  },
  {
    quote:
      "Self-love is a sincere acceptance of the past, an agreement to make the most of the present and a willingness to allow the best to occur in the future (wholehearted)",
    author: "yung pueblo",
  },
  {
    quote: "Semper aut discere, aut docere, aut scribere dulce habui.",
    author: "Bede",
  },
  {
    quote:
      'Set aside a certain number of days during which you shall be content with the scantiest and cheapest fare, with coarse and rough dress, saying to yourself the while, "Is this the condition that I feared?',
    author: "Seneca",
  },
  {
    quote:
      "Set aside now and then a number of days during which you will be content with the plainest of food, and very little of it, and with rough, coarse clothing, and will ask yourself, 'Is this what one used to dread?",
    author: "Seneca",
  },
  {
    quote:
      "Settle on the type of person you want to be and stick to it, whether alone or in company.",
    author: "Epictetus, Enchiridion 33.1",
  },
  {
    quote:
      "Set yourself in motion, if it is in your power, and do not look about you to see if anyone will observe it; nor yet expect Plato's Republic: but be content if the smallest thing goes on well, and consider such an event to be no small matter.",
    author: "Marcus Aurelius, Meditations, IX.29",
  },
  {
    quote:
      "Shall any man hate me? That will be his affair. But I will be mild and benevolent toward every man, and ready to show even him his mistake, not reproachfully, nor yet as making a display of my endurance, but nobly and honestly.",
    author: "Marcus Aurelius, Meditations, XI.13",
  },
  {
    quote:
      "Short term thinking is everywhere. Noisy feuds over little prizes. The long term thinker will be king. Win the decade, not the day.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "Short-term thinking makes people desperate, ungenerous, impulsive. Long-term thinking makes people, gracious, controlled.",
    author: "@TheStoicEmperor",
  },
  {
    quote: "Short words are best and the old words when short are best of all.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.",
    author: "Stan Kelly-Bootle",
  },
  {
    quote:
      "Shouldn't we be content to be cosmic sloths, enjoying the universe from the comfort of Earth? The answer is, no, The Earth is under threat from so many areas that it is difficult for me to be positive.",
    author: "Stephen Hawking",
  },
  {
    quote: "Show, don't tell.",
    author: "unknown",
  },
  {
    quote:
      "Show me one person who cares how they act, someone for whom success is less important than the manner in which it is achieved. While out walking, who gives any thought to the act of walking itself? Who pays attention to the process of planning, not just the outcome?",
    author: "Epictetus, Discourses II, 16.15",
  },
  {
    quote:
      "Show me someone for whom success is less important than the manner in which it is achieved. Of concern for the means, rather than the ends, of their actions…I want to see him. This is the person I have looked for a long time, the true genius.",
    author: "Epictetus",
  },
  {
    quote:
      "Show me someone untroubled with disturbing thoughts about illness, danger, death, exile or loss of reputation. By all the gods, I want to see a Stoic!",
    author: "Epictetus, Discourses II, 19.24",
  },
  {
    quote:
      "Side projects are less masturbatory than reading RSS, often more useful than MobileMe, more educational than the comments on Reddit, and usually more fun than listening to keynotes.",
    author: "Chris Wanstrath",
  },
  {
    quote: "Silence is a source of great strength.",
    author: "Lao Tzu",
  },
  {
    quote:
      "Simple, clear purpose and principles give rise to complex, intelligent behavior. Complex rules and regulations give rise to simple, stupid behavior.",
    author: "Dee Hock, Birth of the Chaordic Age",
  },
  {
    quote: "Simple things should be simple. Complex things should be possible.",
    author: "Alan Kay",
  },
  {
    quote: "Simplicity and pragmatism beat complexity and theory any day.",
    author: "Dennis (blog comment)",
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo Da Vinci",
  },
  {
    quote:
      "Simplicity means the achievement of maximum effect with minimum means.",
    author: "Dr. Koichi Kawana",
  },
  {
    quote: "Simplicity takes effort -- genius, even.",
    author: "Paul Graham",
  },
  {
    quote:
      "Simultaneously reifying and challenging hegemonic codes of race, class, gender and regional or national identity, his characters explore the complex and changing postmodern cultural landscape.",
    author:
      "Robert Bennett, English professor at Montana State, announcing a panel discussion about Brad Pitt",
  },
  {
    quote:
      "Since every man dies, it is better to die with distinction than to live long.",
    author: "Musonius Rufus",
  },
  {
    quote:
      "Since it is possible that you might depart from life this very moment, regulate every act and thought accordingly.",
    author: "Marcus Aurelius, Meditations II.11",
  },
  {
    quote:
      'Since plants do not even have the power of perception, "good" and "evil" are not applicable to them. Evidently, "good" and "bad" presume the power of using impressions.',
    author: "Epictetus, Discourses II, 8.4",
  },
  {
    quote:
      "Since programmers create programs out of nothing, imagination is our only limitation. Thus, in the world of programming, the hero is the one who has great vision. Paul Graham is one of our contemporary heroes. He has the ability to embrace the vision, and to express it plainly. His works are my favorites, especially the ones describing language design. He explains secrets of programming, languages, and human nature that can only be learned from the hacker experience. This book shows you his great vision, and tells you the truth about the nature of hacking.",
    author: 'Yukihiro "Matz" Matsumoto, creator of Ruby',
  },
  {
    quote:
      "Since reason is what analyses and coordinates everything, it should not go itself unanalysed. Then what will it be analysed by? Obviously by itself or something different. Now, this something different must either be reason or something superior to reason – which is impossible, since there is nothing superior to reason.",
    author: "Epictetus, Discourses I, 17.1-2",
  },
  {
    quote:
      "Since the greatest part of what we say and do is unnecessary, dispensing with such activities affords a man more leisure and less uneasiness.",
    author: "Marcus Aurelius, Meditations IV.24",
  },
  {
    quote: "Social science is fake science.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Society is collapsing, and people are starting to recognize that the reason they feel mentally ill is because they're living in a system that is not designed to suit the human spirit.",
    author: "Jim Carrey",
  },
  {
    quote:
      "So, concerning the things we pursue, and for which we vigorously exert ourselves, we owe this consideration – either there is nothing useful in them, or most aren't useful. Some of them are superfluous, while others aren't worth that much. But we don't discern this and see them as free, when they cost us dearly.",
    author: "Seneca",
  },
  {
    quote: "Socrates was not in prison, because he chose to be there.",
    author: "Epictetus, Discourses I, 12.23",
  },
  {
    quote:
      "So does this misfortune prevent you in any way from being just, generous, sober, reasonable, careful, free from error, courteous, free, etc. – all of which together make human nature complete?",
    author: "Epictetus, Fragments 28b",
  },
  {
    quote:
      "So don’t worry about tomorrow, for tomorrow will bring its own worries. Today’s trouble is enough for today.",
    author: "Jesus | Matthew 6:34",
  },
  {
    quote: "So I look for the best and am prepared for the opposite.",
    author: "Seneca, Letter LXXXVIII",
  },
  {
    quote:
      'So make a practice at once of saying to every strong impression: "An impression is all you are, not the source of the impression." Then test and assess it with your criteria, but one primarily: ask, "Is this something that is, or is not, in my control?"',
    author: "Epictetus, Enchiridion 1.5",
  },
  {
    quote:
      "Some can delay gratification. Others don't seek it at all. Be the latter.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "Some may say Ruby is a bad rip-off of Lisp or Smalltalk, and I admit that. But it is nicer to ordinary people.",
    author: "Matz, LL2",
  },
  {
    quote:
      "Someone bathes in haste; don't say he bathes badly, but in haste. Someone drinks a lot of wine; don't say he drinks badly, but a lot. Until you know their reasons, how do you know that their actions are vicious?",
    author: "Epictetus, Enchiridion 45",
  },
  {
    quote:
      "Some people make your laugh a little louder, your smile a little brighter and your life a little better. Try to be one of those people.",
    author: "unknown",
  },
  {
    quote:
      "Some people suggest that machines would be friendlier if input could be in a natural language. But natural language is probably the worst kind of input because it can be quite ambiguous. The process of retrieving information from the computer would be so time-consuming that you would be better off spending that time getting the information directly from an expert.",
    author:
      "Gary Kildall (inventor of CP/M, one of the first OS for the micro).",
  },
  {
    quote:
      "Some reach the heights of power. Some live quiet lives of virtue and purpose. Some seek nothing but mischief. All find their way to the grave. Time will make ashes of us all. Do not squander this moment. It will not come again.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      'Some students [of philosophy] become captivated by all these things and don\'t want to proceed further. One is captivated by diction, another by deductive or equivocal arguments, someone else by yet another "inn" of this kind; and there they stay and rot as if seduced by the Sirens.',
    author: "Epictetus, Discourses II, 23.41",
  },
  {
    quote:
      "Something Confusing about \"Hard\": It's tempting to think that if it's hard, then it's valuable. Most valuable things are hard. Most hard things are completely useless - (picture of someone smashing their head through concrete blocks kung-fu style). Hard DOES NOT EQUATE TO BEING valuable. Remember Friendster back in the day? You'd sign in, invite friends, have 25 friends, go to their profile, and then it'd show how you were connected to each one. That's an impressive [some geeky CS jargon] Cone traversal of a tree - 100 million string comparisons per page - it won't scale. Used to take a minute per page to load, and Friendster died a painful death. MySpace - not interested in solving problems They use the shortcut of \"Miss Fitzpatrick is in your extended network\" (i.e. even when you're not even signed up for MySpace) They didn't solve the hard problem. But they make the more relevant assumption that you want to be connected to hot women. [LOL] Shows Alexa graph showing that in early 2005 Myspace took off, and quickly bypassed Friendster and never looked back.",
    author: "Max Levchin, PayPal founder, Talk at StartupSchool2007",
  },
  {
    quote:
      'Something good should be a source of pride, correct? "Yes." And can one really take pride in a momentary pleasure? Please don\'t say yes.',
    author: "Epictetus, Discourses II, 11.22",
  },
  {
    quote:
      'Sometimes a man with too broad a perspective reveals himself as having no real perspective at all. A man who tries too hard to see every side may be a man who is trying to avoid choosing any side. A man who tries too hard to seek a deeper truth may be trying to hide from the truth he already knows. That is not a sign of intellectual sophistication and "great thinking". It is a demonstration of moral degeneracy and cowardice.',
    author: "Steven Den Beste",
  },
  {
    quote:
      "Sometimes life hits you in the head with a brick. Don't lose faith.",
    author: "Unknown",
  },
  {
    quote:
      "Sometimes, magic is just someone spending more time on something than anyone else might reasonably expect.",
    author: "Teller",
  },
  {
    quote:
      'Sometimes saying "fuck it" at the right time can be a very powerful thing. It tells your mind that you are willing to do whatever it takes to get to the other side.',
    author: "David Goggins",
  },
  {
    quote:
      "So the mere constraint of staying in regular contact with us will push you to make things happen, because otherwise you'll be embarrassed to tell us that you haven't done anything new since the last time we talked.",
    author: "Paul Graham (a talk at Y Combinator, for startup creators).",
  },
  {
    quote:
      "Sound methodology can empower and liberate the creative mind; it cannot inflame or inspire the drudge.",
    author: "Frederick P. Brooks, No Sliver Bullet.",
  },
  {
    quote:
      "So - what are the most important problems in software engineering? I’d answer “dealing with complexity”.",
    author: "Mark Chu-Carroll",
  },
  {
    quote:
      "So when you hear that even life and the like are indifferent, don't become apathetic; and by the same token, when you're advised to care about them, don't become superficial and conceive a passion for externals.",
    author: "Epictetus, Discourses II, 6.2",
  },
  {
    quote:
      "So you admit that you have at least one master. And don't let the fact that Caesar rules over everyone, as you say, console you: it only means that you're a slave in a very large household.",
    author: "Epictetus, Discourses IV, 1.13",
  },
  {
    quote:
      "Speaking for myself, I hope death overtakes me when I'm occupied solely with the care of my character, in an effort to make it passionless, free, unrestricted and unrestrained.",
    author: "Epictetus, Discourses III, 5.7",
  },
  {
    quote: "Start coloring inside the lines you live between.",
    author: "Natalie Lynn",
  },
  {
    quote:
      'Starting with things of little value – a bit of spilled oil, a little stolen wine – repeat to yourself: "For such a small price I buy tranquillity and peace of mind."',
    author: "Epictetus, Enchiridion 12.2",
  },
  {
    quote:
      "Start living in discomfort. Gradually increase it little by little, and you will steadily grow. If you want sudden growth, deluge yourself in great discomfort and do not retreat from it. The more discomfort you are willing to bear, the more you can grow.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "State is the root of all evil. In particular functions with side effects should be avoided.",
    author: "OO Sucks (bluetail.com)",
  },
  {
    quote:
      "Stoicism is about the domestication of emotions, not their elimination.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "Stoicism teaches how to keep a calm and rational mind no matter what happens to you and it helps you understand and focus on what you can control and not worry about and accept what you can't control.",
    author: "Jonas Salzgeber",
  },
  {
    quote:
      "Stoicism, understood properly, is a cure for a disease. The disease in question is the anxiety, grief, fear, and various other negative emotions that plague humans and prevent them from experiencing a joyful existence. William B.",
    author: "Irvine",
  },
  {
    quote:
      "Stop trying to impress others with your stuff and start trying to impress them with your life.",
    author: "Joshua Becker",
  },
  {
    quote:
      "Students don't care how much you know, until they know how much you care...",
    author: "John Maxwell",
  },
  {
    quote:
      "Students should be evaluated on how well they can achieve the goals they strived to achieve within a realistic context. Students need to learn to do things, not know things.",
    author: "Roger Schank, Engines for Education",
  },
  {
    quote:
      "Success is based off of your willingness to work your ass off no matter what obstacles are in your way.",
    author: "David Goggins",
  },
  {
    quote:
      "Success is never owned, it is rented, and the rent is due every day.",
    author: "Rory Vaden",
  },
  {
    quote:
      "Success is the enemy of learning. It can deprive you of the time and the incentive to start over. Beginner's mind also needs beginner's time.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Such as are your habitual thoughts, such also will be the character of your mind; for the soul is dyed by the thoughts. Dye it then with a continuous series of such thoughts as these: for instance, that where a man can live, there he can also live well.",
    author: "Marcus Aurelius, Meditations V.16",
  },
  {
    quote:
      "Suppose then that you have given up this worthless thing called fame, what remains that is worth valuing? This, in my opinion: to move yourself and to restrain yourself in conformity to your proper constitution, to which end all employments and arts lead.",
    author: "Marcus Aurelius, Meditations VI.16",
  },
  {
    quote:
      "Take a deep breath. Get present in the moment and ask yourself what is important this very second.",
    author: "Greg McKeown",
  },
  {
    quote:
      "Take a deep breath. You're living the dream life of hundreds of millions who are below poverty line people. You have some of the best comforts available to you. You live better than kings did 100 years ago! What the f*ck are you so worried and stressed out all the time about?",
    author: "@LifeMathMoney",
  },
  {
    quote:
      "Take a lyre player: he's relaxed when he performs alone, but put him in front of an audience, and it's a different story, no matter how beautiful his voice or how well he plays the instrument. Why? Because he not only wants to perform well, he wants to be well received – and the latter lies outside his control.",
    author: "Epictetus, Discourses II, 13.2",
  },
  {
    quote:
      "Take a minute and let the matter wait on you. Then reflect on both intervals of time: the time you will have to experience the pleasure, and the time after its enjoyment that you will beat yourself up over it.",
    author: "Epictetus, Enchiridion 34",
  },
  {
    quote:
      'Take away your opinion, and then there is taken away the complaint, "I have been harmed." Take away the complaint, "I have been harmed," and the harm is taken away.',
    author: "Marcus Aurelius, Meditations IV.7",
  },
  {
    quote:
      "Take me and cast me where you will; for there I shall keep my divine part tranquil, that is, content, if it can feel and act conformably to its proper constitution.",
    author: "Marcus Aurelius, Meditations, VIII.45",
  },
  {
    quote:
      "Talent doesn't lay in those who make it first, but in those who give up last.",
    author: "Alessandro Steri",
  },
  {
    quote:
      "Talk, but rarely, if occasion calls you, but do not talk of ordinary things – of gladiators or horses races or athletes or of meats or drinks – these are topics that arise everywhere – but above all do not talk about men in blame or compliment or comparison.",
    author: "Epictetus",
  },
  {
    quote: "Talkers are no good doers.",
    author: 'William Shakespeare, "Henry VI"',
  },
  {
    quote:
      "That book is good in vain which the reader throws away. He only is the master who keeps the mind in pleasing captivity; whose pages are perused with eagerness, and in hope of new pleasure are perused again; and whose conclusion is perceived with an eye of sorrow, such as the traveller casts upon departing day.",
    author: "Johnson, Lives of the Poets: Dryden",
  },
  {
    quote:
      'That is one of the most distinctive differences between school and the real world: there is no reward for putting in a good effort. In fact, the whole concept of a "good effort" is a fake idea adults invented to encourage kids. It is not found in nature.',
    author: "Paul Graham",
  },
  {
    quote:
      "That is the inevitable human response. We’re reluctant to believe that great discoveries are in the air. We want to believe that great discoveries are in our heads—and to each party in the multiple the presence of the other party is invariably cause for suspicion.",
    author: "Malcolm Gladwell, Who says big ideas are rare?",
  },
  {
    quote:
      'That is what Socrates would do: he would quit only after he had fleshed out an idea and explored its implications. He wouldn\'t just say, "Define envy for me," then, when his discourses interlocutor had ventured on a definition, say, "Wrong: your definiens is not extensionally equivalent to the definiendum."',
    author: "Epictetus, Discourses II, 12.9",
  },
  {
    quote:
      "That language is an instrument of human reason, and not merely a medium for the expression of thought, is a truth generally admitted.",
    author: "George Boole, quoted in Iverson's Turing Award Lecture",
  },
  {
    quote:
      "That one wants nothing to be different, not forward, not backwards, not in all eternity. Not merely bear what is necessary, still less conceal it… but love it.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "That 95 per cent. fail of those who start in business upon their own account seems incredible, and yet such are said to be the statistics upon the subject.",
    author: "Andrew Carnegie, 1896",
  },
  {
    quote:
      "That person has lost their children: you too, can lose yours; that person received sentence of death: your innocence too, stands under the hammer. This is the fallacy that takes us in and makes us weak while we suffer misfortunes that we never foresaw that we could suffer. The person who has anticipated the coming of troubles takes away their power when they arrive.",
    author: "Seneca",
  },
  {
    quote: "That's your life and its ending one moment at a time.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote: "That which can be destroyed by the truth should be.",
    author: "P.C. Hodgell",
  },
  {
    quote:
      "The ability to simplify means to eliminate the unnecessary so that the necessary may speak.",
    author: "Hans Hofmann",
  },
  {
    quote:
      "The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made.",
    author: "John Locke, An Essay Concerning Human Understanding (1690)",
  },
  {
    quote:
      "The alternative to valued responsibility is impulsive low-class pleasure.",
    author: "Jordan Peterson",
  },
  {
    quote: "The art of being wise is the art of knowing what to overlook.",
    author: "William James",
  },
  {
    quote:
      "The art of getting someone else to do something you want done because he wants to do it [Leadership].",
    author: "Dwight D. Enseinhover.",
  },
  {
    quote:
      "The art of handling university students is to make oneself appear, and this almost ostentatiously, to be treating them as adults....",
    author: "Arnold Toynbee, Experiences",
  },
  {
    quote:
      "The art of life is more like the wrestler's art than the dancer's, in respect of this, that it should stand ready and firm to meet onsets that are sudden and unexpected.",
    author: "Marcus Aurelius, Meditations, VII.61",
  },
  {
    quote:
      "The average man is a conformist, accepting miseries and disasters with the stoicism of a cow standing in the rain.",
    author: "Colin Wilson",
  },
  {
    quote: "The best angle from which to approach any problem is the TRYangle.",
    author: "unknown",
  },
  {
    quote: "The best answer to anger is silence.",
    author: "Marcus Aurelius",
  },
  {
    quote: "The best is the enemy of the good.",
    author: "Voltaire",
  },
  {
    quote:
      "The best lack all conviction, while the worst\nAre full of passionate intensity.",
    author: "Yeats, The Second Coming",
  },
  {
    quote:
      "The best people and organizations have the attitude of wisdom: the courage to act on what they know right now and the humility to change course when they find better evidence. The quest for management magic and breakthrough ideas is overrated; being a master of the obvious is underrated. Jim Maloney is right: work is an overrated activity.",
    author: "Bob Sutton",
  },
  {
    quote:
      "The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.",
    author: "Randall E. Stross",
  },
  {
    quote: "The best project you'll ever work on is yourself.",
    author: "Sonny Franco",
  },
  {
    quote:
      "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    author: "Anonymous",
  },
  {
    quote:
      "The best way, perhaps the only way, to change others is to become an example.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "The best way to do something 'lean' is to gather a tight group of people, give them very little money, and very little time.",
    author: "Bob Klein, chief engineer of the F-14 program",
  },
  {
    quote:
      "The best way to find something you love is by doing something you hate.",
    author: "Casey Neistat",
  },
  {
    quote:
      "The best way to learn to live with our limitations is to know them.",
    author: "E. W. Dijkstra, The humble programmer",
  },
  {
    quote: "The best writing is rewriting.",
    author: "E. B. White",
  },
  {
    quote:
      "The body is the raw material of the doctor and physical therapist. Land is the farmer's raw material. The raw material of the good man is his mind – his goal being to respond to impressions the way nature intended.",
    author: "Epictetus, Discourses III, 3.1",
  },
  {
    quote:
      "The cause of an event is often unclear. You will feel less anxiety if you can learn to be comfortable with ambiguity.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "The choice of the university is mostly important for the piece of paper you get at the end. The education you get depends on you.",
    author: "Andreas Zwinkau",
  },
  {
    quote:
      "The condition of man is already close to satiety and arrogance, and there is danger of destruction of everything in existence.",
    author: "a Brahmin to Onesicritus, 327 BC, reported in Strabo's Geography",
  },
  {
    quote:
      "The definition of insanity is doing the same thing over and over again and expecting different results.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "The development of this aircraft was long and complex even by Soviet standards, partially explained by the fact that its entire design team was in jail.",
    author: "Howard Moon on the TU-2",
  },
  {
    quote: "The direct pursuit of happiness is a recipe for an unhappy life.",
    author: "Donald Campbell",
  },
  {
    quote:
      "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.",
    author: "Konstantin Tsiolkovsky",
  },
  {
    quote:
      "The easiest way to live unhappy and unsatisfied is to hope. More often than not, you'll be disappointed. Thus, your main aim should be to do the best you can right now and to expect nothing at all. Accept the way things turn out despite your best effort. That's the only path to a peaceful mind.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "The economic depression that struck Europe in the fourteenth century was followed ultimately by economic and technological recovery. But the depression we have moved into will have no end. We can anticipate centuries of decline and exhaustion.",
    author: "Jean Gimpel, The Medieval Machine, 1975",
  },
  {
    quote:
      "The essence of good and evil consists in the condition of our character. And externals are the means by which our character finds its particular good and evil.",
    author: "Epictetus, Discourses I, 29.1-2",
  },
  {
    quote:
      "The expectation that you bring to your meditation are often the greatest obstacles you will encounter.",
    author: "Mingyur Rinpoche",
  },
  {
    quote:
      "The faculty of desire purports to aim at securing what you want, while aversion purports to shield you from what you don't. If you fail in your desire, you are unfortunate, if you experience what you would rather avoid you are unhappy.",
    author: "Epictetus, Enchiridion 2.1",
  },
  {
    quote:
      "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.",
    author: "Unknown",
  },
  {
    quote:
      "The first step is to establish that something is possible. Then probability will occour.",
    author: "Elon Musk",
  },
  {
    quote:
      "The first thing a pretender to philosophy must do is get rid of their presuppositions; a person is not going to undertake to learn anything that they think they already know.",
    author: "Epictetus, Discourses II, 17.1",
  },
  {
    quote:
      'The following are non-sequiturs: "I am richer, therefore superior to you\'; or "I am a better speaker, therefore a better person, than you."',
    author: "Epictetus, Enchiridion 44",
  },
  {
    quote:
      "The fragile wants tranquility, the antifragile grows from disorder, and the robust doesn't care too much.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "The function of good software is to make the complex appear to be simple.",
    author: "Grady Booch",
  },
  {
    quote: "The function of wisdom is to discriminate between good and evil.",
    author: "Cicero",
  },
  {
    quote:
      "The fundamental delusion — there is something out there that will make me happy and fulfilled forever.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "The fundamental human fallacy: the illusion that a change in external circumstances will lead to permanent bliss. That the attainment of a future goal will make you satisfied forever. The illusion is so entrenched that it persists despite being refuted by repeated experience.",
    author: "@TheAncientSage",
  },
  {
    quote: "The Future is already here. It's just not evenly distributed yet.",
    author: "William Gibson",
  },
  {
    quote:
      "The future is an unknown, but a somewhat predictable unknown. To look to the future we must first look back upon the past. That is where the seeds of the future were planted. I never think of the future. It comes soon enough.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The general principle for complexity design is this: Think locally, act locally.",
    author:
      "Richard P. Gabriel & Ron Goldman, Mob Software: The Erotic Life of Code",
  },
  {
    quote:
      "The German historians of the nineteenth century were explicit and vastly successful in the exercise of what they regarded as social responsibility. Nor did they see any conflict between their ethics as historians and their obligations as citizens. But we can now perceive that they were building not only a united Germany but a Germany united in authoritarian terms.",
    author: "Lynn White",
  },
  {
    quote: "The goal of life is living in agreement with Nature.",
    author: "Zeno of Citium",
  },
  {
    quote:
      "The good thing about reinventing the wheel is that you get a round one.",
    author: "Douglas Crockford (Author of JSON and JsLint)",
  },
  {
    quote: "The government has no money of its own. It's all your money.",
    author: "Margaret Thatcher",
  },
  {
    quote:
      'The great dividing line between success and failure can be expressed in five words: "I did not have time."',
    author: "WestHost weekly newsletter 14 Feb 2003",
  },
  {
    quote:
      "The greatest challenge to any thinker is stating the problem in a way that will allow a solution.",
    author: "Bertrand Russell",
  },
  {
    quote:
      "The greatest dangers to liberty lurk in insidious encroachment by men of zeal, well-meaning but without understanding.",
    author: "Brandeis",
  },
  {
    quote: "The greatest of all weaknesses is the fear of appearing weak.",
    author: "J. B. Bossuet, Politics from Holy Writ, 1709",
  },
  {
    quote: "The great law of nature is that it never stops. There is no end.",
    author: "Ryan Holiday",
  },
  {
    quote:
      "The great viruses of our time spread through minds, not through bodies.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "The handicap under which most beginning writers struggle is that they don't know how to write.",
    author: "Wodehouse",
  },
  {
    quote:
      "The happiness of those who want to be popular depends on others; the happiness of those who seek pleasure fluctuates with moods outside their control; but the happiness of the wise grows out of their own free acts.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
  },
  {
    quote: "The hardest part of design ... is keeping features out.",
    author: "Donald Norman",
  },
  {
    quote:
      "The hard part wasn't going to prison. It was getting out and trying to be part of society again. Because at one time I was a contractor, I had four employees, a three-bedroom house, blah blah blah blah, and I had to lose it all to realize it was just stuff. When I discharged my sentence, February 11, 2011, I became a citizen again. Now I can go in and vote for the president, but I can't get a job here or there, and I can't have any apartments because they won't accept felons. I even went through an agency that took felons, and they'll give a pedophile an apartment before me because I had a drug charge. I wasn't even dealing drugs: I just had possession, but they're worried for anybody that had drugs that they could sell it in their apartments, and they won't give them one. They give pedophiles an apartment and not me because I had a drug felony. So the hard part was becoming part of society again. It's like they didn't want me to be part of their society anymore. So I just decided <<Fuck it! I'm going to sleep in a tent. I'm going to do what I love for a living, which is playing music. And If I make a little bit of money, I'd prefer to do what I love with passion rather than go back to contracts and try to make a lot of money and be part of a society that doesn't even want me anymore>>. Fuck them, you know, fuck society. That's what I feel. I'm just trying to make the world a better place, a more beautiful place, and if music and art can do it, and somebody appreciates it, and I can make a positive difference in one person's life, that's all that matters.",
    author:
      'The guy from the viral YouTube video "Homeless guy spits some truth."',
  },
  {
    quote:
      "The history of your life is now complete and your service is ended: and how many beautiful things you have seen; and how many pleasures and pains you have despised; and how many things called honorable you have spurned; and to how many ill-minded folks you have shown a kind disposition.",
    author: "Marcus Aurelius, Meditations V.31",
  },
  {
    quote:
      "The human brain starts working the moment you are born and never stops until you stand up to speak in public.",
    author: "Anonymous",
  },
  {
    quote:
      "The imagination of nature is far, far greater than the imagination of man.",
    author: "Richard Feynman",
  },
  {
    quote:
      "The impediment to action advances action. What stands in the way becomes the way.",
    author: "Marcus Aurelius",
  },
  {
    quote: "The important thing is not to stop questioning.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The job of a leader today is not to create followers. It’s to create more leaders.",
    author: "Ralph Nader",
  },
  {
    quote:
      "The judgment should be able to say to the thing that falls under its observation: This you are in substance (reality), though in men's opinion you may appear to be of a different kind.",
    author: "Marcus Aurelius, Meditations, VII.68",
  },
  {
    quote:
      "The key to growth is the introduction of higher dimensions of consciousness into our awareness.",
    author: "Lao Tzu",
  },
  {
    quote:
      "The key to performance is elegance, not battalions of special cases.",
    author: "Jon Bentley and Doug McIlroy",
  },
  {
    quote:
      "The late Richard Feynman, a superb physicist, said once as we talked about the laser that the way to tell a great idea is that, when people hear it, they say, 'Gee, I could have thought of that.'",
    author: "Charles Townes, How the Laser Happened",
  },
  {
    quote: "The less confident you are, the more serious you have to act.",
    author: "Tara Ploughman",
  },
  {
    quote:
      "The lesson of the story might appear to be that self-interested and ambitious people in power are often the cause of wastefulness in developing countries. But self-interested and ambitious people are in positions of power, great and small, all over the world. In many places, they are restrained by the law, the press, and democratic opposition. Cameroon's tragedy is that there is nothing to hold self-interest in check.",
    author: "Tim Harford",
  },
  {
    quote: "The less scheduled you are, the more creative you’re going to be.",
    author: "Naval Ravikant",
  },
  {
    quote: "The limit is not the sky. The limit is the mind.",
    author: "Wim Hof",
  },
  {
    quote:
      "The man who spends his time choosing one resort after another in a hunt for peace and quiet, will in every place he visits find something to prevent him from relaxing.",
    author: "Seneca, Letter CIV",
  },
  {
    quote:
      "The mark and attitude of the ordinary man: never look for help or harm from yourself, only from outsiders. The mark and attitude of the philosopher: look for help and harm exclusively from yourself.",
    author: "Epictetus, Enchiridion 48",
  },
  {
    quote:
      "The masses are wrong to say that only freeborn men are entitled to an education; believe the philosophers instead, who say that only educated people are entitled to be called free.",
    author: "Epictetus, Discourses II, 1.22",
  },
  {
    quote:
      "The meaning of life is just to be alive. It is so plain and so obvious and so simple. And yet, everybody rushes around in a great panic as if it were necessary to achieve something beyond themselves.",
    author: "Alan Watts",
  },
  {
    quote:
      "The mind maintains its own tranquillity by retiring into itself, and the ruling faculty is not made worse. But the parts that are harmed by pain, let them, if they can, give their opinion about it.",
    author: "Marcus Aurelius, Meditations, VII.33",
  },
  {
    quote:
      "The mind should not be kept continuously at the same pitch of concentration, but given amusing diversions… Our minds must relax: they will rise better and keener after a rest. Just as you must not force fertile farmland, as uninterrupted productivity will soon exhaust it, so constant effort will sap our mental vigor, while a short period of rest and relaxation will restore our powers.",
    author: "Seneca",
  },
  {
    quote: "The mind that is anxious about future events is miserable.",
    author: "Seneca",
  },
  {
    quote:
      "The mind that is free from passions is a citadel, for man has nothing more secure to which he can fly for refuge and repel every attack.",
    author: "Marcus Aurelius, Meditations, VIII.48",
  },
  {
    quote:
      "The minute you put the blame on someone else you’ve switch things from being a problem you can control to a problem outside of your control.",
    author: "engtech (internetducttape.com)",
  },
  {
    quote: "The more silence you appreciate the more powerful you become.",
    author: "Nico James on Twitter",
  },
  {
    quote:
      "The more time you spend in your discomfort zone, the more your comfort zone will expand.",
    author: "Robin Sharma",
  },
  {
    quote:
      "The more we value things outside our control, the less control we have.",
    author: "Epictetus, Discourses IV, 4.23",
  },
  {
    quote:
      "The more you seek the uncomfortable, the more you will become comfortable.",
    author: "Conor McGregor",
  },
  {
    quote: "The most courageous act is still to think for yourself. Aloud.",
    author: "Coco Chanel",
  },
  {
    quote:
      "The most damaging phrase in the language is, It's always been done that way.",
    author: "Rear Admiral Grace Hopper",
  },
  {
    quote:
      "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka' but 'That's funny...'",
    author: "Isaac Asimov",
  },
  {
    quote:
      "The most important decision we make is wheter we believe we live in a friendly or hostile universe.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The most important reason to live in the moment is nothing lasts forever. Enjoy the moment while it's in front of you. Be present. Accept life for what it is: a finite span of time with infinite possibilities.",
    author: "Joshua Fields Millburn",
  },
  {
    quote:
      "The most powerful person in the world is the storyteller. The storyteller sets the vision, values and agenda of an entire generation that is to come.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The Muslims of al-Andalus had nothing to learn from their Christian neighbours and were incurious about them. Geographers' accounts of Christian Spain tended to be cursory in the extreme: it was cold, the inhabitants were barbarians who ate pigs, you could get slaves there - that was about the sum of it.",
    author: "Richard Fletcher, Moorish Spain",
  },
  {
    quote:
      "Then in 1888 came the publication of Denton's history of England in the fifteenth century. This was a masterpiece of egregious perversity, depicting the later Middle Ages as a culminating period of ruinous taxation, iniquitous labour laws, demoralizing pestilences, and lavish dissipation of national resources upon violent and embittered domestic feuds and futile and indecisive foreign wars. The credulity of even the most undiscriminating reader was taxed to a degree by a portrayal in which horror succeeded upon cataclysm, in a thickening atmosphere of crime and terror, want, degradation, and wretchedness.",
    author: "A. R. Bridbury",
  },
  {
    quote: "The obstacle is the way.",
    author: "Ryan Holiday",
  },
  {
    quote: "The only constant in the world of hi-tech is change.",
    author: "Mark Ward",
  },
  {
    quote:
      "The only problems we can really solve in a satisfactory manner are those that finally admit a nicely factored solution.",
    author: "E. W. Dijkstra, The humble programmer",
  },
  {
    quote:
      "The only thing a man should ever be 100% convinced of is his own ignorance.",
    author: "DJ MacLean",
  },
  {
    quote:
      "The only thing you can control is the thought you are having right now. Make it calm, clear and simple. Make it your superpower.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
    author: "Arthur C. Clarke",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The operations of the will are in our power; not in our power are the body, the body's parts, property, parents, siblings, children, country or friends.",
    author: "Epictetus, Discourses I, 22.10",
  },
  {
    quote: "The opposite of love is not hate, it is indifference.",
    author: "Elie Wiesel",
  },
  {
    quote:
      "The ordinary objects of human endeavour – property, outward success, luxury – have always seemed to me contemptible.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The others, step by step, will follow\n The living imprint of your feet;\nBut you yourself must not distinguish\n Your victory from your defeat.\n\nAnd never for a single moment\nBetray your credo or pretend,\nBut be alive-this only matters-\nAlive and burning to the end.",
    author: "Boris Pasternak",
  },
  {
    quote:
      "The pagans were incensed at the rashness of a recent and obscure sect, which presumed to accuse their countrymen of error, and to devote their ancestors to eternal misery.",
    author: "Gibbon, The Decline and Fall of the Roman Empire",
  },
  {
    quote:
      "The pain and boredom we experience in the initial stage of learning a skill toughens our minds.",
    author: "Robert Greene",
  },
  {
    quote: "The path from good to evil goes through bogus.",
    author: "Tara Ploughman",
  },
  {
    quote: "The path of least resistance is a terrible teacher.",
    author: "Ryan Holiday",
  },
  {
    quote:
      "The path to success will leave you callused, bruised, and very tired. It will also leave you empowered.",
    author: "David Goggins",
  },
  {
    quote:
      "The people can always be brought to the bidding of the leaders. That is easy. All you have to do is tell them they are being attacked, and denounce the pacifists for lack of patriotism, and exposing the country to greater danger.",
    author: "Goering at the Nuremberg Trials",
  },
  {
    quote:
      "The perfection of moral character consists in this, in passing every day as if it were the last, and in being neither violently excited nor torpid nor playing the hypocrite.",
    author: "Marcus Aurelius, Meditations, VII.69",
  },
  {
    quote:
      "The phrase that I use the most to myself in my head is one word: accept.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "The population is made up of four types of people: A small number hunt witches. A large number go along with the hunt. A larger number are silent. A tiny number oppose it. The final group — as if by magic — become witches.",
    author: "Bret Weinstein",
  },
  {
    quote:
      "The power of accurate observation is commonly called cynicism by those who have not got it.",
    author: "George Bernard Shaw",
  },
  {
    quote:
      "The power of instruction is seldom of much efficacy except in those happy dispositions where it is almost superfluous.",
    author: "Gibbon",
  },
  {
    quote:
      "The present is the only thing of which a man can be deprived, if it is true that this is the only thing which he has, and that a man cannot lose something he does not already possess.",
    author: "Marcus Aurelius, Meditations II.14",
  },
  {
    quote:
      "The president was visiting NASA headquarters and stopped to talk to a man who was holding a mop. “And what do you do?” he asked. The man, a janitor, replied, “I’m helping to put a man on the moon, sir.”",
    author: "The little book of leadership",
  },
  {
    quote:
      "The problem is that Microsoft just has no taste. And I don't mean that in a small way, I mean that in a big way.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The problem is that small examples fail to convince, and large examples are too big to follow.",
    author: "Steve Yegge.",
  },
  {
    quote:
      "The programmer must seek both perfection of part and adequacy of collection.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      "The proof is by reductio ad absurdum, and reductio ad absurdum, which Euclid loved so much, is one of a mathematician’s finest weapons. It is a far finer gambit than any chess gambit: a chess player may offer the sacrifice of a pawn or even a piece, but a mathematician offers the game.",
    author: "G. H. Hardy",
  },
  {
    quote:
      "The public should always be wondering how it is possible to give so much for the money.",
    author: "Henry Ford",
  },
  {
    quote:
      "The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise.",
    author: "Edsger Dijkstra",
  },
  {
    quote:
      "The Pythagoreans bid us in the morning look to the heavens that we may be reminded of those bodies that continually do the same things and in the same manner perform their work, and also be reminded of their purity and nudity. For there is no veil over a star.",
    author: "Marcus Aurelius, Meditations, XI.27",
  },
  {
    quote:
      "The qualities that made for success in a fighter-pilot seemed to be just those sturdy qualities that made for success in other professions; observation, initiative, determination, courage, including the courage to run away. In course of time it appeared that men who had a private axe to grind beyond the public axe of the King's enemies were especially successful.",
    author: "Jim Bailey, The Sky Suspended",
  },
  {
    quote:
      "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.",
    author: "Edsger W. Dijkstra",
  },
  {
    quote: "The rational animal is consequently also a social animal.",
    author: "Marcus Aurelius, Meditations, X.2",
  },
  {
    quote:
      "There are many ways to avoid success in life, but the most sure-fire just might be procrastination.",
    author: "Hara Estroff Marano.",
  },
  {
    quote:
      "There are some things you can't share without ending up linking each other, and knocking out a twelve-foot mountain troll is one of them.",
    author: "Harry Potter and the Philosopher's Stone by J.K. Rowling",
  },
  {
    quote:
      "There are times when even to live is an act of bravery. So there is the comforting thing about extremities of pain: if you feel it too much you are bound to stop feeling it. The love of power or money or luxurious living are not the only things which are guided by popular thinking. We take our cue from people's thinking even in the way we feel pain. Another thing which will help you is to turn your mind to other thoughts and that way get away from your suffering. Call to mind things which you have done that have been upright or courageous; run over in your mind the finest parts you have played. \"But my illness has taken me away from my duties and won't allow me to achieve anything.\" It is your body, not your mind as well, that is in the grip of ill health.",
    author: "Seneca, Letter LXXVIII",
  },
  {
    quote:
      "There are two of the most immediately useful thoughts you will dip into. First that things cannot touch the mind: they are external and inert; anxieties can only come from your internal judgement. Second, that all these things you see will change almost as you look at them, and then will be no more. Constantly bring to mind all that you yourself have already seen changed. The universe is change: life is judgement.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "There are two ways of constructing a software design; one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
    author: "C. A. R. Hoare",
  },
  {
    quote:
      "The reason to do animation is caricature. Good caricature picks out the essense of the statement and removes everything else. It's not simply about reproducing reality; It's about bumping it up.",
    author: "Brad Bird, writer and director, The Incredibles",
  },
  {
    quote:
      "The reason why we have two ears and only one mouth is so we might listen more and talk less.",
    author: "Zeno of Citium",
  },
  {
    quote:
      "There is a difference between knowing the path and walking the path.",
    author: "Morpheus, The Matrix",
  },
  {
    quote:
      "There is no beginning and there is no end to time. There is only your perception of time.",
    author: "Zen proverb",
  },
  {
    quote:
      "There is no better way to grow as a person than to do something you hate every day.",
    author: "David Goggins",
  },
  {
    quote: "There is no cure for birth and death save to enjoy the interval.",
    author: "Unknown",
  },
  {
    quote: "There is no genius without a touch of madness.",
    author: "Seneca",
  },
  {
    quote:
      "There is no man so fortunate that there shall not be by him when he is dying some who are pleased with what is going to happen.",
    author: "Marcus Aurelius, Meditations, X.36",
  },
  {
    quote:
      "There is no reason for any individual to have a computer in his home.",
    author: "Ken Olson, President, Digital Equipment Corporation, 1977",
  },
  {
    quote:
      "There is nothing dangerous in a man's having as much power as he likes if he takes the view that he has power to do only what it is his duty to do.",
    author: "Seneca, Letter XC",
  },
  {
    quote:
      "There is nothing more precious than trust. Low trust environments are full of friction and inefficiency. Every interaction is a fierce negotiation. Trust makes a marriage warm and a nation wealthy.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "There is one meaning [for static in C]: a global variable that is invisible outside the current scope, be it a function or a file.",
    author: "Paolo Bonzini",
  },
  {
    quote:
      "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
    author: "Epictetus",
  },
  {
    quote: "There really is no learning without doing.",
    author: "Roger Schank, Engines for Education",
  },
  {
    quote: "There's beauty in everything, just not everyone sees it.",
    author: "Park Jimin",
  },
  {
    quote:
      "There's no difference between the one and the other - you didn't exist and you won't exist - you've got no concern with either period. As it is with a play, so it is with life - what matters is not how long the acting lasts, but how good it is. It is not important at what point you stop. Stop wherever you will - only make sure that you round it off with a good ending.",
    author: "Seneca, Letter LXXVII",
  },
  {
    quote:
      "There were two vices much blacker and more serious than the rest: lack of persistence and lack of self-control ... persist and resist.",
    author: "Epictetus, Fragments 10",
  },
  {
    quote:
      "There will come a time in the distant future, where no one will know who you were, no one will know of your existence and contributions, no one will know your pain and suffering, and your happiness. Time will wipe away both men and the memories of men. Let yourself be free.",
    author: "@LifeMathMoney",
  },
  {
    quote: "The robbed that smiles steals something from the thief.",
    author: "Othello",
  },
  {
    quote:
      "The secret of all victory lies in the organization of the non-obvious.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.",
    author: "Socrates",
  },
  {
    quote:
      "The sons of Hermes love to play,\nAnd only do their best when they\nAre told they oughtn't;\nApollo's children never shrink\nFrom boring jobs but have to think\nTheir work important.",
    author: "W. H. Auden, Under Which Lyre",
  },
  {
    quote: "The thicker the skin, the happier the man.",
    author: "@LifeMathMoney",
  },
  {
    quote:
      "The things that are essential are acquired with little bother; it is the luxuries that call for toil and effort.",
    author: "Seneca, Letter XC",
  },
  {
    quote:
      "The things that conduce in any way to the convenience of life, and of which fortune gives an abundant supply, [my adoptive father] used without arrogance and without excusing himself.",
    author: "Marcus Aurelius, Meditations I.16",
  },
  {
    quote:
      "The things you own end up owning you. It's only after you lose everything that you're free to do anything.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      "The three chief virtues of a programmer are: Laziness, Impatience and Hubris.",
    author: "Larry Wall (Programming Perl)",
  },
  {
    quote:
      "The tranquility that comes when you stop caring what they say. Or think, or do. Only what you do.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "The trick to education is to teach in such a way that people only find out they're learning when it's too late.",
    author: 'Michael "Vsauce" Stevens',
  },
  {
    quote: "The trouble is, you think you have time.",
    author: "probably Buddha",
  },
  {
    quote:
      "The trouble with the world is that the stupid are always cocksure and the intelligent are always filled with doubt.",
    author: "Bertrand Russell",
  },
  {
    quote: "The true hero is one who conquers his own anger and hatred.",
    author: "Dalai Lama",
  },
  {
    quote:
      "The true man is revealed in difficult times. So when trouble comes, think of yourself as a wrestler whom God, like a trainer, has paired with a tough young buck. For what purpose? To turn you into Olympic-class material. But this is going to take some sweat to accomplish.",
    author: "Epictetus, Discourses I, 24.1-2",
  },
  {
    quote:
      "The truth is that our finest moments are most likely to occur when we are feeling deeply uncomfortable, unhappy, or unfulfilled. For it is only in such moments, propelled by our discomfort, that we are likely to step out of our ruts and start searching for different ways or truer answers. M.",
    author: "Scott Peck",
  },
  {
    quote:
      "The ultimate power in life is to be completely self-reliant, completely yourself.",
    author: "Robert Greene",
  },
  {
    quote:
      "The universe has been around for a long time, and the universe is a very, very large place. If you'll study even the smallest bit of science, for all practical purposes we are nothing.",
    author: "Naval Ravikant",
  },
  {
    quote: "The universe is transformation: life is opinion.",
    author: "Marcus Aurelius, Meditations IV.3",
  },
  {
    quote:
      "The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense.",
    author: "E.W. Dijkstra",
  },
  {
    quote:
      'The venerable master Qc Na was walking with his student, Anton. Hoping to prompt the master into a discussion, Anton said "Master, I have heard that objects are a very good thing - is this true?" Qc Na looked pityingly at his student and replied, "Foolish pupil - objects are merely a poor man\'s closures." Chastised, Anton took his leave from his master and returned to his cell, intent on studying closures. He carefully read the entire "Lambda: The Ultimate..." series of papers and its cousins, and implemented a small Scheme interpreter with a closure-based object system. He learned much, and looked forward to informing his master of his progress. On his next walk with Qc Na, Anton attempted to impress his master by saying "Master, I have diligently studied the matter, and now understand that objects are truly a poor man\'s closures." Qc Na responded by hitting Anton with his stick, saying "When will you learn? Closures are a poor man\'s object." At that moment, Anton became enlightened.',
    author: "Anton van Straaten (Na = Norman Adams, Qa = Christian Queinnec)",
  },
  {
    quote:
      'The very word "secrecy" is repugnant in a free and open society; and we are as a people inherently and historically opposed to secret societies, to secret oaths and to secret proceedings. We decided long ago that the dangers of excessive and unwarranted concealment of pertinent facts far outweighed the dangers which are cited to justify it. Even today, there is little value in opposing the threat of a closed society by imitating its arbitrary restrictions. Even today, there is little value in insuring the survival of our nation if our traditions do not survive with it.',
    author: "John F. Kennedy",
  },
  {
    quote: "The way to get started is to quit talking and start doing.",
    author: "Walt Disney",
  },
  {
    quote: "The whole future lies in uncertainty: live immediately.",
    author: "Seneca",
  },
  {
    quote: "The willing are led by fate, the reluctant dragged.",
    author: "Cleanthes",
  },
  {
    quote:
      "The wise man is neither raised up by prosperity nor cast down by adversity; for always he has striven to rely predominantly on himself, and to derive all joy from himself.",
    author: "Seneca",
  },
  {
    quote: "The wise man listens to meaning, the fool only gets the noise.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "The wise man needs nothing and yet he can make good use of anything, whereas the fool 'needs' countless things but can make good use of none of them. Donald J.",
    author: "Robertson",
  },
  {
    quote:
      "The wonderful and frustrating thing about understanding yourself is that nobody can do it for you.",
    author: "BetterExplained.com",
  },
  {
    quote:
      "The Work Begins Anew, The Hope Rises Again, And The Dream Lives On.",
    author: "Ted Kennedy",
  },
  {
    quote:
      "The work of philosophy is simple and modest. Do not draw me aside into pomposity.",
    author: "Marcus Aurelius, Meditations, IX.29",
  },
  {
    quote:
      "The world might call you a pessimist. Who cares? It's far better to seem like a downer than to be blindsided or caught off guard.",
    author: "Ryan Holiday",
  },
  {
    quote:
      "The world will not be destroyed by evil, but by those who watch it and refuse to fix it.",
    author: "Albert Einstein",
  },
  {
    quote:
      'They are certainly moved toward things because they suppose them to be suitable to their nature and profitable to them. "But it is not so." Teach them then, and show them without being angry.',
    author: "Marcus Aurelius, Meditations VI.27",
  },
  {
    quote:
      "Things do not touch the soul, for they are external and remain immovable; so our perturbations come only from our inner opinions.",
    author: "Marcus Aurelius, Meditations IV.3",
  },
  {
    quote:
      "Things stand outside of us, themselves by themselves, neither knowing anything of themselves nor expressing any judgment. What is it, then, that passes judgment on them? The ruling faculty.",
    author: "Marcus Aurelius, Meditations, IX.15",
  },
  {
    quote:
      "Things which matter most must never be at the mercy of things which matter least.",
    author: "Johann Wolfgang Von Goethe (1749-1832)",
  },
  {
    quote:
      'Things you won\'t say on your deathbed: "I wish I paid more attention to what other people think".',
    author: "Johnny Uzan",
  },
  {
    quote:
      "Think continually that all kinds of men, pursuits, and nations are dead.",
    author: "Marcus Aurelius, Meditations VI.47",
  },
  {
    quote: "Think long term. Execute short term. Experience now.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "Think not so much of what you lack as of what you have: but of the things that you have, select the best, and then reflect how eagerly you would have sought them if you did not have them. At the same time, however, take care that you do not through being so pleased with them accustom yourself to overvalue them, so as to be disturbed if you should ever not have them.",
    author: "Marcus Aurelius, Meditations, VII.27",
  },
  {
    quote:
      "Think of the universal substance, of which you have a very small portion; and of universal time, of which a short and indivisible interval has been assigned to you; and of that which is fixed by destiny, and how small a part of it you are.",
    author: "Marcus Aurelius, Meditations V.24",
  },
  {
    quote:
      "This challenge, viz. the confrontation with the programming task, is so unique that this novel experience can teach us a lot about ourselves. It should deepen our understanding of the processes of design and creation, it should give us better control over the task of organizing our thoughts. If it did not do so, to my taste we should no deserve the computer at all! It has allready taught us a few lessons, and the one I have chosen to stress in this talk is the following. We shall do a much better programming job, provided that we approach the task with a full appreciation of its tremenduous difficulty, provided that we stick to modest and elegant programming languages, provided that we respect the intrinsec limitations of the human mind and approach the task as Very Humble Programmers.",
    author: "E. W. Dijkstra, The humble programmer",
  },
  {
    quote:
      "This is an era of universal hyperbole. Every day delivers a new banality disguised as an emergency. Distrust your first reactions. Begin with the assumption that you are overreacting. Conserve your emotional energies for your real concerns.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "This is how I came to lose my lamp: the thief was better than I am in staying awake. But he acquired the lamp at a price: he became a thief for its sake, for its sake, he lost his ability to be trusted, for a lamp he became a brute. And he imagined he came out ahead!",
    author: "Epictetus, Discourses I, 29.21",
  },
  {
    quote:
      "This is the mark of perfection of character—to spend each day as if it were your last, without frenzy, laziness, or any pretending.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "This is why we need to envisage every possibility and to strengthen the spirit to deal with the things which may conceivably come about. Rehearse them in your mind: exile, torture, war, shipwreck. Misfortune may snatch you away from your country… If we do not want to be overwhelmed and struck numb by rare events as if they were unprecedented ones; fortune needs envisaging in a thoroughly comprehensive way.",
    author: "Seneca",
  },
  {
    quote:
      "This may be the last generation that has a powerful tool like the Internet, and the focused attention span to do deep work.",
    author: "Naval",
  },
  {
    quote:
      "This presumption that you possess knowledge of any use has to be dropped before you approach philosophy – just as if we were enrolling in a school of music or mathematics.",
    author: "Epictetus, Discourses II, 17.39",
  },
  {
    quote:
      "This, then, is consistent with the character of a reflecting man, to be neither careless nor impatient nor contemptuous with respect to death, but to wait for it as one of the operations of nature.",
    author: "Marcus Aurelius, Meditations, IX.3",
  },
  {
    quote:
      "This, then, is the beginning of philosophy – an awareness of one's own mental fitness.",
    author: "Epictetus, Discourses I, 26.15",
  },
  {
    quote:
      "Those who rather pursue posthumous fame do not consider that the men of tomorrow will be exactly like these whom they cannot bear now; and both are mortal.",
    author: "Marcus Aurelius, Meditations, VIII.44",
  },
  {
    quote:
      "Thus, programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Alan J. Perlis",
  },
  {
    quote: "Timendi causa est nescire — Ignorance is the cause of fear.",
    author: "Seneca",
  },
  {
    quote: "Time spent has nothing to do with job done.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Tis not in mortals to command success; but we'll do more, Sempronius, we'll deserve it.",
    author: "Addison",
  },
  {
    quote:
      "To avoid pain, they avoid pleasure.\n To avoid death, they avoid life.",
    author: "Osho",
  },
  {
    quote:
      "To bear trials with a calm mind robs misfortune of its strength and burden.",
    author: "Seneca",
  },
  {
    quote: "To be calm is the highest achievement of the self.",
    author: "Zen proverb",
  },
  {
    quote: "To be evenminded is the greatest virtue.",
    author: "Heraclitus",
  },
  {
    quote:
      "...to be feared is to fear: no one has been able to strike terror into others and at the same time enjoy peace of mind himself.",
    author: "Seneca, Letter CIV",
  },
  {
    quote:
      "To be stoic is not to be emotionless, but to remain unaffected by your emotions.",
    author: "James Pierce",
  },
  {
    quote:
      "To be sure, external things of whatever kind require skill in their use, but we must not grow attached to them; whatever they are, they should only serve for us to show how skilled we are in our handling of them.",
    author: "Epictetus, Discourses II, 5.21",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "To care for all men is according to man's nature; and man should value the opinion only of those who openly live according to nature.",
    author: "Marcus Aurelius, Meditations III.4",
  },
  {
    quote: "To complain is always nonacceptance of what is.",
    author: "Eckhart Tolle",
  },
  {
    quote:
      "Today I have got out of all trouble, or rather I have cast out all trouble, for it was not outside, but within and in my opinions.",
    author: "Marcus Aurelius, Meditations, IX.13",
  },
  {
    quote:
      "Today people care only for academic discussion, nothing beyond that. But I'm presenting to you the real athlete, namely the one training to face off against the most formidable of impressions.",
    author: "Epictetus, Discourses II, 18.26-27",
  },
  {
    quote:
      "To do something well you have to love it. So to the extent you can preserve hacking as something you love, you're likely to do it well. Try to keep the sense of wonder you had about programming at age 14. If you're worried that your current job is rotting your brain, it probably is.",
    author: "Paul Graham.",
  },
  {
    quote:
      "To expect bad men not to do wrong is madness, for he who expects this desires an impossibility. But to allow men to behave so to others, and to expect them not to do you any wrong, is irrational and tyrannical.",
    author: "Marcus Aurelius, Meditations, XI.18",
  },
  {
    quote:
      "To follow the path:\nlook to the master,\nfollow the master,\nwalk with the master,\nsee through the master,\nbecome the master.",
    author: "Modern zen Poem",
  },
  {
    quote:
      "Together with intelligence, self-control turns out to be the best predictor of a successful and satisfying life.",
    author: "Steven Pinker",
  },
  {
    quote:
      "To have contemplated human life for forty years is the same as to have contemplated it for ten thousand years. For what more will you see?",
    author: "Marcus Aurelius, Meditations, VII.49",
  },
  {
    quote: "To iterate is human, to recurse divine.",
    author: "L. Peter Deutsch",
  },
  {
    quote: "To love only what happens, what was destined. No greater harmony.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "To make a goal of comfort or happiness has never appealed to me; a system of ethics built on this basis would be sufficient only for a herd of cattle.",
    author: "Unknown",
  },
  {
    quote:
      "To my own free will the free will of my neighbor is just as indifferent as his poor breath and flesh.",
    author: "Marcus Aurelius, Meditations, VIII.56",
  },
  {
    quote:
      "To not be distracted by the darkness of others, to head towards the light. To be good without hesitation, even when other people are not. That's our job.",
    author: "The Daily Stoic",
  },
  {
    quote:
      "Too many people believe that everything must be pleasurable in life.",
    author: "Robert Greene",
  },
  {
    quote:
      "To play a wrong note is insignificant; to play without passion is inexcusable.",
    author: "Ludwig van Beethoven",
  },
  {
    quote:
      "To rest in these principles only: the one, that nothing will happen to me which is not conformable to the nature of the universe; and the other, that it is in my power never to act contrary to my god and daimon: for there is no man who will compel me to this.",
    author: "Marcus Aurelius, Meditations V.10",
  },
  {
    quote:
      "To solve your problems you must learn new skills, adapt new thought patterns, and become a different person than you were before that problem. God has crafted you for success. In the middle of every adversity lie your best opportunities. Discover it, build upon it and move forward in your journey to live an extraordinary life. You owe it to yourself to live a great life. Don’t let negative thoughts pull you down. Be grateful and open to learn and grow.",
    author: "http://secretsofstudying.com/",
  },
  {
    quote:
      "To the constant beginners who sing off-key against the beat. To those unfamiliar with convention, unmoved by rules, and reborn with every new discovery. Those open to daydreams and night dreams and visions and mirages. Who can see the millions of shades of green in a field of grass. Whose days are filled with mysteries that cannot be solved with facts. You are more powerful than you think... and you are welcome here.",
    author: 'Apple "Join us. Be you." ad',
  },
  {
    quote:
      "To the optimist, the glass is half full. To the pessimist, the glass is half empty. To the engineer, the glass is twice as big as it needs to be.",
    author: "author unknown (quoted in 'Robust Systems', Gerald Jay Suseman)",
  },
  {
    quote:
      "To the rational animal the same act is at once according to nature and according to reason.",
    author: "Marcus Aurelius, Meditations, VII.11",
  },
  {
    quote:
      "Trade money for time, not time for money. You're going to run out of time first.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Training research shows that if you get speed now you can get quality later. But if you don't get speed you will never get quality in the long run.",
    author: "Philip Greenspun",
  },
  {
    quote:
      "[Treat] unenlightened souls with sympathy and indulgence, remembering that they are ignorant or mistaken about what's most important. Never be harsh, remember Plato's dictum: \"Every soul is deprived of the truth against its will.\"",
    author: "Epictetus, Discourses II, 22.36",
  },
  {
    quote:
      "True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing.",
    author: "Seneca",
  },
  {
    quote:
      "True rewards – wealth, knowledge, love, fitness, and equanimity – come from ignoring others and improving ourselves.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "True stoics don't care about the outcome. They just care to give their best shot, right here, right now.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "True success is achieved by stretching oneself, learning to feel comfortable being uncomfortable.",
    author: "Ken Poirot",
  },
  {
    quote:
      "True will is quiet humility, resilience, and flexibility; the other kind of will is weakness disguised by bluster and ambition.",
    author: "Ryan Holiday",
  },
  {
    quote:
      "Try to avoid making important decisions when you're angry. Acknowledge the emotion. Recognize that it clouds your judgement. Remember that angry people tend to sacrifice the long-term good in response to short-term provocation.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "Two centuries later a most clear-sighted historian of the Second Crusade can find space in a short narrative to record on many occasions the flattery, perjury, perfidy, blasphemy, heresy, arrogance, servility, deceit, pride, cunning and infidelity of the Greeks.",
    author: "R. W. Southern, The Making of the Middle Ages",
  },
  {
    quote:
      "Two people should stay together if together they are better people than they would be individually.",
    author: "?",
  },
  {
    quote:
      "Two possibilities exist: either we are alone in the universe, or we are not. Both are equally terrifying.",
    author: "Arthur C. Clarke",
  },
  {
    quote:
      "Two things define you, your patience when you have nothing, and your attitude when you have everything.",
    author: "unknown",
  },
  {
    quote:
      "Uncertainty is an uncomfortable position. But certainty is an absurd one.",
    author: "Voltaire",
  },
  {
    quote:
      'Under no circumstances ever say "I have lost something," only "I returned it."',
    author: "Epictetus, Enchiridion 11",
  },
  {
    quote:
      "Understand: a critic doesn't disturb you, it disturbs your ego. You want to know the truth. Your ego is scared of it.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "Understanding why C++ is the way it is helps a programmer use it well. A deep understanding of a tool is essential for an expert craftsman.",
    author: "Bjarne Stroustrap",
  },
  {
    quote:
      "Understand: in life as in war, nothing ever happens just as you expect it to.",
    author: "Robert Greene",
  },
  {
    quote:
      "Understand: people will constantly attack you in life. One of their main weapons will be to instill in you doubts about yourself. They will often disguise this as their objective opinion, but invariably it has a political purpose – they want to keep you down.",
    author: "Robert Greene",
  },
  {
    quote: "Understand what words you use first, then use them.",
    author: "Epictetus, Discourses III, 23.18",
  },
  {
    quote:
      "Understand what you can control and what you can't. Forget about the things you can't control and put that energy into the things you can control.",
    author: "Shane Parrish",
  },
  {
    quote: "Unfollow the mind. Follow the heart. Mute the masses.",
    author: "@TheAncientSage",
  },
  {
    quote: "Unlike energy, creativity grows the more you use it.",
    author: "Brainiac on Twitter",
  },
  {
    quote:
      "Until we have begun to go without them, we fail to realize how unnecessary many things are. We've been using them not because we needed them but because we had them.",
    author: "Seneca",
  },
  {
    quote: "Very little indeed is necessary for living a happy life.",
    author: "Marcus Aurelius, Meditations, VII.67",
  },
  {
    quote:
      "Very little is needed for everything to be upset and ruined, only a slight lapse in reason. It's much easier for a mariner to wreck his ship than it is for him to keep it sailing safely; all he has to do is head a little more upwind and disaster is instantaneous. In fact, he does not have to do anything: a momentary loss of attention will produce the same result.",
    author: "Epictetus, Discourses IV, 3.4-5",
  },
  {
    quote:
      "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "(1.00)³⁶⁵ = 1.00\n(1.01)³⁶⁵ = 37.7\nVery small steps are better than doing nothing at all.",
    author: "(source unknown)",
  },
  {
    quote: "Vibes speak louder than words",
    author: "Probably Gabby Bernstein",
  },
  {
    quote:
      "Vigorous writing is concise. A sentence should contain no unnecessary words, a paragraph no unnecessary sentences, for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts. This requires not that the writer make all sentences short or avoid all detail and treat subjects only in outline, but that every word tell.",
    author: "William Strunk, Jr. (The Elements of Style)",
  },
  {
    quote: "Waste no more time arguing what a good man should be, be one.",
    author: "Marcus Aurelius",
  },
  {
    quote: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  {
    quote:
      "We act as though comfort and luxury were the chief requirements of life, when all that we need to make us happy is something to be enthusiastic about.",
    author: "Charles Kingsley",
  },
  {
    quote: "Weak men act to satisfy their needs, stronger men their duties.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "Wealth consists not in having great possessions, but in having few wants.",
    author: "Epictetus",
  },
  {
    quote:
      "We always want the future to be better than the past, a future that is exciting and one that the people want to live in.",
    author: "Elon Musk",
  },
  {
    quote:
      "We always want to make sure that our machines haven't by accident learned something that isn't what we intended.",
    author: "Susan Wojcicki",
  },
  {
    quote:
      "We are all agreed that your theory is crazy. The question that divides us is whether it is crazy enough to have a chance of being correct.",
    author: "Neils Bohr",
  },
  {
    quote:
      "We are bacteria to the universe. We're basically monkeys on a small rock orbiting a small backwards star in a huge galaxy, which is in an absolutely staggeringly gigantic universe, which itself may be part of a gigantic multiverse.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "We are quick to forget that just being alive is an extraordinary piece of good luck, a remote event, a chance occurrence of monstrous proportions.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "We are responsible for some things, while there are others for which we cannot be held responsible.",
    author: "Epictetus, Enchiridion 1.1",
  },
  {
    quote:
      "We are the masters of the unsaid words, but slaves of those we let slip out.",
    author: "Churchill",
  },
  {
    quote:
      "We are the sum of our behaviours; excellence therefore is not an act but a habit.",
    author: "Aristotle.",
  },
  {
    quote:
      "Wear your best for your execution and stand dignified. Your last recourse against randomness is how you act — if you can’t control outcomes, you can control the elegance of your behaviour. You will always have the last word.",
    author: "Nassim Taleb",
  },
  {
    quote:
      'We control complexity by building abstractions that hide details when appropriate. We control complexity by establishing conventional interfaces that enable us to construct systems by combining standard, well-understood pieces in a "mix and match" way. We control complexity by establishing new languages for describing a design, each of which emphasizes particular aspects of the design and deemphasizes others.',
    author: "Alan J. Perlis",
  },
  {
    quote:
      "We dance for laughter, we dance for tears, we dance for madness, we dance for fears, we dance for hopes, we dance for screams, we are the dancers, we create the dreams.",
    author: "Albert Einstein",
  },
  {
    quote:
      "We define ourselves far too often by our past failures. That's not you. You are this person right now. You're the person who has learned from those failures.",
    author: "Joe Rogan",
  },
  {
    quote:
      "We didn't realize we were making memories, we just knew we were having fun.",
    author: "Winnie the Pooh",
  },
  {
    quote:
      "We don't read and write poetry because it's cute. We read and write poetry because we're members of the human race and the human race is filled with passion.",
    author: "Dead Poet's Society",
  },
  {
    quote:
      "We fail to realize that mastery is not about perfection. It's about a process, a journey. The master is the one who stays on the path day after day, year after year. The master is the one who is willing to try, and fail, and try again, for as long as he or she lives.",
    author: "George Leonard, Mastery.",
  },
  {
    quote:
      "We find comfort among those who agree with us – growth among those who don't. Frank A.",
    author: "Clark",
  },
  {
    quote: "We have art in order not to die from the truth.",
    author: "Nietzsche",
  },
  {
    quote:
      "We humans are unhappy in large part because we are insatiable; after working hard to get what we want, we routinely lose interest in the object of our desire. Rather than feeling satisfied, we feel a bit bored, and in response to this boredom, we go on to form new, even grander desires. William B.",
    author: "Irvine",
  },
  {
    quote:
      "We know how to analyse arguments, and have the skill a person needs to evaluate competent logicians. But in life what do I do? What today I say is good tomorrow I will swear is bad. And the reason is that, compared to what I know about syllogisms, my knowledge and experience of life fall far behind.",
    author: "Epictetus, Discourses II, 3.4-5",
  },
  {
    quote:
      "Welcome if it comes. Let go if it goes. Chase nothing. Cling to nothing. Remain unconcerned.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "Well, if you talk about programming to a group of programmers who use the same language, they can become almost evangelistic about the language. They form a tight-knit community, hold to certain beliefs, and follow certain rules in their programming. It’s like a church with a programming language for a Bible.",
    author:
      "Gary Kildall (inventor of CP/M, one of the first OS for the micro).",
  },
  {
    quote:
      "Well then. How could you possibly live without automated refactoring tools? How else could you coordinate the caterpillar-like motions of all Java’s identical tiny legs, its thousands of similar parts? I’ll tell you how: Ruby is a butterfly.",
    author: "Stevey, Refactoring Trilogy, Part 1.",
  },
  {
    quote:
      '"Well, whatever you may say, I know good from bad, and have an idea of the good." You have one, I allow. "And I put it into practice." You use it in specific instances, yes. "And I use it correctly." Well, that\'s the crux, because this is where opinions become an issue.',
    author: "Epictetus, Discourses II, 11.7-8",
  },
  {
    quote:
      '"Well, what will my profession in the community be?" Whatever position you are equipped to fill, so long as you preserve the man of trust and integrity.',
    author: "Epictetus, Enchiridion 24.4",
  },
  {
    quote:
      "We must be willing to roll the dice and lose. Prepare, at the end of the day, for none of it to work.",
    author: "Ryan Holiday",
  },
  {
    quote:
      "We must indulge the mind and from time to time allow it the leisure which is its food and strength. We must go for walks out of doors, so that the mind can be strengthened by a clear sky and plenty of fresh air.",
    author: "Seneca",
  },
  {
    quote: "We must remember: There is no easy way.",
    author: "Ryan Holiday",
  },
  {
    quote:
      "We must take a higher view of all things, and bear with them more easily: it better becomes a man to scoff at life than to lament over it.",
    author: "Seneca",
  },
  {
    quote: "We need reasons to wake up in the morning.",
    author: "Elon Musk",
  },
  {
    quote: "We, not externals, are the masters of our judgements.",
    author: "Epictetus, Discourses I, 11.37",
  },
  {
    quote:
      "We now come to the decisive step of mathematical abstraction: we forget about what the symbols stand for. ...[The mathematician] need not be idle; there are many operations which he may carry out with these symbols, without ever having to look at the things they stand for.",
    author: "Hermann Weyl, The Mathematical Way of Thinking",
  },
  {
    quote:
      "We really have to get over the idea that some stuff is just worth knowing even if you never do anything with it. Human memories happily erase stuff that has no purpose, so why try to fill up children's heads with such stuff?",
    author: "Roger Schank, Engines for Education",
  },
  {
    quote: "We're even wrong about which mistakes we're making.",
    author: "Carl Winfeld",
  },
  {
    quote:
      "We remember what we learn when we care about performing better and when we believe that what we have been asked to do is representative of reality.",
    author: "Roger Schank, Engines for Education",
  },
  {
    quote:
      "We're not really here that long, and we don't really matter that much. Nothing that we do lasts. Eventually, you will fade. Your works will fade. Your children will fade. Your thoughts will fade. These planets will fade. This sun will fade. It will all be gone.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "We should discipline ourselves in small things, and from there progress to things of greater value. If you have a headache, practise not cursing. Don't curse every time you have an earache. And I'm not saying that you can't complain, only don't complain with your whole being.",
    author: "Epictetus, Discourses I, 18.18-19",
  },
  {
    quote:
      "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil.",
    author: "Donald Knuth",
  },
  {
    quote:
      "We should love all our dear ones… but always with the thought that we have no promise that we may keep them forever—nay, no promise even that we may keep them for long.",
    author: "Seneca",
  },
  {
    quote:
      "We should not, like sheep, follow the herd of creatures in front of us, making our way where others go, not where we ought to go.",
    author: "Seneca",
  },
  {
    quote: "We suffer more in imagination than in reality",
    author: "Seneca",
  },
  {
    quote:
      "We tend to seek easy, single-factor explanations of success. For most important things, though, success actually requires avoiding many separate causes of failure.",
    author: "Jared Diamond",
  },
  {
    quote:
      'We use labels like "thief" and "robber" in connection with them, but what do these words mean? They merely signify that people are confused about what is good and what is bad. So should we be angry with them, or should we pity them instead?',
    author: "Epictetus, Discourses I, 18.3",
  },
  {
    quote:
      "We've all been raised on television to believe that one day we'd all be millionaires, and movie gods, and rock stars. But we won't. And we're slowly learning that fact. And we're very, very pissed off.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      "We will never become a truly paper-less society until the Palm Pilot folks come out with WipeMe 1.0.",
    author: "Andy Pierson",
  },
  {
    quote:
      "\"What about if someone threatens me with death, though; surely he compels me then?\" It isn't what you're threatened with – it's the fact that you prefer to do anything rather than die. It's your set of values that compelled you: will acting on will.",
    author: "Epictetus, Discourses I, 17.25-26",
  },
  {
    quote:
      "What, after all, are sighing and crying, except opinions? What is \"misfortune'? An opinion. And sectarian strife, dissension, blame and accusation, ranting and raving – they all are mere opinion, the opinion that good and bad lie outside us.",
    author: "Epictetus, Discourses III, 3.18-19",
  },
  {
    quote: 'What are the secret of success? -one word answer: "rational".',
    author: "Charlie Munger",
  },
  {
    quote:
      "What are we really doing when we throw away our innate faithfulness, to intrigue with our neighbour's wife? We are ruining and destroying – well, what? How about the man of trust, principle and piety that once was? And is that all? Aren't we also ruining the idea of neighbourliness, friendship and community? What position are we putting ourselves in? How am I supposed to deal with you now? As a neighbour? A friend? Some friend! A fellow citizen? But how can a fellow citizen like you be trusted?",
    author: "Epictetus, Discourses II, 4.2-3",
  },
  {
    quote:
      "What are you? A human being. If you think of yourself as a unit apart, then it is in accordance with your nature to live to old age, to be rich, and be healthy. But if your view of yourself involves being part of a whole, then, for the sake of the whole, circumstances may make it right for you to be sick, go on a dangerous journey, endure poverty, even die before your time.",
    author: "Epictetus, Discourses II, 5.25",
  },
  {
    quote:
      "What decides whether a sum of money is good? The money is not going to tell you; it must be the faculty that makes use of such impressions – reason.",
    author: "Epictetus, Discourses I, 1.5",
  },
  {
    quote:
      "What do Americans look for in a car? I've heard many answers when I've asked this question. The answers include excellent safety ratings, great gas mileage, handling, and cornering ability, among others. I don't believe any of these. That's because the first principle of the Culture Code is that the only effective way to understand what people truly mean is to ignore what they say. This is not to suggest that people intentionally lie or misrepresent themselves. What it means is that, when asked direct questions about their interests and preferences, people tend to give answers they believe the questioner wants to hear. Again, this is not because they intend to mislead. It is because people respond to these questions with their cortexes, the parts of their brains that control intelligence rather than emotion or instinct. They ponder a question, they process a question, and when they deliver an answer, it is the product of deliberation. They believe they are telling the truth. A lie detector would confirm this. In most cases, however, they aren't saying what they mean.",
    author: "The culture code.",
  },
  {
    quote:
      "What does all this mean? You have embarked, made the voyage, and come to the shore; get out. If indeed to another life, there is no want of gods, not even there. But if to a state without sensation, you will cease to be held by pains and pleasures, and to be a slave to the vessel.",
    author: "Marcus Aurelius, Meditations III.3",
  },
  {
    quote:
      'What does Socrates say? "One person likes tending to his farm, another to his horse; I like to daily monitor my self-improvement."',
    author: "Epictetus, Discourses III, 5.14",
  },
  {
    quote:
      "What else are tragedies but the ordeals of people who have come to value externals, tricked out in tragic verse?",
    author: "Epictetus, Discourses I, 4.26",
  },
  {
    quote:
      "Whatever anyone does or says, I'm bound to the good. Whatever anyone does or says, I must be what I am and show my true colors.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      'Whatever any one does or says, I must be good, just as if the emerald (or the gold or the purple) were always saying "Whatever any one does or says, I must be emerald and keep my color."',
    author: "Marcus Aurelius, Meditations, VII.15",
  },
  {
    quote:
      "Whatever happens at all happens as it should; you will find this true, if you watch narrowly.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Whatever happens to you has been waiting to happen since the beginning of time.",
    author: "Marcus Aurelius",
  },
  {
    quote: "Whatever is worth doing at all, is worth doing well.",
    author: "Earl of Chesterfield",
  },
  {
    quote:
      "Whatever man you meet with, immediately say to yourself: What opinions has this man about good and bad?",
    author: "Marcus Aurelius, Meditations, VIII.14",
  },
  {
    quote:
      "Whatever seems lofty is dangerous… Those whom an unfavorable fortune has placed in a critical position will be safer if they eliminate pride from their proud circumstances and bring down their fortune as much as possible to a lowly state.",
    author: "Seneca",
  },
  {
    quote:
      "Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it.",
    author: "Goethe",
  },
  {
    quote:
      "Whatever you hold in your mind on a consistent basis is exactly what you will experience in your life.",
    author: "Tony Robbins",
  },
  {
    quote:
      "What I didn't understand was that the value of some new acquisition wasn't the difference between its retail price and what I paid for it. It was the value I derived from it. Stuff is an extremely illiquid asset. Unless you have some plan for selling that valuable thing you got so cheaply, what difference does it make what it's \"worth?\" The only way you're ever going to extract any value from it is to use it. And if you don't have any immediate use for it, you probably never will.",
    author: "Paul Graham",
  },
  {
    quote: "What illusion about myself do I entertain?",
    author: "Epictetus, Discourses II, 21.9",
  },
  {
    quote:
      "What is quite unlooked for is more crushing in its effect, and unexpectedness adds to the weight of a disaster. The fact that it was unforeseen has never failed to intensify a person's grief. This is a reason for ensuring that nothing ever takes us by surprise. We should project our thoughts ahead of us at every turn and have in mind every possible eventuality instead of only the usual course of events.",
    author: "Seneca",
  },
  {
    quote:
      "What is real? How do you define 'real'? If you're talking about what you can feel, what you can smell, what you can taste and see, then 'real' is simply electrical signals interpreted by your brain.",
    author: "Morpheus, The Matrix",
  },
  {
    quote:
      "What is the goal of virtue, after all, except a life that flows smoothly?",
    author: "Epictetus, Discourses I, 4.5",
  },
  {
    quote:
      "What is the point of dragging up sufferings that are over, of being miserable now, because you were miserable then?",
    author: "Seneca",
  },
  {
    quote:
      '"What is the work of a Master?" said a solemn-faced visitor. "To teach people to laugh," said the Master gravely.',
    author: "Anthony de Mello",
  },
  {
    quote: "What is to give light must endure burning.",
    author: "Viktor Frankl",
  },
  {
    quote: "What is truth?",
    author: "Pontius Pilate",
  },
  {
    quote:
      "What is your art? To be good. And how is this accomplished well except by general principles, some about the nature of the universe, and others about the proper constitution of man?",
    author: "Marcus Aurelius, Meditations, XI.5",
  },
  {
    quote:
      "What makes for freedom and fluency in the practice of writing? Knowledge of how to write. The same goes for the practice of playing an instrument. It follows that, in the conduct of life, there must be a science to living well.",
    author: "Epictetus, Discourses IV, 1.63",
  },
  {
    quote:
      "What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.",
    author: "Viktor Frankl",
  },
  {
    quote:
      "What matters most is not what our obstacles are but how we see them, how we react to them, and whether we keep our composure.",
    author: "Ryan Holiday",
  },
  {
    quote:
      "What Paul does, and does very well, is to take ideas and concepts that are beautiful in the abstract, and brings them down to a real world level. That's a rare talent to find in writing these days.",
    author: 'Jeff "hemos" Bates, Director, OSDN; Co-evolver, Slashdot',
  },
  {
    quote:
      "What people say or think about him, or how they treat him, isn't something he worries about.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "What quality belongs to you? The intelligent use of impressions. If you use impressions as nature enchiridion prescribes, go ahead and indulge your pride, because then you will be celebrating a quality distinctly your own.",
    author: "Epictetus, Enchiridion 6",
  },
  {
    quote:
      "What should we do then? Make the best use of what is in our power, and treat the rest in accordance with its nature.",
    author: "Epictetus, Discourses I, 1.17",
  },
  {
    quote:
      "What should we have ready at hand in a situation like this? The knowledge of what is mine and what is not mine, what I can and cannot do.",
    author: "Epictetus, Discourses I, 1.21",
  },
  {
    quote:
      "What's reality? I don't know. When my bird was looking at my computer monitor I thought \"Whoa! That bird has no idea what he's looking at.\" And yet what does the bird do? Does he panic? No, he can't really panic, he just does the best he can. Is he able to live in a world where he's so ignorant? Well, he doesn't really have a choice. The bird is okay even though he doesn't understand the world. You're that bird looking at the monitor, and you're thinking to yourself, I can figure this out. Maybe you have some bird ideas. Maybe that's the best you can do.",
    author: "Terry A. Davis",
  },
  {
    quote:
      "What then can guide a man? One thing and only one, philosophy. But this consists in keeping the daimon within a man free from violence and unharmed, superior to pains and pleasures, doing nothing without a purpose, nor yet falsely and with hypocrisy.",
    author: "Marcus Aurelius, Meditations II.17",
  },
  {
    quote:
      "What upsets people is not things themselves, but their judgements about these things.",
    author: "Epictetus",
  },
  {
    quote:
      "What we choose to fight is so tiny! What fights us is so great! ... When we win it's with small things, and the triumph itself makes us small. ... Winning does not tempt that man. This is how he grows: by being defeated, decisively, by constantly greater beings.",
    author: "Rainer Maria Rilke, The Man Watching.",
  },
  {
    quote: "What we fear doing most is usually what we most need to do.",
    author: "Unknown",
  },
  {
    quote: "What we think, we become.",
    author: "Buddha",
  },
  {
    quote: "What you deserve will always find its way in the end",
    author: "?",
  },
  {
    quote:
      "What you're supposed to do when you don't like a thing is change it. If you can't change it, change the way you think about it. Don't complain.",
    author: "Unknown",
  },
  {
    quote:
      "When a distinguished but elderly scientist states that something is possible, he is almost certainly right. When he states that something is impossible, he is very probably wrong.",
    author: "Arthur C. Clarke",
  },
  {
    quote:
      "When a guide meets up with someone who is lost, ordinarily his reaction is to direct him on the right path, not mock or malign him, then turn on his heel and walk away. As for you, lead someone to the truth and you will find that he can follow. But as long as you don't point it out to him, don't make fun of him; be aware of what you need to work on instead.",
    author: "Epictetus, Discourses II, 12.3-4",
  },
  {
    quote: "When all you have is a hammer, everything looks like a nail.",
    author: "unknown",
  },
  {
    quote:
      "When a man has done you wrong, immediately consider with what opinion about good or evil he has done wrong. For when you have seen this, you will pity him, and will neither wonder nor be angry.",
    author: "Marcus Aurelius, Meditations, VII.26",
  },
  {
    quote:
      "When another blames you or hates you, or when men say anything injurious about you, approach their poor souls, penetrate within, and see what kind of men they are. You will discover that there is no reason to be concerned that these men have this or that opinion about you.",
    author: "Marcus Aurelius, Meditations, IX.27",
  },
  {
    quote:
      "Whenever anyone criticizes or wrongs you, remember that they are only doing or saying what they think is right. They cannot be guided by your views, only their own; so if their views are wrong, they are the ones who suffer insofar as they are misguided. I mean, if someone declares a true conjunctive proposition to be false, the proposition is unaffected, it is they who come off worse for having their ignorance exposed.",
    author: "Epictetus, Enchiridion 42",
  },
  {
    quote:
      "Whenever externals are more important to you than your own integrity, then be prepared to serve them the remainder of your life.",
    author: "Epictetus, Discourses II, 2.12",
  },
  {
    quote:
      "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    author: "Mark Twain",
  },
  {
    quote:
      "Whenever you teach you have the biggest responsibility in the planet. Either if you are teaching dance, science or to a kid to walk. Teaching is something bigger than the actual subject you are teaching. Teaching is the very inception to change. Teaching is extend the impact of your life trough time. If you teach to be eager without being greedy, if you teach to be humble without develop insecurity, if you teach to have vision without creating ambition, if you teach the right things to do without hiding the wrong you’ve done, If you discuss ideas without pushing yours into the others brain then the new generation can shape a future which is better than the present we made. No matter in which form we all have the role of a teacher for someone. I believe we can make it.",
    author: "Alessandro Steri",
  },
  {
    quote:
      "When faced with anything painful or pleasurable, anything bringing glory or disrepute, realize that the crisis is now, that the Olympics have started, and waiting is no longer an option; that the chance for progress, to keep or lose, turns on the events of a single day.",
    author: "Epictetus, Enchiridion 51.2",
  },
  {
    quote:
      "When force of circumstance upsets your equanimity, lose no time in recovering your self-control, and do not remain out of tune longer than you can help. Habitual recurrence to the harmony will increase you mastery of it.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "When I see that one thing [virtue] is supreme and most important, I cannot say that something else is, just to make you happy.",
    author: "Epictetus, Discourses II, 23.47",
  },
  {
    quote:
      "When it comes to all we're required to go through, we're equals. No one is more vulnerable than the next man, and no one can be more sure of his surviving to the morrow.",
    author: "Seneca, Letter XCI",
  },
  {
    quote:
      "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
    author: "John Lennon",
  },
  {
    quote:
      "When learning is purposeful, creativity blossoms. When creativity blossoms, thinking emanates. When thinking emanates, knowledge is fully lit.",
    author: "A.P.J. Abdul Kalam",
  },
  {
    quote:
      "When people think you're dying, they really, really listen to you, instead of just waiting for their turn to speak.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      'When somebody\'s wife or child dies, to a man we all routinely say, "Well, that\'s part of life." But if one of our own family is involved, then right away it\'s "Poor, poor me!" We would do better to remember how we react when a similar loss afflicts others.',
    author: "Epictetus, Enchiridion 26",
  },
  {
    quote:
      'When someone assents to a false proposition, be sure that they did not want to give their assent, since, as Plato says, "Every soul is deprived of the truth against its will." They simply mistook for true something false.',
    author: "Epictetus, Discourses I, 28.4-5",
  },
  {
    quote:
      '[When someone does something you don\'t like] Say to yourself each time, "He did what he believed was right."',
    author: "Epictetus, Enchiridion 42",
  },
  {
    quote:
      "When someone is properly grounded in life, they shouldn't have to look outside themselves for approval.",
    author: "Epictetus, Discourses I, 21.1",
  },
  {
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
  },
  {
    quote:
      "When the enemy is making a false movement we must take good care not to interrupt him.",
    author: "Napoleon",
  },
  {
    quote:
      "When the pools of perception are clear, everything appears 'as is'.",
    author: "Zen proverb",
  },
  {
    quote:
      "When we become fixed in our perceptions we lose our ability to fly.",
    author: "Mingyur Rinpoche",
  },
  {
    quote:
      "When you are offended at any man's fault, immediately turn to yourself and reflect in what manner you yourself have erred: for example, in thinking that money is a good thing or pleasure, or a bit of reputation, and the like.",
    author: "Marcus Aurelius, Meditations, X.30",
  },
  {
    quote:
      "When you are offended with any man's shameless conduct, immediately ask yourself, is it possible, then, that shameless men should not be in the world? It is not possible. Do not, then, require what is impossible.",
    author: "Marcus Aurelius, Meditations, IX.42",
  },
  {
    quote:
      "When you are upset you are likely to sacrifice the wellbeing of tomorrow to appease the hurt feelings of today. Not a good trade. Subject your emotions to a cooling-off period before you allow them to guide major decisions.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "When you grow up you tend to get told that the world is the way it is and your life is just to live your life inside the world. Try not to bash into the walls too much. Try to have a nice family life, have fun, save a little money. That's a very limited life. Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it… Once you learn that, you'll never be the same again.",
    author: "Steve Jobs",
  },
  {
    quote:
      "When you have assumed these names—good, modest, truthful, rational, a man of equanimity, and magnanimous—take care that you do not change these names; and if you should lose them, quickly return to them.",
    author: "Marcus Aurelius, Meditations, X.8",
  },
  {
    quote:
      "When you have been compelled by circumstances to be disturbed in a manner, quickly return to yourself and do not continue out of tune longer than the compulsion lasts.",
    author: "Marcus Aurelius, Meditations VI.11",
  },
  {
    quote:
      "When you have done a good act and another has received it, why do you look for a third thing besides these, as fools do, either to have the reputation of having done a good act or to obtain a return?",
    author: "Marcus Aurelius, Meditations, VII.73",
  },
  {
    quote:
      "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    author: "Sherlock Holmes",
  },
  {
    quote:
      "When you have exhausted all possibilities, remember this - you haven't.",
    author: "Thomas Edison",
  },
  {
    quote:
      "When you internalize that the source of your satisfaction is within you not without, you are then prepared to receive bliss that never ends because it does not rely on the ever changing external circumstances.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "When you're alone you should call this condition tranquillity and freedom, and think of yourself like the gods; and when you are with many, you shouldn't call it a crowd, or trouble, or uneasiness, but festival and company, and contentedly accept it.",
    author: "Epictetus",
  },
  {
    quote:
      "When you're called upon to speak, then speak, but never about banalities like gladiators, horses, sports, food and drink – common-place stuff. Above all don't gossip about people, praising, blaming or comparing them.",
    author: "Epictetus, Enchiridion 33.2",
  },
  {
    quote:
      "When your enemy is making a very serious mistake, don't be impolite and disturb him.",
    author: "Napoleon Bonaparte (allegedly)",
  },
  {
    quote:
      "When you think you're done, you're only at 40% of your body's capability.",
    author: "David Goggins",
  },
  {
    quote:
      "When you transform your mind, everything you experience is transformed.",
    author: "Mingyur Rinpoche",
  },
  {
    quote:
      "When you truly don’t care what the fuck people think of you, you’ve reached a dangerous level of freedom.",
    author: "Jim Carrey",
  },
  {
    quote:
      "When you’ve got the code all ripped apart, it’s like a car that’s all disassembled. You’ve got all the parts tying all over your garage and you have to replace the broken part or the car will never run. It’s not fun until the code gets back to the baseline again.",
    author:
      "Gary Kildall (inventor of CP/M, one of the first OS for the micro).",
  },
  {
    quote:
      "When you wish to delight yourself, think of the virtues of those who live with you; for instance, the activity of one, the modesty of another, the liberality of a third, and some other good quality of a fourth.",
    author: "Marcus Aurelius, Meditations, VI.48",
  },
  {
    quote:
      'Where does the good lie? "In the will." And evil? "Also in the will." And things neither good nor bad – "... lie in whatever is external to the will."',
    author: "Epictetus, Discourses II, 16.1",
  },
  {
    quote:
      "Where is the harm or the strangeness in the boor acting like a boor? See whether you are not yourself the more to blame in not expecting that he would err in such a way. For you had means given you by your reason to suppose that it was likely that he would commit this error, and yet you have forgotten and are amazed that he has erred.",
    author: "Marcus Aurelius, Meditations, IX.42",
  },
  {
    quote:
      "Where the end is, there also is the advantage and the good of each thing. Now the good for the reasonable animal is society.",
    author: "Marcus Aurelius, Meditations V.16",
  },
  {
    quote:
      "Wherever there is a human being, there is an opportunity for a kindness.",
    author: "Seneca",
  },
  {
    quote: "Wherever you go, there you are.",
    author: "Jon Kabbat Zinn",
  },
  {
    quote:
      "Whether the universe is a concourse of atoms, or nature is a system, let this first be established: that I am a part of the whole that is governed by nature; next, that I stand in some intimate connection with other kindred parts.",
    author: "Marcus Aurelius, Meditations, X.6",
  },
  {
    quote:
      "Which, I suppose, is why Stoics put logic at the head of our curriculum – for the same reason that, before a quantity of grain can be measured, we must settle on a standard of measurement.",
    author: "Epictetus, Discourses I, 17.6",
  },
  {
    quote:
      "While I’ve always appreciated beautiful code, I share Jonathan’s concern about studying it too much. I think studying beauty in music and painting has led us to modern classical music and painting that the majority of us just don’t get. Beauty can be seen when it emerges, but isn't something to strive for in isolation of a larger context. In the software world, the larger context would be the utility of the software to the end user.",
    author: "[A comment on a blog]",
  },
  {
    quote: "While we wait for life, life passes.",
    author: "Seneca",
  },
  {
    quote:
      "Who exactly are these people that you want to be admired by? Aren't they the same people you are in the habit of calling crazy? And is this your life ambition, then – to win the approval of lunatics?",
    author: "Epictetus, Discourses I, 21.4",
  },
  {
    quote:
      'Who wants to live with delusion and prejudice, being unjust, undisciplined, mean and ungrateful? "No one." No bad person, then, lives the way he wants, and no bad man is free.',
    author: "Epictetus, Discourses IV, 1.2",
  },
  {
    quote:
      'Why are we still lazy, indifferent and dull? Why do we look for excuses to avoid training and exercising our powers of reason? "Look, if I err in such matters I haven\'t killed my father, have I?" No, fool – for there was no father there for you to kill! What did you do instead? You made the only mistake you had the opportunity to make.',
    author: "Epictetus, Discourses I, 7.30",
  },
  {
    quote:
      '"Why did this happen to me?" Why not? Events will never conform perfectly to your desires. Move forward.',
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "Why does the eye see a thing more clearly in dreams than the imagination when awake?",
    author: "Leonardo Da Vinci",
  },
  {
    quote:
      '"Why do I keep repeating harmful behaviors/habits when I know they are bad for me?" Because they give you pleasure or help you avoid discomfort. And you are too weak to let go of a little pleasure or to bear a little discomfort.',
    author: "@TheAncientSage",
  },
  {
    quote:
      "Why do you so earnestly seek the truth in distant places? Look for delusion and truth in the bottom of your own hearts.",
    author: "Ryōkan",
  },
  {
    quote:
      "Why is this so unbearable? Why can't I endure it? You'll be embarrassed to answer.",
    author: "Marcus Aurelius",
  },
  {
    quote: "Why should we pay so much attention to what the majority thinks?",
    author: "Socrates",
  },
  {
    quote:
      "Why teach drawing to accountants? Because drawing class doesn't just teach people to draw. It teaches them to be more observant. There's no company on earth that wouldn't benefit from having people become more observant.",
    author: "Randy S. Nelson (dean of Pixar University)",
  },
  {
    quote:
      "Windows NT addresses 2 Gigabytes of RAM, which is more than any application will ever need.",
    author: "Microsoft, on the development of Windows NT, 1992",
  },
  {
    quote:
      "Winning is not about talent, being smart, taking shortcuts. It's about finding the right thing to do, and doing it.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "Wisdom is knowing I am nothing, Love is knowing I am everything, and between the two my life moves.",
    author: "Nisargadatta Maharaj",
  },
  {
    quote: "Wisdom lies in cheerful acceptance of whatever life throws at you.",
    author: "@TheAncientSage",
  },
  {
    quote: "Within a computer natural language is unnatural.",
    author: "Alan J. Perlis (Epigrams in programming)",
  },
  {
    quote:
      "Without communication, there is no relationship. Without respect there is no love. Without trust, there's no reason to continue.",
    author: "?",
  },
  {
    quote:
      "With respect to what may happen to you from without, consider that it happens either by chance or according to Providence, and you must neither blame chance nor accuse Providence.",
    author: "Marcus Aurelius, Meditations, XII.24",
  },
  {
    quote:
      "Withstand the setbacks and failures, the days of drudgery, and the hard work that are always a part of any creative action.",
    author: "Robert Greene",
  },
  {
    quote:
      "With what are you discontented? With the badness of men? Recall to your mind this conclusion, that rational animals exist for one another, and that to endure is a part of justice, and that men do wrong involuntarily.",
    author: "Marcus Aurelius, Meditations IV.3",
  },
  {
    quote: "Work as intensely as you play and play as intensely as you work.",
    author: "Eric S. Raymond, How To Be A Hacker",
  },
  {
    quote:
      'Workers of the world, the chains that bind you are not held in place by a ruling class, a "superior" race, by society, the state, or a leader. They are held in place by none other than yourself. Those who seek to exploit are not themselves free, for they place no value in freedom. Who is it that really employs you and commands you to pick up your daily load? And who is it that you allow to pass judgment on the adequacy of your toil? Who have you empowered to dangle the carrot before you and threaten with disapproval? Who, when you wake each morning, sends you off to what you call your work? Is there an "I want to" behind all your "I have to," or have you been so long forgotten to yourself that "I want" exists only as an idea in your head? If you have disconnected from your soul\'s desire and are drowning in an ocean of "have to," then rise up and overthrow your master. Begin the journey toward emancipation. Work only in such a way that you are truly self-employed.',
    author: "Tim Gallwey, The inner game of work",
  },
  {
    quote:
      "Write it properly first. It's easier to make a correct program fast, than to make a fast program correct.",
    author: "http://www.cpax.org.uk/prg/",
  },
  {
    quote:
      "Writing is thinking. To write well is to think clearly. That's why it's so hard.",
    author: "David McCullough",
  },
  {
    quote: "XML wasn't designed to be edited by humans on a regular basis.",
    author: "Guido van Rossum",
  },
  {
    quote:
      "Yes, you can — if you do everything as if it were the last thing you were doing in life, and stop being aimless, stop letting your emotions override what your mind tells you, stop being hypocritical, self-centered, irritable.",
    author: "Marcus Aurelius",
  },
  {
    quote: "You amplify everything you react to.",
    author: "@TheStoicEmperor",
  },
  {
    quote:
      "You are composed of three things: body, breath (life), intelligence. Of these the first two are yours insofar as it is your duty to take care of them; but the third alone is truly yours.",
    author: "Marcus Aurelius, Meditations, XII.3",
  },
  {
    quote:
      "You are here, and life exists and identity. The powerful play goes on and you may contribute a verse. What will your verse be?",
    author: "Dead Poet's Society",
  },
  {
    quote:
      "You are not affected by reality itself but by your interpretation of reality. A change of perspective changes everything.",
    author: "@TheAncientSage",
  },
  {
    quote:
      "You are not tied to a particular position; your loyalty is not to a career or company.",
    author: "Robert Greene",
  },
  {
    quote:
      "You are not your job, you're not how much money you have in the bank. You are not the car you drive. You're not the contents of your wallet. You are not your fucking khakis. You are not special. You're not a beautiful and unique snowflake. You are all singing, all dancing crap of the world. We're all singing, all dancing crap of the world. You're the same decaying organic matter as everything else. We're all part of the same compost heap.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      "You are scared of dying—and, tell me, is the kind of life you lead really any different than being dead?",
    author: "Seneca",
  },
  {
    quote:
      "You are truly successful when you genuinely wish that things work out for everyone else too.",
    author: "unknown",
  },
  {
    quote:
      "You become what you give your attention to…If you yourself don't choose what thoughts and images you expose yourself to, someone else will.",
    author: "Epictetus",
  },
  {
    quote:
      "You buy furniture. You tell yourself, this is the last sofa I will ever need in my life. Buy the sofa, then for a couple years you're satisfied that no matter what goes wrong, at least you've got your sofa issue handled. Then the right set of dishes. Then the perfect bed. The drapes. The rug. Then you're trapped in your lovely nest, and the things you used to own, now they own you.",
    author: "Chuck Palahniuk, Fight Club",
  },
  {
    quote:
      "You can easily judge the character of a man by how he treats those who can do nothing for him.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "You can have premature generalization as well as premature optimization.",
    author: "Bjarne Stroustrup",
  },
  {
    quote: "You can have what you want but you have to figure out what it is.",
    author: "Jordan Peterson",
  },
  {
    quote:
      "You can it, you can accept it, or you can leave it. What is not a good option is to sit around wishing you would change it but not changing it, wishing you would leave it but not leaving it, and not accepting it.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "You cannot overestimate the unimportance of practically everything.",
    author: "Greg McKeown",
  },
  {
    quote:
      "You can pass your life in an equable flow of happiness if you can follow the right way and think and act in the right way.",
    author: "Marcus Aurelius, Meditations V.34",
  },
  {
    quote:
      "You can process in your intellect and senses a wealth of thoughts and impressions simultaneously. There are impressions that you assent to, others that you reject; sometimes you suspend judgement altogether.",
    author: "Epictetus, Discourses I, 13.7",
  },
  {
    quote:
      "You can recognize truth by its beauty and simplicity. When you get it right, it is obvious that it is right.",
    author: "Richard Feynman",
  },
  {
    quote: "You can’t get to version 500 if you don’t start with a version 1.",
    author: "BetterExplained.com",
  },
  {
    quote:
      "You can't prepare for everything but if you engage in strategic visualization ahead of time, you'll be as prepared as you possibly can be.",
    author: "David Goggins",
  },
  {
    quote:
      "You can't say I didn't try really hard, 'cause I'm trying really hard to be good.",
    author: "Tom Petty",
  },
  {
    quote:
      "You could leave life right now. Let that determine what you do and say and think.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "You could never convince a monkey to give you a banana by promising him limitless bananas after death in monkey heaven.",
    author: "Yuval Noah Harari",
  },
  {
    quote:
      "You don't develop courage by being happy in your relationships everyday. You develop it by surviving difficult times and challenging adversity.",
    author: "Epicurus",
  },
  {
    quote:
      "You don't love yourself enough. Or you'd love your nature too, and what it demands of you.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "You don't suffer because things are impermanent. You suffer because things are impermanent and you think they are permanent.",
    author: "Thich Nhat Hanh",
  },
  {
    quote: "You find peace by coming to terms with what you don't know.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote: "You get what you work for, not what you wish for.",
    author: "@Wealthy_Brains on Twitter",
  },
  {
    quote:
      "You have not leisure or ability to read. But you have leisure or ability to check arrogance: you have leisure to be superior to pleasure and pain: you have leisure to be superior to love of fame, and not to be vexed at stupid and ungrateful people, nay even to care for them.",
    author: "Marcus Aurelius, Meditations, VIII.8",
  },
  {
    quote:
      "You have power over your mind — not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "You have the look of a man who accepts what he sees because he is expecting to wake up. Ironically, that's not far from the truth.",
    author: "Morpheus, The Matrix",
  },
  {
    quote:
      "You have to be pretty driven to make it happen. Otherwise, you will just make yourself miserable.",
    author: "Elon Musk",
  },
  {
    quote:
      "You have to let it all go, Neo. Fear, doubt, and disbelief. Free your mind.",
    author: "Morpheus, The Matrix",
  },
  {
    quote:
      "You have to realize, it isn't easy to keep your will in agreement with nature, as well as externals. Caring about the one inevitably means you are going to shortchange the other.",
    author: "Epictetus, Enchiridion 13",
  },
  {
    quote:
      "You know the secret, the difference between heaven and hell, is like, doing your work: you feel really shitty if you don't do your work but if you do your work, it's fucking awesome.",
    author: "Terry A. Davis",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },
  {
    quote:
      "You may say that I'm a dreamer\nBut I'm not the only one\nI hope someday you'll join us\nAnd the world will be as one",
    author: "John Lennon, Imagine",
  },
  {
    quote:
      "You might as well get on your knees and pray that your nose won't run. A better idea would be to wipe your nose and forgo the prayer. The point is, isn't there anything God gave you for your present problem? You have the gifts of courage, fortitude and endurance. With \"hands\" like these, do you still need somebody to help wipe your nose?",
    author: "Epictetus, Discourses II, 16.13-14",
  },
  {
    quote:
      "You must always work not just within but below your means. If you can handle three elements, handle only two. If you can handle ten, then handle five. In that way the ones you do handle, you handle with more ease, more mastery and you create a feeling of strength in reserve.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "You must not be afraid of your uniqueness and you must care less and less what people think of you.",
    author: "Robert Greene",
  },
  {
    quote:
      "You need not look about for the reward of a just deed; a just deed in itself offers a still greater return.",
    author: "Seneca",
  },
  {
    quote:
      "You need patience, discipline, and an agility to take losses and adversity without going crazy.",
    author: "Charlie Munger",
  },
  {
    quote:
      "You ought to realize, you take up very little space in the world as a whole – your body, that is; in reason, however, you yield to no one, not even to the gods, because reason is not measured in size but sense. So why not care for that side of you, where you and the gods are equals?",
    author: "Epictetus, Discourses I, 12.26-27",
  },
  {
    quote: "Your consistency can beat any talent. Don't let it down.",
    author: "@Wealthy_Brains on Twitter",
  },
  {
    quote: "You're never given more pain than you can handle.",
    author: "Byron Katie",
  },
  {
    quote: "You’re offended when you fear that it might be true.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "You're subject to sorrow, fear, jealousy, anger and inconsistency. That's the real reason you should admit that you are not wise.",
    author: "Epictetus, Discourses II, 22.6",
  },
  {
    quote:
      "Your existence, my existence is just infinitesimal. It's like a firefly blinking once in the night.",
    author: "Naval Ravikant",
  },
  {
    quote:
      "Your food should appease your hunger, your drink quench your thirst, your clothing keep out the cold, your house be a protection against inclement weather. It makes no difference whether it is built of turf or of variegated marble imported from another country.",
    author: "Seneca",
  },
  {
    quote:
      "Your life is short. You must turn to profit the present by the aid of reason and justice.",
    author: "Marcus Aurelius, Meditations IV.26",
  },
  {
    quote: "Your reputation is harmed the most by what you say to defend it.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Your true self is not your emotion such as anger, frustration or hate. It is the inner witness that knows the rise and fall of your emotion.",
    author: "Haemin Sunim",
  },
  {
    quote:
      "Your twenties are always an apprenticeship, but you don't always know what for.",
    author: "Jan Houtema",
  },
  {
    quote: "Your will is the most accurate way to predict the future.",
    author: "Elon Musk",
  },
  {
    quote:
      "You say the speculative topics are useless. Useless to whom? Only to people who don't use them as they should. I mean, salves and ointments are not useless to people who apply them when and how they're supposed to; weights are not useless in themselves, they're useful to some people, worthless to others.",
    author: "Epictetus, Discourses II, 21.20",
  },
  {
    quote:
      "You Sceptics, who dismiss the evidence of the senses – do you act any differently? Which one of you ever went to the mill when you were in need of a bath?",
    author: "Epictetus, Discourses I, 27.19",
  },
  {
    quote:
      "You should never turn a man's generosity as a sword against him. Any virtue that a man has, even if he has many vices, should not be used as a tool against him.",
    author: "Rabi to Feynman",
  },
  {
    quote:
      "You stuck to your principles and when opportunities came along, you pounced on them with vigour.",
    author: "Charlie Munger",
  },
  {
    quote:
      "You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes.",
    author: "Morpheus, The Matrix",
  },
  {
    quote:
      'You think I can listen to poetry in my position?" "Why, what is it?" "I\'m sentenced to death!" "And the rest of us aren\'t?"',
    author: "Epictetus, Discourses II, 6, 27",
  },
  {
    quote:
      "You think you know when you learn, are more sure when you can write, even more when you can teach, but certain when you can program.",
    author: "Alan J. Perlis (Epigrams in programming)",
  },
  {
    quote: "You will be attacked for doing the right thing. Do it anyway.",
    author: "@TheStoicEmperor",
  },
  {
    quote: "You will eventually die and the world will keep moving.",
    author: "Unknown",
  },
  {
    quote:
      "You will give yourself relief, if you do every act of your life as if it were the last.",
    author: "Marcus Aurelius, Meditations II.5",
  },
  {
    quote:
      "You will never become a Great Programmer until you acknowledge that you will always be a Terrible Programmer. You will remain a Great Programmer for only as long as you acknowledge that you are still a Terrible Programmer.",
    author: "Marc (http://kickin-the-darkness.blogspot.com/)",
  },
  {
    quote:
      "You will observe this general truth, that whatever is profitable to any man is profitable also to other men.",
    author: "Marcus Aurelius, Meditations VI.45",
  },
  {
    quote:
      "Zoom out. In the grand scheme of things, is this really going to affect you? We can't even remember what we were doing 5 days ago, let alone five years. What matters is how you feel now. If it makes you upset, let it go. If it feels good, let it consume you.",
    author: "Thibaut",
  },
];
