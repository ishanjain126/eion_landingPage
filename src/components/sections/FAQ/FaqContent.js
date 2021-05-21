import React, {useState, useEffect} from 'react';
import data from "./data.json";

const Set1 = data.General_FAQs;
const Set2 = data.Payment_FAQs;

function FaqContent({cardId}) {

    const [displayCard, setDisplayCard] = useState(Set1)
    useEffect(() => {
        {cardId == "1" && setDisplayCard(Set1)}
        {cardId == "2" && setDisplayCard(Set2)}
    })

    console.log("Set1", Set1);
    console.log("Card id", cardId);

    return (
        <div className="faqContentWrapper">
            {displayCard.map((index, item) => {
                return(
                    <div className="contentWrapper">
                        <details className="faqQuestion">
                            <summary>{index.Question} </summary>
                            <p className="faqAnswer">
                                {index.Answer}
                            </p>
                        </details>

                    </div>
                )
            })}
        </div>
    )
}

export default FaqContent