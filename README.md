# PS_First-Typescript-Package
 Structuring Angular Applications with Angular Libraries-Building a Typescript Library

# SPEND TIME HOURS TO SOLVE
## configure file sith correct path in package.config in library
otherwise consumer library can't find package library properly
  "main": "dist/index.js", [error happens i put "main": "index.js"]
  "types": "dist/index.d.ts",
because build output is in dist folder
if there is no types property, editor will show error

# 1. Create Library Package for jb-calculator
## 1.1.  create folder first-ts-package and create typescript file for calculator
## 1.2 Add tsconfig.json - typescript compiler configuration

## 1.3 Add package.json - package configuration file for build type script library into Javascript library
## 1.4 run following command to generate Javascript library
   PS D:\GitRepo\jb-weerasinghe\PS_First-Typescript-Package\first-ts-package> npm run build
