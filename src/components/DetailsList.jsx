import { details } from "../constants";

const DetailsList = () => {
  const renderContent = (item) => {
    if (item.id === "1") {
      return (
        <>
          <span style={{ fontWeight: "bold", color: "blue", fontSize: "25px" }}>
            Who we are
          </span>{" "}
          <br />
          {item.text1}
          <br />
          <br />
          <span
            style={{ fontWeight: "bold", color: "purple", fontSize: "25px" }}
          >
            What we do
          </span>{" "}
          <br />
          {item.text2}
        </>
      );
    } else if (item.id === "2") {
      return (
        <>
          <span style={{ fontWeight: "bold", color: "blue", fontSize: "25px" }}>
            How to help
          </span>{" "}
          <br />
          {item.text1}
          <br />
          <br />
          <span
            style={{ fontWeight: "bold", color: "green", fontSize: "25px" }}
          >
            Where we work
          </span>{" "}
          <br />
          {item.text2}
        </>
      );
    }
    return item.text;
  };

  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {details.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4"
        >
          <div className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {renderContent(item)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsList;
