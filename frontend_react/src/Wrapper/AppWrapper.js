import React from "react";
import { NavigationDots, SocialMedia } from "../../src/components";
import { images } from "../constants";

const AppWrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">
              <span>
                <img src={images.copy} alt="copyright" width={12} height={12} />
              </span>
              2022 HERMANSYAH PUTRA.
            </p>
            <p className="p-text">All right reserved.</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
