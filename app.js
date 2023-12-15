import express from 'express'
import hello from "./hello.js"
import lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
// mongoose.connect(CONNECTION_STRING);
import session from "express-session";
import UserRoutes from "./users/routes.js";

const app = express()
// app.use(cors());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
})
)
const sessionOptions = {
        secret: "any string",
        resave: false,
        saveUninitialized: false,
      };
      if (process.env.NODE_ENV !== "development") {
        sessionOptions.proxy = true;
        sessionOptions.cookie = {
          sameSite: "none",
          secure: true,
        };
      }
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
lab5(app);
hello(app)
app.listen(process.env.PORT || 4000);

// import express from 'express'
// import "dotenv/config";
// import session from "express-session";
// // import Hello from "./hello.js"
// import hello from "./hello.js"
// import lab5 from "./lab5.js";
// import CourseRoutes from "./courses/routes.js";
// import ModuleRoutes from "./modules/routes.js";
// import UserRoutes from "./users/routes.js";
// import cors from "cors";
// import "dotenv/config";
// import mongoose from "mongoose";
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
// // const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
// mongoose.connect(CONNECTION_STRING);
// const app = express()
// app.use(cors({
//     credentials: true,
//     origin: "http://localhost:3000",
// })
// )

// const sessionOptions = {
//     secret: "any string",
//     resave: false,
//     saveUninitialized: false,
//   };
//   if (process.env.NODE_ENV !== "development") {
//     sessionOptions.proxy = true;
//     sessionOptions.cookie = {
//       sameSite: "none",
//       secure: true,
//     };
//   }
//   app.use(session(sessionOptions));
  
  
// app.use(express.json());
// UserRoutes(app);
// ModuleRoutes(app);
// CourseRoutes(app);
// lab5(app);
// hello(app)
// app.listen(process.env.PORT || 4000);
