import { PostMeta, Post } from "./types.js";
import { parseFile, buildMetaDataObj } from "./parser.js";

import path from 'path';
import fs from 'fs/promises';

// empty arr for sorting purposes
const metaDataPostsList: PostMeta[] = [];

// read posts path and parse md files
const postsPath = "posts/"; //TODO: let user choose the directory

async function readPostsPathAndParse(dirPath:string){

  const extensionFmt = ".md";
  const rawFilesList: string[] = await fs.readdir(dirPath);
  const mdFilesList: string[] = rawFilesList.filter(file => {
    return path.extname(file).toLocaleLowerCase() === extensionFmt;
  }).map(file => {
    return path.join(dirPath,file);
  });

  // loop through the list and parse each post

  for (let filePath of mdFilesList){
    try{
      let mdPost = await parseFile(filePath);
      //build a metadata object
      // save it to list
      metaDataPostsList.push(buildMetaDataObj(mdPost));
        // renderPost(mdPost);
    }
    catch(err){
      console.error("Error: cannot proceed with parsing this file, ", err);
    }
  }

  // sort posts
}

function sortPosts(metaDataPostsList:PostMeta[] ): PostMeta[]{}; //sort posts right after  the files are pushed to the list


export function buildIndex(sortedMetaDataPostsList: PostMeta){}; // build the index from the sorted list and retireve the html files and build the index
