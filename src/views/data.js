var marked = require('marked');

var publications = [
 {

 	mobileInfo: 'Malte Jung: Coupling Interactions and Performance: Predicting Team Performance from Thin Slices of Conflict',
    title: 'Coupling Interactions and Performance: Predicting Team Performance from Thin Slices of Conflict',
    author: 'Malte Jung',
    conference: 'TOCHI 2016',
    type: 'Full Paper',
    image: '/assets/img/publication/3dgame.png',
    links: [['PDF', '/assets/papers/3dgame.pdf']],
    abstract: 'Do teams show stable conflict interaction patterns that predict their performance hours, weeks, or even months in advance? Two studies demonstrate that two of the same patterns of emotional interaction dynamics that distinguish functional from dysfunctional marriages also distinguish high from low-performance design teams.'
  },
 {
  mobileInfo: 'Gabriel Culbertson, Shiyu Wang, Malte Jung, Erik Andersen: Social Situational Language Learning through an Online 3D Game',
    title: 'Social Situational Language Learning through an Online 3D Game',
    author: 'Gabriel Culbertson, Shiyu Wang, Malte Jung, Erik Andersen',
    conference: 'CHI 2016',
    type: 'Full Paper',
    image: '/assets/img/publication/thin-slices.png',
    links: [['PDF', '/assets/papers/thin-slices.pdf']],
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
    name: 'Gabriel Culbertson',
    title: 'PhD Student',
    link: 'http://infosci.cornell.edu/forward-thinking-people/gabriel-culbertson',
    image: '/assets/img/people/gabriel.jpg',
    email: 'grc74@cornell.edu'
  },
  {
    name: 'Hamish Tennent',
    title: 'Researcher',
    link: 'http://infosci.cornell.edu/forward-thinking-people/research-staff/hamish-tennent',
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
		title: 'We have a new website! Look how shiny it is!',
		date: '9/2016'
	},


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
