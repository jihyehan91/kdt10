const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];

console.log('config >', config);

const db = {};
// 시퀄라이즈 객체 선언 시 매개변수로 다음 정보들을 받음
// Sequelize 클래스에 데이터를 담으면 -> sequelize라는 인스턴스가 생성된다.
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// sequelize 인스턴스는 Sequelize 패키지(클래스?)를 사용하여 데이터베이스와의 상호 작용을 담당하는 객체
// -> 이를 통해 모델을 정의하고 쿼리를 실행
// db는 데이터베이스 관련 작업을 수행하는 데 사용되는 객체
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require('./Visitor')(sequelize, Sequelize);
// models/Visitor.js에서 정의한 모델이 db.Visitor에 들어감
// db = { sequelize: sequelize, Sequelize: Sequelize, Visitor: ~~~  }

module.exports = db;
// db라는 변수를 내보냄
// 시퀄라이즈 객체를 만들고 모듈로써 내보내서 '다른 파일에서 모두 같은 객체를 사용할 수 있게 함'
