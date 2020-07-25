module.exports = (Sequelize, sequelize) => {
  const comment = sequelize.define('comment', {

    num: {//고유 번호
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    id: {//만든이 아이디
      type: Sequelize.STRING(50),
      allowNull: false
    },

    location: {//댓글 위치
      type: Sequelize.TEXT,
      allowNull: false
    },

    comment: {//내용
      type: Sequelize.TEXT,
      allowNull: false
    }

  });
 
  comment.sync();
  return comment;
};