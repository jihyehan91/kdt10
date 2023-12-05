const User = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    'User',
    {
      id: {
        // id int not null primary key auto_increment,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        // userid varchar(20) not null,
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        // name varchar(10) not null,
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        // pw varchar(20) not null
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: 'user',
      // freezeTableName: true, // 위에 썼으면 생략 가능
      timestamps: false,
    }
  );
  return model;
};

module.exports = User;
