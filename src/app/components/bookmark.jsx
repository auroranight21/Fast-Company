import React from "react";

const Bookmark = ({status, ...rest}) => {
    return (
        <>
            <i className={"bi bi-bookmark" + (status.bookmark ? "-fill" : "")}
               onClick={() => rest.onClick(status._id)}> </i>
        </>
    )
};

export default Bookmark;