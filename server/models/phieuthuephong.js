import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class phieuthuephong extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MaPhieu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MaKH: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NhanVienLapPhieu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MaPhong: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NgayNhanPhong: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    NgayLapPhieu: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'phieuthuephong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaPhieu" },
          { name: "MaKH" },
          { name: "NhanVienLapPhieu" },
          { name: "MaPhong" },
        ]
      },
    ]
  });
  }
}
