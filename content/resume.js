import { getCurrentYear } from "../util";

const startYear         = 2011;
const currentYear       = getCurrentYear();
const yearsOfExperience = currentYear - startYear;

const resume = {
    pdf            : "Ariel-Pettyjohn_Resume.pdf",
    firstName      : "Ariel",
    lastName       : "Pettyjohn",
    photo          : "photo.png",
    title          : "Software Engineer",
    location       : "Seattle, WA",
    pointsOfContact: [{
        href        : "tel:+14255432271",
        text        : "Phone",
        src         : "phone.png"
    }, {
        href        : "mailto:ariel.pettyjohn@gmail.com;me@ariel.pettyjohn.com",
        text        : "Email",
        src         : "email.png"
    }, {
        href        : "http://www.linkedin.com/in/arielpettyjohn",
        externalLink: true,
        text        : "LinkedIn",
        src         : "linkedin.png"
    }, {
        href        : "https://github.com/ariel-pettyjohn",
        externalLink: true,
        text        : "GitHub",
        src         : "github.png"
    }],
    summary: [
        <>{yearsOfExperience} years as a Software Engineer leveraging cloud-native services and open-source technology stacks to implement software systems</>,
        "3 years directly managing junior engineers and cross-functional relationships between internal and external clients",
        <>Led development of key platforms that collectively serve &gt; 15M monthly users for brands including Eurofins Genomics, Firestone, General Electric, Home Depot, and Pillsbury</>,
        <>In business {yearsOfExperience} years as an entrepreneur and freelance engineer, managing connections with subcontractors and vendors</>
    ],
    skillsets: [{
        category: "Management",
        skills  : "Agile, Scrum, Extreme Programming"
    }, {
        category: "Processes",
        skills  : "Root Cause Analysis, Six Sigma, Process Engineering, Product Development"
    }, {
        category: "Languages",
        skills  : "JavaScript, TypeScript, HTML5/CSS3, Python, Shell, PHP, Scheme, Java"
    }, {
        category: "Libraries",
        skills  : "Node.js, React, Redux, Express, Sass, Vue"
    }, {
        category: "Frameworks",
        skills  : "Next.js, Laravel, Django"
    }, {
        category: "Testing",
        skills  : "Cypress, Enzyme, Jest"
    }, {
        category: "Databases",
        skills  : "Firebase, MySQL, Redis, RDF"
    }, {
        category: "Source Control",
        skills  : "Git, Subversion, Mercurial, Bazaar"
    }, {
        category: "DevOps",
        skills  : "Apache, AWS, Circle CI, Docker, Linux"
    }],
    experiences: [{
        role     : "Freelance Solutions Architect",
        startDate: "2011",
        endDate  : null,
        employer : "Web Architecture Solutions",
        location : "Seattle, WA",
        projects : [{
            project      : "Computational Biology Research Lab at Indiana University",
            highlights: [
                "Built models to compare behavior of Gaussian vs. uniform noise in high-dimensional space",
                "Mined PubMed data in order to augment then limited API",
                "Implemented algorithm to rank academic departments by relevant citation count"
            ]
        }, {
            project      : "Eurofins Genomics",
            highlights: [
                "Delivered microsite to unveil oligonucleotide synthesis technology, driving 35% more traffic to primary site on launch",
                "Performed comprehensive content and SEO audits across portfolio of sites, reducing content development time by 10% and lifting placement in organic search results",
                "Conducted performance audit for genomics website, reducing page load times by 20%",
            ]
        }, {
            project      : "Four Roses Bourbon",
            highlights: [
                "Developed proposal to demonstrate possible opportunities and use-cases of user-generated content"
            ]
        }, {
            project      : "Galen College of Nursing",
            highlights: [
                "Engineered custom intranet using Joomla and LDAP to automatically generate user groups and synchronize authenticated users between Active Directory and CMS"
            ]
        }, {
            project      : "General Electric",
            highlights: [
                "Developed strategic partner microsites for Home Depot and Pillsbury",
                "Generated quality assurance reports on broken links, 404s, and unused resources",
                "Oversaw and debugged soft launch of responsive GE Appliances website"
            ]
        }, {
            project      : "Green2Sustainable",
            highlights: [
                "Debugged migration from Apache and Django to Node.js and Backbone.js",
                "Implemented improved user profile features"
            ]
        }, {
            project      : "Internet Ontology Project at Indiana University",
            highlights: [
                "Performed AI/ML research",
                "Migrated relational MySQL database to RDF triplestore",
                "Developed ISO-compliant MySQL datetime schema",
                "Built web application to dynamically compare ontology terms",
                "Upgraded and maintained NLP models",
                "Implemented algorithm to search by ontological criteria",
                "Published cited technical presentation"
            ]
        }, {
            project      : "The Salvation Army",
            highlights: [
                "Scripted animations and events for holiday-themed fundraising portal, boosting donations by 15% that season"
            ]
        }, {
            project      : "Waste Management",
            highlights: [
                "Maintained CRM system for corporate segment of over 20 million customers"
            ]
        }]
    }, {
        role     : "Senior Web Application Developer",
        startDate: "2019",
        endDate  : "2021",
        employer : "1stMILE",
        location : "Redmond, WA",
        highlights : [
            "Led front-end engineering and testing of financial products used in 1,700 stores nationwide",
            "Interviewed, trained, and mentored a diverse software engineering team, and advocated for an organizational commitment to career development",
            "Integrated analytics to track customer journey across suite of 5 applications, and aggregated data into summary reports for white label partners",
            "Spearheaded development of internal best practices, wrote documentation, and created training modules, reducing training time for junior engineers by 50%",
            "Collaborated with groups of designers, product developers, and data architects to anticipate front-end API needs",
            "Coordinated with executives to coordinate integration of credit applications and onboard 4 key strategic partners",
            "Re-architected credit application integrations, improving developer productivity by 4x",
            "Implemented a consistent component architecture, reducing cross-application code duplication by 20%",
            "Refactored flagship web application, eliminating 50% of unnecessary code",
            "Abstracted Bash automation scripts to simplify deployment workflow, saving 10+ hours of development time per week"
        ]
    }, {
        role     : "Senior Web Developer",
        startDate: "2014",
        endDate  : "2015",
        employer : "DBS Interactive",
        location : "Louisville, KY",
        highlights : [
            "Directed front-end development of websites and CMS integration for clients including Hensley Manufacturing, Stonestreet Farms, and The Voice-Tribune newspaper",
            <>Crafted infographics for brands including Maker&apos;s Mark and The Kentucky Derby, increasing traffic to their respective primary domains by 70% on launch</>,
            <>Managed Big Ass Fans&apos; ecommerce migration to Magento, reducing storefront load times by 10%</>,
            "Engineered first ecommerce storefront for Holiday World theme park",
            "Wrote custom PHP script to inline CSS for Big Ass Fans and Humana eblasts, increasing turnaround 5x",
            "Launched Holiday World microsite to unveil first launched wing roller coaster in U.S."
        ]
    }],
    education: [{
        major    : "Economics",
        startDate: "2015",
        endDate  : "2016",
        school   : "University of Louisville",
        location : "Louisville, KY",
        highlights : [
            "Completed 1 year as Economics major",
            "Maintained 3.8 GPA",
            "Academic writing featured as example in course syllabus"
        ]
    }, {
        major    : "Computer Science and Mathematics",
        startDate: "2008",
        endDate  : "2010",
        school   : "Indiana University Bloomington",
        location : "Bloomington, IN",
        highlights : [
            "Completed 2 years as Computer Science and Mathematics dual major",
            "Inaugural Director Informatics Student Association",
            "Undergraduate Instructor Introduction to Informatics",
            <>Gibbs Scholarship (2008 &ndash; 2010)</>, 
            "Undergraduate Research Scholarship (2010)", 
            "Alpha Lambda Delta", 
            "Phi Eta Sigma", 
            "National Society of Collegiate Scholars"
        ]
    }]
};

export default resume;