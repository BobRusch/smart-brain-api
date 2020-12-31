# NOTE:

At the time of this build, KNEX does not operate above node V12. Therefore if you wih to run this API you must use node V12.

## PostgreSQL DB Schema

```sql
  CREATE DATABASE "smart-brain";

  CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    email text UNIQUE NOT NULL,
    entries BIGINT DEFAULT 0,
    joined TIMESTAMP NOT NULL
  );

  CREATE TABLE login (
    id serial PRIMARY KEY,
    hash VARCHAR(100) not NULL,
    email text UNIQUE NOT NULL
  );
```
## Must Do:

1. Create a .env file
2. Add the following:
```javascript
    PG_HOST= usually '127.0.0.1' but make it whatever your pg server is
    PG_PORT=port on pg server
    PG_USER=your id on pg server
    PG_PASSWORD= whatever your pg user password is
```
4. So the contents could look like this:
```
  PG_HOST='127.0.0.1'
  PG_PORT='8888'
  PG_USER='myuserid'
  PG_PASSWORD='mypassword'
```


