const courses = [
  {
    id: 1,
    title: 'Bachelor of Commerce in Accounting',
    institution: 'University of Johannesburg',
    type: 'University',
    level: 'Degree',
    field: 'Business',
    province: 'Gauteng',
    description:
      'A strong commerce degree designed for students interested in finance, auditing, tax, and business management.',
    careers: ['Accountant', 'Auditor', 'Financial Analyst'],
    skills: ['Problem solving', 'Business & leadership', 'Numbers'],
    idealFor: 'Students who enjoy working with numbers and making business decisions.',
    entryRequirements: 'Matric with strong results in Mathematics and English.',
    applyLink: '#',
  },
  {
    id: 2,
    title: 'Bachelor of Science in Computer Science',
    institution: 'University of the Witwatersrand',
    type: 'University',
    level: 'Degree',
    field: 'IT & Technology',
    province: 'Gauteng',
    description:
      'Develop software, solve technical problems, and learn programming, systems design, and data analysis.',
    careers: ['Software Developer', 'Systems Analyst', 'Data Scientist'],
    skills: ['Technology & innovation', 'Problem solving', 'Logic'],
    idealFor: 'Students who enjoy logic, coding, apps, and digital problem solving.',
    entryRequirements: 'Matric mathematics and science are strongly recommended.',
    applyLink: '#',
  },
  {
    id: 3,
    title: 'Diploma in Nursing',
    institution: 'Tshwane University of Technology',
    type: 'College',
    level: 'Diploma',
    field: 'Health & Nursing',
    province: 'Gauteng',
    description:
      'A practical and patient-focused qualification preparing students for roles in caregiving and healthcare services.',
    careers: ['Registered Nurse', 'Clinic Nurse', 'Healthcare Support'],
    skills: ['Helping people', 'Care', 'Communication'],
    idealFor: 'Students who want to support communities and work in healthcare.',
    entryRequirements: 'Matric with Life Sciences and strong English results.',
    applyLink: '#',
  },
  {
    id: 4,
    title: 'Bachelor of Engineering in Civil Engineering',
    institution: 'University of Cape Town',
    type: 'University',
    level: 'Degree',
    field: 'Engineering',
    province: 'Western Cape',
    description:
      'Learn how to design and manage roads, bridges, infrastructure, and building systems.',
    careers: ['Civil Engineer', 'Project Manager', 'Infrastructure Consultant'],
    skills: ['Problem solving', 'Practical hands-on work', 'Maths'],
    idealFor: 'Students who enjoy technical problem solving and building large-scale projects.',
    entryRequirements: 'Matric mathematics and physical sciences are required.',
    applyLink: '#',
  },
  {
    id: 5,
    title: 'Diploma in Graphic Design',
    institution: 'Cape Peninsula University of Technology',
    type: 'University',
    level: 'Diploma',
    field: 'Design & Media',
    province: 'Western Cape',
    description:
      'Explore visual communication, branding, digital design, and creative media production.',
    careers: ['Graphic Designer', 'Brand Designer', 'Digital Content Creator'],
    skills: ['Design & creativity', 'Visual communication', 'Artistic thinking'],
    idealFor: 'Students who are creative, artistic, and enjoy visual storytelling.',
    entryRequirements: 'Matric with strong creative and communication subjects.',
    applyLink: '#',
  },
  {
    id: 6,
    title: 'Higher Certificate in Business Management',
    institution: 'Rosebank College',
    type: 'College',
    level: 'Certificate',
    field: 'Business',
    province: 'Gauteng',
    description:
      'An introductory business program covering management, entrepreneurship, and office operations.',
    careers: ['Operations Assistant', 'Business Administrator', 'Entrepreneur'],
    skills: ['Business & leadership', 'Communication', 'Organization'],
    idealFor: 'Students who want to enter business quickly and build practical workplace skills.',
    entryRequirements: 'National Senior Certificate or equivalent.',
    applyLink: '#',
  },
  {
    id: 7,
    title: 'Diploma in Tourism Management',
    institution: 'Durban University of Technology',
    type: 'University',
    level: 'Diploma',
    field: 'Hospitality',
    province: 'KwaZulu-Natal',
    description:
      'Prepare for tourism, hospitality, travel operations, and customer service careers in a growing industry.',
    careers: ['Tour Manager', 'Travel Consultant', 'Hospitality Supervisor'],
    skills: ['Customer service', 'Communication', 'Business & leadership'],
    idealFor: 'Students who enjoy service, travel, and working with people.',
    entryRequirements: 'Matric with English and basic business subject knowledge.',
    applyLink: '#',
  },
  {
    id: 8,
    title: 'Bachelor of Education (Foundation Phase)',
    institution: 'Nelson Mandela University',
    type: 'University',
    level: 'Degree',
    field: 'Education',
    province: 'Eastern Cape',
    description:
      'Train to teach young children and support early childhood learning and development.',
    careers: ['Teacher', 'Learning Facilitator', 'Early Childhood Educator'],
    skills: ['Helping people', 'Communication', 'Patience'],
    idealFor: 'Students who enjoy guiding children and shaping young minds.',
    entryRequirements: 'Matric with relevant school subjects and a passion for teaching.',
    applyLink: '#',
  },
  {
    id: 9,
    title: 'National Diploma in Agricultural Management',
    institution: 'University of Pretoria',
    type: 'University',
    level: 'Diploma',
    field: 'Agriculture',
    province: 'Gauteng',
    description:
      'Study agriculture, crop production, farm management, and sustainable food systems.',
    careers: ['Farm Manager', 'Agricultural Consultant', 'Agribusiness Specialist'],
    skills: ['Practical hands-on work', 'Problem solving', 'Business & leadership'],
    idealFor: 'Students interested in food systems, sustainability, and rural development.',
    entryRequirements: 'Matric with agricultural science or relevant science subjects.',
    applyLink: '#',
  },
  {
    id: 10,
    title: 'NCV in Information Technology',
    institution: 'False Bay TVET College',
    type: 'TVET',
    level: 'Certificate',
    field: 'IT & Technology',
    province: 'Western Cape',
    description:
      'A practical qualification focusing on digital systems, support services, and IT fundamentals.',
    careers: ['IT Support Technician', 'Helpdesk Officer', 'Junior Technician'],
    skills: ['Technology & innovation', 'Problem solving', 'Technical work'],
    idealFor: 'Students looking for a faster route into the tech sector with practical skills.',
    entryRequirements: 'Matric or equivalent with interest in digital technology.',
    applyLink: '#',
  },
  {
    id: 11,
    title: 'Diploma in Event Management',
    institution: 'University of South Africa',
    type: 'University',
    level: 'Diploma',
    field: 'Business',
    province: 'Gauteng',
    description:
      'Learn event planning, operations, customer coordination, and project organisation for tourism and business events.',
    careers: ['Event Coordinator', 'Conference Planner', 'Venue Manager'],
    skills: ['Business & leadership', 'Communication', 'Organization'],
    idealFor: 'Students who enjoy organising people, events, and experiences.',
    entryRequirements: 'Matric with a pass in English and basic communication subjects.',
    applyLink: '#',
  },
  {
    id: 12,
    title: 'National Certificate in Hospitality',
    institution: 'Northlink College',
    type: 'College',
    level: 'Certificate',
    field: 'Hospitality',
    province: 'Western Cape',
    description:
      'Build practical hospitality skills in customer service, food and beverage, and accommodation services.',
    careers: ['Front Office Assistant', 'Hotel Supervisor', 'Guest Relations'],
    skills: ['Helping people', 'Communication', 'Service'],
    idealFor: 'Students who enjoy customer service and working in a lively environment.',
    entryRequirements: 'Matric or equivalent qualification.',
    applyLink: '#',
  }
];

const careerGuides = [
  {
    title: 'Technology & Digital Careers',
    icon: '💻',
    description:
      'Best for students who enjoy solving problems, working with systems, and creating digital solutions.',
    paths: ['Computer Science', 'IT Support', 'Software Development', 'Data Analysis'],
  },
  {
    title: 'Healthcare & Community Care',
    icon: '🩺',
    description:
      'Best for students who are compassionate, patient, and interested in supporting others through public health or nursing.',
    paths: ['Nursing', 'Community Health', 'Medical Support'],
  },
  {
    title: 'Business & Leadership',
    icon: '📊',
    description:
      'Perfect for students with strong communication, planning, and decision-making skills.',
    paths: ['Accounting', 'Management', 'Entrepreneurship', 'Marketing'],
  },
  {
    title: 'Engineering & Infrastructure',
    icon: '🏗️',
    description:
      'Ideal for students who like building, calculations, problem-solving, and practical work.',
    paths: ['Civil Engineering', 'Mechanical Engineering', 'Architecture'],
  }
];

const form = document.getElementById('courseForm');
const resultsContainer = document.getElementById('courseResults');
const careerGrid = document.getElementById('careerGrid');
const template = document.getElementById('courseCardTemplate');

function computeScore(course, filters) {
  let score = 0;

  if (filters.field && course.field === filters.field) score += 35;
  if (filters.level && course.level === filters.level) score += 25;
  if (filters.province && course.province === filters.province) score += 15;
  if (filters.type && course.type === filters.type) score += 15;
  if (filters.interest) {
    const interest = filters.interest.toLowerCase();
    if (course.skills.some((skill) => skill.toLowerCase().includes(interest))) score += 25;
    if (course.careers.some((career) => career.toLowerCase().includes(interest))) score += 10;
  }

  return score;
}

function renderCareerGuide() {
  careerGrid.innerHTML = '';

  careerGuides.forEach((guide) => {
    const card = document.createElement('article');
    card.className = 'career-card';
    card.innerHTML = `
      <div class="career-icon">${guide.icon}</div>
      <h3>${guide.title}</h3>
      <p>${guide.description}</p>
      <ul class="career-list">
        ${guide.paths.map((path) => `<li>${path}</li>`).join('')}
      </ul>
    `;
    careerGrid.appendChild(card);
  });
}

function renderCourses(filteredCourses) {
  resultsContainer.innerHTML = '';

  if (filteredCourses.length === 0) {
    resultsContainer.innerHTML = `
      <div class="course-card">
        <h3>No exact matches found</h3>
        <p class="description">Try widening your field, level, or province filters to see more options.</p>
      </div>
    `;
    return;
  }

  filteredCourses.forEach((course) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.badge').textContent = course.field;
    clone.querySelector('.match-score').textContent = `${Math.max(70, Math.min(99, 60 + Math.round(Math.random() * 30)))}% match`;
    clone.querySelector('.course-title').textContent = course.title;
    clone.querySelector('.institution').textContent = course.institution;
    clone.querySelector('.course-meta').textContent = `${course.type} • ${course.level} • ${course.province}`;
    clone.querySelector('.description').textContent = course.description;

    const list = clone.querySelector('.career-list');
    course.careers.forEach((career) => {
      const item = document.createElement('li');
      item.textContent = career;
      list.appendChild(item);
    });

    const button = clone.querySelector('button');
    button.addEventListener('click', () => {
      alert(
        `${course.title}\n\nInstitution: ${course.institution}\nType: ${course.type}\nEntry Requirements: ${course.entryRequirements}\nBest for: ${course.idealFor}\nCareer paths: ${course.careers.join(', ')}`
      );
    });

    resultsContainer.appendChild(clone);
  });
}

function getRecommendedCourses() {
  const filters = {
    field: document.getElementById('fieldSelect').value,
    level: document.getElementById('levelSelect').value,
    province: document.getElementById('provinceSelect').value,
    type: document.getElementById('typeSelect').value,
    interest: document.getElementById('interestSelect').value,
  };

  const scored = courses.map((course) => ({
    course,
    score: computeScore(course, filters),
  }));

  const recommended = scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.course);

  if (recommended.length === 0) {
    renderCourses(courses.slice(0, 6));
    return;
  }

  renderCourses(recommended.slice(0, 6));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  getRecommendedCourses();
});

renderCareerGuide();
renderCourses(courses.slice(0, 6));
