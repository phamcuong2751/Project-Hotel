import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class hoadon extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MaHD: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MaKH: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NhanVienXuatHD: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NgayThanhToan: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    TongTien: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    TrangThai: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hoadon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaHD" },
        ]
      },
    ]
  });
  }
}
