# SmokeTrees_Task

# Steps to run the Project

## Step1 --> Get(Retrieve) Files which are in .gitignore
### i)node_modules --> Use ```npm i``` (to install required libraries)
### ii)config/config.env --> define a environment variables file named config.env (in config folder) with attributes:
                          - PORT
                          - MONGO_URI

## Step2 -->  After Having the Libraries and Environmental Variables the Project is good to go, 
# Use ```npm run start``` or `nodemon server.js` to run the project.

## Details of Routes:- 
### /register --> Creates User with its address and stores it in user and address collections respectively.
  Payload: firstName, lastName, email, mob_number, streetAddress, city, state, postalCode, country
