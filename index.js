var express = require('express');
//var bodyParser = require('body-parser');
var cors = require('cors');
//const { table } = require('console');

var app = express();
//app.use(bodyParser());
app.use(cors());

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// home page
app.get('/', function(req, res) {
    var twou = "I am here...";
    res.render('pages/index', { twou: twou});
});
          

// table page
app.get('/table', (req, res) => {
    var table = [
        {   
            number: '1',
            term: 'DevOps',
            description: 'Is a system that encourages the interaction between IT operation and software development in an iterative process.',
            reference: 'Wikipedia. (n.d.). DevOps. Available at: https://en.wikipedia.org/wiki/DevOps',
        },
        {
            number: '2',
            term: 'Enterprise system',
            description: 'Is a large centralised system that is a one-stop place for all the applications a business uses.',
            reference: 'Mulder, J. (2021). Enterprise DevOps for Architects: Leveraging AIops and DevSecOps for secure digital transformation. Packt Publishing'
        },
        {
            number: '3',
            term: 'Microservice',
            description: 'Is an application that uses separate components (or runs in several locations), but they are not visible to end-users.',
            reference: 'Nemer, J. (2023). BLOG:VIRTUALIZATION - Advantages and Disadvantages of Microservices Architecture. Available at: https://cloudacademy.com/blog/microservices-architecture-challenge-advantage-drawback/'
        },
        {
            number: '4',
            term: 'Monolithic application',
            description: 'Is an application that is one-dimensional, inflexible or follows a strict process.',
            reference: 'Kanjilal. J. (2020). Advantages of monolithic architecture that prove it isnt dead. Available at: https://www.techtarget.com/searchapparchitecture/tip/Advantages-of-monolithic-architecture-that-prove-it-isnt-dead#:~:text=A%20monolithic%20application%20poses%20obstacles%20to%20managing%20the,the%20application%20as%20the%20volume%20of%20transactions%20increases.'
        },
        {
            number: '5',
            term: 'Agile methodology',
            description: 'Is about dividing a system development process into independent sections, which may need to be integrated into one at some point.',
            reference: 'Laoyan, S. (2022). What is Agile methodology? (A beginners guide). Available at: https://asana.com/resources/agile-methodology'
        },
        {
            number: '6',
            term: 'Cloud computing or platforms',
            description: 'Offer services, such as storage, databases, connectivity, and so forth, over the internet (or off-site).',
            reference: 'G2. (n.d.). Best Cloud Computing Platforms. Available at: https://www.g2.com/categories/cloud-computing-platforms'
        },
        {
            number: '7',
            term: 'Development time',
            description: 'Is the time for developing software, from a projects starting date up to the time it is hand-over to the client.',
            reference: 'DoRA (2022). 2022 Accelerate State of DevOps Report. ….'
        },
        {
            number: '8',
            term: 'Scalability',
            description: 'Refers to a system or thing that can be expanded.',
            reference: 'Cambridge Dictionary (n.d.). Dictionary. Available at: https://dictionary.cambridge.org/dictionary/english/scalability. Accessed on 23/07/2023.'
        },
        {
            number: '9',
            term: 'Wall of confusion',
            description: 'Refers to the traditional software development lifecycle with teams working in a phase of the project, e.g., on the planning, analysis, design, implementation, and maintenance, are not involved in other phases nor know and care about the successful implementation of the complete project.',
            reference: 'Kawaguchi, S. (2020). The Wall of Confusion: DevOps Essentials. Available at: https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26'
        },
        {
            number: '10',
            term: 'Bootstrap',
            description: 'Is a program/code that works with a small amount of extra code as it comes in a pre-arranged format.',
            reference: 'Klein, M. (2021). A Beginner’s Guide to Bootstrap. Available at: https://www.codecademy.com/resources/blog/what-is-bootstrap/#:~:text=As%20a%20framework%2C%20Bootstrap%20is%20a%20collection%20of,to%20create%20every%20bit%20of%20code%20from%20scratch.'
        },
        {
            number: '11',
            term: 'Continuous integration',
            description: 'is the practice of automating the integration of code changes from multiple contributors into a single software project.',
            reference: 'Rehkopf. M. (n.d.). What is continuous integration? Available at: https://www.atlassian.com/continuous-delivery/continuous-integration.'
        },
        {
            number: '12',
            term: 'Continuous delivery',
            description: 'is an approach where teams release products frequently and with high quality, and with a level of predictability from source code repositories through to a production environment using automation.',
            reference: 'Coupland, M. (2021), DevOps Adoption Strategies: Principles, Processes, Tools and Trends. Packt Publishing.'
        },
        {
            number: '13',
            term: 'Deployment',
            description: 'means pushing changes or updates from one deployment environment to another.',
            reference: 'Umbraco (n.d). What is Deployment? Available at: https://umbraco.com/knowledge-base/deployment/'
        },
        {
            number: '14',
            term: 'Kanban',
            description: 'is a workflow management method that helps organizations manage and improve work systems.',
            reference: 'Kanbaniza. (n.d.). What Is Kanban? Explained for Beginners. Available at: https://kanbanize.com/kanban-resources/getting-started/what-is-kanban'
        },
        {
            number: '15',
            term: 'Docker',
            description: 'is a complete solution for the production, distribution, and use of containers.',
            reference: 'Walker T. (2021). Docker for Beginners: Everything You Need to Know. Available at: https://www.howtogeek.com/733522/docker-for-beginners-everything-you-need-to-know/'
        },
        {
            number: '16',
            term: 'Kubernetes',
            description: 'is an open-source system for automating deployment, scaling, and management of containerized applications.',
            reference: 'The Kubernetes Authors. (n.d.). Production-Grade Container Orchestration. Available at: https://kubernetes.io/'
        },
        {
            number: '17',
            term: 'Acceptance Test',
            description: 'Gillis, A.S. (2021). Acceptance Testing. Available at: https://www.techtarget.com/searchsoftwarequality/definition/acceptance-test.',
            reference: 'Gillis, A.S. (2021). Acceptance Testing. Available at: https://www.techtarget.com/searchsoftwarequality/definition/acceptance-test.'
        },
        {
            number: '18',
            term: 'Configuration Test',
            description: 'is a software testing technique in which the software application is tested with multiple combinations of software and hardware in order to evaluate the functional requirements and find out optimal configurations under which the software application works without any defects or flaws.',
            reference: 'Guru99. (n.d.). What is Configuration Testing? Example Test Cases. Available at: https://www.guru99.com/configuration-testing.html'
        },
        {
            number: '19',
            term: 'Patch',
            description: 'A software patch is a piece of code that updates an existing computer program by addressing known bugs or vulnerabilities within the system.',
            reference: 'Farrelly, J. (2022). What is a Patch in Computer Terms? Available at: https://www.electric.ai/blog/what-are-patches-in-computer'
        },
        {
            number: '20',
            term: 'Staging',
            description: 'is an environment for computer people to test and view their application and changes before they go live to the world (production).',
            reference: 'CommonPlaces. (n.d.). What is Staging? Available at: https://www.commonplaces.com/blog/web-development-what-is-staging/'
        }
    ];

    // Render method takes two parameter
    // first parameter is the ejs file to 
    // render second parameter is an 
    // object to send to the ejs file
    res.render('pages/table', { table : table });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');