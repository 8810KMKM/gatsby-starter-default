import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import Styles from '../styles/components/header.module.scss';
import { styles } from "ansi-colors";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={Styles.header}>
          <div className={styles.header__loading}>
          </div>
          <div className={Styles.header__text}>
              <h1 className={Styles.header__text__message}>
                  Hayato<br />
                  OKUMA
              </h1>
              <p className={Styles.header__text__name}>Always climb, Even slowly.</p>
          </div>
          <div className={Styles.header__image}>
            <div className={Styles.header__image__main}>
              <Image filename='kuma01.jpg' />
            </div>   
            <div className={Styles.header__image__under}> </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header
