#!/usr/bin/env node
import { readFile } from "node:fs/promises";
const pathName = process.argv[2];
const fileContent = await readFile(pathName, "utf-8");
const wordCountConteiner = {};
const wordsData = fileContent.split(/[^a-zA-Z]+/).filter((w) => w);
wordsData.map((word) => {
  if (word in wordCountConteiner) {
    wordCountConteiner[word] += 1;
  } else {
    wordCountConteiner[word] = 1;
  }
});
if (process.argv[3]) {
  if (process.argv[3] in wordCountConteiner) {
    console.log(process.argv[3] +" : " + wordCountConteiner[process.argv[3]]);
  } else {
    console.log("word not found");
  }
} else {
  console.log(wordCountConteiner);
}

