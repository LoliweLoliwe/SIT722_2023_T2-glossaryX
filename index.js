var express = require('express');
//var bodyParser = require('body-parser');
var cors = require('cors');

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
            term: 'Acceptance test',
            description: 'Gillis, A.S. (2021). Acceptance Testing. Available at: https://www.techtarget.com/searchsoftwarequality/definition/acceptance-test.',
            reference: 'Gillis, A.S. (2021). Acceptance Testing. Available at: https://www.techtarget.com/searchsoftwarequality/definition/acceptance-test.'
        },
        {
            number: '18',
            term: 'Configuration test',
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
        },
        {
            number: '21',
            term: 'Container',
            description: 'is an abstraction at the app layer that packages code and dependencies together. ',
            reference: 'Docker. (n.d.). Use containers to Build, Share and Run your applications. Available at: https://www.docker.com/resources/what-container/'
        },
        {
            number: '22',
            term: 'Docker Compose',
            description: 'is a tool for running multi-container applications on Docker defined using the Compose file format.',
            reference: 'GitHub Inc. (n.d.). Compose. Available at: https://github.com/docker/compose'
        },
        {
            number: '23',
            term: 'YAML',
            description: 'is a human-friendly data serialization language for all programming languages.',
            reference: 'YAML. (n.d.). YAML. Available at: https://yaml.org/'
        },
        {
            number: '24',
            term: 'Docker image',
            description: 'is a bootable snapshot of a server (or microservice), including all the code, dependencies, and assets that it needs to run.',
            reference: 'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform. Manning Publication.'
        },
        {
            number: '25',
            term: 'API key',
            description: 'is a unique identifier that authenticates requests associated with your project for usage and/or may result in billing.',
            reference: 'Google. (n.d.). Use API Keys. Available at: https://developers.google.com/maps/documentation/javascript/get-api-key'
        },
        {
            number: '26',
            term: 'Lightweight package',
            description: 'is a computer program that is designed to have a small memory footprint (RAM usage) and low CPU usage, overall a low usage of system resources.',
            reference: 'Wikipedia. (n.d.). Lightweight software. Available at: https://en.wikipedia.org/wiki/Lightweight_software '
        },
        {
            number: '27',
            term: 'API Gateway',
            description: 'is a data-plane entry point for API calls that performs request processing based on defined policies, including authentication, authorization, access control, SSL/TLS offloading, routing, and load balancing.',
            reference: 'F5 NGINX. (n.d.). API Gateway. Available at: https://www.nginx.com/learn/api-gateway/'
        },
        {
            number: '28',
            term: 'Infrastructure as Code',
            description: 'uses DevOps methodology and versioning with a descriptive model to define and deploy infrastructure, such as networks, virtual machines, load balancers, and connection topologies.',
            reference: 'Microsoft (2022). What is infrastructure as code (IaC)? Available at: https://learn.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code'
        },
        {
            number: '29',
            term: 'REST APIs',
            description: 'are set of rules that define how applications or devices can connect to and communicate via HTTP requests to perform standard database functions like creating, reading, updating, and deleting records (also known as CRUD) within a resource.',
            reference: 'ABI. (n.d.). What is a REST API? Available at: https://www.ibm.com/topics/rest-apis'
        },
        {
            number: '30',
            term: 'MongoDB',
            description: 'is a NoSQL database program, which uses JSON-like documents with optional relational schemas.',
            reference: 'Wikipedia. (n.d.). MongoDB. Available at: https://en.wikipedia.org/wiki/MongoDB'
        },
        {
            number: '31',
            term: 'Root directory',
            description: 'is a the hierarchy file system used on a computer to organize files that contains all other directories and files on a system and is marked by a slash (/).',
            reference: 'Seobility. (n.d.). Root directory. Available at: https://www.seobility.net/en/wiki/Root_Directory'
        },
        {
            number: '32',
            term: 'Declarative management',
            description: 'refers to the class of tools that allow operators to declare a desired state of some system (be it a physical machine, EC2 VPC, IOS 15, an entire Google Cloud account, or anything else), and then allow the system to automatically compare that desired state to the present state, and then automatically update the managed system to match the declared state.',
            reference: 'Elhage, N. (2019). The architecture of declarative configuration management. Available at: https://blog.nelhage.com/post/declarative-configuration-management/'
        },
        {
            number: '33',
            term: 'HTTP',
            description: 'stands for "Hypertext Transfer Protocol" and is the protocol used to transfer data over the web. Also, it defines commands such as GET and POST, which are used to handle form submissions on websites.',
            reference: 'TechTerms.com. HTTP. Available at: https://techterms.com/definition/http'
        },
        {
            number: '34',
            term: 'Terraform',
            description: 'is an open-source tool and a Hashicorp-developed multi-cloud, infrastructure-as-code solution that uses the declarative Hashicorp Configuration Language to generates an execution plan, manage and then deploy it',
            reference: 'Unidevops. (2022). What is Terraform in DevOps? Available at: https://www.devopsuniversity.org/what-is-terraform-in-devops/'
        },
        {
            number: '35',
            term: 'Scripts',
            description: 'are used by the engineering teams as a language where instructions are provided for a run time environment as part of system administration',
            reference: 'Mannambeth, M. (2021). DevOps: Beginners Guide to Scripting. Available at: https://kodekloud.com/blog/devops-scripts/#'
        },
        {
            number: '36',
            term: 'Hashicorp Configuration Language (HCL)',
            description: 'is a toolkit for creating structured configuration languages that are both human- and machine-friendly, for use with command-line tools. It is  both a native syntax (inspired by libucl, nginx configuration, and others), intended to be pleasant to read and write for humans, and a JSON-based variant that is easier for machines to generate and parse.',
            reference: ' GitHub Inc. (n.d.). HCL. Available at: https://github.com/hashicorp/hcl'
        },
        {
            number: '37',
            term: 'Container registry',
            description: 'is a repository — or a collection of repositories — that stores container images, which includes all the components that make up an application.',
            reference: ' Snyk Limited. (n.d.). Container registry security: security concerns for using a container registry. Available at: https://snyk.io/learn/container-security/container-registry-security/'
        },
        {
            number: '38',
            term: 'RabbitMQ',
            description: 'is a messaging broker - an intermediary for messaging, which uses asynchronous, decoupling applications by separating sending and receiving data.',
            reference: 'RabbitMQ. (n.d.). What can RabbitMQ do for you? Available at: https://www.rabbitmq.com/features.html'
        },
        {
            number: '39',
            term: 'Variables',
            description: 'are fundamental constructs in every programming language. We use variables to store temporary values so that they can assist programming logic in simple as well as complex programs. But, in Terraform, we use them with function in the form of arguments, return values, and local variables. ',
            reference: 'Ninawe, S. (2023). How to Use Terraform Variables (Locals, Input, Output, Environment). Available at: https://spacelift.io/blog/how-to-use-terraform-variables'
        },
        {
            number: '40',
            term: 'Code repository',
            description: 'is a storage location for code and other software development assets, such as documentation, tests, and scripts. They are often used to manage and organize a software project/s codebase and collaborate with other project developers.',
            reference: 'Sonatype. (n.d.). What are Code Repositories? Available at: https://www.sonatype.com/launchpad/what-are-code-repositories'
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