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
        <>13 years as a Software Engineer leveraging cloud-native services and open-source technology stacks to implement software systems.</>,
        <>3 years directly managing junior engineers and cross-functional relationships between internal and external clients.</>,
        <>Led development of key platforms that collectively serve &gt; 15M monthly users for brands including Eurofins Genomics, Firestone, General Electric, Holiday World, Home Depot, and Pillsbury.</>,
        <>In business 13 years as an entrepreneur and freelance engineer, managing connections with subcontractors and vendors.</>
    ],
    skillsets: [{
        category: <>Management:</>,
        skills  : <>Agile, Scrum, Extreme Programming.</>
    }, {
        category: <>Processes:</>,
        skills  : <>Root Cause Analysis, Six Sigma, Process Engineering, Product Development.</>    
    }, {
        category: <>Languages:</>,
        skills  : <>JavaScript, TypeScript, HTML5/CSS3, Python, Shell, PHP, Scheme, Java.</>
    }, {
        category: <>Libraries:</>,
        skills  : <>Node.js, React, Redux, Express, Sass, Vue.</>
    }, {
        category: <>Frameworks:</>,
        skills  : <>Next.js, Laravel, Django.</>
    }, {
        category: <>Testing:</>,
        skills  : <>Cypress, Enzyme, Jest.</>
    }, {
        category: <>Databases:</>,
        skills  : <>Firebase, MySQL, Redis, RDF.</>
    }, {
        category: <>Source Control:</>,
        skills  : <>Git, Subversion, Mercurial, Bazaar.</>
    }, {
        category: <>DevOps:</>,
        skills  : <>Apache, AWS, Circle CI, Docker, Linux.</>
    }],
    experiences: [{
        role      : "Solutions Architect",
        startDate : "2011",
        endDate   : null,
        employer  : "Web Architecture Solutions",
        location  : "Seattle, WA",
        highlights: [
            <>AI/ML research performed at Indiana University published with dozens of citations.</>,
            <>Delivered microsite to unveil Eurofins&apos; oligonucleotide synthesis technology, which drove 35% more traffic to the primary site on launch.</>,
            <>Performed comprehensive content, performance, and SEO audits across the Eurofins portfolio of sites, which sped up content development time by 10%, improved load times by 20%, and lifted placement in organic search results.</>,
            <>Developed proposals for brands including Four Roses Bourbon to demonstrate possible opportunities and use-cases of user-generated content.</>,
            <>Maintained CRM system for corporate segment of Waste Management&apos;s &gt; 20 million customers.</>,
            <>Built a fundraising portal for The Salvation Army that helped boost donations by 15% that year.</>
        ]
    }, {
        role      : "Senior Web Application Developer",
        startDate : "2019",
        endDate   : "2021",
        employer  : "1stMILE",
        location  : "Redmond, WA",
        highlights: [
            <>Led front-end engineering and testing of financial products used in over 1,700 stores nationwide.</>,
            <>Interviewed, trained, and mentored a diverse software development team, and advocated for an organizational commitment to career development.</>,
            <>Integrated analytics to track customer journey across suite of 5 applications, and aggregated data into summary reports for white label partners.</>,
            <>Spearheaded development of internal best practices, wrote documentation, and created training modules, which cut the training time for junior engineers by 50%.</>,
            <>Collaborated with groups of designers, product developers, and data architects to anticipate front-end API needs weeks earlier.</>,
            <>Liaised with executives to coordinate integration of credit applications and onboard 4 key strategic partners.</>,
            <>Re-architected credit application integrations, which improved developer productivity by 4x.</>,
            <>Implemented a consistent component architecture, which reduced code duplication by 20%.</>,
            <>Refactored flagship web application, which eliminated 50% of unnecessary code.</>,
            <>Abstracted automation scripts to simplify deployment workflow, which saved 10+ hours of development per week.</>
        ]
    }, {
        role      : "Senior Web Developer",
        startDate : "2014",
        endDate   : "2015",
        employer  : "DBS Interactive",
        location  : "Louisville, KY",
        highlights: [
            <>Directed front-end development of content management systems for over a dozen clients.</>,
            <>Crafted infographics for brands including Maker&apos;s Mark and The Kentucky Derby, which increased traffic to primary domains by 65% &ndash; 75% on launch.</>,
            <>Managed Big Ass Fans&apos; ecommerce migration, which limited storefront load times by 10%.</>,
            <>Engineered the first ecommerce storefront for the Holiday World theme park.</>,
            <>Wrote PHP scripts to re-engineer the e-blast workflow for Humana, which increased turnaround 5x.</>,
            <>Launched microsite to unveil the first launched wing roller coaster in the U.S.</>
        ]
    }],
    education: [{
        major    : "Economics",
        startDate: "2015",
        endDate  : "2016",
        school   : "University of Louisville",
        location : "Louisville, KY"
    }, {
        major    : "Computer Science and Mathematics",
        startDate: "2008",
        endDate  : "2010",
        school   : "Indiana University Bloomington",
        location : "Bloomington, IN"
    }]
};

export default resume;