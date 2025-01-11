function getTitle(pathname: string): string[] {
  const splitTitle = pathname.split('/')
  let title = splitTitle[2]
  let subTitle = splitTitle[3]

  if (subTitle === undefined && title == 'personal-info') {
    subTitle = 'bio'
  } else if (subTitle === undefined && title === 'professional-info') {
    subTitle = 'experience'
  } else if (subTitle === undefined && title === 'hobbies-info') {
    subTitle = 'sports'
  } else if (pathname.split('/')[1] === 'contact-me') {
    title = 'contact-me'
  }

  return [title, subTitle]
}

export { getTitle }
