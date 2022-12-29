import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class loaiphong extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MaLoaiPhong: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TenLoaiPhong: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    MoTa: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'loaiphong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaLoaiPhong" },
        ]
      },
    ]
  });
  }
}
