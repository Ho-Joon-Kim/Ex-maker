import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './AnswerList.scss';
import classNames from 'classnames/bind';
import AnswerItem from './../AnswerItem/AnswerItem';

const cx = classNames.bind(styles);

const AnswerList = ({lists, num, onCheck }) => {

  const answerItem = lists.map(
    list => (
      <AnswerItem
        ask={list.answer}
        key={list.id}
        answernum={list.id}
        num={num}
        onCheck={onCheck}
      >
      </AnswerItem>
    )
  )

  return(
    <div>
      {answerItem}
    </div>
  );
}

export default AnswerList;
