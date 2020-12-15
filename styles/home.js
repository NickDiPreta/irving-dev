import css from 'styled-jsx/css'

export const main = css`
  main {
    margin-left: 100px;
    margin-right: 100px;
    font-family: 'Gilroy-Bold';
  }

  main ::-webkit-scrollbar {
    display: none;
  }

  .nav-top {
    display: none;
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
    height: 588px;
    width: 100vw;
    justify-content: space-between;
  }
  .blockTwo {
    background-color: white;
    display: flex;
    width: 100vw;
    margin-left: -100px;
    flex-direction: row;
    height: 441px;
    padding-left: 100px;
  }

  .right-one {
    width: 894px;
    margin-left: 50px;
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
    background-color: white;
    display: flex;
    height: 705px;
    margin-left: -100px;

    margin-right: -100px;
    align-items: center;
    justify-content: space-around;
  }
  .left-two {
    display: flex;
    flex-direction: column;
    font-family: 'Gilroy-Medium';
    font-weight: 500;
    margin-left: 100px;
  }
  .right-two {
    width: 533px;
  }

  .SFF-Block {
    height: 450px;
    padding-top: 50px;
    span {
      font-size: 42px;
      color: #212121;
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #f9f8ff;
  }
  .button-container {
    display: none;
  }

  .options-dropdown {
    display: none;
  }
  .app-store-logo {
    cursor: pointer;
  }
  .rent {
    border: 1px solid gray;
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
      border-radius: 20px;
      height: 42px;
      border-style: none;
      z-index: 1000;
      font-size: 1.2rem;
      margin-bottom: 5px;
    }

    .sticky-button :hover {
      cursor: pointer;
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
      align-items: center;
      justify-content: flex-start;
      height: fit-content;
      margin-left: 30px;
    }
    .right-one {
      width: 100vw;
      transform: scale(0.8);
    }
    .left-one {
      margin-top: 100px;
      width: 315px;
    }
    .left-one > img {
      margin: 0;
    }
    .blockTwo {
      height: fit-content;
      flex-direction: column;
      justify-content: flex-start;
      padding-bottom: 60px;

      width: 130vw;
      margin-top: 85px;
    }
    .app-store-logo {
      margin: auto;
      text-align: center;
      cursor: pointer;
      height: 40px;
    }

    .blockThree {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      height: fit-content;

      padding-top: 90px;
    }
    .right-two {
      margin-top: -50px;
      margin: auto;
    }
    .left-two {
      width: 315px;
      img {
        height: 420px;
      }
    }

    .SFF-Block {
      width: 100vw;
      height: fit-content;
      margin-bottom: 45px;
      display: flex;
      font-family: 'Gilroy-Medium';
      flex-direction: column;

      background: linear-gradient(
        180deg,
        rgba(240, 237, 255, 0.25) 0%,
        #ffffff 77.6%,
        #ffffff 100%
      );
      span {
        font-size: 24px;
        font-weight: 600;
      }
      margin: auto;
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

    .pointer :hover {
      cursor: poitner;
    }
    .nav-top {
      display: flex;
      justify-content: space-between;
    }

    .nav-top > a:hover {
      cursor: pointer;
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
    .pointer :hover {
      cursor: pointer;
      z-index: 10000000;
    }
  }
`
