import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './InPageList.scss';
import classNames from 'classnames/bind';
import InPageItem from './../InPageItem/InPageItem';
import RatingPage from './../RatingPage/RatingPage';

const cx = classNames.bind(styles);

const InPageList = ({lists, image, subtitle, onCheck, handleStar}) => {
  const [previewURL, setPreviewURL] = useState(image);

  const inPageItem = lists.map(
    list => (
      <InPageItem
        key={list.id}
        num={list.id}
        onCheck={onCheck}
        subtext={list.text}
      >
      {list.question}
      </InPageItem>
    )
  )

  return (
    <div>
      <div className={cx('img-insert')}>
        <img className={cx('choos-img')} src={previewURL}/>
      </div>
      { subtitle !== '' &&
        <div className={cx('subtitle')}>
          <span>설명 : </span>{subtitle}
        </div>
      }
      {inPageItem}
      <div>
          <RatingPage handleStar={handleStar}/>
      </div>
    </div>
  );
}

export default InPageList;
