import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class baocaomatdosudungphong extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    BaoCaoMatDoSuDungPhong: {
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
    tableName: 'baocaomatdosudungphong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BaoCaoMatDoSuDungPhong" },
        ]
      },
    ]
  });
  }
}
