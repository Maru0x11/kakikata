// Interface hodling the metadata of a post

export interface PostMeta{
  title:string,
  date:Date,
  desc:string,
  urlName:string
}
//Interface holding the data of a post

export interface Post extends PostMeta{
  content:string,
  filePath:string // actual file path
  fileName:string
}
