import React, { useState, useRef } from "react";

const Shortener = (props) => {
  const [input, setInput] = useState("");
  const [showError, setShowError] = useState(false);
  const copyRef = useRef(null);

  const inputHandler = (e) => setInput(e.target.value);

  const copyHandler = () => {
    copyRef.current.select();
    document.execCommand("copy");
    console.log('copied', copyRef.current.value)
  };

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
        // checking if browser supports localStorage
        if (typeof window.Storage !== undefined) {
          const link = {
            id: data.hashid,
            url: `https://rel.ink/${data.hashid}`,
            input,
          };

          let links = JSON.parse(localStorage.getItem("links"));
          if (!links) {
            localStorage.setItem("links", JSON.stringify([]));
            links = JSON.parse(localStorage.getItem('links'));
            links.push(link);
          } else {
            // removing item if it already exist
            const exist =
              links.map((link) => link.id).indexOf(data.hashid) > -1;
            if (exist) {
              links = links.filter((link) => link.id !== data.hashid);
              links.unshift(link);
            }
          }
          localStorage.setItem("links", JSON.stringify(links));
        } else {
          console.log("localstorage not supported by the browser");
        }

        setInput("");
      }
    }
  };

  return (
    <section className="shortener">
      <div className="shortener-input">
        <form action="" onSubmit={(e) => onSubmitHandler(e, input)}>
          <div>
            <input
              type="url"
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

      {localStorage.getItem("links") &&
        JSON.parse(localStorage.getItem("links")).map((link) => (
          <div className="shortener-result" key={link.id}>
            <div className="input-url">{link.input}</div>
            <div className="result">
              <a href={link.url}>
                {link.url}
              </a>
              <input
                type="text"
                value={link.url}
                ref={copyRef}
                style={{ visibility: "hidden", display: "none" }}
                readOnly
              />
              <button className="btn btn-primary" onClick={copyHandler}>
                Copy
              </button>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Shortener;
