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
<!-- 4. Create a Database using the ``dump.sql`` file inside the ``dump`` folder by following these steps:
    - 4.1 Open your terminal. **Important: the terminal must be opened in the same path as the ``dump.sql`` file is located.**
    - 4.2 Access PostgreSQL using the command ``sudo su postgres`` and enter your password when prompted.
    - 4.3 Next, type ``psql postgres`` and hit enter.
    - 4.4 Create a database by typing ``CREATE DATABASE repoprovas;`` and hitting enter.
    - 4.5 Type ``\q`` and hit enter.
    - 4.6 Finally, type ```psql repoprovas < dump.sql``` and hit enter. Your database should be ready after this step.
5. Set the environment variables by following these steps:
    - 5.1 Create a ``.env`` file in the folder root
    - 5.2 Copy the content of the ``.env.example`` into it
    - 5.3 Set the ``DATABASE_URL`` in this format: "postgres://user:password@host:port/repoprovas"
    - 5.4 Set the ``PORT`` for 4000 -->
3. Also in root folder, run the back-end with
```bash
npm start
```
<!-- 8. Your server should be running now.
9. After that, you can optionally test the project following these steps:
    - 9.1 Open your terminal.
    - 9.2 Access PostgreSQL using the command ``sudo su postgres`` and enter your password when prompted.
    - 9.3 Next, type ``psql postgres`` and hit enter.
    - 9.4 Create a test database by typing ``CREATE DATABASE repoprovas_test TEMPLATE repoprovas;`` and hitting enter. Your database test should be ready after this step.
    - 9.5 Set the enviroment variable following the step 5 again, with the following changes:
      - 9.5.1 The file must be called ``.env.test``
      - 9.5.2 The ``DATABASE_URL`` must be in this format: "postgres://user:password@host:port/repoprovas_test" -->

4. In your terminal, go to the root folder and run the tests with:
```bash
npm run test
```
5. Follow instructions to run front-end at https://github.com/Rodrigodcs/repo-provas-front
