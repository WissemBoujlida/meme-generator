import React, { useState, useEffect } from "react"
import "../style.css"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    function getRandomMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemes[randomIndex].url
        })
        )
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    useEffect(() => {
        async function fetchMemesData() {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setAllMemes(data.data.memes)
        }
        fetchMemesData()
    }, [])

    return (
        <main className="main">
            <div className="form">
                <div>
                    <label className="form--input-label" htmlFor="top-text">Top text</label>
                    <input
                        id="top-text"
                        className="form--input"
                        type="text"
                        placeholder="Top text"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </div>
                <div>
                    <label className="form--input-label" htmlFor="bottom-text">Buttom text</label>
                    <input
                        id="bottom-text"
                        className="form--input"
                        type="text"
                        placeholder="Buttom text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button className="form--button" onClick={getRandomMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage} alt="meme image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}