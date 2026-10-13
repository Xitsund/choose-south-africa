const STORAGE_KEY = 'choose_sa_courses';
const defaultCourses = [
  {
    id: 1,
    title: 'Bachelor of Commerce in Accounting',
    institution: 'University of Johannesburg',
    type: 'University',
    level: 'Degree',
    field: 'Business',
    province: 'Gauteng',
    description: 'A strong commerce degree designed for students interested in finance, auditing, tax, and business management.',
    careers: ['Accountant', 'Auditor', 'Financial Analyst'],
    skills: ['Problem solving', 'Business & leadership', 'Numbers'],
    idealFor: 'Students who enjoy working with numbers and making business decisions.',
    entryRequirements: 'Matric with strong results in Mathematics and English.'
  },
  {
    id: 2,
    title: 'Bachelor of Science in Computer Science',
    institution: 'University of the Witwatersrand',
    type: 'University',
    level: 'Degree',
    field: 'IT & Technology',
    province: 'Gauteng',
    description: 'Develop software, solve technical problems, and learn programming, systems design, and data analysis.',
    careers: ['Software Developer', 'Systems Analyst', 'Data Scientist'],
    skills: ['Technology & innovation', 'Problem solving', 'Logic'],
    idealFor: 'Students who enjoy logic, coding, apps, and digital problem solving.',
    entryRequirements: 'Matric mathematics and science are strongly recommended.'
  }
];

function getCourses() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultCourses));
    return [...defaultCourses];
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length ? parsed : [...defaultCourses];
  } catch (error) {
    return [...defaultCourses];
  }
}

function saveCourses(courses) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
}

function renderAdminCourses() {
  const list = document.getElementById('adminCourseList');
  if (!list) return;

  const courses = getCourses();
  list.innerHTML = '';

  courses.forEach((course) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'admin-item';
    wrapper.innerHTML = `
      <div>
        <h4>${course.title}</h4>
        <p>${course.institution} • ${course.type} • ${course.level}</p>
      </div>
      <button type="button" data-id="${course.id}">Delete</button>
    `;

    const button = wrapper.querySelector('button');
    button.addEventListener('click', () => {
      const updated = getCourses().filter((item) => item.id !== course.id);
      saveCourses(updated);
      renderAdminCourses();
    });

    list.appendChild(wrapper);
  });
}

function handleAdminSubmit(event) {
  event.preventDefault();
  const title = document.getElementById('courseTitle').value.trim();
  const institution = document.getElementById('institution').value.trim();
  const type = document.getElementById('courseType').value;
  const level = document.getElementById('courseLevel').value;
  const field = document.getElementById('courseField').value;
  const province = document.getElementById('courseProvince').value;
  const description = document.getElementById('courseDescription').value.trim();
  const careersText = document.getElementById('courseCareers').value.trim();

  if (!title || !institution || !description || !careersText) {
    const message = document.getElementById('adminMessage');
    if (message) message.textContent = 'Please complete all required fields.';
    return;
  }

  const courses = getCourses();
  const newCourse = {
    id: Date.now(),
    title,
    institution,
    type,
    level,
    field,
    province,
    description,
    careers: careersText.split(',').map((item) => item.trim()).filter(Boolean),
    skills: [field, 'Problem solving', 'Communication'],
    idealFor: 'Added by admin for student guidance.',
    entryRequirements: 'Requirements depend on the institution and course.'
  };

  saveCourses([newCourse, ...courses]);
  renderAdminCourses();

  event.currentTarget.reset();
  const message = document.getElementById('adminMessage');
  if (message) message.textContent = 'Course saved successfully.';
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('adminForm');
  if (form) {
    form.addEventListener('submit', handleAdminSubmit);
  }
  renderAdminCourses();
});
