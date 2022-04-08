import Filter from "./Filter";

const AllCategories = () => {
    return (
      <div className="category">
        {[
          "POKE BOWLS",
          "MAKI",
          "SUMOMAKI",
          "SUSHI TACOS",
          "SPRING MAKI",
          "ALL",
        ].map((category, index) => (
          <Filter key={index} category={category} />
        ))}
      </div>
    );
}

export default AllCategories;