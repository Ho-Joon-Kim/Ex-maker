import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './RatingPage.scss';
import classNames from 'classnames/bind';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

const cx = classNames.bind(styles);

const RatingPage = ({ handleStar }) => {
  return (
    <div className={cx('rating-back')}>
      <h4>평점</h4>
      <div className={cx("starRev")} onClick={handleStar}>
        <span id="1" class="starR">별1</span>
        <span id="2" class="starR">별2</span>
        <span id="3" class="starR">별3</span>
        <span id="4" class="starR">별4</span>
        <span id="5" class="starR">별5</span>
      </div>
    </div>
  );
}

export default RatingPage;
