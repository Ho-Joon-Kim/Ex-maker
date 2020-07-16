import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './InPageItem.scss';
import classNames from 'classnames/bind';
import AnswerList from './../AnswerList/AnswerList';

const cx = classNames.bind(styles);

const InPageItem = ({value, children, num, onCheck, subtext}) => {
  const [lists, setLists] = useState([
    {
      answer: '1점(하)',
      id: 1
    },
    {
      answer: '2점(중하)',
      id: 2
    },
    {
      answer: '3점(중상)',
      id: 3
    },
    {
      answer: '4점(상)',
      id: 4
    },
  ]);

  return(
    <div className={cx('inpageitem-back')}>
      <div className={cx('inpageitem-quiz')}>{children}</div>
      <div className={cx('inpageitem-text')}>{subtext}</div>
      <div className={cx('inpageitem-list')}>
        <AnswerList
        lists={lists}
        num={num}
        onCheck={onCheck}
        />
      </div>
    </div>
  );
}

export default InPageItem
