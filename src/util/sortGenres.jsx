const sortGenres = (genres) => {
  const sortedGenres = genres.sort((a,b) => {
    return a.name.localeCompare(b.name)
  })
  return sortedGenres;
}

export default sortGenres;