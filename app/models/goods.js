const moment = require("moment");

const { sequelize } = require("@core/db");
const { Model, DataTypes } = require("sequelize");

// 定义文章模型
class Goods extends Model {}

// 初始分类模型
Goods.init(
  {
    id: {
      type: DataTypes.INTEGER(50).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: "商品主键ID",
    },
    goods_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "魔兽世界商品id",
    },
    pid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "父类id",
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "创建时间",
      get() {
        return moment(this.getDataValue("created_at")).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      comment: "商品价格",
    },
  },
  {
    sequelize,
    modelName: "goods",
    tableName: "goods",
  }
);

module.exports = {
  Goods,
};
