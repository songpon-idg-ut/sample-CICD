# 🚀 Angular CI/CD: SonarQube & Robot Framework

โปรเจกต์นี้เป็นตัวอย่างการทำ **Automated Pipeline** สำหรับ Angular Application โดยเน้นไปที่การตรวจสอบคุณภาพโค้ด (Code Quality) และการทดสอบระดับ Acceptance Test (E2E) แบบอัตโนมัติ

## 🛠 Tech Stack

* **Frontend:** Angular (latest)
* **CI/CD:** GitHub Actions
* **Static Analysis:** SonarQube
* **Automation Testing:** Robot Framework (SeleniumLibrary)

---

## 🏗 CI/CD Workflow Overview

Workflow จะทำงานโดยอัตโนมัติเมื่อมีการ `push` หรือสร้าง `Pull Request` ไปยัง Branch `main` และ `develop`:

1. **Code Analysis (SonarQube):** สแกนโค้ดเพื่อหา Bug, Vulnerabilities, และ Code Smells
2. **Build Stage:** ติดตั้ง Dependencies และทำการ Build Angular ในโหมด Production
3. **Automated Testing (Robot Framework):**
* จำลองสภาพแวดล้อมด้วยการรัน Web Server
* รัน Test Cases แบบ Headless Mode บน Chrome
* จัดเก็บ Report ที่ได้จากการทดสอบเป็น Artifact



---

## ⚙️ Prerequisites Setup

### 1. SonarQube Configuration

ตรวจสอบให้แน่ใจว่าได้ตั้งค่า `sonar-project.properties` ไว้ที่ Root folder:

```properties
sonar.projectKey=your-project-key
sonar.sources=src
sonar.exclusions=**/node_modules/**,**/*.spec.ts
sonar.typescript.lcov.reportPaths=coverage/lcov.info

```

### 2. GitHub Secrets

ต้องเพิ่มค่าเหล่านี้ใน Repository ของคุณ (**Settings > Secrets > Actions**):

* `SONAR_TOKEN`: Generate จากหน้า Security ใน SonarQube
* `SONAR_HOST_URL`: เช่น `https://sonarqube.yourdomain.com`

---

## 🧪 Running Locally

### Angular Development

```bash
npm install
ng serve

```

### Robot Framework

คุณต้องติดตั้ง Python และ Robot Framework Libraries:

```bash
pip install robotframework robotframework-seleniumlibrary
# รันเทส (ตรวจสอบว่า Angular กำลังรันอยู่)
robot tests/robot/

```

---

## 📁 Project Structure

```text
├── .github/workflows/    # CI/CD pipeline definitions
├── src/                  # Angular source code
├── tests/
│   └── robot/            # Robot Framework .robot files
├── sonar-project.properties
├── package.json
└── README.md

```

---

## 📊 Reports & Artifacts

เมื่อ Workflow ทำงานเสร็จสิ้น คุณสามารถเข้าไปตรวจสอบผลลัพธ์ได้ที่:

* **SonarQube Dashboard:** เพื่อดูรายงาน Code Quality อย่างละเอียด
* **GitHub Actions Artifacts:** ดาวน์โหลดไฟล์ `robot-reports` เพื่อดู `report.html` และ `log.html` จากการเทส

---