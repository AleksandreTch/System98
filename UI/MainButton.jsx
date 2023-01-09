import classes from './MainButton.module.css';

const Button = (props) => {
  return (
    <div className={props.className}>
      <button className={classes.mainBtn}>
        Start
        </button>
    </div>
  );
};

export default Button;
