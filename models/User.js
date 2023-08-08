import { Sequelize, Model } from 'sequelize';
import { DataTypes } from 'sequelize';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data/data.db'
});

class User extends Model {}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  phoneNumber: {
    type: DataTypes.NUMBER
  },
  email: {
    type: DataTypes.STRING
  }

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});
await User.sync(() => {
  console.log("DB is ready");
});

export { User };