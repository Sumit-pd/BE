# Backend Assignment



## Installation

* clone the repository in your system
```bash
git clone https://github.com/your-username/BE
```
* cd to the project folder
```bash
cd BE
```
* install the dependecies
```bash
npm install
```
* run the project
```bash
nodemon app.js
```


Server will start at port :5000 - access `http://localhost:5000`



## Direction to make api calls in postman
### basic set up for postman
* Under header set key value as {Content-type : application/json}
* Under body set body to raw - json 
* After login : Under header set the key value as {Authorization : Bearer + { token you got after logining in }  } 

**Student login** : `http://localhost:5000/auth/student/login`

* under body give the id and password as json 
* Make a post request 


**Dean login**  : `http://localhost:5000/auth/dean/login`
* under body give the id and password as json
* Make a post request 


**Student free session** : `http://localhost:5000/student/freesessions`

* Make a get request

**Student session booking** : `http://localhost:5000/student/bookSession`
* Enter the time , day , name and deanName in the body
* Make a post request


**Dean pending session** : `http://localhost:5000/dean/pendingsessions`
* Enter the name
* Make a post request

