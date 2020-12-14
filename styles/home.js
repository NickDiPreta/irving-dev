import css from 'styled-jsx/css'

export const main = css`
  main {
    margin-left: 100px;
    margin-right: 100px;
    font-family: 'Gilroy-Bold';
  }
  .ellipse {
    z-index: -100;
  }
  .cd-text {
    color: #2c2261;
  }

  .ctaText:visited {
    color: #907cff !important;
  }

  .title {
    width: 65%;
    height: auto;
    margin-left: 10%;
    margin-top: 15%;
    z-index: 5;
    section {
      width: 100%;
      max-width: 768px;
      text-align: left;
    }
  }

  .blockOne {
    display: flex;
    justify-content: space-around;
    height: 588px;
  }
  .blockTwo {
    display: flex;
    width: 90vw;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: 10vw;
  }

  .right-one {
    width: 30vw;
  }

  .left-one {
    display: flex;
    flex-direction: column;
    width: 35vw;
    margin-top: 5vh;
    margin-bottom: -8vh;
  }
  .left-one > img {
    width: 40%;
  }
  .blockThree {
    margin: auto;
    display: flex;
    height: 697px;
  }
  .left-two {
    height: 520px;
  }
  .right-two {
    display: flex;

    flex-direction: column;
    font-family: 'Gilroy-Medium';
    height: 520px;
    font-size: 16px;
    font-weight: 500;
  }
  .blockFour {
    width: 100%;
    display: flex;
  }

  .left-three {
    width: 40vw;
    font-family: 'Gilroy-Medium';
    height: 520px;
  }
  .right-three {
    width: 40vw;
  }

  .SFF-Block {
    height: 100vh;
    span {
      font-size: 42px;
      color: #212121;
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 5vh;
    align-items: center;
  }
  .button-container {
    display: none;
  }
  .rent-reporting {
    margin-top: -200px;
    margin-left: -200px;
  }

  @media only screen and (max-width: 600px) {
    .button-container {
      background-color: white;

      padding: 0px;
      width: 101vw;
      height: 75px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 92vh;
      z-index: 1000;
    }
    .sticky-button {
      font-family: 'Gilroy-Medium';
      background-color: #907cff;
      width: 80vw;
      margin: auto;
      color: white;
      position: fixed;
      border-radius: 10px;
      height: 6vh;
      border-style: none;
      z-index: 1000;
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
    .title {
      margin: 0;
    }
    main {
      margin-left: 0px;
      margin-right: 0px;
    }
    .blockOne {
      diplay: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      height: fit-content;
    }
    .right-one {
      width: 100vw;
    }
    .left-one {
      margin-left: -5vw;
      transform: scale(0.7);
      width: 100vw;
    }
    .left-one > img {
      margin: 0;
      width: 55%;
    }
    .blockTwo {
      margin: auto;
      margin-top: 5vh;
      width: 100vw;
      height: fit-content;
      flex-direction: column;
      align-items: center;
      margin-bottom: 4vh;
    }
    .app-store-logo {
      margin: auto;
      text-align: center;
    }

    .blockThree {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-top: 5vh;
      width: 95vw;

      align-items: center;
      justify-content: center;
    }
    .right-two {
      font-family: 'Gilroy-Bold';
      height: 30vh;
      transform: scale(0.6);
      justify-content: flex-start;
      padding-left: 0;
      text-align: center;
      width: 100vw;
    }
    .left-two {
      width: 100vw;
      text-align: center;
    }
    .left-three {
      transform: scale(0.6);
      font-family: 'Gilroy-Bold';
      width: 100%;
      text-align: center;
      height: 30vh;
    }
    .SFF-Block {
      display: flex;
      flex-direction: column;
      margin-top: 66px;
      background: linear-gradient(
        180deg,
        rgba(240, 237, 255, 0.25) 0%,
        #ffffff 77.6%,
        #ffffff 100%
      );
      span {
        font-size: 24px;
      }
    }
    .rent-reporting {
      width: 100vw;
      text-align: center;
    }
    .blockFour {
      background-color: #f9f8ff;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-top: 5vh;
      width: 95vw;

      align-items: center;
      justify-content: center;
    }
    .right-three {
      margin-top: 20vh;
      margin-left: 50vw;
    }
    .left-three {
    }

    .dropmenu-home {
      font-family: 'Gilroy-Medium';
      position: fixed;
      display: flex;
      flex-direction: column;
      color: black;
      height: 30vh;
      width: 102vw;
      background-color: white;
      z-index: 40000;
      box-shadow: 0px 2px 5px #e2e2e5;
    }
    .options-dropdown {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    .nav-logo {
      width: 15vw;
      text-align: justify;
    }
    .burger-icon {
      margin-top: 1vh;
      margin-right: 5vw;
      height: 0.75em;
    }
    .nav-top {
      display: flex;
      justify-content: space-between;
    }
    .drop-menu > button {
      background-color: #907cff;
      border: none;
      border-radius: 30px;
      color: white;
      width: 75%;
      height: 5vh;
      margin: auto;
      margin-bottom: 2vh;
      font-size: 1.5rem;
      font-family: 'Gilroy-Medium';
    }
    .drop-menu {
      width: 100vw;
    }
    .x-icon {
      height: 1.8rem;
      margin-right: 5vw;
    }
  }
`
