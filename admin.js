<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ChooseSA Admin</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="topbar">
      <div class="container nav">
        <div class="brand">
          <div class="brand-mark">S</div>
          <span>ChooseSA Admin</span>
        </div>
        <nav>
          <a href="index.html">Home</a>
        </nav>
      </div>
    </header>

    <main class="admin-page">
      <div class="container admin-layout">
        <section class="admin-panel">
          <div class="section-header narrow">
            <span class="eyebrow">Admin panel</span>
            <h2>Add a course</h2>
          </div>

          <form id="adminForm" class="application-form">
            <label>
              <span>Course title</span>
              <input type="text" id="courseTitle" required />
            </label>

            <label>
              <span>Institution</span>
              <input type="text" id="institution" required />
            </label>

            <label>
              <span>Type</span>
              <select id="courseType" required>
                <option value="University">University</option>
                <option value="College">College</option>
                <option value="TVET">TVET</option>
              </select>
            </label>

            <label>
              <span>Level</span>
              <select id="courseLevel" required>
                <option value="Certificate">Certificate</option>
                <option value="Diploma">Diploma</option>
                <option value="Degree">Degree</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
            </label>

            <label>
              <span>Field</span>
              <select id="courseField" required>
                <option>Business</option>
                <option>IT & Technology</option>
                <option>Health & Nursing</option>
                <option>Engineering</option>
                <option>Design & Media</option>
                <option>Education</option>
                <option>Agriculture</option>
                <option>Hospitality</option>
              </select>
            </label>

            <label>
              <span>Province</span>
              <select id="courseProvince" required>
                <option>Gauteng</option>
                <option>Western Cape</option>
                <option>KwaZulu-Natal</option>
                <option>Eastern Cape</option>
                <option>Free State</option>
                <option>Limpopo</option>
                <option>Mpumalanga</option>
                <option>North West</option>
                <option>Northern Cape</option>
              </select>
            </label>

            <label>
              <span>Description</span>
              <textarea id="courseDescription" rows="4" required></textarea>
            </label>

            <label>
              <span>Career paths (comma-separated)</span>
              <input type="text" id="courseCareers" placeholder="e.g. Accountant, Auditor" required />
            </label>

            <button type="submit" class="btn btn-primary">Save course</button>
            <p id="adminMessage" class="form-message" aria-live="polite"></p>
          </form>
        </section>

        <section class="admin-panel">
          <div class="section-header narrow">
            <span class="eyebrow">Course list</span>
            <h2>Current courses</h2>
          </div>
          <div id="adminCourseList" class="admin-list"></div>
        </section>
      </div>
    </main>

    <script src="admin.js"></script>
  </body>
</html>
