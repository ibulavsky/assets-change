import express from "express";
import { MyType } from "shared/types/mytypes";
import {ImageController} from "../controllers/image";

const api = express();

api.get("/", async (req, res) => {
  const returnValue: MyType = {
    success: true,
    errorMessage: null
  };

  res.json(returnValue).end();
});

api.get("/image-size", async (req, res) => {
  ImageController.rename();
  const returnValue: MyType = {
    success: true,
    errorMessage: null
  };

  res.json(returnValue).end();
});

export default api;
