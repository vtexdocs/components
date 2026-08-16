export interface ContributorsType {
  name: string
  login: string
  avatar: string
  userPage: string
}

export interface ContributorsProps {
  /** GitHub contributors of the current documentation page. */
  contributors: ContributorsType[]
}
