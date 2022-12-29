import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class loaikhachhang extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MaLoaiKH: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TenLoaiKH: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'loaikhachhang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaLoaiKH" },
        ]
      },
    ]
  });
  }
}
