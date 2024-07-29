
# NestJS

A Mock API


## Installation

Install  npm packages

```bash
 npm install
```

Run the application
```bash
npm run start
```
    
## Documentation


NestJS is node frame work. This is an mock CRUD API for develors.

Get API
```bash
http://localhost:3000/api/fruits/get-all
```

Post API
```bash
http://localhost:3000/api/fruits/create

sample payload:

 {
 	"id":0,
 	"name":"Oranges",
 	"cost":58
 }
```

Put API
```bash
http://localhost:3000/api/fruits/update

sample payload:

{
 	"id":3,
 	"name":"Oranges",
 	"cost":58
 }
```

Delete API
```bash
http://localhost:3000/api/fruits/delete?id=1
```