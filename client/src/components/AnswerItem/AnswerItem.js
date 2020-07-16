import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './AnswerItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AnswerItem = ({ask, num, answernum, onCheck }) => {
  const [answer, setAnswer] = useState(ask);

  return(
    <div className={cx('answeritem-back')}>
      <input id={answernum} className={cx('answer-radio')} name={"select"+num} type="radio" onClick={onCheck}/>
      <div>{answer}</div>
    </div>
  );
}

export default AnswerItem;
