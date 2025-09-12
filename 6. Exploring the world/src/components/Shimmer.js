const Shimmer = () => {
  return (
    <>
      {[...Array(10)].map((e, index) => (
        <ShimmerCard key={index} />
      ))}
    </>
  );
};

export default Shimmer;


