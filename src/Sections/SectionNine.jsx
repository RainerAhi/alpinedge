import React, { useState } from "react";

export const SectionNine = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const questions = [
        {
            question: "What is Alpinedge?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "What is the Alpinedge evaluation?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            question: "Am I trading real money?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            question: "What instruments for virtual trading are available?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            question: "Is the skiing pass the only cost to the program?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            question: "Which borker do you offer and what platforms?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            question: "Can I trade with Alpinedge as a US-citizen?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
    ];

    const handleQuestionClick = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <section className="section nine">
            <div className="nine-content">
                <h1 className="nine-main">Frequently Asked Questions</h1>
                <div className="faq">
                    {questions.map((qa, index) => (
                        <div key={index} className="faq-item" onClick={() => handleQuestionClick(index)}>
                            <div className="question-container">
                                <h3 className="question">{qa.question}</h3>
                                <i className="fa-solid fa-chevron-down" style={{ fontSize: "20px", color: "#111010"}}></i>
                            </div>
                            {expandedIndex === index && <p className="answer">{qa.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};