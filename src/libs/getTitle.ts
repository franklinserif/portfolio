function getTitle(pathname: string): string[] {
  const splitTitle = pathname.split('/')
  const title = splitTitle[2]
  let subTitle = splitTitle[3]

  if (subTitle === undefined && title == 'personal-info') {
    subTitle = 'bio'
  } else if (subTitle === undefined && title === 'professional-info') {
    subTitle = 'experience'
  } else if (subTitle === undefined && title === 'hobbies-info') {
    subTitle = 'sports'
  }

  return [splitTitle[2], subTitle]
}

export { getTitle }
