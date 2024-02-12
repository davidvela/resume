/* Define all the functions */
const setTitle = data => {
  // Set page title
  document.title = `${data.title} | ${data.name}`;
  document.querySelector('#profileName').innerHTML = data.name;
  document.querySelector('#profileSubTitle').innerHTML = data.sub_title;
  document.querySelector('#aboutIntro').innerHTML = data.about.intro;
};


const setProjects = projects => {
  const ul = document.querySelector('#projectList');
  projects.forEach(project => {
    const li = document.createElement('li');

    const projectHeader = document.createElement('div');
    projectHeader.className = 'project-header';

    const projectTitle = document.createElement('span');
    projectTitle.className = 'project-title';
    projectTitle.innerHTML = project.title;
    projectHeader.appendChild(projectTitle);

    const projectDuration = document.createElement('span');
    projectDuration.className = 'project-duration';
    projectDuration.innerHTML = project.duration;
    projectHeader.appendChild(projectDuration);

    li.appendChild(projectHeader);

    if (!!project.link) {
      const projectLink = document.createElement('span');
      projectLink.className = 'project-link';

      const a = document.createElement('a');
      a.href = project.link;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML = `${project.link}`;

      projectLink.appendChild(a);
      li.appendChild(projectLink);
    }

    const projectDesc = document.createElement('div');
    projectDesc.className = 'project-desc';
    projectDesc.innerHTML = project.desc;

    li.appendChild(projectDesc);

    ul.appendChild(li);
  });
};

function load_projects(lang='EN'){
  //console.log(lang);
  // Call functions to load profile
  if (lang=='EN') {
    profileData= profileData_EN; 
  }else if (lang=='DE'){
    profileData= profileData_DE; 
  }
  
  setTitle(profileData);
  setProjects(profileData.projects);
};
//  Entry Function, IIFE
(() => {
  var vlang = location.search.substring(1).split('=')[1];
  console.log(vlang);
  if( vlang !== 'DE' ){
    vlang = 'EN';
  }
  load_projects(vlang);
})();

/* testing: 
  file:///Users/davidvelatirado/Downloads/WBD/resume/index.html?lang='EN'
*/
