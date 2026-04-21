// Parser : parses md files from a specific destination and builds js objects based on the md files
import { PostMeta ,Post } from './types.js';
import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';

export async function parseFile(filePath:string) : Promise<Post>{

  try{
    const data = await fs.readFile(filePath,'utf-8');
    // get a an object

    let markdownObjRead = matter(data);

    //validate data

    if(!markdownObjRead.data.title || !markdownObjRead.data.date){
      throw new Error(`Missing title or date in ${filePath}`);
    }

    return {
      title:markdownObjRead.data.title,
      date:new Date(Date.parse(markdownObjRead.data.date)),
      desc:markdownObjRead.data.description,
      urlName:urlNameGen(path.basename(filePath), new Date(Date.parse(markdownObjRead.data.date))),
      content:markdownObjRead.content,
      filePath:filePath,
      fileName:path.basename(filePath)
    } as Post;
 }

  catch(err) {
    throw err; // caller catches the error
  }

}


function urlNameGen(fileName:string,date:Date): string{

  const cleanName = fileName.replace(/\.md$/,'');
  const fmt = `${date.getDate()}-${date.getMonth() + 1}-${(date.getFullYear()).toString().slice(-2)}`;
  return cleanName.split(/\s+/).join('-')+'-'+fmt;
}

export function buildMetaDataObj(mdPost: Post) : PostMeta{
  return{
    title:mdPost.title,
    date:mdPost.date,
    desc:mdPost.desc,
    urlName:mdPost.urlName
  } as PostMeta
}
