import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class baocaothang extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MaBangThayDoi: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MaNV: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NgayLap: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'baocaothang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaBangThayDoi" },
        ]
      },
    ]
  });
  }
}
