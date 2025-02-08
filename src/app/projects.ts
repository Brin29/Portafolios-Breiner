export interface Projects {
  id: number,
  name: string,
  description: string,
  image: string,
  frontEnd: Languages[],
  backEnd: Languages[],
}

export interface Languages {
  id: number,
  name: string,
  image: string
}