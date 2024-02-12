const profileData_DE = {
  title: "Resume",
  name: "David Vela Tirado",
  sub_title: "Software-/Lösungsingenieur",
  logoURL: "res_pp.gif",
  about: {
    profile_picture: "res_pp.gif",
    intro: `Ambitious and Innovative Software Architect with Professional Experience in
    App. development and ABAP (SAP). Passionate about New Technologies and Digital Transformation.`,
    contact: {
      email:   'david.vela.tirado@gmail.com',
      phone:   '+41 798660627',
      address: 'Matthofring 42 Luzern 6005, Switzerland'
    }
  },
  links: [
    //{ title: "Codepen", src: "https://codepen.io/" },
    { title: "Github", src: "https://github.com/davidvela" }
    ,{ title: "LinkedIn", src: "https://www.linkedin.com/in/davidvelatirado" }
    ,{ title: 'Twitter', src: 'https://twitter.com/David_VelaT' }
    // { title: 'HackerEarth', src: 'https://www.hackerearth.com/@' },
  ],
  education: [
    {
      alma: "Universidad de Alcala, Madrid, Spain",
      duration: 'Sept. 2008 - Jul. 2012',
      std: "Telematics Technical Engineering"
      //score: "71.00%"
      ,desc:   `This degree covers several areas in the sector of Computing and Electronic.
            Through this degree I had the opportunity to develop several programming skills, learn to manage
            networks and take on the role of a student representative in my course.`
    }
    ,{
      alma: "University of Portsmouth, Portsmouth, UK",
      duration: 'Sept. 2011 - Jun. 2012',
      std: "Exchange Programme in Electronic and Computing Engineering"
      //score: "89.80%"
      ,desc:   `This course was completed as part of my studies in Telematics Technical Engineering.
      I developed and presented my final project in addition to taking several subjects.
      Final Project:
      Online Gaming Traffic Evaluation through Developing Online Multiplayers Games.`
    }
    ,{
      alma: "Alonso Quijano, Toledo, Spain",
      duration: '2006 - 2008',
      std: 'Scientific and Technological Bachiller - A level equivalent, Institute of Higher Education'
      //score: "73.33%"
      ,desc:   ''
    }
  ],
  skills: [
    { category: "Cloud Platforms",
      topics: [ 'Azure', 'AWS', 'SAP', 'Dataiku' ]    }
    ,{ category: "Programming Languages",
      topics: ['ABAP', 'Python', 'JS', 'Scala', 'SQL'] }
    ,{ category: "Frameworks / Libraries",
      topics: [ 'SAPUI5', 'TensorFlow', 'Spark','D3JS','pandas' ]    }
    ,{ category: 'Methodologies',
      topics: [ 'OOP', 'SCRUM', 'Design Patterns', 'Agile', 'Waterfall' ]    }
   /* ,{ category: 'Languages',
      topics: [ 'English(EN)-Professional working proficiency', 'Spanish(ES)-Mother tongue', 'German(DE)-Working proficiency' ]    }
    */
    ,{ category: 'Soft-skills',
    topics: [ 'Good Communication', 'Leadership', 'Attention to Detail' ]    }
    ],
  projects: [
    /* {
      title: "Restaurant Review",
      duration: "June - Nov 2018",
      link: "https://github.com/imvpn22/restaurant-review-pwa",
      desc: `A web app to list, view and add reviews of restaurants.
      The app includes filtering based on location, cuisine, and rating.
      This project was a part of Udacity's <strong>Mobile Web Specialist</strong> nano degree program.
      Developed using <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>JavaScript</strong>
      with Progressive Web-Application standards including full-responsiveness,
      offline support, and improved accessibility.`
    }
    ,{
      title: "WhiteBoard",
      duration: "Jun - Aug 2017",
      link: "https://github.com/imvpn22/whiteboard",
      desc: `A simple <strong>web-app for collaborative brainstorming sessions</strong>.
      The app includes a real-time messaging and sketching platform for collaboration with Peers.
      It also has features to create groups(teams) and add/remove members.
      Developed using <strong>Node.js-Express</strong> with server-side-templating (EJS),
      <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>Socket.io</strong>.`
    }*/
  ],
  experiences: [
    {
      organization: 'MSD  Services AG, Luzern, Switzerland',
      title:   'Market Business Technologist',
      date: "Dec 2022 - Present",
      desc: `>>>>>>Developing applications for the <strong>SAP SD</strong> (Sales and Distribution) module.<br/>
      Solution Architect in the Cross-Application department integrating business applications
      and Processes in SAP and Non-SAP Systems with third-party solutions such as Microsoft Azure,
      Dynamics, iOS applications, Elasticsearch, Camos, SuccessFactors, RPA KRYON, Neptune, Alfresco,Software AG, SQL DBs and many others.
      Some of my tasks are:
      `,
      details: [  'Development, design, and maintenance of SAP-ABAP and SAPUI5 Apps and Web Services.'
      ,'Implementation of Interfaces between SAP and external systems though SAP PI and CPI. '
      ,'Integration of new tools and technologies: RPA, Web tools, APIs, (API Management); PBI '
      ,'Reporting and Data Science Projects.'
      ,'Support and coordinate Cloud Services and their lifecycle in SAP BTP and Microsoft Azure.'
    ]
    }
    ,{
      organization:'Schindler IT Services AG, Luzern, Switzerland',
      title:'SAP Consultant / Solution Architect',
      date: "May 2018 - Dec 2022",
      desc: `Developing applications for the <strong>SAP SD</strong> (Sales and Distribution) module.<br/>
            Solution Architect in the Cross-Application department integrating business applications
            and Processes in SAP and Non-SAP Systems with third-party solutions such as Microsoft Azure,
            Dynamics, iOS applications, Elasticsearch, Camos, SuccessFactors, RPA KRYON, Neptune, Alfresco,Software AG, SQL DBs and many others.
            Some of my tasks were:
      `,
      details: [  'Development, design, and maintenance of SAP-ABAP and SAPUI5 Apps and Web Services.'
        ,'Implementation of Interfaces between SAP and external systems though SAP PI and CPI. '
        ,'Integration of new tools and technologies: RPA, Web tools, APIs, (API Management); PBI '
        ,'Reporting and Data Science Projects.'
        ,'Support and coordinate Cloud Services and their lifecycle in SAP BTP and Microsoft Azure.'
      ]
    }
    ,{
      organization:'Atos IT, Holzminden, Germany',
      title:'SAP Consultant EHS & New Technologies',
      desc:   `Responsible for performing current state analysis, developing system requirements, designing and prototyping,',
              testing, training, defining support procedures and implementation. My major customer is one of the biggest
              chemical companies in the world and my task is to understand and develop solutions to optimize different processes.
      `,
      date:  'May 2015 - May 2018',
      details: [
        ,'Development, design and maintenance of SAP programs and SAPUI5'
        ,'Development of OData Web Services '
        ,'Researching the latest technology to offers solutions to our customer: IoT Big Data Analysis'
      ]
    }
    ,{
      organization:'Gicom GmbH, Cologne, Germany',
      title: 'iOS / SAP Software Developer',
      desc: 'Developing software that improves the purchase process by aiding the communication and negotiation between suppliers and retailers through the means of managing contracts and conditions.',
      date: "Nov. 2012 - Nov. 2014",
      details: [ 
        'Development, design and maintenance of SAP programs.'
        ,'Development of several functionalities for iOS apps.'
        ,'Providing Front - End web services to connect both environments (iOS and SAP).'
      ]
    }
  ],
  certifications: [
    {
      desc: `<strong>Deep Learning Nanodegree Foundation</strong> by <strong>Udacity</strong>.
      (<a target='_blank' rel='noreferrer' href='https://confirm.udacity.com/'>link</a>)`
      + `This nanodegree was able to give me a strong and solid foundation to get started
        in the rapid world of deep learning. I had the opportunity to develop my own neural network from the
        ground up, classify images using CNN, generate a Simpson Script using RNN, built a translator using Sequence to Sequence
        generate faces with GAN and much more.`,
      date: "07.2017-10.2017"
    }    
    ,{
      desc: `Second best Student Transcript in the Study of: <strong>Telecommunications Technical Engineering:  specialty in Telematics</strong>
       by <strong>Universidad de Alcala</strong>.
      (<a target='_blank' rel='noreferrer' href='https://confirm.udacity.com/'>link</a>)`,
      date: "2013"
    }
    ,{
      desc: `<strong>School Top Project Prize - Exchange Programme</strong> by <em> University of Portsmouth (UK)</em>. 
       (<a target='_blank' rel='noreferrer' href='https://google.com'>link</a>)`,
      date: "2012"
    }
  ],
  events: []
};

