import React from "react";
import data from "./data";
const Card = () => {
    return (
        <>
            <data
                name="Puneeth"
                age={19}
                greeting={
                    <div>
                        <p>Hello sir</p>
                    </div>
                }
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed possimus
                    repellendus commodi tempore maxime omnis pariatur corrupti veritatis
                    cum.
                </p>
            </data>
        </>
    );
};

export default Card;
