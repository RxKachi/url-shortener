import React, { useState } from "react";

const Shortener = (props) => {
  const [input, setInput] = useState("");
  const [links, setLinks] = useState([]);
  const [showError, setShowError] = useState(false);

  const inputHandler = (e) => setInput(e.target.value);

  const onSubmitHandler = async (e, url) => {
    e.preventDefault();

    if (input.trim().length <= 4) {
      setShowError(true);
    } else {
      setShowError(false);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ url }),
      };

      const result = await fetch("https://rel.ink/api/links/", config);
      const data = await result.json();

      if (data.hashid) {
        setLinks((links) => [
          {
            id: data.hashid,
            link: `https://rel.ink/${data.hashid}`,
            input,
          },
          ...links,
        ]);
      }
    }
  };

  return (
    <div className="shortener">
      <div className="shortener-input">
        <form action="" onSubmit={(e) => onSubmitHandler(e, input)}>
          <div>
            <input
              type="text"
              className={`textInput ${showError ? "invalidInput" : ""}`}
              placeholder="shorten a link here..."
              value={input}
              onChange={inputHandler}
            />
            <div className={`${showError ? "invalidMsg" : "hidden"}`}>
              Please add a valid link
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Shorten it!
          </button>
        </form>
      </div>
      {links.length > 0 &&
        links.map((link) => (
          <div className="shortener-result" key={link.id}>
            <div className="input-url">{link.input}</div>
            <div className="result">
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.link}
              </a>
              <button className="btn btn-primary">Copy</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shortener;
