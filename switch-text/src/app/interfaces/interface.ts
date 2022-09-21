export interface Ideas{
  item: string
}


export interface Store {
  allIdeas: [
    {
    development: Ideas[];
    testing: Ideas[];
    deployment: Ideas[];
    }
  ]
}
