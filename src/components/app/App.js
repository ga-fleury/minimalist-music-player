import React from "react";
import "./App.scss";
import { Howl, Howler } from "howler";

class App extends React.Component {
  state = {
    index: 0,
    time: 0,
    musics: [
      {
        title: "Dissolve",
        artist: "Absofacto",
        duration: "3:44",
        image: "https://i.imgur.com/Z9aaj5X.png",
      },
      {
        title: "One More Time",
        artist: "Marc Rebillet",
        duration: "3:33",
        image: "https://i.imgur.com/Xw2EieI.png",
      },
      {
        title: "SUGAR",
        artist: "BROCKHAMPTON",
        duration: "3:24",
        image: "https://i.imgur.com/KzJsVQH.png",
      },
      {
        title: "Arty Boy - Tennyson Remix",
        artist: "Flight Facilities, Emma Louise, Tennyson",
        duration: "2:23",
        image: "https://i.imgur.com/ZdWfa1C.jpg",
      },
    ],
  };

  handleNext = () => {
    this.state.index === this.state.musics.length - 1
      ? this.setState({ index: 0 })
      : this.setState({ index: this.state.index + 1 });
  };

  handleBack = () => {
    this.state.index === 0
      ? this.setState({ index: this.state.musics.length - 1 })
      : this.setState({ index: this.state.index - 1 });
  };

  handlePlay = () => {
    let sound = [
      new Howl({
        src: ["songs/dissolve.mp3"],
      }),
      new Howl({
        src: ["songs/onemoretime.mp3"],
      }),
      new Howl({
        src: ["songs/sugar.mp3"],
      }),
      new Howl({
        src: ["songs/artyboy.mp3"],
      }),
    ];
    sound[this.state.index].play();
    Howler.volume(0.2);
  };

  render() {
    return (
      <div className="App">
        <Controls
          currentTime={this.state.time}
          musicList={this.state.musics}
          musicIndex={this.state.index}
          onNext={this.handleNext}
          onBack={this.handleBack}
          onPlay={this.handlePlay}
        />
      </div>
    );
  }
}

class Controls extends React.Component {
  pressedNext = () => {
    this.props.onNext();
  };

  pressedBack = () => {
    this.props.onBack();
  };

  pressedPlay = () => {
    this.props.onPlay();
  };

  render = () => {
    return (
      <main className="player-bg">
        <section className="player__top-section">
          <img
            src={this.props.musicList[this.props.musicIndex].image}
            alt="Album cover"
            className="music__img"
          />
          <div className="player__icon-wrap">
            <a href="" className="player__icon-link">
              <i className="material-icons player__icon">open_in_new</i>
            </a>
            <a href="" className="player__icon-link player__icon-link--active">
              <i className="material-icons player__icon">
                repeat
              </i>
            </a>
            <a href="" className="player__icon-link">
              <i className="material-icons player__icon">shuffle</i>
            </a>
              <svg
                className="player__icon" id="like"
                viewBox="0 -28 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" />
              </svg>
          </div>
        </section>
        <div className="player__info-wrap">
          <p className="music__title">
            {this.props.musicList[this.props.musicIndex].title}
          </p>
          <p className="music__artist">
            {this.props.musicList[this.props.musicIndex].artist}
          </p>
          <p className="music__total-time">
            {this.props.musicList[this.props.musicIndex].duration}
          </p>
          <div className="music__progress-bar"></div>
          <div className="music__progress-bar-current"></div>
          <p className="music__current-time"> {this.props.currentTime} </p>
          <div className="music__btn-wrap">
            <i onClick={this.pressedBack} className="music__btn material-icons">
              fast_rewind
            </i>
            <i onClick={this.pressedPlay} className="music__btn material-icons">
              play_circle_outline
            </i>
            <i onClick={this.pressedNext} className="music__btn material-icons">
              fast_forward
            </i>
          </div>
        </div>
      </main>
    );
  };
}
export default App;
