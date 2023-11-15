import { useState } from "react";

const GenerateRandomNumber = (marketsArray) => {
    const [markets, setMarkets] = useState(marketsArray);

    var dataLength = marketsArray.length;
    var min = Math.ceil(0);
    var max = Math.floor(dataLength);
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive 
    setMarkets(randomNumber)
    return markets;
}

export default GenerateRandomNumber;