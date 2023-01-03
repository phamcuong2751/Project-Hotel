import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class khachhang extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MaKH: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MaLoaiKH: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TenKH: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SoCCCD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "KhachHang_Email_Uq"
    },
    GioiTinh: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SoDienThoai: {
      type: DataTypes.STRING(12),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'khachhang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaKH" },
        ]
      },
      {
        name: "KhachHang_Email_Uq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Email" },
        ]
      },
    ]
  });
  }
}
