import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class nhanvien extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MaNV: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MaSoThue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NgayBatDau: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    HoKhauTT: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CCCD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LoaiNV: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Fullname: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nhanvien',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaNV" },
        ]
      },
    ]
  });
  }
}
