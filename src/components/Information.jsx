import React from "react";
import { iconsPlay } from "../assets";
import "../styles/information.scss";
import { iconsNewWindow } from "../assets";
const Information = React.memo(({ info }) => {
  const { word, phonetics, meanings, sourceUrls } = info;

  const play = () => {
    const audio = phonetics[0].audio || phonetics[1].audio;
    new Audio(audio).play();
  };

  return (
    <article className="information">
      <div className="information__header">
        <div className="information__header-text">
          <p className="information__word">{word}</p>
          <p className="information__phonetics">
            {phonetics[0].text || phonetics[1].text}
          </p>
        </div>
        <div className="information__header-play">
          <button className="information__play" onClick={play}>
            <img src={iconsPlay} alt="iconPlay" />
          </button>
        </div>
      </div>
      <div className="information__content">
        {meanings.map((item, index) => {
          return (
            <React.Fragment
              key={item.definitions[0].definition + index.toString()}
            >
              <div className="information__meaning">
                <p className="information__meaning-part">{item.partOfSpeech}</p>
                <p>Meaning</p>
                <ul className="information__list">
                  {item.definitions.map((def) => {
                    return (
                      <React.Fragment key={def.definition}>
                        <li>{def.definition}</li>
                        <p className="information__example">{def.example}</p>
                      </React.Fragment>
                    );
                  })}
                </ul>
                {item.synonyms.length ? (
                  <div className="information__syn">
                    <p>Synonyms:</p>
                    {item.synonyms.map((syn, index) => {
                      return (
                        <p key={syn + index} className="information__syn-p">
                          {syn}
                        </p>
                      );
                    })}
                  </div>
                ) : null}
              </div>
              {item.antonyms.length ? (
                <div className="information__antonyms">
                  <p>Antonyms:</p>
                  <p className="information__antonym">
                    {item.antonyms.join(", ")}
                  </p>
                </div>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
      <hr />
      <div className="information__source">
        <p>Source</p>
        <a target="_blank" href={sourceUrls}>
          <p>{sourceUrls}</p>
          <img src={iconsNewWindow} alt="" />
        </a>
      </div>
    </article>
  );
});

export default Information;
