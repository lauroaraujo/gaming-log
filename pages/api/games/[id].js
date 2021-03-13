export default (req, res) => {
  const {
    query: { id },
  } = req;

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
  res.status(200).json({
    id: 136604,
    artworks: [9341, 9537],
    genres: [5, 31],
    name: "Control: Ultimate Edition",
    platforms: [6, 48, 49, 130, 167, 169],
    slug: "control-ultimate-edition",
    version_title: "Ultimate Edition",
  });
};
