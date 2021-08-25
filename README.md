# RepoProvas

App made for students to share previous tests anonymously. Access past tests to better prepare for current ones.

Try it out now at https://repo-provas-front-blond.vercel.app/


## About

This is a web application that enable students to share and access old tests anonymously. The implemented features are:

- Users can submit a test
- Users can choose their majors
- Users can access tests by teachers
- Or acess tests by courses

By using this app any student can practice with old tests to do better in the current ones.

## Technologies
The following tools and frameworks were used in the construction of the project:<br>

  ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)&nbsp;
  ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)&nbsp;
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;
  ![TypeORM](https://img.shields.io/badge/TypeORM-e23323?style=for-the-badge)&nbsp;
  ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)&nbsp;
  ![PostgresSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)&nbsp;
  ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)&nbsp;
  
  ## How to run

1. Clone this repository
```bash
git clone https://github.com/Rodrigodcs/repo-provas-back
```
2. Install dependencies
```bash
npm i
```
3. Create a database in postgres called repoprovas
```bash
createdb -h localhost -p 5432 -U postgres repoprovas
```
4. Build project
```bash
$ npm run build
```
5. Run typeorm migrations to create database schema
```bash
npm run typeorm migration:run
```

## Running in dev mode
6. In the project folder, create an .env file following the template in .env.example
7. Run the app
```bash
$ npm run dev 
```
8. Follow instructions to run front-end at https://github.com/Rodrigodcs/repo-provas-front

## Runing tests
6. Create another database repoprovas_test using repoprovas template previously created
7. In the project folder, create an .env.test file following the template in .env.example
8. Run tests
```bash
$ npm run test
```


