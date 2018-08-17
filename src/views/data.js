var marked = require('marked');

var publications = [
  {
    mobileInfo: 'Malte Jung: Robots in the Wild: A Time for More Robust Theories of Human-Robot Interaction',
     title: 'Robots in the Wild: A Time for More Robust Theories of Human-Robot Interaction',
     author: 'Malte Jung, Pamela Hinds',
     conference: 'Transactions on Human-Robot Interaction (THRI)',
     type: 'Full Paper',
     image: '/assets/img/publication/wild.png',
     links: [['PDF', '/assets/papers/wild.pdf']],
     abstract: 'We have a limited understanding of how people will respond to robots in complex social settings and howrobots will affect social dynamics in situ. In particular, our theories reflect an oversimplified view of HRI. The time is ripe for studies that tackle HRI in these complex settings and build generalizable theories about what to expect of HRI in the wild'
   },
   {
     mobileInfo: 'Yoyo Tsung-Yu Hou: Robots in Power',
      title: 'Robots in Power',
      author: 'Yoyo Tsung-Yu Hou, Malte Jung',
      conference: 'Human Robot Interaction 2018 (HRI)',
      type: 'Extended Abstract',
      image: '/assets/img/publication/power.png',
      links: [['PDF', '/assets/papers/power.pdf']],
      abstract: 'While power affects interactions in every work group, we know little about its role in human-robot teams. In this paper, we propose a framework to address power in Human-Robot Interaction (HRI).'
    },
    {
      mobileInfo: 'Houston Claure: Understanding Social Dynamics in Robot-Human Handovers Through the Lens of Expectancy Violations Theory: Go',
       title: 'Understanding Social Dynamics in Robot-Human Handovers Through the Lens of Expectancy Violations Theory',
       author: 'Houston Claure, Malte Jung',
       conference: 'Human Robot Interaction 2018 (HRI)',
       type: 'Extended Abstract',
       image: '/assets/img/publication/handover.png',
       links: [['PDF', '/assets/papers/handover.pdf']],
       abstract: 'We use expectancy violation theory to understand people’s response to such violations of expectation and investigate how this impacts task completion and the experience of the task. We propose that a violation of expectation may not always lead to detrimental effects on the experience of the task but may impact the overall task completion.'
     },
     {
       mobileInfo: 'Solace Shen: My Telepresence, My Culture? An Intercultural Investigation of Telepresence Robot Operators’ Interpersonal Distance Behaviors',
        title: 'My Telepresence, My Culture? An Intercultural Investigation of Telepresence Robot Operators’ Interpersonal Distance Behaviors',
        author: 'Solace Shen, Hamish Tennent, Houston Claure, Malte Jung',
        conference: 'CHI 2018',
        type: 'Full Paper',
        image: '/assets/img/publication/telepresence.png',
        links: [['PDF', '/assets/papers/telepresence.pdf']],
        abstract: 'Interpersonal distance behaviors can vary significantly across countries and impact human social interaction. Do these crosscultural differences play out when one of the interaction partners participates through a teleoperated robot?'
      },
    {
    	mobileInfo: 'Hamish Tennent: Good Vibrations, How Consequential Sounds Affect Perception of Robotic Arms',
       title: 'How Consequential Sounds Affect Perception of Robotic Arms',
       author: 'Hamish Tennent, Dylan Moore, Malte Jung, Wendy Ju',
       conference: 'Ro-Man 2017',
       type: 'Full Paper',
       image: '/assets/img/publication/vibrations.png',
       links: [['PDF', '/assets/papers/vibrations.pdf']],
       abstract: 'How does a robot’s sound shape our perception of it? We overlaid sound from high-end and low-end robot arms on videos of the high-end KUKA youBot desktop robotic arm moving a small block in functional (working in isolation) and social (interacting with a human) contexts.'
     },
     {
     	mobileInfo: 'Gabriel Culbertson: Facilitating Development of Pragmatic Competence through a Voice-driven Video Learning Interface',
        title: 'Facilitating Development of Pragmatic Competence through a Voice-driven Video Learning Interface',
        author: 'Gabriel Culbertson, Solace Shen, Malte Jung, and Erik Andersen',
        conference: 'CHI 2017',
        type: 'Full Paper',
        image: '/assets/img/publication/facilitating.png',
        links: [['PDF', '/assets/papers/facilitating.pdf']],
        abstract: 'In this paper we present a voice-driven system where learners practice and learn a foreign language by repeating phrases out loud from any video. Utterances are transcribed and translated and, if captions are available, the system indicates the correctness of the utterance.'
      },
  {
  	mobileInfo: 'Malte Jung: Robots in Group Context: Rethinking Design, Development and Deployment',
     title: 'Robots in Group Context: Rethinking Design, Development and Deployment',
     author: 'Malte F. Jung, Matt Beane, Jodi Forlizzi, Robin Murphy, Janet Vertesi',
     conference: 'CHI 2017',
     type: 'Panel',
     image: '/assets/img/publication/chipanel.png',
     links: [['PDF', '/assets/papers/chipanel.pdf']],
     abstract: 'This panel brings together experts on design, robotics, organizational behavior, team dynamics and science and technology studies to discuss challenges and opportunities arising from the increased participation of robots in teams groups and organizations.'
   },
  {
  	mobileInfo: 'Malte Jung: Affective Grounding in Human-Robot Interaction',
     title: 'Affective Grounding in Human-Robot Interaction',
     author: 'Malte Jung',
     conference: 'HRI 2017',
     type: 'Full Paper',
     image: '/assets/img/publication/affective.png',
     links: [['PDF', '/assets/papers/affective.pdf']],
     abstract: 'The paper contributes a review and critique of current perspectives on emotion in HRI. Further it outlines how research on emotion in HRI can benefit from taking an affective grounding perspective and outlines implications for the design of robots capable of participating in the coordination on affect in interaction.'
   },
  {
  	mobileInfo: 'Solace Shen: A Benefit of Thinking Like a Robot',
     title: 'A Benefit of Thinking Like a Robot',
     author: 'Solace Shen, Malte Jung',
     conference: 'HRI 2017',
     type: 'Note',
     image: '/assets/img/publication/think.png',
     links: [['PDF', '/assets/papers/think.pdf']],
     abstract: 'Picture a scenario in the not too distant future where home assistant robots provide social support such as engaging people in conflict reappraisal practices in the event of emotional conflicts. What should the robot say and/or do to effectively help people regulate emotions and navigate interpersonal conflicts?'
   },
  {
  	mobileInfo: 'Robots in Groups and Teams Workshop @ CSCW 2017',
     title: 'Robots in Groups and Teams Workshop',
     author: 'Malte Jung, Friederike Eyssel, Selma Šabanović, Marlena Fraune',
     conference: 'CSCW 2017',
     type: 'Workshop',
     image: '/assets/img/publication/cscwworkshop.png',
     links: [['PDF', '/assets/papers/cscwworkshop.pdf']],
     abstract: 'The goal for the workshop is therefore to advance research in computer supported cooperative work (CSCW) and human robot interaction (HRI) by raising awareness for the social and technical challenges that surround the placement of robots within work-groups and teams.'
   },
 {
 	mobileInfo: 'Malte Jung: Coupling Interactions and Performance: Predicting Team Performance from Thin Slices of Conflict',
    title: 'Coupling Interactions and Performance: Predicting Team Performance from Thin Slices of Conflict',
    author: 'Malte Jung',
    conference: 'TOCHI 2016',
    type: 'Full Paper',
    image: '/assets/img/publication/thin-slices.png',
    links: [['PDF', '/assets/papers/thin-slices.pdf']],
    abstract: 'Do teams show stable conflict interaction patterns that predict their performance hours, weeks, or even months in advance? Two studies demonstrate that two of the same patterns of emotional interaction dynamics that distinguish functional from dysfunctional marriages also distinguish high from low-performance design teams.'
  },
 {
  mobileInfo: 'Gabriel Culbertson, Shiyu Wang, Malte Jung, Erik Andersen: Social Situational Language Learning through an Online 3D Game',
    title: 'Social Situational Language Learning through an Online 3D Game',
    author: 'Gabriel Culbertson, Shiyu Wang, Malte Jung, Erik Andersen',
    conference: 'CHI 2016',
    type: 'Full Paper',
    image: '/assets/img/publication/3dgame.png',
    links: [['PDF', '/assets/papers/3dgame.pdf']],
    abstract: 'Learning a second language is challenging. Becoming fluent requires learning contextual information about how language should be used as well as word meanings and grammar. The majority of existing language learning applications provide only thin context around content.'
  },
 {
  mobileInfo: 'Gabriel Culbertson, Erik Andersen, Walker White, Daniel Zhang, Malte Jung: Crystallize: An Immersive, Collaborative Game for Second Language Learning',
    title: 'Crystallize: An Immersive, Collaborative Game for Second Language Learning',
    author: 'Gabriel Culbertson, Erik Andersen, Walker White, Daniel Zhang, Malte Jung',
    conference: 'CSCW 2016',
    type: 'Full Paper',
    image: '/assets/img/publication/crystallize.png',
    links: [['PDF', '/assets/papers/crystallize.pdf']],
    abstract: 'Learning a second language is challenging. Becoming fluent requires learning contextual information about how language should be used as well as word meanings and grammar. The majority of existing language learning applications provide only thin context around content.'
  },
  {
  	mobileInfo: 'Malte Jung: Using Robots to Moderate Team Conflict: The Case of Repairing Violations',
     title: 'Using Robots to Moderate Team Conflict: The Case of Repairing Violations',
     author: 'Malte Jung, Nikolas Martelaro, Pamela J. Hinds',
     conference: 'HRI 2015',
     type: 'Full Paper',
     image: '/assets/img/publication/moderate.png',
     links: [['PDF', '/assets/papers/moderate.pdf']],
     abstract: 'We explore whether robots can positively influence conflict dynamics by repairing interpersonal violations that occur during a team-based problem-solving task.'
   },
  {
   mobileInfo: 'Gabriel Culbertson: Crystallize: Simulating Language Immersion through Gameplay',
     title: 'Crystallize: Simulating Language Immersion through Gameplay',
     author: 'Gabriel Culbertson',
     conference: 'CHI Extended Abstracts 2015',
     type: 'Extended Abstract',
     image: '/assets/img/publication/crystallize-2.png',
     links: [['PDF', '/assets/papers/crystallize-2.pdf']],
     abstract: 'Crystallize takes a first step towards this goal by providing a structured immersive experience. Instead of memorizing vocabulary words and grammar, the player solves linguistic puzzles, interacts with the environment, and infers word meanings from context.'
   },
   {
    mobileInfo: 'Malte Jung: Participatory Materials: Having a Reflective Conversationwith an Artifact in the Making',
      title: 'Participatory Materials: Having a Reflective Conversation with an Artifact in the Making',
      author: 'Malte Jung,  Nikolas Martelaro, Halsey Holster, Clifford Nass',
      conference: 'DIS 2014',
      type: 'Full Paper',
      image: '/assets/img/publication/participatory.png',
      links: [['PDF', '/assets/papers/participatory.pdf']],
      abstract: 'Drawing from a notion of designing as a conversation with the materials of the situation we built an artifact that could actively engage in its own making by embedding a Wizard of Oz operated animated agent into an Arduino prototyping platform.'
    },
  ];


var projects = [
  {
    title: 'Crystallize Game',
    image: '/assets/img/project/crystallize-full.png',
    desc: 'Crystallize is virtual world game composed of a series of language learning quests. Each quest has two parts: find the relevant words and use them to construct a sentence. The words the player needs to find are indicated by English words with a dashed outline. Players collect words by overhearing dialogues. Word meanings are inferred from context.',
    link: '#'
  },
  {
    title: 'Attention to Online Media',
    image: '/assets/img/project/project-2.jpg',
    desc: 'The goal of this project is to advance our understanding of the psychological mechanisms behind people\'s attention, as reflected through their interactions with digital content. In particular, we focus on the context of actions that people take online without any experimental intervention and examine how context affects behavior. We draw on theories from a wide range of fields to address questions that pertain to individual\'s attention to content, expectations for attention from others and the value in getting that attention. To that end, we harness machine learning methods as well as language and statistical modeling to analyze signals of human attention as they occurs naturally outside of lab settings.',
    link: '#'
  },
].map(function(p) {
  p.desc = marked(p.desc);
  return p;
});



var people = [
  {
    name: 'Malte Jung',
    title: 'Assistant Professor',
    link: 'http://infosci.cornell.edu/faculty/malte-jung',
    image: '/assets/img/people/malte.jpg',
    email: 'mfj28@cornell.edu'
  },
  {
    name: 'Solace Shen',
    title: 'Post Doctoral Researcher',
    link: 'http://infosci.cornell.edu/forward-thinking-people/research-staff/solace-shen',
    image: '/assets/img/people/solace.jpg',
    email: 'solace.shen@cornell.edu'
  },
  {
    name: 'Dominic DiFranzo',
    title: 'Post Doctoral Researcher',
    link: 'http://difranzo.com/',
    image: '/assets/img/people/dom.png',
    email: 'djd274@cornell.edu'
  },
  {
    name: 'Gabriel Culbertson',
    title: 'PhD Student',
    link: 'http://infosci.cornell.edu/forward-thinking-people/gabriel-culbertson',
    image: '/assets/img/people/gabriel.jpg',
    email: 'grc74@cornell.edu'
  },
  {
    name: 'Amy Cheatle',
    title: 'PhD Student',
    link: 'http://infosci.cornell.edu/forward-thinking-people/phds/amy-cheatle',
    image: '/assets/img/people/amy.jpg',
    email: 'ac2288@cornell.edu'
  },
  {
    name: 'Brett Stoll',
    title: 'PhD Student',
    link: 'https://communication.cals.cornell.edu/people/brett-stoll',
    image: '/assets/img/people/brett.jpg',
    email: 'bas364@cornell.edu'
  },
  {
    name: 'Houston Claure',
    title: 'PhD Student',
    image: '/assets/img/people/houston.png',
    email: 'hbclaure@gmail.com'
  },
  {
    name: 'Jess Hohenstein',
    title: 'PhD Student',
    link: 'https://hohenstein.infosci.cornell.edu/',
    image: '/assets/img/people/jess.jpg',
    email: 'jch378@cornell.edu'
  },
  {
    name: 'Yoyo (Tsung-Yu) Hou',
    title: 'PhD Student',
    link: 'http://yoyohou.tw/',
    image: '/assets/img/people/yoyo.jpg',
    email: 'th588@cornell.edu'
  },
  {
    name: 'Rei (Wen-Ying) Lee',
    title: 'PhD Student',
    link: '',
    image: '/assets/img/people/rei.jpg',
    email: 'wl593@cornell.edu'
  },
  {
    name: 'Cristina Zaga',
    title: 'PhD Candidate/Visiting Scholar ',
    link: 'http://cristinazaga.xyz',
    image: '/assets/img/people/cristina.jpg',
    email: 'cz444@cornell.edu'
  },
  {
    name: 'Hamish Tennent',
    title: 'Visiting Scientist',
    link: 'https://mynameishamish.website/',
    image: '/assets/img/people/hamish.jpg',
    email: 'ht353@cornell.edu'
  },
];


var projectareas = [
  {
    name: 'Title',
    text: 'Assistant Professor',

  },
];



var news = [
  {
		title: 'We are about to be opening the doors of our lab to kids from 7 to 11 years old. From 8/20 trough 9/9 we are going to run a robot design workshop. Parents, educators and younger and older siblings can tag along too and the event is completely free as it is part of our research on designing developmentally appropriate toy robots for children. You can sign up at this link http://bit.ly/robotkidsevent or contact Cristina Zaga (cz444@cornell.edu)',
    image: '/assets/img/people/hamish.jpg',
    date: '8/2018'
	},
  {
		title: 'Gabe has succesfully defenced his thesis, congratulations Gabe! Best of luck in your new role at Google.',
		date: '6/2018'
	},
  {
		title: 'Rei passed her A-exam and will continuing building her sketching robots into the fall, congratulations!',
		date: '5/2018'
	},
  {
		title: 'Solace\'s paper on cultural differences in the behaviour of telepresence robot operators got accepted into CHI 2018! Congratulations Solace.',
		date: '12/2017'
	},
  // {
	// 	title: '3 of our papers got accepted into HRI 2018! See you in Chicago',
	// 	date: '10/2017'
	// },
  // {
	// 	title: 'Be sure to sign up for Maltes Robots in Groups and Teams Workshop for CSCW 2017',
	// 	date: '1/2017'
	// },
  // {
	// 	title: 'Solace and Maltes papers were accepted to HRI 2017! PDFs are available below',
	// 	date: '12/2016'
	// },
	// {
	// 	title: 'We have a new website! Look how shiny it is!',
	// 	date: '9/2016'
	// },


].map(function(n) {
  n.title = marked(n.title);
  return n;
});

module.exports = {
  publications: publications,
  projects: projects,
  people: people,
  news: news,
};
