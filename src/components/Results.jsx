import { useSelector, useDispatch } from "react-redux";
import { object_id, isobject_id } from "../actions";
const Results = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.search_response);
  const handleClick = (e) => {
    dispatch(object_id(e.target.value));
    dispatch(isobject_id(true));
  };
  return (
    <div className="results">
      {response.map((item) => {
        return (
          <div className="article-preview" key={item.objectID}>
            <h3 className="article-preview__title">
              {item.title === "" ? "Title Unavailable" : item.title}
            </h3>
            <h5 className="article-preview__author">By - {item.author}</h5>
            <button
              value={item.objectID}
              className="article-preview__details"
              onClick={(e) => handleClick(e)}
            >
              Post Detail
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
