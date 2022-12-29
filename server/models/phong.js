import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class phong extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MaPhong: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MaLoaiPhong: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Ten: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    TinhTrang: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Gia: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'phong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaPhong" },
        ]
      },
    ]
  });
  }
}
