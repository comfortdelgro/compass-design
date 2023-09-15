// @ts-nocheck
import chalk from 'chalk' // For colorful console output
import fs from 'fs/promises' // For file system operations
import path from 'path'

// Define source directory
const SRC_DIR = './../src'

// Define text colors for console output
const colors = [chalk.red, chalk.cyan, chalk.yellow, chalk.blue, chalk.green]

// Counter for tracking file processing
let fileCounter = 0

// Function to process CSS files
const processCssFiles = async () => {
  try {
    // Step 1: Loop through the source directory
    const files = await fs.readdir(SRC_DIR)

    // Step 2: Create a list of light.module.css files and their addresses
    const lightCssFiles = files.filter((file) =>
      file.endsWith('light.module.css'),
    )

    // Step 3: Check if there are any existing dark.module.css files and delete them
    for (const lightCssFile of lightCssFiles) {
      const darkCssFileName = lightCssFile.replace(
        'light.module.css',
        'dark.module.css',
      )
      const darkCssFilePath = path.join(SRC_DIR, darkCssFileName)

      // Check if the dark.module.css file exists and delete it if it does
      try {
        await fs.unlink(darkCssFilePath)
      } catch (error) {
        // Ignore errors if the file doesn't exist
      }
    }

    // Step 4, 5, and 6: Process each light.module.css file
    for (const lightCssFile of lightCssFiles) {
      const lightCssFilePath = path.join(SRC_DIR, lightCssFile)
      const darkCssFileName = lightCssFile.replace(
        'light.module.css',
        'dark.module.css',
      )
      const darkCssFilePath = path.join(SRC_DIR, darkCssFileName)

      // Create a new empty dark.module.css file
      await fs.writeFile(darkCssFilePath, '')

      // Read the content of the light.module.css file
      const lightCssContent = await fs.readFile(lightCssFilePath, 'utf-8')

      // Modify the content by replacing 'lightTheme' with 'darkTheme'
      const darkCssContent = lightCssContent.replace(/lightTheme/g, 'darkTheme')

      // Write the modified content to the dark.module.css file
      await fs.writeFile(darkCssFilePath, darkCssContent)

      // Step 6: Log the processing of each file
      const index = fileCounter++ % colors.length
      const color = colors[index]
      console.log(
        `${color(`Processed: ${lightCssFilePath} -> ${darkCssFilePath}`)}`,
      )
    }

    // Log completion message
    console.log(chalk.green('Processing completed.'))
  } catch (error) {
    console.error(chalk.red('An error occurred:'), error)
  }
}

// Call the function to process the CSS files
processCssFiles()
