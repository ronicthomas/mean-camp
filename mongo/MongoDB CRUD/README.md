# MongoDB CRUD Exercise Questions

1) Insert 1000 records in the "demo" collection with the following structure

        { name: string, age: number, profession: string, hobbies: array }

2) Convert the given SQL query in its equivalent Mongo query

        a) select name, profession from people where name = "Iva%" and age = 25

        b) select name, profession from people where name = "Iva%" and age = 25

            _OR_

        a) Write a mongo query to get the profession of all people whose name starts with Iva and age is 25.

        b) Write a mongo query to get the profession of the first person whose name starts with Iva and age is 25.

3) Write queries to find the following records

        a) Name of all people whose age is between 25 and 40 and are teachers

        b) Name of all teachers whose age is less than 25 or lawyers whose age is between 25 and 35

        c) Name and age of all hackers who like singing

        d) Name and profession of all people who are older than 40 and like singing & sleeping

4) Write queries for the following scenarios on the restaurant database

        a) Name & address of all restaurants whose zipcode is "11225"

        b) Name & cuisine of all restaurants where atleast one grade score is above 20

        c) Count the number of restaurants in the borough "Brooklyn" and building number "469"

        d) Get the first 5 restaurants with atleast one grade score over 20 in Brooklyn

        e) Get the first 5 Chinese restaurants in Brooklyn with atleast one grade score over 20

            posted in the first week of July 2014

5) Write queries for the following scenarios on the employee database

          a) Set the category of all employees whose salary is less than 5000 to "C"

          b) Change the location of all females working in Czech Republic to Singapore

          c) Increment the salary of all employees who are living in Sweden by 5000 and set their category to "A"

          d) We are closing the Sri Lanka office. Remove the designations of all employees in Sri Lanka and set their

              release date to today

6) Write queries for the following scenarios on the employee database

        a) Add "Hiring" to the skillset of all recruiters (Hint: Designation is "Recruiter")

        b) Add English & Chinese to the languages attribute of all employees located in China

        c) Remove skills from IBM from the skillset of employees

        d) Delete all employee records with no designation

        e) Set the salary of Harry Potter to 50000. Create Harry Potter's records if he doesn't exist

            (_Hint_: Harry Potter lives in Hogwarts and knows Parseltongue and English)
