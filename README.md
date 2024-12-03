# **Nx 20, Angular 18, Jest, and SonarQube Integration**

This repository showcases how to integrate **Nx**, **Angular**, **Jest**, and **SonarQube** for efficient testing and code quality analysis.

---

## **Steps Overview**

1. **Create an Nx Workspace**

   ```bash
   npx create-nx-workspace
   ```

2. **Update `package.json` Test Script**  
   Modify the test script:

   ```json
   "test": "nx run-many --target=test --all --skip-nx-cache --verbose"
   ```

3. **Enable Jest Coverage**  
   Update `jest.preset.ts`:

   ```javascript
   collectCoverage: true;
   ```

4. **Set Up SonarQube**

   - Run SonarQube using Docker:
     ```bash
     docker run -d --name sonarqube -p 9000:9000 sonarqube
     ```
   - Add `sonar-project.properties` to configure analysis.

5. **Merge Coverage Reports (For Multi-Library Projects)**  
   Add `merge-coverage.js` script to combine `lcov.info` files.  
   Update `test` script to include merging:

   ```json
   "test": "nx run-many --target=test --all && node merge-coverage.js"
   ```

6. **Run SonarQube Scanner**  
   Execute the scanner to analyze metrics:
   ```bash
   npx sonar-scanner
   ```

---

## **Detailed Guide**

For a complete step-by-step tutorial, refer to the [Medium article](https://ekrem-kocak.medium.com/nx-20-angular-18-jest-and-sonarqube-integration-guide-ac9836f93536).
