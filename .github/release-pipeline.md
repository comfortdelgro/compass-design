# Project GitHub Actions Workflows

## Section 1: Introduction to GitHub Actions Workflows

This section introduces the three GitHub Actions workflow files (`deploy-site.yml`, `release-sit.yml`, and `releases.yml`) used in our project repository. These workflows automate deployment processes and manage releases, ensuring efficient development practices and seamless delivery of updates.

### Workflows Overview

1. **deploy-site.yml**
   - **Purpose**: Deploy the project website to GitHub Pages.
   - **Trigger**: Runs on `push` events to the `main` branch.
   - **Concurrency**: Uses `${{ github.workflow }}-${{ github.ref }}`.
   - **Key Steps**:
     - Checkout repository.
     - Setup Git user for bot.
     - Setup PNPM environment.
     - Setup NodeJS version 18.
     - Install project dependencies.
     - Build libraries and the website.
     - Deploy to GitHub Pages (`peaceiris/actions-gh-pages@v3`).

2. **release-sit.yml**
   - **Purpose**: Automate deployment tasks related to the project site.
   - **Trigger**: Also runs on `push` events to the `main` branch.
   - **Concurrency**: Uses `${{ github.workflow }}-${{ github.ref }}`.
   - **Key Steps**: Identical to `deploy-site.yml`.
   - **Deployment**: Utilizes `peaceiris/actions-gh-pages@v3` for GitHub Pages deployment.

3. **releases.yml**
   - **Purpose**: Manage project releases and versioning.
   - **Trigger**: Runs on `push` events to the `main` branch.
   - **Concurrency**: Uses `${{ github.workflow }}-${{ github.ref }}`.
   - **Key Steps**:
     - Checkout repository.
     - Setup Git user for bot.
     - Setup PNPM environment.
     - Setup NodeJS version 18.
     - Install project dependencies.
     - Build project artifacts.
     - Create release pull requests or publish using `changesets/action@v1`.

## Section 2: Steps to Release a New Version

This section outlines the steps required to release a new version of our project using `pnpm changeset`.

### Steps to Release a New Version

1. **Merge `develop` into `main` branch**:
   - Ensure all features and fixes are merged from the `develop` branch into `main` using a pull request (PR).

2. **Run `pnpm changeset` to Create Changeset**:
   - Execute `pnpm changeset` command locally to generate a changeset for the new version. This step allows you to specify and document the changes made since the last release.

3. **Push Changeset to `main` Branch**:
   - Push the generated changeset to the `main` branch.

4. **GitHub Actions Workflow Execution**:
   - GitHub Actions (`releases.yml`) will automatically trigger on `push` events to the `main` branch.

5. **Verify Deployment (if applicable)**:
   - For deployment (`deploy-site.yml` and `release-sit.yml`), verify the deployment to GitHub Pages (`https://<username>.github.io/<repository>`).

6. **Review and Manage Release PRs**:
   - Review and manage release pull requests created by the workflow (`releases.yml`).

7. **Confirm Versioning**:
   - Ensure that versioning (`semver`) is correctly applied based on project guidelines.

8. **Monitor Build and Tests**:
   - Monitor build status and test results to ensure the new version meets quality standards.

9. **Communicate Release**:
   - Notify stakeholders and update documentation as necessary to reflect changes introduced in the new version.
