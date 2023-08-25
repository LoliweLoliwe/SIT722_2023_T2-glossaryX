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
        }];

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