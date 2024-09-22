# SQL / Study Guide

## INTRODUCTION (TO RELATIONAL DATABASES & SQL)

- [Source](https://webapps-for-beginners.rubymonstas.org/html.html) / [License](https://creativecommons.org/licenses/by-sa/2.0/)

**Table of Contents**

- [Databases](#databases)
- [Tables](#tables)
- [SQLite](#sqlite)
- [ORM](#orm-object-relational-mappers)

### Databases

  Databases are applications that help us store data in a flexible and powerful
  way, and they have been around ever since the 1960s.

  Almost all web applications use database in one way or the other in order to
  store all the data they need to deal with. The allow us to store and find data
  in flexible, and very efficient ways.

  Nowadays there are lots of different types of databases, but we'll focus on the
  most prevalent, traditional type of databases. These are called "relational
  databases" (or [RDBMS](http://en.wikipedia.org/wiki/Relational_database_management_system)).

### Tables

  At its core, you can imagine a database as a bunch of spreadsheets. Except
  they're called "tables", and they can be huge, containing tons and tons of
  rows. More than any spreadsheet ever could handle.

  Each table has a bunch of columns, and can have an arbitrary number of rows
  (also referred to as "records"). Columns (also referred to as "fields") have a
  name and a type. Their type specifies which kind of data can be stored. Each
  row has a number of cells , and each one of the cells can hold some value with
  the type defined by the column.

  Let's have a look at an example.

  Imagine we have a table called `members`, and it contains our member data. So
  it could look like this:

  | id | name    | joined_on  |
  |----|---------|------------|
  | 1  | Anja    | 2013-06-24 |
  | 2  | Carla   | 2013-06-24 |
  | 3  | Rebecca | 2013-06-31 |

  The `id` column would be a running number, so it would have the type `integer`.
  The `name` column is a `string` (databases call it this type a `varchar`), and
  the `joined_on` column is a `date`.

  For a table like this, the columns (with their name and type) are referred to
  as the database *structure*, whereas the rows represent the *data* that we
  store.  Rows change all the time: new members sign up, existing members change
  their details, or remove their profile etc. The structure remains the same,
  unless we, as developers, need another column, or table in order to store more
  data.

  Databases usually contain many tables. And often data from one table relates
  to data in other tables.

  For example, we could add the ability to post status updates to our members
  application. Maybe we would have a table `statuses`:

  | id | member_id | message                                          |
  |----|-----------|--------------------------------------------------|
  | 1  | 1         | Finished the search feature for speakerinnen.org |
  | 2  | 1         | Working on the CSS cleanup with Maren next       |
  | 3  | 3         | Created some new designs for our stickers!       |

  The `id` column, again, contains a running number that allows to identify a
  single status update. The column `message` obviously contains the status update
  message.

  What about the `member_id` column though?

  It references a row in a different table: our `members` table. This means that,
  in this example, Anja has posted two status updates, Rebecca one, and Carla
  hasn't posted yet.

  If you look at the two columns `id` and `member_id` you notice that the column
  `id` is special: It must never contain duplicate values, because we want to use
  the `id` to identify a certain message (or member). This is called a *primary
  key*, and the column is called a "unique" one. Also, it usually auto-increments
  the id for us: Whenever we store a new row to this table then the database will
  assign an id, make sure we get the next number, and never get duplicate values.

  These "features", or special properties of the `id` column also are considered
  part of the structure, alongside with the column name and type: we define
  these things when we create or modify the database structure.

  The column `member_id` on the other hand should not be unique: We want to be
  able to store many messages that all belong to the same member row, in the
  `members` table. Therefor we need to be able to have multiple rows with the
  same `member_id` in the `messages` table.

  Does that make sense? This is how we can store data in a database, give it a
  certain structure, and relate a piece of data (a row) in one table to data
  (rows) in other tables.

  Now, how can we talk to a database like this? How can we actually add data to a
  table, or retrieve it?

  #### SQL

  *Talk to databases*

  Using SQL (Structured Query Language) we can talk to (relational) databases.

  For example we can ask (query) the database to retrieve certain bits of
  information from tables, or we can insert, update or delete data. And SQL is
  also the language that is used to define the database structure in the first
  place.

  SQL was invented in the 1970s, and it's quite ugly to look at. However, lots
  of database systems support it, and so it's quite common to use SQL in web
  applications in some way.

  For example, we could retrieve all fields in the first row from our `members`
  table like this:

  ```sql
  SELECT * FROM members WHERE id = 1;
  ```

  The statement `SELECT` tells the database that we'd like to *retrieve* data (as
  opposed to, for example, `INSERT` which inserts a new row, or `UPDATE` which
  updates an existing row). The star `*` means "all fields". `FROM` specifies the
  table that we want to look at, and `WHERE` specifies a condition that this row
  needs to match: We'd like to retrieve the row where the value in the `id`
  column equals `1`.

  So our query above would return a result containing one row:

  ```
  1 | Anja | 2013-06-24
  ```

  However, when we ask for all rows that have the `joined_on` date `2013-06-24`
  we'd get back two rows:

  ```sql
  SELECT * FROM members WHERE joined_on = '2013-06-24';
  ```

  This would return:

  ```
  1 | Anja  | 2013-06-24
  2 | Carla | 2013-06-24
  ```

  Instead of asking for all fields per row, we could also just ask for a certain
  column that we are interested in:

  ```sql
  SELECT name FROM members WHERE joined_on = '2013-06-24';
  ```

  This would return just the names:

  ```
  Anja
  Carla
  ```

  In order to insert a new row to the table we could use an SQL statement like
  this (assumning our `id` column auto-increments, i.e. automatically assigns
  the next number to the new row):

  ```sql
  INSERT INTO members (name, joined_at) VALUES('Maren', '2013-06-24');
  ```

  Updating looks like this:

  ```sql
  UPDATE members SET joined_on = '2013-06-24' WHERE id = 3;
  ```

  And deleting like this:

  ```sql
  DELETE FROM members WHERE id = 3;
  ```

  As you can see these statements all look somewhat similar, starting with a certain
  command, naming the table, and ending with a semicolon. However, they also don't
  really look very consistent. For example, why does the `INSERT` statement separate
  the column names and inserted values, while the `UPDATE` statement pairs them?

  On the other hand, even though it's a little weird, it's also a very powerful
  language, and being able to figure out some SQL and manually writing it can be
  very useful when you have access to a database, and you want to find out some
  bits of information that cannot be retrieved with the application that is using
  the database: You'd just directly talk to the database, and ask it for the
  information you need.

  Of course there are tools for this. We'll look at libraries that make it easy
  to talk to databases in the chapter about [ORMs](#orm-object-relational-mappers) below.

  Let's play with a real database, and run some SQL statements next.

### SQLite

  [SQLite](http://en.wikipedia.org/wiki/SQLite) is a minimalistic implementation
  of a relational database that supports most of SQL, although not all of it. It
  is less powerful than, for example, [PostgreSQL](http://en.wikipedia.org/wiki/PostgreSQL) and
  [MySQL](http://en.wikipedia.org/wiki/MySQL), but it's also super lightweight,
  and great for learning, experiments, and getting started quickly.

  We are going to use the database SQLite in our examples, because it's the least
  hassle to set it up. So you want to make sure you have it installed, many
  operating systems have it preinstalled.

  Check if it's installed by running this in your terminal:

  ```
  $ sqlite3 --version
  ```

  If that outputs a version string then SQLite is installed. If it's not then
  you'll see something like `command not found: sqlite3`. Check the following resources for installing SQLite on your machine:

  - [Windows](https://www.sqlitetutorial.net/download-install-sqlite/)
  - [Mac](https://flaviocopes.com/sqlite-how-to-install/)
  - [Linux](https://www.geeksforgeeks.org/how-to-install-sqlite-3-in-ubuntu/)

  SQLite comes with a handy command line tool that one can use to create
  databases and interact with them. It also has an interactive
  [shell](http://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) through which we can log into the SQLite database, and execute `SQL` statements interactively.

  Let's try it:

  ```
  $ sqlite3 members
  ```

  This should put you into the interactive SQLite shell, and look something
  like this:

  ```
  SQLite version 3.8.5 2014-08-15 22:37:57
  Enter ".help" for usage hints.
  sqlite>
  ```

  The prompt `sqlite>` waits for your input. If you type an SQL command and hit
  return it will execute it.

  Let's create our `members` table:

  ```
  sqlite> CREATE TABLE members (id INTEGER PRIMARY KEY, name VARCHAR(255), joined_on DATE);
  ```

  If this does not output an error, then the command was successful.

  The command says that we'd like to create a table `member` with 3 columns `id`,
  `name`, and `joined_on`. The column `id` is supposed to be an integer column,
  and we'd like to use it as our primary key (meaning that it will be unique, and
  it will autoincrement the id for us). The column `name` is a string column, and
  values can be 255 characters long. And `joined_at` is a date column.

  Cool. So we've just created a table in our database.

  We can list our tables like so:

  ```
  sqlite> .tables
  members
  ```

  And we can check the structure (schema) of our `members` table like so:

  ```
  sqlite> .schema members
  CREATE TABLE members (id INTEGER PRIMARY KEY, name VARCHAR(255), joined_on DATE);
  ```

  Nice.

  Now let's insert a row to the table:


  ```
  sqlite> INSERT INTO members(name, joined_on) VALUES('Anja', '2013-06-24');
  ```

  Again, if this does not output anything, that means our command was successful.

  We can now retrieve the data using a `SELECT` statement like so:

  ```
  sqlite> SELECT * FROM members;
  1|Anja|2013-06-24
  ```

  So this displays on row.

  Now should be a good time to do some [exercises on SQL](https://www.sqlcourse.com/).

### ORM: Object Relational Mappers

  *Map database contents to programming language objects*

  There are lots of reasons, most of them historical, why SQL reads weird, and
  it's quite unlikely that SQL will become a more pleasant language, or replaced
  anytime soon.

  For this reason programmers have written lots and lots of tools (libraries),
  which make talking to, and working with relations databases a little bit
  easier.

  One class of such tools is called ORM: [Object Relational Mappers](http://en.wikipedia.org/wiki/Object-relational_mapping).

  An ORM is a library that "maps" data, stored in a database, to objects, and
  usually has methods such as `save`, in order to save an object as a database
  row, `create` to insert new data, `update` to change it, and so on. In other
  words, they usually provide a [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) for working with the
  database.

  Your data is stored in the database as rows, because that's what databases
  do. However in your application (and whatever language you use for this)
  you would see, and use this data as objects. The ORM is a tool that transforms your database data to objects and vice versa.

  Does that make sense?

  Let's look at an example.

  If we have a database table `members` like this:

  | id | name    | joined_on  |
  |----|---------|------------|
  | 1  | Anja    | 2013-06-23 |
  | 2  | Carla   | 2013-06-24 |
  | 3  | Rebecca | 2013-06-31 |

  Then in an application written, for example, in the `Ruby` programming language, using an ORM, we could communicate with it like so:

  ```ruby
  class Member # we'd need to somehow include the ORM functionality
  end

  # Find one member

  member = Member.find(id: 1)
  puts "#{member.name} has joined on #{member.joined_on}."

  # Change the member's joined_on date:

  member.joined_on = '2013-06-24'
  member.save

  puts
  puts "Correction!"
  member = Member.find(id: 1)
  puts "#{member.name} has joined on #{member.joined_on}."

  # Find several members based on their joined_on date:

  puts
  puts "Who joined on 2013-06-24?"
  members = Member.where(joined_on: '2013-06-24')
  members.each do |member|
    puts "#{member.name} has joined on #{member.joined_on}."
  end
  ```

  And this would output:

  ```
  Anja has joined on 2013-06-23.

  Correction!
  Anja has joined on 2013-06-24.

  Who joined on 2013-06-24?
  Anja has joined on 2013-06-24.
  Carla has joined on 2013-06-24.
  ```

  Of course the details of this Ruby code might vary, depending on the concrete
  ORM tool that we are using.

  But the basic idea is that we can use Ruby classes and objects to retrieve some
  data from the database (as in `Member.find(id: 1)`), which would then appear in
  our application as a normal Ruby object. We can call methods to look up fields
  (such as in `member.name`, which returns the value from the `name` column).
  And we can use the same object to modify, and save the data back to the
  database.

---

## CHEATSHEETS

  - [**PostgreSQL Cheatsheet** (devhints.io)](https://devhints.io/postgresql)
    - **Level:** Beginner
    - **Updated:** -
    - **Description:** -
    - **Free:** YES

  - [**SQL Cheat Sheet** (Databasestar.com)](https://www.databasestar.com/sql-cheat-sheet/)
    - **Level:** Beginner to Intermediate
    - **Updated:** -
    - **Description:** -
    - **Free:** YES

  - [**SQL Basics Cheat Sheet**](https://www.datacamp.com/cheat-sheet/sql-basics-cheat-sheet)
    - **Level:** Beginner to Intermediate
    - **Updated:** -
    - **Description:** With this SQL cheat sheet, you'll have a handy reference guide to basic querying tables, filtering data, and aggregating data. 5 min read.
    - **Free:** YES

## TERMINOLOGY

  - COLUMNS
  - ERD: Entity Relationship Diagrams
  - FIELDS (See COLUMNS)
  - FOREIGN KEY
  - JOINS
  - KEYS (Primary/Foreign)
  - NORMALIZATION
  - PRIMARY KEY
  - RDBMS
  - RECORDS (See ROWS)
  - RELATIONAL
  - ROWS
  - SCHEMA
  - SQL (Structured Query Language)
  - TABLES

## VIDEOS

  - [**Database Tutorial - What are databases?**](https://www.youtube.com/watch?v=Ls_LzOZ7x0c)
    - **Level:** Beginner
    - **Uploaded:** 2013
    - **Duration:** 8min
    - **Description:** -
    - **Creator/Author:** LinkedIn Learning
    - **Concepts:** -
    - **Free:** YES

  ![](./assets/What%20is%20a%20Relational%20Database.IBM.jpg)

  - [What is a Relational Database?](https://www.youtube.com/watch?v=OqjJjpjDRLc)
    - **Level:** Beginner
    - **Uploaded:** 2022
    - **Duration:** 8min
    - **Creator/Author:** IBM

  - [**What is SQL?** (Intro in 4 minutes)](https://www.youtube.com/watch?v=27axs9dO7AE)
    - **Level:** Beginner
    - **Uploaded:** -
    - **Duration:** 5 minutes
    - **Description:** -
    - **Creator/Author:** -
    - **Concepts:** -
    - **Free:** Yes

  - [**Database Tutorial for Beginners**](https://www.youtube.com/watch?v=wR0jg0eQsZA)
    - **Level:** Beginner
    - **Uploaded:** -
    - **Duration:** 6 minutes 
    - **Description:** This database tutorial will help beginners understand the basics of database management systems. We use helpful analogies to explain a high-level overview of spreadsheets, tables, and database management systems. The logic and concepts in this tutorial will make it easier to understand the more technical aspects of database architecture and Entity Relationship Diagrams (ERD).
    - **Creator/Author:** -
    - **Concepts:** Databases, tables, Entity Relationship Diagrams, ERD.
    - **Free:** YES

  - [**Database Table Relationships**](https://www.youtube.com/watch?v=skHBFfw05Oo)
    - **Level:** Beginner
    - **Uploaded:** 2014
    - **Duration:** 6 minutes
    - **Description:** In this video you will learn about references - how to create a relationship between the tables, how it affects their structure and how it looks in the data.
    - **Creator/Author:** Vertabelo
    - **Concepts:** one-to-one, one-to-many, many-to-many
    - **Free:** Yes

  - [**Eddie Woo: SQL**](https://www.youtube.com/watch?v=KLwnfxhobIQ)
    - **Level:** Beginner
    - **Uploaded:** -
    - **Duration:** 16 minutes
    - **Description:** -
    - **Creator/Author:** Eddie Woo
    - **Concepts:** -
    - **Free:** Yes

  - [**CBT Nuggets: Intro to Databases**](https://www.youtube.com/playlist?list=PLQVJk9oC5JKohoyVILfdxOOzyl6w-yOur)
    - **Level:** -
    - **Uploaded:** -
    - **Duration:** -
    - **Description:** YouTube Playlist
    - **Creator/Author:** -
    - **Concepts:** -
    - **Free:** YES

  - [**Eddie Woo: Database Systems**](https://www.youtube.com/playlist?list=PL5KkMZvBpo5BBLJdnhvFFbjkiK3JLBfeD)
    - **Level:** Beginner to Intermediate
    - **Uploaded:** -
    - **Duration:** -
    - **Description:** -
    - **Creator/Author:** Eddie Woo
    - **Concepts:** -
    - **Free:** Yes

  - [**SQL Tutorial - The basics of interacting with databases**](https://www.youtube.com/watch?v=SjIqHmtE3MU)
    - **Level:** Beginner
    - **Uploaded:** -
    - **Duration:** 4min
    - **Description:** -
    - **Creator/Author:** LinkedIn Learning
    - **Concepts:** -
    - **Free:** YES

  - [**Introduction to SQL**( Socratica)](https://www.youtube.com/playlist?list=PLi01XoE8jYojRqM4qGBF1U90Ee1Ecb5tt)
    - **Level:** Beginner
    - **Uploaded:** -
    - **Duration:** -
    - **Description:** -
    - **Creator/Author:** Socratica
    - **Concepts:** -
    - **Free:** YES

  - [**How to Correctly Define Many-To-Many Relationships in Database Design**](https://www.youtube.com/watch?v=1eUn6lsZ7c4)
    - **Level:** Beginner
    - **Uploaded:** -
    - **Duration:** 7min
    - **Description:** -
    - **Creator/Author:** -
    - **Concepts:** -
    - **Free:** YES

  - [**Harvard CS50 2022 - Lecture 7 - SQL**](https://www.youtube.com/watch?v=zrCLRC3Ci1c)
    - **Level:** Beginner to Intermediate
    - **Uploaded:** 2022
    - **Duration:** 2h 20min
    - **Description:** -
    - **Creator/Author:** Harvard University
    - **Concepts:** -
    - **Free:** YES

  - [**Primary & Foreign Keys**](https://www.youtube.com/watch?v=B5r8CcTUs5Y)
    - **Level:** Beginner
    - **Uploaded:** -
    - **Duration:** 9min
    - **Description:** -
    - **Creator/Author:** Eddie Woo
    - **Concepts:** Primary Keys. Foreign Keys.
    - **Free:** YES

  - [**Database Schema**](https://www.youtube.com/watch?v=ymb9gsl_x1U)
    - **Level:** Beginner
    - **Uploaded:** 2012
    - **Duration:** 6min
    - **Description:** How to draw a diagram representing the entities, relationships and fields of a relational database.
    - **Creator/Author:** Eddie Woo
    - **Concepts:** -
    - **Free:** YES

  - [**Database Normalisation**](https://www.youtube.com/watch?v=2BxzjodhHPk)
    - **Level:** Beginner to Intermediate
    - **Uploaded:** -
    - **Duration:** 11min
    - **Description:** -
    - **Creator/Author:** Eddie Woo
    - **Concepts:** -
    - **Free:** YES

  - [**Entity Relationship Diagram (ERD) Tutorial - Part 1**](https://www.youtube.com/watch?v=QpdhBUYk7Kk)
    - **Level:** -
    - **Uploaded:** -
    - **Duration:** 7min
    - **Description:** -
    - **Creator/Author:** Lucid
    - **Concepts:** -
    - **Free:** YES

  - [**SQL Tutorial - Utilizing JOINS**](https://www.youtube.com/watch?v=o14ate0Vz0s)
    - **Level:** -
    - **Uploaded:** -
    - **Duration:** 13min
    - **Description:** -
    - **Creator/Author:** LinkedIn Learning
    - **Concepts:** -
    - **Free:** YES

## COURSES

  - [**SoloLearn SQL Introduction**](https://www.sololearn.com/learn/courses/sql-introduction)
    - **Level:** Beginner
    - **Duration:** -
    - **Description:** Introduction to SQL
    - **Creator/Author:** -
    - **Updated:** -
    - **Certificate:** YES
    - **Free:** YES

  - [**SQL Tutorial for Beginners**](https://www.simplilearn.com/tutorials/sql-tutorial)
    - **Level:** Beginner
    - **Duration:** 1h
    - **Description:** 6 lessons
    - **Creator/Author:** 
    - **Updated:** 2023
    - **Certificate:** -
    - **Free:** YES

  - [**SQL Fundamentals (Postgres)**](https://egghead.io/courses/sql-fundamentals)
    - **Level:** Beginner
    - **Duration:** 33 minutes
    - **Description:** 12 lessons
    - **Creator/Author:** Tyler Clark on Egghead.io
    - **Updated:** 2021
    - **Certificate:** -
    - **Free:** Yes

  - [**Get Started With PostgreSQL**](https://egghead.io/courses/get-started-with-postgresql)
    - **Level:** Beginner
    - **Duration:** 41 minutes
    - **Description:** 14 lessons
    - **Creator/Author:** Brett Cassette on Egghead.io
    - **Updated:** 2021
    - **Certificate:** -
    - **Free:** -

  - [**PostgreSQL Basics** (CrunchyData)](https://www.crunchydata.com/developers/playground/psql-basics)
    - **Level:** Beginner
    - **Duration:** -
    - **Description:** Covering the basics of Postgres databases using an interactive online database
    - **Creator/Author:** https://www.crunchydata.com
    - **Updated:** -
    - **Certificate:** -
    - **Free:** YES

  - [**PostgreSQL - Just for Kids** (CrunchyData)](https://www.crunchydata.com/developers/playground/postgresql-for-kids)
    - **Level:** Beginner
    - **Duration:** -
    - **Description:** -
    - **Creator/Author:** https://www.crunchydata.com
    - **Updated:** -
    - **Certificate:** -
    - **Free:** YES

  - [**SQLBolt**](https://sqlbolt.com/)
    - **Level:** -
    - **Duration:** -
    - **Description:** Learn SQL with simple, interactive exercises
    - **Creator/Author:** -
    - **Updated:** -
    - **Certificate:** -
    - **Free:** -

  - [**Learn SQL (Codecademy)**](https://www.codecademy.com/learn/learn-sql)
    - **Level:** -
    - **Duration:** 8h
    - **Description:** -
    - **Creator/Author:** -
    - **Updated:** -
    - **Certificate:** Yes (paid)
    - **Free:** -

  - [**SQLZoo: Learn SQL in stages**](https://sqlzoo.net/wiki/SQL_Tutorial)
    - **Level:** Beginner to Intermediate
    - **Duration:** -
    - **Description:** -
    - **Creator/Author:** -
    - **Updated:** -
    - **Certificate:** -
    - **Free:** Yes

  - [**Khan Academy: Intro to SQL: Querying and managing data**](https://www.khanacademy.org/computing/computer-programming/sql)
    - **Level:** Beginner to Intermediate
    - **Duration:** -
    - **Description:** -
    - **Creator/Author:** -
    - **Updated:** -
    - **Certificate:** -
    - **Free:** Yes

  - [**Introduction to SQL**](https://app.datacamp.com/learn/courses/introduction-to-sql)
    - **Level:** -
    - **Duration:** 2h
    - **Description:** 7 videos. 24 exercises.
    - **Creator/Author:** -
    - **Updated:** -
    - **Certificate:** -
    - **Free:** Only the first Chapter "Relational Databases" is available for free

  - [**Intermediate SQL** (Interactive course)](https://app.datacamp.com/learn/courses/intermediate-sql)
    - **Level:** -
    - **Duration:** 4h
    - **Description:** Interactive course. 14 videos. 50 exercises.
    - **Creator/Author:** -
    - **Updated:** -
    - **Certificate:** -
    - **Free:** Only the first Chapter "Selecting Data" is available for free

## EXERCISES / PRACTICE

  - [The 80 Top SQL Interview Questions and Answers for Beginners & Intermediate Practitioners](https://www.datacamp.com/blog/top-sql-interview-questions-and-answers-for-beginners-and-intermediate-practitioners)

## RESOURCES 

  - [**SQL Roadmap**: Step by step guide to learning SQL in 2023](https://roadmap.sh/sql)

  - [Intro to Databases (for people who don’t know a whole lot about them)](https://medium.com/@rwilliams_bv/intro-to-databases-for-people-who-dont-know-a-whole-lot-about-them-a64ae9af712)
    - \* You can skip the section `"Non-Relational (NoSQL) Databases"` if you are not really interested to learn about other types of Databases.

  - [**The SQL Handbook**](https://flaviocopes.com/book/sql/)

  - [SQL Notes for Professionals (PDF)](https://goalkicker.com/SQLBook/SQLNotesForProfessionals.pdf)

  - [PostgreSQL Notes for Professionals (PDF)](https://goalkicker.com/PostgreSQLBook/PostgreSQLNotesForProfessionals.pdf)

  - [MySQL Notes for Professionals (PDF)](https://goalkicker.com/MySQLBook/MySQLNotesForProfessionals.pdf)

  - [**ElephantSQL** (free Postgres cloud database)](https://www.elephantsql.com/)

  - [**The ins and outs of INNER JOIN**](https://campus.datacamp.com/courses/joining-data-in-sql/introducing-inner-joins)

  - **Designing Databases & Schemas**
    - [What are database schemas? 5 minute guide with examples](https://www.educative.io/blog/what-are-database-schemas-examples)
    - [5 Database Design Schema Example: Critical Practices & Designs](https://hevodata.com/learn/schema-example/)
    - [6 Easy And Actionable Steps On How To Design A Database](https://www.databasestar.com/how-to-design-a-database/)

## TEACHING TOOLS

  - [**ChatGPT**](https://chat.openai.com/)
    - **Description:** -
    - **Free:** Yes
  - [**Database Murder Mystery**](https://in-tech-gration.github.io/database-mysteries/)
    - **Free:** Yes
  - [**SQLFiddle**](http://sqlfiddle.com/)
    - **Description:** A tool for easy online testing and sharing of database problems and their solutions.
    - **Free:** Yes
  - [**Online SQL interpreter**](https://sql.js.org/examples/GUI/index.html)
    - **Description:** Online SQL interpreter
    - **Free:** Yes
  - [**SQL-Insekten**](https://www.sql-insekten.de/)
    - **Description:** Learn about SQL Injection through an interactive tutorial.
    - **Free:** Yes
  - [**SQL Practice**](https://www.sql-practice.com/)
    - **Description:** -
    - **Free:** Yes
  - [**Visual JOIN**](https://joins.spathon.com/)
    - **Description:** Understand how joins work by interacting and see it visually
    - **Free:** Yes
  - [**DBFiddle**](https://www.db-fiddle.com/)
    - **Description:** An online SQL database playground for testing, debugging and sharing SQL snippets. Supports: MySQL, Postgres, SQLite
    - **Free:** Yes


