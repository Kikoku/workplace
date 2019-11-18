# Getting Started
### Setup
1. Select the `Clone or Download` dropdown
2. Select `Download Zip`
3. Extract the contents
4. Open Visual Studio Code (VSC)
5. Press `CTRL`+ `SHIFT` + `N` to open a new window
6. Select `Open folder...` from the selection under start in on the welcome page
7. Open the extracted contents
8. Press `CTRL` + `~` to open a Terminal Window in VSC
9. run the command `npm i`
10. Start coding SCSS

### Learn SCSS
The two best resources for learning SCSS are as follows
1. [Google it](https://www.google.com/search?q=scss&rlz=1C1CHBF_enUS784US784&oq=scss&aqs=chrome..69i57j0l6j69i60.813j0j7&sourceid=chrome&ie=UTF-8)
2. Read the [Learn section](https://sass-lang.com/guide) of the main SASS(SCSS) website

### Compile your code

1. Write your SCSS in `/src/scss/`
2. Open the Terminal window in VSC and run `npm run scss:compile`
3. Your SCSS will be compiled into CSS in `/dist/css/` (*The directory will be created if it does not exist*)
4. Run the command `npm run prefix:compile`
5. Your CSS will now have prefix helpers for additional browser support

# Advanced
### Minify CSS
In the `postcss.config.js` file remove the commenting on lines 7-8.  When executing the command `npm run prefix:comile` your CSS will now be minified
  
### Package Commands
- `npm run scss:compile`
  - A one time run to compile your SCSS to CSS
- `npm run prefix:compile`
  - A one time run to apply prefixing to your CSS
- `npm run scss:watch`
  - Watch SCSS files for changes, run Compile on change
  
 ### Multi-Terminal
 It is helpful to run multiple Terminal windows when executing commands on your code.  In this example you can run the `scss:watch` command in one terminal and leave it running while still being able to run the `prefix:compile` command manually in the second terminal.  As a bonus, in the prefixing terminal you can simply press the `Up Arrow` instead of retyping `npm run prefix:compile` to select the last used command.
 
 1. Open the Terminal in VSC (`CTRL` + `~`)
 2. Click the `Two Column` Icons
 3. In the left Terminal run the `npm run scss:watch` command
 4. After each compile run the `npm run prefix:compile` command
