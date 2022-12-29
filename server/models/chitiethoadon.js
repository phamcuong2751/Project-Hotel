import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class chitiethoadon extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    MaHD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MaPhong: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DonGia: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    NgayDat: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'chitiethoadon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaHD" },
          { name: "MaPhong" },
        ]
      },
    ]
  });
  }
}
