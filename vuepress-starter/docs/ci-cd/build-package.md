# Integrating Medusza Tests with Your CI/CD Pipeline

This section provides a step-by-step guide to integrating tests from Medusza into your CI/CD pipeline. By following these instructions, you will be able to create and manage test packages easily.

## Creating a Test Package

To create a test package using Medusza:

1. **Navigate to Project Tests:**
   - Go to the "Project Tests" main page within the Medusza dashboard.

2. **Build the Package:**
   - Click on the `Build` button.
   - The package will be generated at the following location: `$home/medusza/project/your_project`.

## Installing the Test Package

To install and run the test package:

1. **Prepare Your Environment:**
   - Ensure you have Node.js and npm (Node Package Manager) installed on your machine. If not, download and install them from [Node.js official website](https://nodejs.org/).

2. **Open the Terminal:**
   - Open a terminal window and navigate to the root of the package folder. This folder should contain a `package.json` file.

3. **Install the Package:**
   - Run the following command to install the package dependencies:
     ```sh
     npm install
     ```

4. **Run the Tests:**
   - After the installation is complete, run the tests using the following command:
     ```sh
     npm run test
     ```

## Configuring the Environment

Your test package comes with a pre-configured `.env` file. This file contains environment variables that can be modified to suit your specific needs.

1. **Locate the `.env` File:**
   - The `.env` file is located in the root of your test package folder.

2. **Modify Environment Variables:**
   - Open the `.env` file with a text editor.
   - Adjust the values of the environment variables as needed. Save the file after making changes.



By following these steps, you will be able to create a test package with Medusza, configure your environment variables, and integrate the tests into your CI/CD pipeline seamlessly.