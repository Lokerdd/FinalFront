const checkIncludes = (string, substring) => string.toLowerCase().includes(substring.toLowerCase());

const getFilteredNews = (
  searchText,
  currentFilter,
  news,
) => news.filter(({
  header,
  user,
  description,
  tags,
}) => {
  let isSuitable = tags.some(({ name }) => checkIncludes(name, searchText));
  if (currentFilter === 'Tags') return isSuitable;

  if (user) {
    const isAuthor = checkIncludes(user.name, searchText);
    if (currentFilter === 'Author') return isAuthor;
    isSuitable = isSuitable || isAuthor;
  }

  isSuitable = isSuitable
    || checkIncludes(description, searchText)
    || checkIncludes(header, searchText);

  return isSuitable;
});

export default getFilteredNews;
