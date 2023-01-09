import classes from "./startbar.module.css";
import Button from '../../UI/MainButton'

const StartBar = () => {
  return (
    <div>
      <div className={classes.startBarOuter}></div>
      <div className={classes.startBar}>
        <Button classes={classes.btns}/>
      </div>
    </div>
  );
};

export default StartBar;
