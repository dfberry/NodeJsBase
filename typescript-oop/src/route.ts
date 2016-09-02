"use strict";

import * as express from "express";
import * as path from "path";

module Route {

  export class Index {

    public index(req: express.Request, res: express.Response, next: express.NextFunction) {
      //render page
      res.sendFile(path.join(__dirname + "/../public/default.html"));
    }
  }
}

export = Route;