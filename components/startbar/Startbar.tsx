import React, {useState, useEffect} from 'react';
import classes from "./startbar.module.css";
import MainButton from "../../UI/MainButton";
import DateTime from '../../UI/DateTime';

const StartBar = () => {
  

  return (
    <div>
      <div className={classes.startBarOuter}></div>
      <div className={classes.startBar}>
        <div className={classes.mainBtnContainer}>
          <MainButton classes={classes.btns} />
        </div>
        {/* Devider */}
        {/* Devider One */}
          <div className={classes.startBarDeviderOne}>
          </div>
          {/* Devioder Two */}
          <div className={classes.startBarDeviderTwo}>
          </div>
          {/* Devider End */}

          {/* Nav bar Item Shortcuts */}
          <div className={classes.iconsContainer}>
            <img id={classes.contact} src='/assets/icons/Email.png' alt="Envelope"/>
            <img id={classes.search} src='/assets/icons/Search.png' alt="Magnifing Glass"/>
            <img id={classes.search} src='/assets/icons/About.png' alt="Document icon"/>
          </div>
          
          {/* Devider */}
          <div className={classes.startBarDeviderOne}>
          </div>
          {/* Devioder Two */}
          <div className={classes.startBarDeviderTwo}>
          </div>
          {/* Devider End */}
          <div className={classes.infoBar}>
              <DateTime/>
          </div>
      </div>
    </div>
  );
};

export default StartBar;
