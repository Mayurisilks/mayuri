import { Demo } from "./index.js";
import express from "express";

const demo = async (req, res) => {
  try {
    const data = await Demo.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default demo;
