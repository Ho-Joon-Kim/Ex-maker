import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './ViewList.scss';
import classNames from 'classnames/bind';
import ViewItem from './../ViewItem/ViewItem';

const cx = classNames.bind(styles);

function ViewList({lists, viewpin, viewid, checkAdd}) {

  const viewItem = lists.map(
    list => (
      <ViewItem
      key={list.id}
      viewitem={list.id}
      image={list.image}
      subtitle={list.text}
      viewid={viewid}
      viewpin={viewpin}
      checkAdd={checkAdd}
      >
        {list.title}
      </ViewItem>
    )
  )

  return(
    <div className={cx('viewList-back')}>
      <div className={cx('viewList-items')}>
        {viewItem}
      </div>
    </div>
  );
}

export default ViewList;
