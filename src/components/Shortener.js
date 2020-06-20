import React, { useState, useRef, useEffect } from "react";

const Shortener = (props) => {
  const [input, setInput] = useState("");
  const [showError, setShowError] = useState(false);
  const [userLinks, setUserLinks] = useState([]);
  const copyRef = useRef(null); 

  const inputHandler = (e) => setInput(e.target.value);

  const copyHandler = () => {
    copyRef.current.select();
    document.execCommand("copy");
    console.log("copied", copyRef.current.value);
  };

  useEffect(() => {
    const links = JSON.parse(localStorage.getItem('links'));
    if(links){
      setUserLinks(links);
    }else{
      setUserLinks([]);
    }
    
  }, [setUserLinks])

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
  
        const link = {
          id: data.hashid,
          url: `https://rel.ink/${data.hashid}`,
          input,
        };

        let newLinks = [...userLinks];
        const exist = userLinks.map((link) => link.id).indexOf(data.hashid) > -1;
        if (exist) {
          newLinks = userLinks.filter((link) => link.id !== data.hashid);
        }
        newLinks.unshift(link);

        // checking if browser supports localStorage
        if(typeof Storage !== undefined){
          localStorage.setItem('links', JSON.stringify(newLinks));
        }else{
          console.log('this browser does not support local storage')
        }

        setUserLinks(newLinks);

        setInput('');
      }
    }
  };


  const deleteHandler = (id) => {
    const exist = userLinks.filter(link => link.id).indexOf(id);
    if(exist){
      const newLinks = userLinks.filter(link => link.id !== id);
      setUserLinks(newLinks);

      if(typeof Storage !== undefined){
        localStorage.setItem('links', JSON.stringify(newLinks));
      }
    }
  }


  return (
    <section className="shortener">
      <div className="shortener-input">
        <form action="" onSubmit={(e) => onSubmitHandler(e, input)}>
          <div className='input-container'>
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
          <div className='button-container'>
            <button type="submit" className="btn btn-primary">
              Shorten it!
            </button>
          </div>
        </form>
      </div>

      { userLinks.length > 0 &&
        userLinks.map((link) => (
          <div className="shortener-result" key={link.id}>
            <div className="input-url">{link.input}</div>
            <div className="result">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
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
              <button className="btn btn-danger" onClick={() => deleteHandler(link.id)}>
                Clear
              </button>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Shortener;
